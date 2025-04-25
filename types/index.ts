import {z} from "zod";
import { insertProductSchema } from "@/lib/validators";



export type Product = z.infer<typeof insertProductSchema> & {
      id: string;
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
      banner: string | null;
};