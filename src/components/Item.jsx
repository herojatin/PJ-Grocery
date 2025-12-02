import React, { useState } from "react";
import { FiSearch, FiPlus, FiMinus, FiShoppingBag, FiTrash2 } from "react-icons/fi";
// Ensure this path is correct for your project structure
import { categories, products } from "../assets/data/Categories"; 

// --- Helper Component: Search Highlighting ---
const HighlightSearch = ({ text, highlight }) => {
  if (!highlight) return <>{text}</>;
  
  const parts = text.split(new RegExp(`(${highlight})`, 'gi'));
  return (
    <>
      {parts.map((part, i) =>
        part.toLowerCase() === highlight.toLowerCase() ? (
          <b key={i} className="text-yellow-300 bg-black/30 px-1 rounded-sm">
            {part}
          </b>
        ) : (
          <span key={i}>{part}</span>
        )
      )}
    </>
  );
};


// --- Sub-Component: Product Card with Quantity Control ---
const ProductCard = ({ product, search }) => {
  const [quantity, setQuantity] = useState(0);

  return (
    <div className="bg-[#2a5f54] rounded-lg overflow-hidden shadow-xl flex flex-col transition duration-300 hover:scale-[1.02]">
      {/* Image Placeholder/Area */}
      <div className="h-48 relative bg-[#377a6b] flex-shrink-0 flex items-center justify-center">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover"
        />
        <span className="absolute top-3 right-3 bg-[#377a6b] text-white text-xs px-2 py-1 rounded-sm font-semibold">
          Organic
        </span>
      </div>

      {/* Content Area */}
      <div className="p-4 flex-grow">
        <h3 className="text-white text-lg font-bold">
          <HighlightSearch text={product.name} highlight={search} />
        </h3>
        <p className="text-gray-300 text-sm mt-1 mb-3 h-10 overflow-hidden">
          {product.description || 'Premium quality organic goodness.'}
        </p>

        {/* Price Section */}
        <div className="flex items-center mt-3">
          <span className="text-white text-2xl font-bold mr-3">
            ₹{product.price}
          </span>
          <span className="text-gray-500 text-xs line-through">
            ₹{product.originalPrice || (product.price * 1.15).toFixed(2)}
          </span>
        </div>
      </div>
      
      {/* Add to Cart / Quantity Control */}
      {quantity === 0 ? (
        <button 
          onClick={() => setQuantity(1)}
          className="w-full bg-[#377a6b] text-white py-2 text-lg font-semibold hover:bg-green-600 transition flex items-center justify-center gap-2"
        >
          <FiShoppingBag /> Add to Cart
        </button>
      ) : (
        <div className="flex justify-between items-center bg-[#1a473f] p-2">
          <button 
            onClick={() => setQuantity(q => q > 1 ? q - 1 : 0)}
            className="bg-[#2a5f54] text-white p-2 rounded-full hover:bg-red-500 transition"
          >
            {quantity > 1 ? <FiMinus /> : <FiTrash2 />}
          </button>
          <span className="text-lg font-bold mx-4">{quantity} in Cart</span>
          <button 
            onClick={() => setQuantity(q => q + 1)}
            className="bg-[#377a6b] text-white p-2 rounded-full hover:bg-green-600 transition"
          >
            <FiPlus />
          </button>
        </div>
      )}
    </div>
  );
};


