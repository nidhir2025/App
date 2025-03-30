import React from "react";
import { motion } from "framer-motion";
import { ShoppingCart } from "react-icons/fi";

export default function HomePage() {
  return (
    <div className="flex items-center justify-center h-screen bg-gradient-to-b from-blue-900 via-gray-800 to-gray-700 text-white p-4">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center"
      >
        <h1 className="text-4xl font-bold flex items-center justify-center gap-2">
          Fresh & Fast Grocery Delivery <ShoppingCart size={32} />
        </h1>
        <p className="mt-4 text-lg text-gray-300">
          Get fresh groceries delivered to your doorstep in minutes. <br />
          Quality you can trust, speed you'll love!
        </p>
        <motion.button
          className="mt-6 bg-white text-blue-900 font-semibold py-3 px-6 rounded-lg shadow-lg hover:bg-gray-300 transition"
          whileHover={{ scale: 1.1 }}
        >
          Shop Now
        </motion.button>
      </motion.div>
    </div>
  );
}
