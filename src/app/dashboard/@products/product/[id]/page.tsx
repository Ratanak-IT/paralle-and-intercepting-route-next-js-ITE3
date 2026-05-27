import ProductDetailComponent from "@/components/product/ProductDetailComponent";


async function getProduct(id: string) {
  const response = await fetch(
    `http://localhost:3000/api/product/${id}`,
    { cache: "no-store" }
  );

  const data = await response.json();
  return data?.data;
}

export default async function ProductDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {

  const { id } = await params;

  const product = await getProduct(id);

  return (
    <div className="p-10">

      <ProductDetailComponent
        product={product}
      />

    </div>
  );
}