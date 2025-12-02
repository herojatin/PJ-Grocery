import {
  GiAppleCore,
  GiBroccoli,
  GiMilkCarton,
  GiWineGlass,
  GiPopcorn,
  GiShrimp,
  GiCroissant,
  GiChickenLeg
} from 'react-icons/gi';

// Temporary placeholder image (you can replace later)
const placeholder = "https://placehold.co/200x200/cccccc/000000";


export const categories = [
  { name: 'Fruits', icon: <GiAppleCore className="text-red-500 text-2xl" /> },
  { name: 'Vegetables', icon: <GiBroccoli className="text-green-500 text-2xl" /> },
  { name: 'Dairy', icon: <GiMilkCarton className="text-yellow-400 text-2xl" /> },
  { name: 'Beverages', icon: <GiWineGlass className="text-blue-500 text-2xl" /> },
  { name: 'Snacks', icon: <GiPopcorn className="text-amber-600 text-2xl" /> },
  { name: 'Seafood', icon: <GiShrimp className="text-teal-400 text-2xl" /> },
  { name: 'Bakery', icon: <GiCroissant className="text-amber-700 text-2xl" /> },
  { name: 'Meat', icon: <GiChickenLeg className="text-red-700 text-2xl" /> }
];

export const products = [
  { id: 1, name: 'Apples', price: 50, category: 'Fruits', image: placeholder },
  { id: 21, name: 'Guava', price: 40, category: 'Fruits', image: placeholder },
  { id: 22, name: 'Dragon fruit', price: 250, category: 'Fruits', image: placeholder },
  { id: 23, name: 'Kiwi', price: 100, category: 'Fruits', image: placeholder },

  { id: 2, name: 'Banana', price: 96, category: 'Fruits', image: placeholder },
  { id: 3, name: 'Strawberries', price: 45, category: 'Fruits', image: placeholder },
  { id: 4, name: 'Oranges', price: 12, category: 'Fruits', image: placeholder },
  { id: 5, name: 'Grapes', price: 37, category: 'Fruits', image: placeholder },

  { id: 6, name: 'Spinach', price: 75, category: 'Vegetables', image: placeholder },
  { id: 7, name: 'Tomato', price: 22, category: 'Vegetables', image: placeholder },
  { id: 8, name: 'Cucumber', price: 18, category: 'Vegetables', image: placeholder },

  { id: 9, name: 'Milk', price: 55, category: 'Dairy', image: placeholder },
  { id: 10, name: 'Cheese', price: 77, category: 'Dairy', image: placeholder },

  { id: 11, name: 'Orange Juice', price: 45, category: 'Beverages', image: placeholder },
  { id: 12, name: 'Coffee', price: 99, category: 'Beverages', image: placeholder },

  { id: 13, name: 'Popcorn', price: 60, category: 'Snacks', image: placeholder },
  { id: 14, name: 'Chocolate', price: 80, category: 'Snacks', image: placeholder },

  { id: 15, name: 'Shrimp', price: 180, category: 'Seafood', image: placeholder },
  { id: 16, name: 'Lobster', price: 250, category: 'Seafood', image: placeholder },

  { id: 17, name: 'Bread', price: 40, category: 'Bakery', image: placeholder },
  { id: 18, name: 'Croissant', price: 55, category: 'Bakery', image: placeholder },

  { id: 19, name: 'Chicken', price: 220, category: 'Meat', image: placeholder },
  { id: 20, name: 'Beef Steak', price: 350, category: 'Meat', image: placeholder },
];

export const orders = [
  {
    id: "ORD-001",
    date: "2023-06-15",
    status: "Delivered",
    paymentMethod: "Credit Card",
    total: 124.95,
    items: [
      { name: "Apples", price: 50, quantity: 2, image: placeholder },
      { name: "Milk", price: 25, quantity: 1, image: placeholder }
    ]
  }
];
