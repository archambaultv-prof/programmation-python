import React, { CSSProperties, useState } from "react";
import clsx from "clsx";
import CarousselPagination from "./CarousselPagination";

const Caroussel = ({
  className, // Custom classes for the container caroussel
  style, // Custom styles for the container caroussel
  children, // Content to be included within the caroussel
  shadow, // Used to add shadow under your caroussel. Expected values are: low (lw), medium (md), tall (tl)
  paginationpos = "bottom", // nouvelle prop: "top", "bottom" ou "both"
}) => {
  const carousselShadow = shadow ? `item shadow--${shadow}` : "";
  const items = React.Children.toArray(children);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    if (currentIndex < items.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handlePrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <div className={clsx(className, carousselShadow)} style={style}>
      {(paginationpos === "top" || paginationpos === "both") && (
        <CarousselPagination 
          currentIndex={currentIndex}
          style={{ marginBottom: "1.5rem" }} // marge adaptée pour le haut
          totalItems={items.length} 
          onPageChange={setCurrentIndex} 
          onPrevious={handlePrevious} 
          onNext={handleNext} 
        />
      )}
      {items.map((child, index) => (
        <div key={index} style={{ display: currentIndex === index ? "block" : "none" }}>
          {child}
        </div>
      ))}
      {(paginationpos === "bottom" || paginationpos === "both") && (
        <CarousselPagination 
          currentIndex={currentIndex}
          style={{ marginTop: "1.5rem" }} // marge adaptée pour le bas
          totalItems={items.length} 
          onPageChange={setCurrentIndex} 
          onPrevious={handlePrevious} 
          onNext={handleNext} 
        />
      )}
    </div>
  );
};

export default Caroussel;
