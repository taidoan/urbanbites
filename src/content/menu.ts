import { Tab, Item } from "@/components/Filter/types";

export const Categories: Tab[] = [
  {
    id: "breakfast",
    label: "Breakfasts",
    description:
      "Start your morning right with our hearty breakfast options. From fluffy pancakes to savory omelets, there's something for everyone.",
  },
  {
    id: "starters",
    label: "Starters",
    description:
      "Begin your meal with our flavorful starters, perfect for sharing. Enjoy a variety of light bites, from bruschetta to creamy soups.",
  },
  {
    id: "salads",
    label: "Salads",
    description:
      "Fresh, crisp, and full of flavor, our salads are a healthy delight. Choose from classic favorites or adventurous new combinations.",
  },
  {
    id: "pasta",
    label: "Pasta",
    description:
      "Our pastas bring comfort and flavor to your table. From creamy Alfredo to rich Bolognese, each dish is crafted with care.",
  },
  {
    id: "deli",
    label: "Deli",
    description:
      "Savor our deli selections, featuring premium sandwiches and charcuterie boards. Perfect for a quick bite or a relaxed meal.",
  },
  {
    id: "mains",
    label: "Mains",
    description:
      "Savor the heart of our cuisine with our carefully crafted main meals. Each dish is a symphony of flavors, designed to satisfy and delight.",
  },
  {
    id: "desserts",
    label: "Desserts",
    description:
      "Indulge in our irresistible desserts, the perfect ending to any meal. Enjoy classic sweets like cheesecake and rich chocolate cake.",
  },
  {
    id: "drinks",
    label: "Drinks",
    description:
      "Refresh with our wide range of drinks, from soft beverages to fine wines. Whether a quick coffee or a crafted cocktail, we have it all.",
  },
];

export const DrinkCategories: Record<string, string> = {
  chocolate:
    "Indulge in our rich and creamy chocolate drinks, crafted to perfection.",
  tea: "Explore a variety of fine teas, each brewed to bring out the unique flavors.",
  coffee:
    "Savor our expertly brewed coffee, made from the finest roasted beans.",
  "soft drinks":
    "Refresh yourself with our selection of chilled, carbonated beverages.",
  "fruit juice":
    "Enjoy the natural sweetness of freshly squeezed fruit juices.",
  "beer & cider":
    "Discover our handpicked selection of craft beers and ciders.",
  wine: "Curated wines to complement your meal, perfect for any occasion.",
  smoothies:
    "A refreshing blend of fruits and yogurt, perfect for a healthy treat.",
};

