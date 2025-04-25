import ProductList from "@/components/shared/product/product-list";
import { getLatestProducts } from "@/lib/actions/product.actions";

const HomePage = async () => {
  const latestProducts = (await getLatestProducts()).map(product => ({
    ...product,
    price: product.price.toString(),
    rating: product.rating.toString(),
  }));



  return (
    <div className="container mx-auto p-4">
      <ProductList data={latestProducts} title="Featured Products" />
    </div>
  );
};

export default HomePage;