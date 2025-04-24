import ProductList from "@/components/shared/product/product-list";
import { getLatestProducts } from "@/lib/actions/product.actions";

const HomePage = async () => {
  const latestProducts = (await getLatestProducts()).map(product => ({
    ...product,
    price: Number(product.price),
    rating: Number(product.rating),
  }));



  return (
    <div className="container mx-auto p-4">
      <ProductList data={latestProducts} title="Featured Products" />
    </div>
  );
};

export default HomePage;