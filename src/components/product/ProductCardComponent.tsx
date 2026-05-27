import { Product } from "@/lib/product-type/product";
import Image from "next/image";
import Link from "next/link";

type Props = {
  product: Product;
};

export default function ProductCardComponent({
  product,
}: Props) {

  return (
    <Link
      href={`/dashboard/product/${product.uuid}`}
      className="border p-4 rounded-xl block"
    >

      <Image
        src={product.thumbnail}
        alt={product.name}
        width={400}
        height={400}
        className="w-full h-52 object-cover rounded-lg"
      />

      <h2 className="font-bold text-lg mt-4">
        {product.name}
      </h2>

      <p className="text-gray-500 mt-2 text-sm line-clamp-2">
        {product.description}
      </p>

      <p className="font-bold text-2xl mt-4">
        ${product.priceOut}
      </p>

    </Link>
  );
}