"use client";

import { use } from "react";

import ProductCardComponent from "@/components/product/ProductCardComponent";
import { Product } from "@/lib/product-type/product";

// async function getProducts() {

//   const response = await fetch(
//     "http://localhost:3000/api/product",
//     {
//       cache: "no-store",
//     }
//   );

//   const json = await response.json();

//   return json.data;
// }

// const productsPromise = getProducts();

export default function ProductParallelPage() {

  // const products = use(productsPromise);

  return (
    <div className="space-y-5">
{/* 
      <h1 className="text-2xl font-bold">
        Products
      </h1>

      <div className="grid grid-cols-2 gap-5">

        {products?.map((product: Product) => (
          <ProductCardComponent
            key={product.uuid}
            product={product}
          />
        ))}

      </div> */}

    </div>
  );
}