// --- Main Item Component ---
const Item = () => {
  const [search, setSearch] = useState("");
  const [expanded, setExpanded] = useState(categories.map(c => c.name)); // Start expanded for better initial view

  // Functions to handle expansion/collapse (same as before)
  const toggleExpand = (name) => {
    setExpanded((prev) =>
      prev.includes(name)
        ? prev.filter((c) => c !== name)
        : [...prev, name]
    );
  };

  const expandAll = () => setExpanded(categories.map((c) => c.name));
  const collapseAll = () => setExpanded([]);

  // Filter products by search
  const filteredProducts = products.filter((p) =>
    p.name.toLowerCase().includes(search.toLowerCase()) ||
    p.description.toLowerCase().includes(search.toLowerCase()) // Added description search
  );

  const totalFilteredProducts = filteredProducts.length;

  return (
    // Outer container: Added pt-28 to clear the fixed navbar
    <div className="min-h-screen bg-[#1a473f] text-white px-10 md:px-16 pt-28 pb-10">

      {/* Header Section */}
      <header className="text-center mb-12">
        <h1 className="text-5xl font-extrabold tracking-wider">
          <span className="text-[#377a6b]">ORGANIC</span> PANTRY
        </h1>
        <p className="mt-2 text-gray-400">
          Premium quality groceries sourced from local organic farms
        </p>
        <div className="w-24 h-1 bg-[#377a6b] mx-auto mt-4"></div>
      </header>

      {/* Search Bar & Expand/Collapse Button */}
      <div className="flex flex-col items-center mb-16">
        <div className="flex w-full max-w-xl bg-[#2a5f54] rounded-lg overflow-hidden">
          <input
            type="text"
            placeholder="Search fruits, vegetables, meats..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="flex-1 bg-transparent outline-none text-white placeholder-gray-400 p-4 text-lg"
          />
          <button className="bg-[#377a6b] text-white p-4 text-xl hover:bg-green-600 transition">
            <FiSearch />
          </button>
        </div>
        
        {/* Expand/Collapse Button Logic */}
        <button
          onClick={() =>
            expanded.length === categories.length ? collapseAll() : expandAll()
          }
          className="mt-6 bg-[#377a6b] px-6 py-2 rounded-md font-semibold hover:bg-green-600 transition flex items-center gap-2"
        >
          {expanded.length === categories.length ? "Collapse All" : "Expand All"}
          {expanded.length === categories.length ? <FiMinus /> : <FiPlus />}
        </button>
      </div>

      {/* Category Accordion + Products */}
      <div className="max-w-7xl mx-auto space-y-8">
        
        {/* No Results Indicator */}
        {totalFilteredProducts === 0 && search && (
             <div className="text-center py-10 bg-[#2a5f54] rounded-lg">
                <p className="text-2xl font-semibold">🔍 No Organic Items Found</p>
                <p className="text-gray-400 mt-2">Try a different search term or check your spelling.</p>
             </div>
        )}

        {/* Mapped Categories */}
        {categories.map((cat, idx) => {
          const catProducts = filteredProducts.filter(
            (p) => p.category === cat.name
          );
          
          // Only show the category if it contains products or if the user is searching
          if (catProducts.length === 0 && search) return null;

          return (
            <div
              key={idx}
              className="rounded-lg bg-[#2a5f54] shadow-xl"
            >
              {/* Category Header (Clickable to Expand/Collapse) */}
              <div
                className="flex justify-between items-center cursor-pointer p-4 border-l-4 border-[#377a6b] hover:bg-[#2a5f54]/80 transition"
                onClick={() => toggleExpand(cat.name)}
              >
                <div className="flex items-center gap-3">
                  <h2 className="text-2xl font-bold text-white">
                    {cat.name}
                  </h2>
                </div>

                {expanded.includes(cat.name) ? (
                  <FiMinus className="text-xl text-[#377a6b]" />
                ) : (
                  <FiPlus className="text-xl text-[#377a6b]" />
                )}
              </div>

              {/* Product List Grid */}
              {expanded.includes(cat.name) && (
                <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-5 pt-4 border-t border-gray-600/50">
                  {catProducts.length > 0 ? (
                    catProducts.map((product) => (
                      <ProductCard key={product.id} product={product} search={search} />
                    ))
                  ) : (
                    // This message appears only if the category is empty, not if the search filters all out
                    <p className="col-span-full text-center text-gray-400 text-lg">
                      No items currently stocked in the {cat.name} category.
                    </p>
                  )}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Item;