import ProductDetailComponent from "@/components/product/ProductDetailComponent";

async function getProductById(id: string) {
  const response = await fetch(
    `http://localhost:3000/api/product/${id}`,
    { cache: "no-store" }
  );

  const json = await response.json();

  return json?.data;
}

export default async function ModalProductPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {

  const { id } = await params;

  const product = await getProductById(id);

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex justify-center items-center">

      <div className="bg-white w-[800px] rounded-2xl p-6">

        <ProductDetailComponent
          product={product}
        />

      </div>

    </div>
  );
}