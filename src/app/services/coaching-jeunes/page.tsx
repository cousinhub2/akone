import { Header } from "@/components/layout/header";
import { Button } from "@/components/ui/button";
import { CheckCircle2, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function CoachingJeunesPage() {
    return (
        <div className="min-h-screen flex flex-col">
            <Header />
            <main className="flex-1">
                <section className="py-20 bg-muted/30">
                    <div className="container mx-auto px-4 text-center">
                        <h1 className="font-playfair text-4xl md:text-5xl font-bold mb-6">Coaching Lycéens et Étudiants</h1>
                        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                            Aider les 15-25 ans à mieux se connaître pour construire un avenir qui leur ressemble.
                        </p>
                    </div>
                </section>

                <section className="py-20">
                    <div className="container mx-auto px-4 max-w-4xl">
                        <div className="prose prose-lg mx-auto text-muted-foreground">
                            <p className="mb-8">
                                L'orientation scolaire et les premiers choix professionnels sont souvent source d'anxiété. Mon accompagnement permet de transformer cette période de doute en une dynamique de projet positive et motivante.
                            </p>

                            <h3 className="text-2xl font-playfair font-bold text-foreground mb-4">Une méthode basée sur le "Profil Jeunes Talents"</h3>
                            <div className="space-y-6 mb-12">
                                <div className="flex gap-4">
                                    <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-bold shrink-0">1</div>
                                    <div>
                                        <h4 className="font-bold text-foreground">Mieux se connaître</h4>
                                        <p className="text-sm">Identifier ses moteurs, ses valeurs et ses talents naturels grâce à l'outil <strong><a href="https://www.tlp-navigator.com/" target="_blank" rel="noopener noreferrer" className="text-primary underline hover:text-primary/80">Profil Jeunes Talents</a></strong>.</p>
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-bold shrink-0">2</div>
                                    <div>
                                        <h4 className="font-bold text-foreground">Explorer les possibles</h4>
                                        <p className="text-sm">Ouvrir le champ des possibles, découvrir des métiers méconnus et confronter ses idées à la réalité du marché.</p>
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-bold shrink-0">3</div>
                                    <div>
                                        <h4 className="font-bold text-foreground">Passer à l'action</h4>
                                        <p className="text-sm">Choisir sa filière, préparer ses dossiers (Parcoursup, Écoles) et s'entraîner aux entretiens de motivation.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="grid md:grid-cols-3 gap-6 mb-12">
                                <div className="border rounded-xl p-6 bg-card hover:shadow-md transition-all">
                                    <h4 className="font-playfair font-bold text-xl text-primary mb-2">Pack FLASH</h4>
                                    <p className="text-3xl font-bold mb-4">420€</p>
                                    <ul className="text-sm space-y-2 mb-6 text-muted-foreground">
                                        <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-primary" /> 3h de coaching</li>
                                        <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-primary" /> Questionnaire Profil Talents</li>
                                        <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-primary" /> 100% distanciel</li>
                                        <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-primary" /> 2 rendez-vous</li>
                                    </ul>
                                    <p className="text-xs text-muted-foreground italic">Pour identifier ses talents et mieux se comprendre.</p>
                                </div>

                                <div className="border rounded-xl p-6 bg-card hover:shadow-md transition-all relative overflow-hidden">
                                    <div className="absolute top-0 right-0 bg-primary text-white text-xs px-3 py-1 rounded-bl-lg">Populaire</div>
                                    <h4 className="font-playfair font-bold text-xl text-primary mb-2">Pack TALENTS</h4>
                                    <p className="text-3xl font-bold mb-4">620€</p>
                                    <ul className="text-sm space-y-2 mb-6 text-muted-foreground">
                                        <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-primary" /> 5h de coaching</li>
                                        <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-primary" /> Questionnaire + Debrief</li>
                                        <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-primary" /> 4 rendez-vous</li>
                                        <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-primary" /> Sur 6 à 8 semaines</li>
                                    </ul>
                                    <p className="text-xs text-muted-foreground italic">Pour anticiper son orientation en s'appuyant sur ses forces.</p>
                                </div>

                                <div className="border rounded-xl p-6 bg-card hover:shadow-md transition-all">
                                    <h4 className="font-playfair font-bold text-xl text-primary mb-2">Pack ORIENTATION</h4>
                                    <p className="text-3xl font-bold mb-4">980€</p>
                                    <ul className="text-sm space-y-2 mb-6 text-muted-foreground">
                                        <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-primary" /> 10h de coaching</li>
                                        <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-primary" /> Projet d'orientation complet</li>
                                        <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-primary" /> 8 rendez-vous</li>
                                        <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-primary" /> Sur 4 à 6 mois</li>
                                    </ul>
                                    <p className="text-xs text-muted-foreground italic">Pour définir et valider un projet professionnel concret.</p>
                                </div>
                            </div>

                            <div className="bg-secondary/30 p-8 rounded-2xl">
                                <h3 className="text-xl font-bold text-foreground mb-4">Préparation au Grand Oral & Entretiens</h3>
                                <p>
                                    Au-delà de l'orientation, je propose des séances spécifiques pour travailler la prise de parole, la posture et la confiance en soi, atouts indispensables pour réussir ses examens et son entrée dans la vie active.
                                </p>
                            </div>
                        </div>

                        <div className="mt-16 text-center">
                            <Link href="/contact?subject=Coaching Jeunes">
                                <Button size="lg">
                                    Aider mon enfant à s'orienter <ArrowRight className="ml-2 h-4 w-4" />
                                </Button>
                            </Link>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
}
