import ProductList from "@/components/shared/product/product-list";
import sampleData from "@/db/sample-data";

const HomePage = () => {
  // Transformasi data untuk memberikan fallback pada banner
  const products = sampleData?.products.map((product) => ({
    ...product,
    banner: product.banner || "/fallback-banner.jpg", // Fallback jika banner null
  })) || [];

  return (
    <div className="container mx-auto p-4">
      <ProductList data={products} title="Featured Products" limit={4} />
    </div>
  );
};

export default HomePage;
