import { Header } from "@/components/layout/header";
import { Button } from "@/components/ui/button";
import { CheckCircle2, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function TransitionPage() {
    return (
        <div className="min-h-screen flex flex-col">
            <Header />
            <main className="flex-1">
                <section className="py-20 bg-muted/30">
                    <div className="container mx-auto px-4 text-center">
                        <h1 className="font-playfair text-4xl md:text-5xl font-bold mb-6">Orientation & Transition</h1>
                        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                            Trouver sa voie, rebondir avec sens et construire un projet professionnel aligné.
                        </p>
                    </div>
                </section>

                <section className="py-20">
                    <div className="container mx-auto px-4 max-w-4xl">
                        <div className="prose prose-lg mx-auto text-muted-foreground">
                            <p className="mb-8">
                                Que vous soyez un jeune en quête d'orientation ou un professionnel en transition, je vous aide à identifier vos talents uniques et à les transformer en projet concret.
                            </p>

                            <h3 className="text-2xl font-playfair font-bold text-foreground mb-4">Pour les Jeunes (15-25 ans)</h3>
                            <p className="mb-6">
                                Sortir du flou de l'orientation scolaire. Mieux se connaître pour mieux choisir.
                            </p>
                            <ul className="space-y-2 mb-8 pl-4 border-l-4 border-primary/20">
                                <li>• Identification des motivations profondes</li>
                                <li>• Exploration des filières et métiers</li>
                                <li>• Préparation aux entretiens (Grand Oral, Écoles)</li>
                            </ul>

                            <h3 className="text-2xl font-playfair font-bold text-foreground mb-4">Pour les Professionnels</h3>
                            <p className="mb-6">
                                Bilan de compétences, Outplacement ou désir de reconversion.
                            </p>
                            <ul className="space-y-2 mb-8 pl-4 border-l-4 border-secondary">
                                <li>• Bilan de carrière approfondi</li>
                                <li>• Travail sur la posture et la confiance</li>
                                <li>• Stratégie de recherche d'emploi et réseau</li>
                            </ul>

                            <div className="bg-primary/5 p-6 rounded-xl mt-12 text-center">
                                <p className="font-medium text-foreground">"Le plus grand voyageur n'est pas celui qui a fait dix fois le tour du monde, mais celui qui a fait une seule fois le tour de lui-même." - Gandhi</p>
                            </div>
                        </div>

                        <div className="mt-16 text-center">
                            <Link href="/contact?subject=Transition & Orientation">
                                <Button size="lg">
                                    Démarrer votre transition <ArrowRight className="ml-2 h-4 w-4" />
                                </Button>
                            </Link>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
}
