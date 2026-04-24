import express from "express";
import { createServer as createViteServer } from "vite";
import path from "path";

async function startServer() {
  const app = express();
  const PORT = 3000;

  // Add environment variable loading for development
  if (process.env.NODE_ENV !== "production") {
    const dotenv = await import('dotenv');
    dotenv.config();
  }

  // Parse JSON bodies (as sent by API clients)
  app.use(express.json());

  // API Route to fetch Google Reviews
  app.get("/api/reviews", async (req, res) => {
    try {
      const apiKey = process.env.GOOGLE_PLACES_API_KEY;
      
      if (!apiKey) {
        return res.status(500).json({ error: "Missing GOOGLE_PLACES_API_KEY" });
      }

      // First, find the Place ID for Oven Diaries Eluru
      const findPlaceUrl = `https://maps.googleapis.com/maps/api/place/findplacefromtext/json?input=Oven%20Diaries%20Eluru&inputtype=textquery&fields=place_id&key=${apiKey}`;
      const findPlaceResponse = await fetch(findPlaceUrl);
      const findPlaceData = await findPlaceResponse.json();

      if (findPlaceData.error_message) {
        return res.status(400).json({ error: `Google API Error: ${findPlaceData.error_message}` });
      }

      if (!findPlaceData.candidates || findPlaceData.candidates.length === 0) {
        return res.status(404).json({ error: "Place not found" });
      }

      const placeId = findPlaceData.candidates[0].place_id;

      // Now fetch the details including reviews
      const detailsUrl = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&fields=name,rating,user_ratings_total,reviews&key=${apiKey}`;
      const detailsResponse = await fetch(detailsUrl);
      const detailsData = await detailsResponse.json();

      if (!detailsData.result) {
        return res.status(404).json({ error: "Place details not found" });
      }

      const { rating, user_ratings_total, reviews } = detailsData.result;

      // Get highest 4 reviews
      let topReviews = [];
      if (reviews && reviews.length > 0) {
        // Find 5 star reviews
        const highestReviews = reviews.filter(r => r.rating === 5).sort((a, b) => b.text.length - a.text.length);
        const fourStarReviews = reviews.filter(r => r.rating === 4).sort((a, b) => b.text.length - a.text.length);
        
        topReviews = [...highestReviews, ...fourStarReviews].slice(0, 4);
      }

      res.json({
        rating,
        totalReviews: user_ratings_total,
        reviews: topReviews
      });

    } catch (error) {
      console.error("Error fetching Google Reviews:", error);
      res.status(500).json({ error: "Failed to fetch reviews" });
    }
  });

  // API Route for sending contact emails
  app.post("/api/contact", async (req, res) => {
    try {
      const { name, email, message } = req.body;
      
      if (!name || !email || !message) {
        return res.status(400).json({ error: "Missing required fields" });
      }

      const nodemailer = await import("nodemailer");

      // Verify SMTP credentials are provided
      if (!process.env.SMTP_USER || !process.env.SMTP_PASS) {
        console.error("Missing SMTP credentials in environment variables");
        return res.status(500).json({ error: "Server is missing email configuration" });
      }

      const transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST || "smtp.gmail.com",
        port: parseInt(process.env.SMTP_PORT || "587"),
        secure: process.env.SMTP_SECURE === "true", 
        auth: {
          user: process.env.SMTP_USER,
          pass: process.env.SMTP_PASS,
        },
      });

      const mailOptions = {
        from: process.env.SMTP_USER,
        replyTo: email,
        to: "damarakeswarg1999@gmail.com",
        subject: `Oven Diaries | New Message from ${name}`,
        text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
      };

      await transporter.sendMail(mailOptions);
      res.status(200).json({ success: true });
    } catch (error) {
      console.error("Error sending email:", error);
      res.status(500).json({ error: "Failed to send email" });
    }
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
