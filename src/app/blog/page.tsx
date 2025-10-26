import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { blogPosts } from '@/data/blog';

export const metadata: Metadata = {
  title: 'Blog | Bindu\'s Stitching',
  description: 'Read tips, guides, and inspiration for custom tailoring and embroidery work.',
};

export default function BlogPage() {
  const categories = ['All', ...new Set(blogPosts.map((post) => post.category))];

  return (
    <>
      <section className="gradient-brand py-12 md:py-16 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl font-serif font-bold text-brand-cream mb-4">
            Blog & Resources
          </h1>
          <p className="text-lg text-brand-cream/80 max-w-2xl">
            Tips, guides, and inspiration for tailoring, embroidery, and fashion.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-brand-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {blogPosts.map((post, idx) => (
              <article
                key={post.id}
                className="bg-brand-bronze/20 rounded-2xl soft-shadow border border-brand-gold/20 overflow-hidden hover:border-brand-gold/50 transition-smooth group"
              >
                <div className="relative h-48 sm:h-56 overflow-hidden bg-gradient-to-br from-brand-gold/10 to-accent-green/10">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>

                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-semibold text-brand-gold bg-brand-gold/10 px-3 py-1 rounded-full">
                      {post.category}
                    </span>
                    <span className="text-xs text-brand-cream/70">{post.readTime}</span>
                  </div>

                  <h3 className="text-xl font-serif font-bold text-brand-cream mb-2 group-hover:text-brand-gold transition-smooth line-clamp-2">
                    {post.title}
                  </h3>

                  <p className="text-brand-cream/70 text-sm mb-4 line-clamp-2">
                    {post.excerpt}
                  </p>

                  <div className="flex items-center justify-between pt-4 border-t border-brand-gold/20">
                    <span className="text-xs text-brand-cream/60">
                      {new Date(post.publishedAt).toLocaleDateString('en-IN', {
                        year: 'numeric',
                        month: 'short',
                        day: 'numeric',
                      })}
                    </span>
                    <a
                      href={`/blog/${post.slug}`}
                      className="text-brand-gold hover:text-brand-lightgold transition-smooth font-semibold text-sm"
                    >
                      Read →
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-16 text-center">
            <p className="text-brand-cream/70 mb-6">
              More articles coming soon. Subscribe to our newsletter for updates!
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-6 py-2 rounded-full font-semibold text-brand-dark bg-gradient-to-r from-brand-gold to-brand-lightgold hover:shadow-glow transition-smooth"
            >
              Get Updates
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