export const MenuItems: Item[] = [
  {
    id: 1,
    name: "Mediterranean Chicken Wrap",
    category: "deli",
    description:
      "Grilled chicken breast, hummus, cucumber, tomato, red onion, and feta cheese wrapped in a whole-grain tortilla.",
    calories: "500kcal",
    price: 9.0,
  },
  {
    id: 2,
    name: "Vegetarian Falafel Wrap",
    category: "deli",
    description:
      "Crispy falafel patties, hummus, lettuce, tomato, cucumber, red onion, and tzatziki sauce wrapped in a soft pita bread.",
    calories: "450kcal",
    price: 8.0,
  },
  {
    id: 3,
    name: "Classic Turkey & Swiss Sandwich",
    category: "deli",
    description:
      "Sliced turkey breast, Swiss cheese, crisp lettuce, and cranberry mayo served on whole-grain bread.",
    calories: "450kcal",
    price: 9.0,
  },
  {
    id: 4,
    name: "Caprese Sandwich",
    category: "deli",
    description:
      "Fresh mozzarella, tomato, basil pesto, and balsamic glaze pressed between slices of artisanal bread.",
    calories: "350kcal",
    price: 9.0,
  },
  {
    id: 5,
    name: "New York Cheesecake",
    category: "desserts",
    description:
      "Velvety smooth and rich New York-style cheesecake with a buttery graham cracker crust, served with a dollop of whipped cream and fresh berries.",
    calories: "400kcal",
    price: 6.0,
  },
  {
    id: 6,
    name: "Chocolate Lava Cake",
    category: "desserts",
    description:
      "Dive into a decadent chocolate lava cake with a molten chocolate center, served warm with a scoop of vanilla ice cream and a drizzle of chocolate sauce.",
    calories: "450kcal",
    price: 7.0,
  },
  {
    id: 7,
    name: "Fresh Fruit Tart",
    category: "desserts",
    description:
      "Delight in a flaky pastry shell filled with luscious pastry cream and topped with a vibrant assortment of fresh seasonal fruits, glazed to perfection.",
    calories: "250kcal",
    price: 8.0,
  },
  {
    id: 8,
    name: "Grilled Salmon with Lemon Dill Sauce",
    category: "mains",
    description:
      "Wild-caught salmon fillet grilled to perfection and served with a zesty lemon-dill sauce, accompanied by roasted vegetables and quinoa pilaf.",
    calories: "500kcal",
    price: 16.0,
  },
  {
    id: 9,
    name: "Beef & Mushroom Risotto",
    category: "mains",
    description:
      "Creamy Arborio rice cooked with tender locally sourced beef, earthy mushrooms, Parmesan cheese, and a touch of red wine.",
    calories: "500kcal",
    price: 14.0,
  },
  {
    id: 10,
    name: "Mediterranean Vegetable Pasta",
    category: "mains",
    description:
      "Fusilli pasta tossed with roasted Mediterranean vegetables such as eggplant, bell peppers, zucchini, and cherry tomatoes, in a garlic and herb-infused olive oil sauce, finished with crumbled feta cheese.",
    calories: "450kcal",
    price: 12.0,
  },
  {
    id: 11,
    name: "Vegetarian Eggplant Parmesan",
    category: "mains",
    description:
      "Slices of breaded and baked eggplant layered with marinara sauce, melted mozzarella cheese, and Parmesan cheese, served with a side of spaghetti marinara.",
    calories: "400kcal",
    price: 12.0,
  },
  {
    id: 12,
    name: "Grilled Chicken Breast with Chimichurri",
    category: "mains",
    description:
      "Succulent grilled chicken breast marinated in chimichurri sauce, served with garlic mashed potatoes and sautéed seasonal vegetables.",
    calories: "500kcal",
    price: 15.0,
  },
  {
    id: 13,
    name: "Thai Green Curry with Tofu",
    category: "mains",
    description:
      "Fragrant Thai green curry made with coconut milk, tofu, mixed vegetables, and Thai spices, served with steamed jasmine rice.",
    calories: "450kcal",
    price: 13.0,
  },
  {
    id: 14,
    name: "Full English Breakfast",
    category: "breakfast",
    description:
      "A hearty breakfast featuring eggs (scrambled, fried, or poached), bacon, sausage, grilled tomatoes, baked beans, mushrooms, and toast.",
    calories: "800kcal",
    price: 8.0,
  },
  {
    id: 15,
    name: "Vegetarian Breakfast",
    category: "breakfast",
    description:
      "A satisfying vegetarian option including eggs (scrambled, fried, or poached), vegetarian sausage, grilled tomatoes, baked beans, mushrooms, and toast.",
    calories: "800kcal",
    price: 7.0,
  },
  {
    id: 16,
    name: "Eggs Benedict",
    category: "breakfast",
    description:
      "Poached eggs served on toasted English muffins with Canadian bacon and hollandaise sauce.",
    calories: "450kcal",
    price: 8.0,
  },
  {
    id: 17,
    name: "Smoked Salmon Bagel",
    category: "breakfast",
    description:
      "A toasted bagel topped with cream cheese, smoked salmon, sliced cucumber, and red onion.",
    calories: "450kcal",
    price: 7.0,
  },
  {
    id: 18,
    name: "Fruit Salad Bowl",
    category: "breakfast",
    description:
      "A refreshing assortment of seasonal fruits, such as berries, melon, pineapple, and grapes, served with a dollop of Greek yogurt.",
    calories: "250kcal",
    price: 5.0,
  },
  {
    id: 19,
    name: "Pancake Stack",
    category: "breakfast",
    description:
      "Fluffy pancakes served with maple syrup, fresh berries, and a dollop of whipped cream.",
    calories: "500kcal",
    price: 6.0,
  },
  {
    id: 20,
    name: "Classic Croissant",
    category: "breakfast",
    description: "A buttery and flaky croissant, freshly baked to perfection.",
    calories: "200kcal",
    price: 2.5,
  },
  {
    id: 21,
    name: "Ham and Cheese Croissant",
    category: "breakfast",
    description:
      "Warm croissant filled with thinly sliced ham and melted Swiss cheese.",
    calories: "350kcal",
    price: 3.5,
  },
  {
    id: 22,
    name: "Spinach and Feta Croissant",
    category: "breakfast",
    description:
      "A savory croissant filled with sautéed spinach and crumbled feta cheese.",
    calories: "300kcal",
    price: 3.5,
  },
  {
    id: 23,
    name: "Avocado Toast",
    category: "breakfast",
    description:
      "Sourdough bread topped with smashed avocado, cherry tomatoes, and a sprinkle of microgreens.",
    calories: "300kcal",
    price: 7.0,
  },
  {
    id: 24,
    name: "Greek Yoghurt Parfait",
    category: "breakfast",
    description:
      "Creamy Greek yogurt layered with homemade granola, mixed berries, and a drizzle of honey.",
    calories: "300kcal",
    price: 5.0,
  },
  {
    id: 25,
    name: "Bruschetta",
    category: "starters",
    description:
      "Toasted bread topped with diced tomatoes, fresh basil, garlic, and a drizzle of balsamic glaze.",
    calories: "200kcal",
    price: 5.0,
  },
  {
    id: 26,
    name: "Crispy Calamari",
    category: "starters",
    description:
      "Tender calamari rings lightly breaded and fried until golden brown, served with marinara sauce for dipping.",
    calories: "325kcal",
    price: 7.0,
  },
  {
    id: 27,
    name: "Roasted Red Pepper Hummus",
    category: "starters",
    description:
      "Creamy hummus infused with roasted red peppers and served with warm pita bread and crunchy carrot sticks.",
    calories: "200kcal",
    price: 6.0,
  },
  {
    id: 28,
    name: "Stuffed Mushrooms",
    category: "starters",
    description:
      "Button mushrooms filled with a savory mixture of breadcrumbs, herbs, and cheese, baked until golden and bubbling.",
    calories: "200kcal",
    price: 7.0,
  },
  {
    id: 29,
    name: "Vegetable Spring Rolls",
    category: "starters",
    description:
      "Crispy spring rolls filled with a mix of fresh vegetables and served with a sweet chili dipping sauce.",
    calories: "150kcal",
    price: 6.0,
  },
  {
    id: 30,
    name: "Classic Caesar Salad",
    category: "salads",
    description:
      "Crisp romaine lettuce tossed with homemade Caesar dressing, crunchy croutons, and grated Parmesan cheese.",
    calories: "250kcal",
    price: 8.0,
  },
  {
    id: 31,
    name: "Greek Salad",
    category: "salads",
    description:
      "A refreshing mix of lettuce, cucumbers, tomatoes, red onions, Kalamata olives, and feta cheese, tossed in a tangy Greek dressing.",
    calories: "250kcal",
    price: 9.0,
  },
  {
    id: 32,
    name: "Quinoa & Avocado Salad",
    category: "salads",
    description:
      "Nutrient-packed quinoa mixed with diced avocado, cherry tomatoes, cucumber, red onion, and fresh herbs, dressed with a zesty lemon vinaigrette.",
    calories: "350kcal",
    price: 10.0,
  },
  {
    id: 33,
    name: "Classic Beef Lasagna",
    category: "pasta",
    description:
      "Layers of tender lasagna noodles, seasoned ground beef, rich marinara sauce, and creamy ricotta cheese, topped with melted mozzarella cheese.",
    calories: "600kcal",
    price: 13.0,
  },
  {
    id: 34,
    name: "Vegetable Lasagna",
    category: "pasta",
    description:
      "A refreshing mix of lettuce, cucumbers, tomatoes, red onions, Kalamata olives, and feta cheese, tossed in a tangy Greek dressing.",
    calories: "500kcal",
    price: 12.0,
  },
  {
    id: 35,
    name: "Hot Chocolate",
    category: "drinks",
    drinkCategory: "chocolate",
    description:
      "Creamy hot cocoa made with cocoa powder, topped with whipped cream.",
    price: 3.0,
    calories: "250 kcal",
  },
  {
    id: 36,
    name: "White Hot Chocolate",
    category: "drinks",
    drinkCategory: "chocolate",
    description: "Creamy delight of our premium White Hot Chocolate.",
    price: 3.0,
    calories: "270 kcal",
  },
  {
    id: 37,
    name: "Classic Black Tea",
    category: "drinks",
    drinkCategory: "tea",
    description: "A hot cup of classic black tea.",
    price: 2.0,
    calories: "2 kcal",
  },
  {
    id: 38,
    name: "Earl Grey",
    category: "drinks",
    drinkCategory: "tea",
    description: "A fragrant blend of black tea with bergamot essence.",
    price: 2.5,
    calories: "2 kcal",
  },
  {
    id: 39,
    name: "Green Tea",
    category: "drinks",
    drinkCategory: "tea",
    description: "Hot green tea, known for its light and refreshing flavor.",
    price: 2.25,
    calories: "2 kcal",
  },
  {
    id: 40,
    name: "Chai Latte",
    category: "drinks",
    drinkCategory: "tea",
    description: "A comforting blend of spiced black tea and steamed milk.",
    price: 3.5,
    calories: "200 kcal",
  },
  {
    id: 41,
    name: "Espresso",
    category: "drinks",
    drinkCategory: "coffee",
    description: "A bold and concentrated shot of coffee.",
    price: 1.5,
    calories: "5 kcal",
  },
  {
    id: 42,
    name: "Cappuccino",
    category: "drinks",
    drinkCategory: "coffee",
    description: "Espresso, steamed milk, and frothy foam, perfectly balanced.",
    price: 2.5,
    calories: "120 kcal",
  },
  {
    id: 43,
    name: "Latte",
    category: "drinks",
    drinkCategory: "coffee",
    description: "Creamy espresso with steamed milk.",
    price: 2.75,
    calories: "150 kcal",
  },
  {
    id: 44,
    name: "Mocha",
    category: "drinks",
    drinkCategory: "coffee",
    description: "Espresso and rich chocolate, topped with whipped cream.",
    price: 3.0,
    calories: "290 kcal",
  },
  {
    id: 45,
    name: "Americano",
    category: "drinks",
    drinkCategory: "coffee",
    description: "Espresso diluted with hot water for a smooth taste.",
    price: 2.25,
    calories: "10 kcal",
  },
  {
    id: 46,
    name: "Coca Cola",
    category: "drinks",
    drinkCategory: "soft drinks",
    description: "A refreshing carbonated soft drink.",
    price: 2.0,
    calories: "140 kcal",
  },
  {
    id: 47,
    name: "Root Beer",
    category: "drinks",
    drinkCategory: "soft drinks",
    description:
      "A sweet and spicy carbonated beverage with a distinctive flavor.",
    price: 2.0,
    calories: "160 kcal",
  },
  {
    id: 48,
    name: "Pepsi",
    category: "drinks",
    drinkCategory: "soft drinks",
    description: "A classic cola beverage.",
    price: 2.0,
    calories: "150 kcal",
  },
  {
    id: 49,
    name: "Ginger Ale",
    category: "drinks",
    drinkCategory: "soft drinks",
    description: "A crisp and refreshing ginger-flavored soft drink.",
    price: 2.0,
    calories: "120 kcal",
  },
  {
    id: 50,
    name: "Sprite",
    category: "drinks",
    drinkCategory: "soft drinks",
    description: "A lemon-lime flavored soft drink.",
    price: 2.0,
    calories: "140 kcal",
  },
  {
    id: 51,
    name: "Lemonade",
    category: "drinks",
    drinkCategory: "soft drinks",
    description: "A refreshing blend of lemon juice, water, and sugar.",
    price: 2.0,
    calories: "130 kcal",
  },
  {
    id: 52,
    name: "Diet Coke",
    category: "drinks",
    drinkCategory: "soft drinks",
    description: "A sugar-free, low-calorie version of Coca Cola.",
    price: 2.0,
    calories: "1 kcal",
  },
  {
    id: 53,
    name: "Iced Tea",
    category: "drinks",
    drinkCategory: "soft drinks",
    description: "A cold and refreshing tea-based beverage.",
    price: 2.0,
    calories: "90 kcal",
  },
  {
    id: 54,
    name: "Fruit Punch",
    category: "drinks",
    drinkCategory: "soft drinks",
    description: "A sweet and fruity beverage blend.",
    price: 2.0,
    calories: "150 kcal",
  },
  {
    id: 55,
    name: "Orange Burst",
    category: "drinks",
    drinkCategory: "fruit juice",
    description:
      "A classic favorite made from freshly squeezed oranges, bursting with vitamin C.",
    price: 3.0,
    calories: "110 kcal",
  },
  {
    id: 56,
    name: "Grapefruit Zing",
    category: "drinks",
    drinkCategory: "fruit juice",
    description: "Invigorating and tangy taste of freshly squeezed grapefruit.",
    price: 3.0,
    calories: "100 kcal",
  },
  {
    id: 57,
    name: "Apple Orchard",
    category: "drinks",
    drinkCategory: "fruit juice",
    description:
      "Enjoy the crisp and refreshing flavor of pure, freshly pressed apple juice.",
    price: 3.0,
    calories: "120 kcal",
  },
  {
    id: 58,
    name: "Tropical Paradise",
    category: "drinks",
    drinkCategory: "fruit juice",
    description:
      "A blend of pineapple, mango, and coconut, transporting your taste buds to the tropics.",
    price: 3.0,
    calories: "130 kcal",
  },
  {
    id: 59,
    name: "Berry Bliss",
    category: "drinks",
    drinkCategory: "fruit juice",
    description:
      "A sweet and tart medley of strawberries, blueberries, raspberries, and blackberries.",
    price: 3.0,
    calories: "140 kcal",
  },
  {
    id: 61,
    name: "Local IPA",
    category: "drinks",
    drinkCategory: "beer & cider",
    description:
      "A locally brewed Indian Pale Ale with a burst of hoppy and citrus flavors.",
    price: 5.5,
    calories: "180 kcal",
  },
  {
    id: 62,
    name: "Classic Lager",
    category: "drinks",
    drinkCategory: "beer & cider",
    description:
      "Crisp and clean classic lager, perfect for any beer enthusiast.",
    price: 4.75,
    calories: "170 kcal",
  },
  {
    id: 63,
    name: "Apple Orchard Cider",
    category: "drinks",
    drinkCategory: "beer & cider",
    description:
      "Crisp cider crafted from the finest local apples, offering a taste of the orchard.",
    price: 5.25,
    calories: "210 kcal",
  },
  {
    id: 64,
    name: "Red Blend",
    category: "drinks",
    drinkCategory: "wine",
    description:
      "A harmonious blend of red grapes with notes of dark fruits and subtle oak.",
    price: 8.5,
    calories: "120 kcal (per glass)",
  },
  {
    id: 65,
    name: "Chardonnay",
    category: "drinks",
    drinkCategory: "wine",
    description:
      "A smooth and buttery Chardonnay with hints of green apple and vanilla.",
    price: 9.0,
    calories: "125 kcal (per glass)",
  },
  {
    id: 66,
    name: "Classic Berry Blast",
    category: "drinks",
    drinkCategory: "smoothies",
    description:
      "A mix of strawberries, blueberries, raspberries, Greek yogurt, and a drizzle of honey.",
    price: 4.0,
    calories: "250 kcal",
  },
  {
    id: 67,
    name: "Orchard Bliss",
    category: "drinks",
    drinkCategory: "smoothies",
    description:
      "Apple and pear fusion with locally harvested apples, pears, vanilla yogurt, and a hint of cinnamon and honey.",
    price: 4.0,
    calories: "240 kcal",
  },
  {
    id: 68,
    name: "Tropical Sunrise",
    category: "drinks",
    drinkCategory: "smoothies",
    description:
      "Tropical delight featuring mango, pineapple, banana, coconut milk, and a touch of honey.",
    price: 4.25,
    calories: "260 kcal",
  },
  {
    id: 69,
    name: "Green Garden Delight",
    category: "drinks",
    drinkCategory: "smoothies",
    description:
      "Green smoothie made with locally sourced spinach, kale, banana, Greek yogurt, and a touch of honey.",
    price: 4.25,
    calories: "230 kcal",
  },
];
