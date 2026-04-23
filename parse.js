import fs from 'fs';

const rawData = `Caffeine Chronicles (1)
Cold Coffee - Veg - ₹ 160

Cakes (21)
Blackcurrant Cake - Veg - ₹ 400
Tiramisu Cake - Veg - ₹ 780
Vanilla Cake - Veg - ₹ 480
Choco Chip Delight Cake - Veg - ₹ 650
Strawberry Cake - Veg - ₹ 480
Chocolate Heaven Cake - Veg - ₹ 715
Pineapple Cake - Veg - ₹ 480
Lotos Biscoff Cake - Veg - ₹ 910 
Blackforest - Veg - ₹ 580 
Swiss Chocolate Cake - Veg - ₹ 690 
Butterscotch Cake - Veg - ₹ 520 
Blueberry Cake - Veg - ₹ 580 
French Chocolate Truffle Cake - Veg - ₹ 780 
Mango Cake - Veg - ₹ 480
Chocolate Cake - Veg - ₹ 690 
Almond Honey Cake - Veg - ₹ 910 
Tropical Tango Cake - Veg - ₹ 585 
Belgium Chocolate Cake - Veg - ₹ 650 
Almond Fudgy Chocolate Cake - Veg - ₹ 780 
White Forest Cake - Veg - ₹ 690 
Hazlenut Crunch Cake - Veg - ₹ 650

Cupcakes (5)
Chocolate Cupcake - Veg - ₹ 60
Redvelvet Cupcake - Veg - ₹ 65 
Lotus Biscoff Cupcake - Veg - ₹ 65 
Blueberry Cupcake - Veg - ₹ 60 
Vanilla Cupcake - Veg - ₹ 60

Delightful Confections (1)
Choco Lava - Veg - ₹ 80

Desserts (3) 
Lotus Biscoff - Veg - ₹ 80 
Oreo Crunch - Veg - ₹ 80 
Chocolate Mousse - Veg - ₹ 80

Donuts (6) 
Caramel Donut - Veg - ₹ 80 
Oreo Donut - Veg - ₹ 80 
Cinnamon White Chocolate Donut - Veg - ₹ 80 
Hazlenut Donut - Veg - ₹ 80
Dark Chocolate Donut - Veg - ₹ 80 
White Chocolate Donut - Veg - ₹ 80

Fried Chicken (5)
Mingle Bucket 18 (each 6pc) - Non Veg - ₹ 780 
Mingle Bucket 12 (each 4pc) - Non Veg - ₹ 550 
Chicken Wings - Non Veg - ₹ 240 
Chicken Lollipop - Non Veg - ₹ 260 
Chicken Strips - Non Veg - ₹ 210

Mocktails (12) - All Veg
Virgin Mojito - ₹ 130 
Gauva Mocktail -₹ 130 
Orange Mocktail - ₹ 130 
Mid Night Sea Mocktail - ₹ 195 
Blackcurrant Mocktail - ₹ 130 
Kiwi Fizz Mocktail - ₹ 195 
Strawberry Mocktail - ₹ 130 
Blue Curraco Mocktail - ₹ 130 
Kiwi Mocktail - ₹ 130 
Mint Mocktail - ₹ 130 
Greenapple Mocktail - ₹ 130 
Berry Blast Mocktail - ₹ 195

Non Veg Burger (6) - All Non Veg
Oven Diaries Special Chicken Burger - ₹ 260 
Chicken Burger - ₹ 195 
Doubleup Chicken Feast - ₹ 285 
Eggstasy Burger - ₹ 180 
Crispy Chicken Burger - ₹ 220 
Sizzle &spicy Chicken Burger - ₹ 285

Non Veg Pizza (10) - All Non Veg
Chicken Tikka Pizza - ₹ 390 
Oven Diaries Special Chiken Pizza - ₹ 415 
Chicken Pizza - ₹ 365 
Nutty Chicken Fusion Pizza -  ₹ 455 
Tandoori Chicken Pizza - ₹ 380 
Schezwan Chicken Pizza - ₹ 390 
Chicken Overload Double Cheese Pizza - ₹ 455 
Texmex Chicken Pizza - ₹ 390 
Pepper Jack Sausage Pizza - ₹ 365 
Mexican Chicken Fajita Pizza - ₹ 415

Quick Bites (7) 
Crispy Popcorn - Non Veg - ₹ 170 
Chicken Nuggets - Non Veg - ₹ 180 
Veg Cheese Shots - Veg - ₹ 195 
Crispy Fingers [5 Pcs] - Non Veg - ₹ 185 
Chicken Spring Roll - Non Veg - ₹ 250 
Veg Pops - Veg - ₹ 130 
Veg Nuggets - Veg - ₹ 155

Salads (2) 
Barbeque Chicken Salad - Non Veg - ₹ 320
Ceaser Salad(chicken) - Non Veg - ₹ 320

Sandwiches (16) 
Sunrise Foldwich - Non Veg - ₹ 180
Oven Diaries Special Sandwich - Veg - ₹ 235 
Chicken Sandwich - Non Veg - ₹ 235 
Tandoori Paneer Sandwich - Non Veg - ₹ 220 
Nutella Sandwich - Veg - ₹ 220 
Paneer Sandwich - Veg - ₹ 210 
Dark Chocolate Sandwich - Veg - ₹ 155 
Sizzling Spicy Chicken Sandwich - Non Veg - ₹ 245 
Wihte Chocolate Sandwich - Veg - ₹ 155 
Mexican Chicken Fajita Sandwich - Non Veg - ₹ 245 
Tandoori Veg Sandwich - Veg - ₹ 195
Eggventure Sandwich - Egg - ₹ 195 
Crispy Chicken Sandwich - Non Veg - ₹ 200 
Mexican Fajita Sandwich - Veg -₹ 210 
Spinach&corn Sandwich - Veg - ₹ 180 
Garden Fusion Sandwich - Veg - ₹ 210

Shakes (12)
Nutella Shake - Veg - ₹ 170 
Oreo Shake - Veg - ₹ 155 
Blackcurrant Shake - Veg - ₹ 155 
Dairy Milk Shake - Veg - ₹ 155 
Butterscotch Shake - Veg - ₹ 130 
Nutella Brownie Shake - Veg - ₹ 195 
Ferrero Delight Shake - Veg - ₹ 170 
Lotus Biscoff Shake - Veg - ₹ 240 
Strawberry Shake - Veg - ₹ 105 
Kitkat Shake - Veg - ₹ 155 
Vanilla Shake - Veg - ₹ 110
Chocolate Shake - Veg - ₹ 130

Veg Burger (7) 
Paneer Burger - Veg - ₹ 235 
Paneer Passion Burger - Veg - ₹ 235 
Veg Fiesta Burger - Veg - ₹ 195 
Spicy Blaze Burger - Veg - ₹ 220 
Tikki Tango Burger - Veg - ₹ 180 
Veg Dual Deck Burger - Veg - ₹ 220 
Classic Veg Burger - Veg - ₹ 170

Veg Pizza (9)
Mushroom Pizza - Veg - ₹ 325 
Veggie Delight Pizza - Veg - ₹ 300 
Classic Veg Pizza - Veg - ₹ 250 
Paneer Pizza - Veg - ₹ 325 
Margherita Pizza - Veg - ₹ 235 
Tandoori Veg Pizza - Veg - ₹ 285 
Hot & Tangy Veg Pizza - Veg - ₹ 285 
Salsa Supreme - Veg - ₹ 275 
Nutty Garden Pizza - Veg - ₹ 300

Wraps (11) 
Chicken Wrap - Non Veg - ₹ 220
Mexican Chicken Wrap - Non Veg - ₹ 260
Oven Diaries Special Chicken Wrap - Non Veg - ₹ 275
Paneer Paradise Wrap - Veg - ₹ 235
Eggcellent Wrap - Egg - ₹ 235
Paneer Tikka Wrap - Veg -₹ 250
Crispy Chicken Wrap - Non Veg - ₹ 250
Mexican Veg Wrap - Veg - ₹ 195
Omlette Wrap - Egg - ₹ 195
Vggie Wonderland Wrap - Veg - ₹ 260
Boiled Egg Wrap - Egg - ₹ 210`;

