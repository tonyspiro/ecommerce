// app/blog/[slug]/page.tsx
import { SingleBlog } from "@/cosmic/blocks/blog/SingleBlog";

export default async function SingleBlogPage({
  params,
}: {
  params: { slug: string; locale: string };
}) {
  return (
    <SingleBlog
      query={{ slug: params.slug, type: "blog-posts", locale: params.locale }}
    />
  );
}
