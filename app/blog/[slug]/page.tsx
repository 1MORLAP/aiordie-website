import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { getPostBySlug, getAllPosts } from "@/lib/blog";
import { MDXRemote } from "next-mdx-remote/rsc";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};

  const url = `https://aiordie.now/blog/${slug}`;
  return {
    title: `${post.title} — AI or Die`,
    description: post.excerpt,
    openGraph: {
      type: "article",
      title: post.title,
      description: post.excerpt,
      url,
      publishedTime: post.date,
      authors: ["AI or Die"],
      siteName: "AI or Die",
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
    },
    alternates: { canonical: url },
  };
}

function buildArticleJsonLd(post: { title: string; excerpt: string; date: string; slug: string }) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.excerpt,
    datePublished: post.date,
    dateModified: post.date,
    author: {
      "@type": "Organization",
      name: "AI or Die",
      url: "https://aiordie.now",
    },
    publisher: {
      "@type": "Organization",
      name: "AI or Die",
      url: "https://aiordie.now",
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://aiordie.now/blog/${post.slug}`,
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const readingTime = Math.ceil(post.content.split(/\s+/).length / 200);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(buildArticleJsonLd(post)) }}
      />
      <article className="px-6 pt-16 pb-24 max-w-3xl mx-auto">
        <Link
          href="/blog"
          className="text-gray-500 hover:text-gray-300 text-sm transition-colors mb-8 inline-block"
        >
          ← Back to Blog
        </Link>

        <div className="flex flex-wrap items-center gap-3 mb-4">
          <span className="text-red-500 text-sm font-semibold bg-red-500/10 px-3 py-1 rounded-full">
            {post.category}
          </span>
          <span className="text-gray-500 text-sm">
            {new Date(post.date).toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </span>
          <span className="text-gray-600 text-sm">·</span>
          <span className="text-gray-500 text-sm">{readingTime} min read</span>
        </div>

        <h1 className="text-3xl md:text-4xl font-black text-white mb-6 leading-tight">
          {post.title}
        </h1>
        <p className="text-gray-400 text-lg mb-12 leading-relaxed border-l-4 border-red-500 pl-4">
          {post.excerpt}
        </p>

        <div className="prose prose-invert">
          <MDXRemote source={post.content} />
        </div>

        <div className="mt-16 pt-8 border-t border-gray-800">
          <p className="text-gray-400 mb-4">
            Ready to stop hiring and start deploying?
          </p>
          <a
            href="https://calendar.notion.so/meet/tomaszwojewoda/s4903rwq"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-red-500 hover:bg-red-600 text-white px-8 py-3 rounded font-bold transition-colors"
          >
            Book a Free Consult
          </a>
        </div>
      </article>
    </>
  );
}
