import { Card, CardContent, CardHeader } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import ProductPrice from "./product-price";

type Product = {
  name: string;
  slug: string;
  category: string;
  description: string;
  images: string[];
  price: number;
  brand: string;
  rating: number;
  numReviews: number;
  stock: number;
  isFeatured: boolean;
  banner: string;
};

type ProductCardProps = {
  product: Product;
};

const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <Card className="w-full max-w-sm">
      {/* Product Image */}
      <CardHeader className="p-0 items-center">
        <Link
          href={`/product/${product.slug}`}
          className="flex flex-col items-center"
          aria-label={`View details for ${product.name}`}
        >
          <Image
            src={product.images[0] || "/fallback-image.jpg"} // Fallback image if no image is provided
            alt={`Image of ${product.name}`}
            width={300}
            height={300}
            priority={true}
            className="object-cover"
          />
        </Link>
      </CardHeader>

      {/* Product Details */}
      <CardContent className="p-4 grid gap-4">
        {/* Brand */}
        <div className="text-xs text-gray-500">{product.brand}</div>
        {/* Product Name */}
        <Link href={`/product/${product.slug}`} aria-label={`View ${product.name}`}>
          <h2 className="text-sm font-medium truncate">{product.name}</h2>
        </Link>

        {/* Rating and Price */}
        <div className="flex justify-between items-center gap-4">
          <p className="text-sm">{product.rating.toString()} Stars</p>
          {product.stock > 0 ? (
            <ProductPrice value={Number(product.price)} />
          ) : (
            <p className="text-red-600">Out Of Stock</p>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
