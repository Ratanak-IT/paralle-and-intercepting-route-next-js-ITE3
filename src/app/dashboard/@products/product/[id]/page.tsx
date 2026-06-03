import ProductDetailComponent from "@/components/product/ProductDetailComponent";


import type { Metadata, ResolvingMetadata } from 'next'
 
type Props = {
  params: Promise<{ id: string }>
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}
 
export async function generateMetadata(
  { params, searchParams }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const id = (await params)?.id
 
  // fetch post information
  const post = await fetch(`${process.env.NEXT_PUBLIC_BASE_ISHOP_API_URL}/products/${id}`).then((res) =>
    res.json()
  )
 
  return {
    title: post.name,
    description: post.description,
    openGraph: {
      images: post.thumbnail,
    },
  }
}
 
export function Page({ params, searchParams }: Props) {}

async function getProduct(id: string) {
  const response = await fetch(
    `https://metadata-blond-six.vercel.app/api/product/${id}`,
    { cache: "no-store" }
  );

  const data = await response.json();
  return data?.data;
}

export default async function ProductDetailPage({
  params, searchParams
}: Props) {

  const id = (await params)?.id

  const product = await getProduct(id);

  return (
    <div className="p-10">

      <ProductDetailComponent
        product={product}
      />

    </div>
  );
}