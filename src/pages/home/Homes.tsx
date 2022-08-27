import Products from '../../components/home/Products';
import Home from '../../components/home/Home';
import { useEffect, useState } from 'react';
import ProductService from 'services/ProductService';
// import UploadedImage from '../../forms/UploadedImage';

const Homes = () => {
  const [products, setProducts] = useState<IProduct[]>([]);

  useEffect(() => {
    ProductService.getProducts().then((response) => {
      setProducts(response);
    });
  }, []);
  return (
    <div>
      <Home />
      <Products products={products} />
      {/* <UploadedImage /> */}
    </div>
  );
};

export default Homes;
