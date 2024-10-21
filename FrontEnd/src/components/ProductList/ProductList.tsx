import { useEffect, useState } from "react";
import { IProductList } from "../../Interface/IProduct";
import articulosJSON from "../../Mock/articulos.json";
import Product from "./Product/Product";
import axios from 'axios';



const ProductList: React.FC<IProductList> = ({ onSelectProduct }) => {
  const [products, setProducts] = useState([]);
  
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('API/GetArticulos'); 
        setProducts(response.data); 
      } catch (error) {
        console.error("Error GetArticulos:", error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className="col-6 p-2">
      <h2>Lista de Productos</h2>
      <ul className="list-group">
        {/* SIN API */}
        {articulosJSON.articulos.map((articulo) => (
          <Product
            key={articulo.codigo}
            codigo={articulo.codigo}
            descripcion={articulo.descripcion}
            precio={articulo.precio}
            deposito={articulo.deposito}
            onSelect={onSelectProduct}
          />
        ))}

        {/* CON API */}
        {/* {products.map(product => (
          <li key={product.codigo}>
            <label>
              <input
                type="checkbox"
                onChange={(e) => onSelectProduct(product.codigo, e.target.checked)}
              />
              {product.descripcion} - ${product.precio}
            </label>
          </li>
        ))} */}
      </ul>
    </div>
  );
};

export default ProductList;
