import React from "react";
import { IVendor } from "../../../Interface/IVendor";

const Vendor: React.FC<IVendor> = ({
  codigo,
  descripcion,
  onSelect,
  className = null,
}) => {
  return (
    <option value={codigo} className={`${className}`}>
      {descripcion}
    </option>
  );
};

export default Vendor;
