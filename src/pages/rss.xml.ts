import { getCollection } from "astro:content";
import rss from "@astrojs/rss";
import type { APIRoute } from "astro";

export const GET: APIRoute = async (ctx) => {
  const posts = await getCollection("blog");
  const items = posts.map((post) => ({
    title: post.data.title,
    pubDate: post.data.date,
    description: post.data.description,
    link: `/blog/${post.id}`,
  }));

  return rss({
    title: "Astro Frame's Feed",
    description: "My Astro blog RSS feed",
    site: ctx.site || "",
    items,
  });
};
