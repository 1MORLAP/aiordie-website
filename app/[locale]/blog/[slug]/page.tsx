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
    title: `${post.title} — AIorDie`,
    description: post.excerpt,
    openGraph: {
      type: "article",
      title: post.title,
      description: post.excerpt,
      url,
      publishedTime: post.date,
      authors: ["AIorDie"],
      siteName: "AIorDie",
      ...(post.image ? { images: [{ url: post.image, width: 1200, height: 630 }] } : {}),
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
      ...(post.image ? { images: [post.image] } : {}),
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
      name: "AIorDie",
      url: "https://aiordie.now",
    },
    publisher: {
      "@type": "Organization",
      name: "AIorDie",
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
      <article className="px-6 pb-24 pt-14 md:pt-16">
        <div className="mx-auto max-w-3xl">
          <Link
            href="/blog"
            className="mb-8 inline-block text-sm text-[var(--text-muted)] transition-colors hover:text-[var(--text-primary)]"
          >
            ← Back to Blog
          </Link>

          <div className="mb-4 flex flex-wrap items-center gap-3">
            <span className="rounded-full border border-[var(--accent-border)] bg-[var(--accent-subtle)] px-3 py-1 text-sm font-semibold text-[var(--accent)]">
              {post.category}
            </span>
            <span className="text-sm text-[var(--text-muted)]">
              {new Date(post.date).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </span>
            <span className="text-sm text-[var(--text-muted)]">·</span>
            <span className="text-sm text-[var(--text-muted)]">{readingTime} min read</span>
          </div>

          <h1 className="font-space-grotesk mb-6 text-3xl font-extrabold leading-tight tracking-tight text-[var(--text-primary)] md:text-5xl">
            {post.title}
          </h1>
          <p className="mb-8 border-l-4 border-[var(--accent)] pl-4 text-lg leading-relaxed text-[var(--text-secondary)]">
            {post.excerpt}
          </p>

          {post.image && (
            <div className="mb-12 overflow-hidden rounded-2xl border border-[var(--border)]">
              <img
                src={post.image}
                alt={post.title}
                className="h-auto w-full object-cover"
                style={{ aspectRatio: "1200/630" }}
              />
            </div>
          )}

          <div className="prose">
            <MDXRemote source={post.content} />
          </div>

          <div className="mt-16 border-t border-[var(--border)] pt-8">
            <p className="mb-4 text-[var(--text-secondary)]">
              Ready to stop hiring and start deploying?
            </p>
            <a
              href="https://calendar.notion.so/meet/tomaszwojewoda/s4903rwq"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block rounded-lg bg-[var(--accent)] px-8 py-3 font-bold text-[var(--text-on-accent)] transition-colors hover:bg-[var(--accent-hover)]"
            >
              Book a Free Consult
            </a>
          </div>
        </div>
      </article>
    </>
  );
}
