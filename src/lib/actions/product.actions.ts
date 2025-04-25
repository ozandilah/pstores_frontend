// filepath: /E:/PERSONAL/pstore/src/lib/actions/product.actions.ts
'use server';
import { convertToPlainObject } from "../utils";
import { LATEST_PRODUCTS_LIMIT } from "../constants";
import { prisma } from "@/db/prisma";


// Get latest products
export async function getLatestProducts() {
  
  
  const data = await prisma.product.findMany({
    take: LATEST_PRODUCTS_LIMIT,
    orderBy: {
      createdAt: 'desc',
    },
  });
  return convertToPlainObject(data);
}