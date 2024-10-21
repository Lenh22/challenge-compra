import { useState } from "react";
import ProductList from "../components/ProductList/ProductList";
import VendorList from "../components/VendorList/VendorList";
import axios from "axios";

const VendorProduct = () => {
  const [selectedProduct, setSelectedProduct] = useState<number[]>([]);
  const [selectedVendor, setSelectedVendor] = useState<string>("");

  const handleSelectProduct = (codigo: number, isChecked: boolean) => {
    if (isChecked) {
      setSelectedProduct([...selectedProduct, codigo]);
    } else {
      setSelectedProduct(selectedProduct.filter((item) => item !== codigo));
    }
  };

  const handleVendorChange = (vendorId: string) => {
    setSelectedVendor(vendorId);
  };

  const handleSaveOrder = async () => {
    if (selectedProduct.length === 0 || !selectedVendor) {
      alert("Tenes que seleccionar al menos un producto y un vendedor");
      return;
    }

    const order = {
      product: selectedProduct,
      vendor: selectedVendor,
    };

    console.log("Order: ", order);
    // API
    try {
      const response = await axios.post("API/CrearPedido", order);
      console.log("Pedido guardado: ", response.data);
      alert("Pedido guardado");
    } catch (error) {
      console.error("Error al guardar:", error);
      alert("Error al guardar el pedido");
    }
  };

  return (
    <section className="container mt-5">
      <div className="row">
        <ProductList onSelectProduct={handleSelectProduct} />
        <VendorList onSelectVendor={handleVendorChange} />
      </div>
      <div className="row m-3">
        <button className="btn btn-primary" onClick={handleSaveOrder}>
          Guardar Orden
        </button>
      </div>
    </section>
  );
};

export default VendorProduct;
