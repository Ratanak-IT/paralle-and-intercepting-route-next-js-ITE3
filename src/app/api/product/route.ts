import { NextResponse } from "next/server";

export async function GET() {

  const BASE_URL = process.env.NEXT_PUBLIC_BASE_ISHOP_API_URL;

  const response = await fetch(
    `${BASE_URL}/products`
  );

  const data = await response.json();

  return NextResponse.json({
    success: true,
    data: data.content,
  });
}