import { Header } from "@/components/layout/header";
import { blogPosts } from "@/lib/blog-data";
import { notFound } from "next/navigation";
import { Calendar, Clock, ArrowLeft, ArrowRight, Share2 } from "lucide-react";
import Link from "next/link";
import { ShareButton } from "@/components/blog/share-button";
import ReactMarkdown from 'react-markdown';

interface BlogPostPageProps {
    params: Promise<{
        slug: string;
    }>;
}

// Generate static params for all blog posts
export async function generateStaticParams() {
    return blogPosts.map((post) => ({
        slug: post.slug,
    }));
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
    const { slug } = await params;
    const post = blogPosts.find((p) => p.slug === slug);

    if (!post) {
        notFound();
    }

    return (
        <div className="min-h-screen flex flex-col">
            <Header />
            <main className="flex-1">
                <article className="py-20">
                    <div className="container mx-auto px-4 max-w-3xl">
                        <Link href="/blog" className="inline-flex items-center text-muted-foreground hover:text-primary mb-8 transition-colors">
                            <ArrowLeft className="mr-2 h-4 w-4" /> Retour au blog
                        </Link>

                        <header className="mb-10">
                            <div className="text-primary font-medium mb-4">{post.category}</div>
                            <h1 className="font-playfair text-4xl md:text-5xl font-bold mb-6 leading-tight">{post.title}</h1>

                            <div className="flex items-center gap-6 text-muted-foreground border-b pb-8">
                                <span className="flex items-center gap-2"><Calendar className="h-4 w-4" /> {post.date}</span>
                                <span className="flex items-center gap-2"><Clock className="h-4 w-4" /> {post.readTime} de lecture</span>
                            </div>
                        </header>

                        <div className="prose prose-lg max-w-none prose-headings:font-playfair prose-headings:font-bold prose-p:text-muted-foreground prose-a:text-primary prose-li:text-muted-foreground">
                            <ReactMarkdown>{post.content}</ReactMarkdown>
                        </div>

                        <div className="mt-12 pt-8 border-t flex justify-between items-center">
                            <p className="font-playfair font-bold text-lg">Partager cet article</p>
                            <div className="flex gap-2">
                                <ShareButton title={post.title} url={`https://akone.org/blog/${post.slug}`} />
                            </div>
                        </div>

                        <div className="mt-12 grid grid-cols-2 gap-4">
                            {(() => {
                                const currentIndex = blogPosts.findIndex(p => p.id === post.id);
                                const prevPost = currentIndex > 0 ? blogPosts[currentIndex - 1] : null;
                                const nextPost = currentIndex < blogPosts.length - 1 ? blogPosts[currentIndex + 1] : null;

                                return (
                                    <>
                                        <div>
                                            {prevPost && (
                                                <Link href={`/blog/${prevPost.slug}`} className="group block p-4 border rounded-lg hover:bg-muted/50 transition-colors">
                                                    <div className="text-xs text-muted-foreground mb-1 flex items-center"><ArrowLeft className="h-3 w-3 mr-1" /> Article précédent</div>
                                                    <div className="font-medium text-sm group-hover:text-primary line-clamp-2">{prevPost.title}</div>
                                                </Link>
                                            )}
                                        </div>
                                        <div className="text-right">
                                            {nextPost && (
                                                <Link href={`/blog/${nextPost.slug}`} className="group block p-4 border rounded-lg hover:bg-muted/50 transition-colors">
                                                    <div className="text-xs text-muted-foreground mb-1 flex items-center justify-end">Article suivant <ArrowRight className="h-3 w-3 ml-1" /></div>
                                                    <div className="font-medium text-sm group-hover:text-primary line-clamp-2">{nextPost.title}</div>
                                                </Link>
                                            )}
                                        </div>
                                    </>
                                );
                            })()}
                        </div>
                    </div>
                </article>
            </main>
        </div>
    );
}
