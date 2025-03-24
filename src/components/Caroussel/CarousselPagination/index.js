import React from 'react';
import clsx from "clsx";

const CarousselPagination = ({ currentIndex, totalItems, onPageChange, onPrevious, onNext, style, className }) => {
  return (
    <ul className={clsx(`pagination`, className)} style={style}>
      <li
        className={`pagination__item ${currentIndex === 0 ? "disabled" : ""}`}
        onClick={onPrevious}
      >
        <a className="pagination__link">Précédent</a>
      </li>
      {
        [...Array(totalItems)].map((_, index) => (
          <li
            key={index}
            className={`pagination__item ${index === currentIndex ? "pagination__item--active" : ""}`}
            onClick={() => onPageChange(index)}
          >
            <a className="pagination__link">{index + 1}</a>
          </li>
        ))
      }
      <li
        className={`pagination__item ${currentIndex === totalItems - 1 ? "disabled" : ""}`}
        onClick={onNext}
      >
        <a className="pagination__link">Suivant</a>
      </li>
    </ul>
  );
};

export default CarousselPagination;
