import type { Metadata } from "next";
import Link from "next/link";
import { getAllPosts } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Blog — AI or Die",
  description: "Insights on AI employees, automation, and the future of work.",
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <section className="px-6 pt-20 pb-24 max-w-4xl mx-auto">
      <h1 className="text-5xl md:text-6xl font-black text-white mb-4 tracking-tight">
        Blog
      </h1>
      <p className="text-gray-400 text-lg mb-16">
        Straight talk on AI employees, automation, and building a business that
        scales without headcount.
      </p>

      {posts.length === 0 ? (
        <p className="text-gray-500">No posts yet. Check back soon.</p>
      ) : (
        <div className="space-y-8">
          {posts.map((post) => (
            <article
              key={post.slug}
              className="border border-gray-800 hover:border-gray-600 rounded-lg p-8 transition-colors group"
            >
              <div className="text-red-500 text-sm font-semibold mb-3">
                {new Date(post.date).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </div>
              <h2 className="text-xl md:text-2xl font-bold text-white mb-3 group-hover:text-gray-100 transition-colors">
                <Link href={`/blog/${post.slug}`}>{post.title}</Link>
              </h2>
              <p className="text-gray-400 leading-relaxed mb-4">
                {post.excerpt}
              </p>
              <Link
                href={`/blog/${post.slug}`}
                className="text-red-500 hover:text-red-400 font-semibold text-sm transition-colors"
              >
                Read more →
              </Link>
            </article>
          ))}
        </div>
      )}
    </section>
  );
}
