import { Card, CardContent, CardHeader } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";

type Product = {
      id: number;
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
                  <CardHeader className="p-0 items-center">
                        <Link href={`/product/${product.slug}`} className="flex flex-col items-center">
                              <Image
                                    src={product.images[0]}
                                    alt={product.name}
                                    width={300}
                                    height={300}
                                    priority={true}
                                    className="object-cover"
                              />
                        </Link>
                  </CardHeader>
                  <CardContent className="p-4 grid gap-4">
                        <div className="text-xs">{product.brand}</div>
                        <Link href={`/product/${product.slug}`}>
                              <h2 className="text-sm font-medium">{product.name}</h2>
                        </Link>
                        <div className="flex justify-between gap-4">
                              <p>{product.rating} Stars</p>
                              {product.stock > 0 ? (
                                    <p className="font-bold">${product.price.toFixed(2)}</p>
                              ) : (
                                    <p className="text-destructive">Out Of Stock</p>
                              )}
                        </div>
                  </CardContent>
            </Card>
      );
};

export default ProductCard;