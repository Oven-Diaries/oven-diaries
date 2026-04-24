import dotenv from "dotenv";
dotenv.config();

const apiKey = process.env.GOOGLE_PLACES_API_KEY;

async function test() {
  console.log("Checking place...");
  const findPlaceUrl = `https://maps.googleapis.com/maps/api/place/findplacefromtext/json?input=Oven%20Diaries%20Eluru&inputtype=textquery&fields=place_id&key=${apiKey}`;
  const response = await fetch(findPlaceUrl);
  const data = await response.json();
  console.log(JSON.stringify(data, null, 2));
}

test();
