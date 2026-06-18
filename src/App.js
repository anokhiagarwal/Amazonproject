// App.js

import { useState } from "react";
import "./App.css";

const categories = [
  "All",
  "Electronics",
  "Fashion",
  "Food",
  "Books",
  "Gaming",
  "Fitness",
  "Beauty",
];

const products = [
  {
    id: 1,
    name: "Apple MacBook Pro",
    price: 145999,
    category: "Electronics",
    image:
      "https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?auto=format&fit=crop&w=1000&q=80",
  },

  {
    id: 2,
    name: "Sony Wireless Headphones",
    price: 24999,
    category: "Electronics",
    image:
      "https://images.unsplash.com/photo-1546435770-a3e426bf472b?auto=format&fit=crop&w=1000&q=80",
  },

  {
    id: 3,
    name: "iPhone 17 Pro Max",
    price: 169999,
    category: "Electronics",
    image:
      "https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?auto=format&fit=crop&w=1000&q=80",
  },

  {
    id: 4,
    name: "Gaming Keyboard RGB",
    price: 4999,
    category: "Gaming",
    image:
      "https://images.unsplash.com/photo-1595225476474-87563907a212?auto=format&fit=crop&w=1000&q=80",
  },

  {
    id: 5,
    name: "Nike Air Shoes",
    price: 7999,
    category: "Fashion",
    image:
      "https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format&fit=crop&w=1000&q=80",
  },

  {
    id: 6,
    name: "Premium Hoodie",
    price: 2999,
    category: "Fashion",
    image:
      "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=1000&q=80",
  },

  {
    id: 7,
    name: "Smart Watch",
    price: 11999,
    category: "Electronics",
    image:
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=1000&q=80",
  },

  {
    id: 8,
    name: "Yoga Mat",
    price: 1999,
    category: "Fitness",
    image:
      "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=1000&q=80",
  },

  {
    id: 9,
    name: "Protein Powder",
    price: 3499,
    category: "Fitness",
    image:
      "https://images.unsplash.com/photo-1622484212850-eb596d769edc?auto=format&fit=crop&w=1000&q=80",
  },

  {
    id: 10,
    name: "Coffee Beans",
    price: 799,
    category: "Food",
    image:
      "https://images.unsplash.com/photo-1447933601403-0c6688de566e?auto=format&fit=crop&w=1000&q=80",
  },

  {
    id: 11,
    name: "Dark Chocolate",
    price: 499,
    category: "Food",
    image:
      "https://images.unsplash.com/photo-1511381939415-e44015466834?auto=format&fit=crop&w=1000&q=80",
  },

  {
    id: 12,
    name: "Atomic Habits Book",
    price: 699,
    category: "Books",
    image:
      "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&w=1000&q=80",
  },

  {
    id: 13,
    name: "PlayStation 5",
    price: 54999,
    category: "Gaming",
    image:
      "https://images.unsplash.com/photo-1607853202273-797f1c22a38e?auto=format&fit=crop&w=1000&q=80",
  },

  {
    id: 14,
    name: "Luxury Perfume",
    price: 4999,
    category: "Beauty",
    image:
      "https://images.unsplash.com/photo-1594035910387-fea47794261f?auto=format&fit=crop&w=1000&q=80",
  },

  {
    id: 15,
    name: "Skin Care Kit",
    price: 2499,
    category: "Beauty",
    image:
      "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=1000&q=80",
  },
];

function App() {
  const [category, setCategory] = useState("All");
  const [search, setSearch] = useState("");
  const [cart, setCart] = useState([]);

  // Add To Cart
  const addToCart = (product) => {
    const item = cart.find((p) => p.id === product.id);

    if (item) {
      setCart(
        cart.map((p) =>
          p.id === product.id
            ? { ...p, qty: p.qty + 1 }
            : p
        )
      );
    } else {
      setCart([...cart, { ...product, qty: 1 }]);
    }
  };

  // Total Cart Items
  const totalItems = cart.reduce(
    (sum, item) => sum + item.qty,
    0
  );

  // Filter Products
  const filteredProducts = products.filter((p) => {
    const matchCategory =
      category === "All" || p.category === category;

    const matchSearch = p.name
      .toLowerCase()
      .includes(search.toLowerCase());

    return matchCategory && matchSearch;
  });

  return (
    <div className="app">

      {/* Navbar */}

      <div className="navbar">

        <h1>🛒Amazon Clone</h1>

        <input
          type="text"
          placeholder="Search amazing products..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <div className="cart">
          🛍️ Cart ({totalItems})
        </div>

      </div>

      {/* Category Buttons */}

      <div className="categories">

        {categories.map((cat) => (
          <button
            key={cat}
            className={category === cat ? "active" : ""}
            onClick={() => setCategory(cat)}
          >
            {cat}
          </button>
        ))}

      </div>

      {/* Products */}

      <div className="products">

        {filteredProducts.map((product) => (

          <div className="card" key={product.id}>

            <img
              src={product.image}
              alt={product.name}
            />

            <div className="info">

              <h3>{product.name}</h3>

              <p>{product.category}</p>

              <h2>₹{product.price}</h2>

              <button
                onClick={() => addToCart(product)}
              >
                Add To Cart
              </button>

            </div>

          </div>

        ))}

      </div>

    </div>
  );
}

export default App;