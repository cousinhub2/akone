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
                        <h1 className="font-playfair text-4xl md:text-5xl font-bold mb-6">Coaching & Facilitation</h1>
                        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                            Développer le potentiel des individus et la puissance du collectif.
                        </p>
                    </div>
                </section>

                <section className="py-20">
                    <div className="container mx-auto px-4 max-w-4xl">
                        <div className="prose prose-lg mx-auto text-muted-foreground">
                            <p className="mb-8">
                                La performance d'une entreprise repose sur la qualité des interactions humaines. J'interviens pour débloquer les situations complexes, faire grandir les leaders et souder les équipes.
                            </p>

                            <div className="grid md:grid-cols-2 gap-8 my-12">
                                <div className="bg-card p-6 rounded-xl border">
                                    <h3 className="text-xl font-playfair font-bold text-foreground mb-4">Coaching Individuel</h3>
                                    <ul className="space-y-3 text-sm">
                                        <li className="flex items-start gap-2"><CheckCircle2 className="h-4 w-4 text-primary mt-1" /> Prise de poste dirigeant</li>
                                        <li className="flex items-start gap-2"><CheckCircle2 className="h-4 w-4 text-primary mt-1" /> Gestion du stress et des émotions</li>
                                        <li className="flex items-start gap-2"><CheckCircle2 className="h-4 w-4 text-primary mt-1" /> Développement du leadership</li>
                                    </ul>
                                </div>
                                <div className="bg-card p-6 rounded-xl border">
                                    <h3 className="text-xl font-playfair font-bold text-foreground mb-4">Coaching d'Équipe</h3>
                                    <ul className="space-y-3 text-sm">
                                        <li className="flex items-start gap-2"><CheckCircle2 className="h-4 w-4 text-primary mt-1" /> Séminaires de cohésion</li>
                                        <li className="flex items-start gap-2"><CheckCircle2 className="h-4 w-4 text-primary mt-1" /> Résolution de conflits</li>
                                        <li className="flex items-start gap-2"><CheckCircle2 className="h-4 w-4 text-primary mt-1" /> Vision et valeurs communes</li>
                                    </ul>
                                </div>
                            </div>

                            <p>
                                Mon approche est systémique et orientée solutions. Je crée un espace sécurisé permettant l'authenticité et l'émergence de solutions durables.
                            </p>
                        </div>

                        <div className="mt-16 text-center">
                            <Link href="/contact?subject=Coaching & Leadership">
                                <Button size="lg">
                                    Parlons de vos équipes <ArrowRight className="ml-2 h-4 w-4" />
                                </Button>
                            </Link>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
}
