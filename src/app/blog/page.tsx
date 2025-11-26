import { Header } from "@/components/layout/header";
import { blogPosts } from "@/lib/blog-data";
import Link from "next/link";
import { ArrowRight, Calendar, Clock } from "lucide-react";

export default function BlogPage() {
    return (
        <div className="min-h-screen flex flex-col">
            <Header />
            <main className="flex-1">
                <section className="py-20 bg-muted/30">
                    <div className="container mx-auto px-4 text-center">
                        <h1 className="font-playfair text-4xl md:text-5xl font-bold mb-6">Le Blog</h1>
                        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                            Réflexions, conseils et actualités sur les Ressources Humaines, le Management et le Coaching.
                        </p>
                    </div>
                </section>

                <section className="py-20">
                    <div className="container mx-auto px-4">
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                            {blogPosts.map((post) => (
                                <article key={post.id} className="bg-card rounded-xl border shadow-sm hover:shadow-md transition-shadow flex flex-col overflow-hidden">
                                    <div className="p-6 flex-1 flex flex-col">
                                        <div className="text-sm text-primary font-medium mb-3">{post.category}</div>
                                        <h2 className="font-playfair text-2xl font-bold mb-3 hover:text-primary transition-colors">
                                            <Link href={`/blog/${post.slug}`}>
                                                {post.title}
                                            </Link>
                                        </h2>
                                        <p className="text-muted-foreground mb-6 flex-1 line-clamp-3">
                                            {post.excerpt}
                                        </p>

                                        <div className="flex items-center justify-between text-sm text-muted-foreground mt-auto pt-4 border-t">
                                            <div className="flex items-center gap-4">
                                                <span className="flex items-center gap-1"><Calendar className="h-4 w-4" /> {post.date}</span>
                                                <span className="flex items-center gap-1"><Clock className="h-4 w-4" /> {post.readTime}</span>
                                            </div>
                                        </div>

                                        <div className="mt-6">
                                            <Link href={`/blog/${post.slug}`} className="text-primary font-medium flex items-center hover:underline">
                                                Lire l'article <ArrowRight className="ml-2 h-4 w-4" />
                                            </Link>
                                        </div>
                                    </div>
                                </article>
                            ))}
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
}
