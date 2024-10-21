import React from "react";
import { IProduct } from "../../../Interface/IProduct";

const Product: React.FC<IProduct> = ({
  codigo,
  descripcion,
  precio,
  deposito,
  onSelect,
  children = null,
  className = null,
}) => {
  const txtStock = deposito > 0 ? " " : "Sin Stock";
  return (
    <>
      <li className={`list-group-item text-start ${className}`} key={codigo}>
        <div className="p-2 d-flex">
          <input
            type="checkbox"
            className="form-check-input me-2"
            onChange={(e) => onSelect(codigo, e.target.checked)}
          />
          <p>
            <strong>{descripcion}</strong> - ${precio}{" "}
          </p>
          <br />
          <p className="text-end">{txtStock}</p>
        </div>
        {children}
      </li>
    </>
  );
};

export default Product;
