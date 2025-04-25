import {z} from "zod";
import { insertProductSchema } from "@/lib/validators";



export type Product = z.infer<typeof insertProductSchema> & {
      id: string;
      name: string;
      slug: string;
      category: string;
      brand: string;
      description: string;
      stock: number;
      images: string[];
      banner: string | null;
      price: string;
      isFeatured: boolean; 
      rating: string;
      numReviews: number;
      createdAt: Date;
};