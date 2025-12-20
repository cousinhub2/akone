import { Header } from "@/components/layout/header";
import { Button } from "@/components/ui/button";
import { CheckCircle2, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function CoachingPage() {
    return (
        <div className="min-h-screen flex flex-col">
            <Header />
            <main className="flex-1">
                <section className="py-20 bg-muted/30">
                    <div className="container mx-auto px-4 text-center">
                        <h1 className="font-playfair text-4xl md:text-5xl font-bold mb-6">Coaching d'équipe</h1>
                        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                            Développez la coopération et l'intelligence collective au service de la performance.
                        </p>
                    </div>
                </section>

                <section className="py-20">
                    <div className="container mx-auto px-4 max-w-4xl">
                        <div className="prose prose-lg mx-auto text-muted-foreground">
                            <h2 className="text-2xl font-playfair font-bold text-foreground mb-4">La finalité</h2>
                            <p className="mb-8">
                                La finalité est de créer les conditions indispensables pour développer la coopération et l'intelligence collective au service de la performance.
                            </p>

                            <h2 className="text-2xl font-playfair font-bold text-foreground mb-4">Objectifs</h2>
                            <p className="mb-6">
                                L’objectif du coaching d’équipe proposée par AK One est d’être orienté solutions et pragmatisme. Son approche systémique vise à identifier les comportements contre productifs. L’équipe est impliquée dans la co-construction des actions à mettre en place sur les enjeux suivants :
                            </p>

                            <ul className="space-y-4 mb-12">
                                <li className="flex items-start gap-3">
                                    <CheckCircle2 className="h-5 w-5 text-primary mt-1 shrink-0" />
                                    <span>Définir la vision d’une nouvelle équipe, identifier ce qui est attendu collectivement et individuellement.</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <CheckCircle2 className="h-5 w-5 text-primary mt-1 shrink-0" />
                                    <span>Clarifier les modes de fonctionnement et renouer avec la confiance.</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <CheckCircle2 className="h-5 w-5 text-primary mt-1 shrink-0" />
                                    <span>Renforcer la dynamique du collectif et identifier les complémentarités.</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <CheckCircle2 className="h-5 w-5 text-primary mt-1 shrink-0" />
                                    <span>Développer la cohésion et aplanir des difficultés relationnelles.</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <CheckCircle2 className="h-5 w-5 text-primary mt-1 shrink-0" />
                                    <span>Engager et incarner une transformation managériale.</span>
                                </li>
                            </ul>

                            <div className="bg-card p-8 rounded-xl border mt-12">
                                <h3 className="text-xl font-playfair font-bold text-foreground mb-4">Ma formation</h3>
                                <p className="text-sm">
                                    Certificat Management & Coaching - Coaching d'équipe en entreprise (Dauphine PSL)
                                </p>
                            </div>
                        </div>

                        <div className="mt-16 text-center">
                            <Link href="/contact?subject=Coaching d'équipe">
                                <Button size="lg">
                                    Prendre rendez-vous <ArrowRight className="ml-2 h-4 w-4" />
                                </Button>
                            </Link>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
}
