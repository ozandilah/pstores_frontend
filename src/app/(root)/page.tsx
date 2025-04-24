import ProductList from "@/components/shared/product/product-list";
import { getLatestProducts } from "@/lib/actions/product.actions";

const  HomePage = async () => {
  const latestProducts = await getLatestProducts();

  // Transformasi data untuk memberikan fallback pada banner
  // const products = sampleData?.products.map((product) => ({
  //   ...product,
  //   banner: product.banner || "/fallback-banner.jpg", // Fallback jika banner null
  // })) || [];

  return (
    <div className="container mx-auto p-4">
      <ProductList data={latestProducts} title="Featured Products" />
    </div>
  );
};

export default HomePage;