function getImageUrl(category) {
  const c = category.toLowerCase();
  if (c.includes('cake') || c.includes('dessert') || c.includes('confection') || c.includes('donut') || c.includes('cupcake')) {
    return 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&q=80&w=800';
  }
  if (c.includes('burger')) {
    return 'https://images.unsplash.com/photo-1585238342024-78d387f4a707?auto=format&fit=crop&q=80&w=800';
  }
  if (c.includes('pizza')) {
    return 'https://images.unsplash.com/photo-1513104890d38-7c749659a591?auto=format&fit=crop&q=80&w=800';
  }
  if (c.includes('caffeine') || c.includes('coffee')) {
    return 'https://images.unsplash.com/photo-1461023058943-07cb14c6a536?auto=format&fit=crop&q=80&w=800';
  }
  if (c.includes('mocktail')) {
    return 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&q=80&w=800';
  }
  if (c.includes('sandwich') || c.includes('wrap')) {
    return 'https://images.unsplash.com/photo-1528735602780-2552fd46c7af?auto=format&fit=crop&q=80&w=800';
  }
  if (c.includes('chicken') || c.includes('bite')) {
    return 'https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?auto=format&fit=crop&q=80&w=800';
  }
  if (c.includes('shake')) {
    return 'https://images.unsplash.com/photo-1572490122747-3968b75cc699?auto=format&fit=crop&q=80&w=800';
  }
  if (c.includes('salad')) {
    return 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&q=80&w=800';
  }
  return 'https://images.unsplash.com/photo-1555507036-ab1e4006aaeb?auto=format&fit=crop&q=80&w=800';
}

