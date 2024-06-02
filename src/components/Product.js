import React, { useState } from "react";
import { products } from "../constant";
import AdComponent from "./AdComponent";
import ProductCard from "./ProductCard";
import axios from "axios";

const Product = () => {
  const adClient = "ca-pub-1284593280584391"; // Replace with your AdSense client ID
  const adSlot = "pub-1284593280584391"; // Replace with your AdSense slot ID
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);

  const search = async (e) => {
    e.preventDefault();
    const apiKey = "YOUR_GOOGLE_API_KEY";
    const cx = "YOUR_SEARCH_ENGINE_ID";
    const url = `https://www.googleapis.com/customsearch/v1?key=${apiKey}&cx=${cx}&q=${query}`;

    try {
      const response = await axios.get(url);
      setResults(response.data.items);
    } catch (error) {
      console.error("Error fetching data: ", error);
    }
  };
  return (
    <div>
      {/* <AdComponent adClient={adClient} adSlot={adSlot} /> */}
      <div className="flex  py-4    lg:px-36">
        <form onSubmit={search} className="flex space-x-4 my-16">
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search..."
            className="w-full rounded-full border px-4 "
          />
          <button
            type="submit"
            className="px-6 py-1 bg-gray-100 rounded-full shadow"
          >
            Search
          </button>
        </form>
      </div>

      <div class="font-[sans-serif] bg-gray-100">
        <div class="p-4 mx-auto lg:max-w-7xl sm:max-w-full">
          <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-xl:gap-4 gap-6">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
