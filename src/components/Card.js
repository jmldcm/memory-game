import React from "react";
import { motion } from "framer-motion";

const Card = ({ id, image, flipped, handleClick }) => {
  const cardVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
    flip: { rotateY: 180 },
  };

  return (
    <motion.div
      className="relative w-24 h-32 m-2 cursor-pointer"
      onClick={() => handleClick(id)}
      variants={cardVariants}
      initial="hidden"
      animate={flipped ? "flip" : "visible"}
      transition={{ duration: 0.5 }}
    >
      <div
        className={`absolute w-full h-full bg-white rounded-md shadow-md transform transition-transform duration-500 ${
          flipped ? "rotate-y-180" : ""
        }`}
      >
        <div className="absolute w-full h-full rounded-md overflow-hidden">
          <img
            src={image}
            alt="Memory card"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
      <div
        className={`absolute w-full h-full bg-gray-300 rounded-md shadow-md transform transition-transform duration-500 ${
          flipped ? "rotate-y-180" : "rotate-y-0"
        }`}
      />
    </motion.div>
  );
};

export default Card;