const lines = rawData.split('\n');
let currentCategory = '';
let currentGlobalDiet = null;
const menu = [];
let idCounter = 1;

for (let line of lines) {
  line = line.trim();
  if (!line) continue;
  
  if (line.includes('(') && line.includes(')')) {
    // Looks like a category header: e.g. "Cakes (21)" or "Mocktails (12) - All Veg"
    const match = line.match(/^([a-zA-Z\s]+)\s*\(\d+\)(?:\s*-\s*(.*))?$/);
    if (match) {
      currentCategory = match[1].trim();
      currentGlobalDiet = null;
      if (match[2]) {
        const d = match[2].toLowerCase();
        if (d.includes('all veg')) currentGlobalDiet = 'veg';
        else if (d.includes('all non veg')) currentGlobalDiet = 'non-veg';
      }
      continue;
    }
  }
  
  // Try to parse item line: Name - Diet - Price OR Name - Price
  // Note: some have hyphens, some don't.
  // E.g. "Cold Coffee - Veg - ₹ 160"
  // "Mid Night Sea Mocktail - ₹ 195"
  
  const parts = line.split('-').map(s => s.trim());
  let name = '';
  let diet = '';
  let priceStr = '';
  
  if (parts.length >= 3) {
    name = parts.slice(0, -2).join(' - ').trim();
    diet = parts[parts.length - 2].toLowerCase().replace(/\\s/g, '');
    priceStr = parts[parts.length - 1];
  } else if (parts.length === 2) {
    name = parts[0];
    priceStr = parts[1];
    diet = currentGlobalDiet || 'veg'; // default to veg if implied
  } else {
    // Fallback?
    continue;
  }
  
  // Normalize diet
  if (diet.includes('non') || diet === 'nonveg') diet = 'non-veg';
  else if (diet.includes('egg')) diet = 'egg';
  else diet = 'veg';
  
  menu.push({
    id: idCounter++,
    name: name,
    category: currentCategory,
    price: priceStr,
    description: "Delicious " + name.toLowerCase() + " prepared fresh.",
    image: getImageUrl(currentCategory),
    diet: diet
  });
}

const galleryImages = [
  "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1555507036-ab1e4006aaeb?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1495147466023-ac5c588e2e94?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1608198093002-ad4e005484ec?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1587314161584-180dbdb797eb?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?auto=format&fit=crop&q=80&w=800"
];

const output = "export const menuData = " + JSON.stringify(menu, null, 2) + ";\\n\\nexport const galleryImages = " + JSON.stringify(galleryImages, null, 2) + ";\\n";

fs.writeFileSync('src/data.js', output);
console.log('Successfully wrote ' + menu.length + ' items to src/data.js');
