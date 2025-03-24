import React, { CSSProperties, useState } from "react";
import clsx from "clsx";

const Caroussel = ({
  className, // Custom classes for the container caroussel
  style, // Custom styles for the container caroussel
  children, // Content to be included within the caroussel
  shadow, // Used to add shadow under your caroussel. Expected values are: low (lw), medium (md), tall (tl)
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
      {
        items.map((child, index) => (
          <div key={index} style={{ display: currentIndex === index ? "block" : "none" }}>
            {child}
          </div>
        ))
      }
      <ul className="pagination">
        <li
          className={`pagination__item ${currentIndex === 0 ? "disabled" : ""}`}
          onClick={handlePrevious}
        >
          <a className="pagination__link">Précédent</a>
        </li>
        {items.map((_, index) => (
          <li
            key={index}
            className={`pagination__item ${index === currentIndex ? "pagination__item--active" : ""}`}
            onClick={() => setCurrentIndex(index)}
          >
            <a className="pagination__link">{index + 1}</a>
          </li>
        ))}
        <li
          className={`pagination__item ${currentIndex === items.length - 1 ? "disabled" : ""}`}
          onClick={handleNext}
        >
          <a className="pagination__link">Suivant</a>
        </li>
      </ul>
    </div>
  );
};
export default Caroussel;
