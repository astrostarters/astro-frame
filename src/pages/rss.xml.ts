import { getCollection } from "astro:content";
import rss from "@astrojs/rss";
import type { APIRoute } from "astro";
import { siteConfig } from "@/config/site";

export const GET: APIRoute = async (ctx) => {
  const posts = await getCollection("blog");
  const items = posts.map((post) => ({
    title: post.data.title,
    pubDate: post.data.date,
    description: post.data.description,
    link: `/blog/${post.id}`,
  }));

  return rss({
    title: siteConfig.title,
    description: siteConfig.description,
    site: ctx.site || "",
    items,
  });
};
