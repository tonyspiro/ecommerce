// app/[locale]/blog/page.tsx
import { BlogList } from "@/cosmic/blocks/blog/BlogList";
export default async function BlogListPage({
  params,
}: {
  params: { locale: string };
}) {
  return (
    <BlogList
      query={{ type: "blog-posts", locale: params.locale }}
      sort="-created_at"
      limit={10}
      skip={0}
    />
  );
}
