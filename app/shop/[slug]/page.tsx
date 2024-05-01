// app/shop/[slug]/page.tsx
import { SingleProduct } from "@/cosmic/blocks/ecommerce/SingleProduct";
export default async function SingleProductPage({
  params,
  searchParams,
}: {
  params: { slug: string };
  searchParams: {
    success?: string;
  };
}) {
  return (
    <SingleProduct
      query={{ slug: params.slug, type: "products" }}
      purchased={searchParams.success ? true : false}
    />
  );
}
