import type { Metadata } from "next";
import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";
import { getAllPosts } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Blog — AI or Die",
  description: "Insights on AI employees, automation, and the future of work.",
};

export default function BlogPage() {
  const posts = getAllPosts();
  const featuredPost = posts[0];
  const remainingPosts = posts.slice(1);

  return (
    <section className="px-6 pb-24 pt-12 sm:pt-20">
      <div className="mx-auto max-w-6xl">
        <ScrollReveal>
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-[var(--accent)]">
            AI or Die Journal
          </p>
        </ScrollReveal>
        <ScrollReveal delayMs={80}>
          <h1 className="font-space-grotesk text-balance text-5xl font-extrabold tracking-tight text-[var(--text-primary)] md:text-7xl">
            Blog
          </h1>
        </ScrollReveal>
        <ScrollReveal delayMs={130}>
          <p className="mb-14 mt-5 max-w-3xl text-lg leading-relaxed text-[var(--text-secondary)]">
            Straight talk on AI employees, automation, and building a business
            that scales without headcount.
          </p>
        </ScrollReveal>

        {posts.length === 0 ? (
          <p className="rounded-xl border border-[var(--border)] bg-[var(--bg-card)] px-5 py-4 text-[var(--text-muted)]">
            No posts yet. Check back soon.
          </p>
        ) : (
          <>
            {featuredPost && (
              <ScrollReveal>
                <article className="group mb-10 rounded-2xl border border-[var(--accent-border)] bg-[var(--bg-card)] p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_24px_70px_-46px_var(--accent)] md:p-10">
                  <p className="mb-3 text-sm font-semibold uppercase tracking-[0.08em] text-[var(--accent)]">
                    Latest post
                  </p>
                  <p className="mb-4 text-sm font-semibold text-[var(--accent)]">
                    {new Date(featuredPost.date).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </p>
                  <h2 className="font-space-grotesk mb-4 text-3xl font-bold tracking-tight text-[var(--text-primary)] md:text-4xl">
                    <Link href={`/blog/${featuredPost.slug}`}>
                      {featuredPost.title}
                    </Link>
                  </h2>
                  <p className="mb-5 max-w-3xl text-base leading-relaxed text-[var(--text-secondary)]">
                    {featuredPost.excerpt}
                  </p>
                  <Link
                    href={`/blog/${featuredPost.slug}`}
                    className="text-sm font-semibold text-[var(--accent)] transition-colors group-hover:text-[var(--accent-hover)]"
                  >
                    Read full post →
                  </Link>
                </article>
              </ScrollReveal>
            )}

            {remainingPosts.length > 0 && (
              <div className="grid gap-6 md:grid-cols-2">
                {remainingPosts.map((post, idx) => (
                  <ScrollReveal key={post.slug} delayMs={idx * 70}>
                    <article className="group h-full rounded-2xl border border-[var(--border)] bg-[var(--bg-card)] p-7 transition-all duration-300 hover:-translate-y-1 hover:border-[var(--accent-border)] hover:shadow-[0_20px_60px_-46px_var(--accent)]">
                      <p className="mb-3 text-sm font-semibold text-[var(--accent)]">
                        {new Date(post.date).toLocaleDateString("en-US", {
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                        })}
                      </p>
                      <h2 className="mb-3 text-2xl font-bold leading-tight text-[var(--text-primary)] transition-colors group-hover:text-[var(--accent)]">
                        <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                      </h2>
                      <p className="mb-4 text-sm leading-relaxed text-[var(--text-secondary)]">
                        {post.excerpt}
                      </p>
                      <Link
                        href={`/blog/${post.slug}`}
                        className="text-sm font-semibold text-[var(--accent)] transition-colors hover:text-[var(--accent-hover)]"
                      >
                        Read more →
                      </Link>
                    </article>
                  </ScrollReveal>
                ))}
              </div>
            )}
          </>
        )}
      </div>
    </section>
  );
}
