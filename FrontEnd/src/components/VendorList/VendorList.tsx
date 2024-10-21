import vendedoresJSON from "../../Mock/vendedores.json";
import Vendor from "./Vendor/Vendor";
import { IVendorList } from "../../Interface/IVendor";
import axios from "axios";
import { useEffect, useState } from "react";

const VendorList: React.FC<IVendorList> = ({ onSelectVendor }) => {
  const [vendors, setVendors] = useState([]);

  const handleVendorChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    onSelectVendor(event.target.value);
  };

  useEffect(() => {
    const fetchVendors = async () => {
      try {
        const response = await axios.get("API/GetVendedores");
        setVendors(response.data);
      } catch (error) {
        console.error("Error GetVendedores:", error);
      }
    };

    fetchVendors();
  }, []);

  return (
    <div className="col-6 p-2">
      <h2>Lista de Vendedores</h2>
      <select className="form-select" onChange={handleVendorChange}>
        <option value="">Selecciona un vendedor</option>
        {/* Sin Api */}
        {vendedoresJSON.vendedores.map((vendedor) => (
          <Vendor
            key={vendedor.id}
            codigo={vendedor.id}
            descripcion={vendedor.descripcion}
          />
        ))}

        {/* Con API */}
        {/* {vendors.map(vendor => (
          <option key={vendor.id} value={vendor.id}>{vendor.descripcion}</option>
        ))} */}
      </select>
    </div>
  );
};

export default VendorList;
