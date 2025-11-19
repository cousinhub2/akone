import { Header } from "@/components/layout/header";
import { Button } from "@/components/ui/button";
import { CheckCircle2, ArrowRight } from "lucide-react";

export default function ConseilStrategiquePage() {
    return (
        <div className="min-h-screen flex flex-col">
            <Header />
            <main className="flex-1">
                <section className="py-20 bg-muted/30">
                    <div className="container mx-auto px-4 text-center">
                        <h1 className="font-playfair text-4xl md:text-5xl font-bold mb-6">Conseil Stratégique & Opérationnel</h1>
                        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                            Auditer, structurer et transformer votre organisation pour aligner le capital humain avec vos objectifs business.
                        </p>
                    </div>
                </section>

                <section className="py-20">
                    <div className="container mx-auto px-4 max-w-4xl">
                        <div className="prose prose-lg mx-auto text-muted-foreground">
                            <p className="mb-8">
                                Chaque entreprise traverse des phases de mutation (croissance, fusion, réorganisation). Je vous accompagne pour faire de ces transitions une réussite humaine et opérationnelle.
                            </p>

                            <h3 className="text-2xl font-playfair font-bold text-foreground mb-4">Une approche sur-mesure</h3>
                            <ul className="space-y-4 mb-12">
                                <li className="flex items-start gap-3">
                                    <CheckCircle2 className="h-6 w-6 text-primary shrink-0 mt-1" />
                                    <span><strong>Audit RH 360° :</strong> Analyse de vos pratiques, conformité et climat social.</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <CheckCircle2 className="h-6 w-6 text-primary shrink-0 mt-1" />
                                    <span><strong>Structuration des processus :</strong> Mise en place d'outils simples et efficaces (Onboarding, SIRH, Entretiens).</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <CheckCircle2 className="h-6 w-6 text-primary shrink-0 mt-1" />
                                    <span><strong>Conduite du changement :</strong> Accompagner les équipes pour lever les freins et susciter l'adhésion.</span>
                                </li>
                            </ul>

                            <div className="bg-secondary/30 p-8 rounded-2xl my-12">
                                <h3 className="text-xl font-bold text-foreground mb-4">Exemple de mission</h3>
                                <p className="italic">"Accompagnement d'une PME de 50 salariés dans sa structuration RH : définition des fiches de poste, mise en place des entretiens annuels et formation des managers de proximité."</p>
                            </div>
                        </div>

                        <div className="mt-16 text-center">
                            <Button size="lg">
                                Demander un audit <ArrowRight className="ml-2 h-4 w-4" />
                            </Button>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
}
