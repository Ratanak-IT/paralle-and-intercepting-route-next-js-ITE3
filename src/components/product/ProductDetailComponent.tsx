import { Product } from "@/lib/product-type/product";
import Image from "next/image";
import { ShoppingBag, Heart, ShieldCheck, Truck, RotateCcw } from "lucide-react";

type Props = {
  product: Product;
};

export default function ProductDetailComponent({ product }: Props) {

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 gap-x-12 gap-y-10 lg:grid-cols-2">
        
        <div className="w-full">
          <div className="relative aspect-square overflow-hidden rounded-2xl bg-gray-50 border border-gray-100 shadow-sm transition-all hover:shadow-md">
            <Image
              src={product.thumbnail}
              alt={product.name}
              fill
              priority
              sizes="(max-w-7xl) 50vw, 100vw"
              className="object-cover object-center"
            />
          </div>
        </div>

        <div className="flex flex-col justify-between lg:sticky lg:top-8 lg:h-fit">
          <div>
          
            <span className="inline-flex items-center rounded-md bg-blue-50 px-2 py-1 text-xs font-medium text-blue-700 ring-1 ring-inset ring-blue-700/10 mb-3">
              In Stock
            </span>
            
            <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              {product.name}
            </h1>

            <div className="mt-4">
              <h2 className="sr-only">Product information</h2>
              <p className="text-3xl font-bold tracking-tight text-gray-950">
                ${product.priceOut}
              </p>
            </div>

            <div className="mt-6 border-t border-gray-100 pt-6">
              <h3 className="text-sm font-medium text-gray-900">Description</h3>
              <p className="mt-3 text-base leading-relaxed text-gray-600">
                {product.description}
              </p>
            </div>
          </div>

          <div className="mt-8 border-t border-gray-100 pt-6">
        
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-gray-900 px-6 py-3.5 text-base font-semibold text-white shadow-sm transition-colors hover:bg-gray-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-900">
                <ShoppingBag className="h-5 w-5" />
                Add to Cart
              </button>
              
              <button className="flex items-center justify-center rounded-xl border border-gray-200 p-3.5 text-gray-500 transition-colors hover:bg-gray-50 hover:text-gray-600">
                <Heart className="h-5 w-5" />
                <span className="sr-only">Add to favorites</span>
              </button>
            </div>

            <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3 border-t border-gray-50 pt-6">
              <div className="flex items-center gap-3 text-gray-600">
                <Truck className="h-5 w-5 text-gray-400 flex-shrink-0" />
                <span className="text-xs font-medium">Free delivery over $50</span>
              </div>
              <div className="flex items-center gap-3 text-gray-600">
                <RotateCcw className="h-5 w-5 text-gray-400 flex-shrink-0" />
                <span className="text-xs font-medium">30-day return policy</span>
              </div>
              <div className="flex items-center gap-3 text-gray-600">
                <ShieldCheck className="h-5 w-5 text-gray-400 flex-shrink-0" />
                <span className="text-xs font-medium">2-year warranty included</span>
              </div>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}