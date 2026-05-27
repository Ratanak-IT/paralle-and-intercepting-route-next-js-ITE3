import { Product } from "@/lib/product-type/product";
import { NextResponse } from "next/server";

export async function GET(
  req: Request,
  { params }: { params: Promise<{ id: string }> }
) {

  const { id } = await params;

  const BASE_URL = process.env.NEXT_PUBLIC_BASE_ISHOP_API_URL;

  const response = await fetch(
    `${BASE_URL}/products/${id}`
  );

  const data = await response.json();

  return NextResponse.json({
    success: true,
    data: data,
  });
}