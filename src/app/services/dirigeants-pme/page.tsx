import { Header } from "@/components/layout/header";
import { Button } from "@/components/ui/button";
import { CheckCircle2, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function DirigeantsPMEPage() {
    return (
        <div className="min-h-screen flex flex-col">
            <Header />
            <main className="flex-1">
                <section className="py-20 bg-muted/30">
                    <div className="container mx-auto px-4 text-center">
                        <h1 className="font-playfair text-4xl md:text-5xl font-bold mb-6">Dirigeants PME</h1>
                        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                            Un accompagnement dédié pour rompre l'isolement du dirigeant et sécuriser vos décisions RH.
                        </p>
                    </div>
                </section>

                <section className="py-20">
                    <div className="container mx-auto px-4 max-w-4xl">
                        <div className="prose prose-lg mx-auto text-muted-foreground">
                            <p className="mb-8">
                                Être dirigeant de PME, c'est souvent devoir tout gérer de front. Je vous apporte le recul et l'expertise nécessaires pour piloter votre capital humain avec sérénité.
                            </p>

                            <h3 className="text-2xl font-playfair font-bold text-foreground mb-8 text-center">Nos Packs d'Accompagnement</h3>
                            <div className="grid md:grid-cols-2 gap-6 mb-12">
                                {/* Pack 1 */}
                                <div className="bg-card p-6 rounded-xl border hover:shadow-lg transition-shadow">
                                    <h4 className="font-bold text-xl text-primary mb-2">Diagnostic RH & Feuille de route</h4>
                                    <p className="text-sm text-muted-foreground mb-4 italic">Identifier les priorités RH et structurer un plan d'action</p>
                                    <ul className="space-y-2 text-sm mb-4">
                                        <li className="flex items-start gap-2"><CheckCircle2 className="h-4 w-4 text-primary mt-1 shrink-0" /> Diagnostic flash ou approfondi</li>
                                        <li className="flex items-start gap-2"><CheckCircle2 className="h-4 w-4 text-primary mt-1 shrink-0" /> Entretiens dirigeant & managers</li>
                                        <li className="flex items-start gap-2"><CheckCircle2 className="h-4 w-4 text-primary mt-1 shrink-0" /> Plan d'action priorisé</li>
                                    </ul>
                                    <p className="text-xs font-medium text-muted-foreground mt-4 border-t pt-2">Format : Atelier de restitution + livrable</p>
                                </div>

                                {/* Pack 2 */}
                                <div className="bg-card p-6 rounded-xl border hover:shadow-lg transition-shadow">
                                    <h4 className="font-bold text-xl text-primary mb-2">Starter RH</h4>
                                    <p className="text-sm text-muted-foreground mb-4 italic">Pour PME sans service RH : structurer l'essentiel</p>
                                    <ul className="space-y-2 text-sm mb-4">
                                        <li className="flex items-start gap-2"><CheckCircle2 className="h-4 w-4 text-primary mt-1 shrink-0" /> État des lieux des pratiques existantes</li>
                                        <li className="flex items-start gap-2"><CheckCircle2 className="h-4 w-4 text-primary mt-1 shrink-0" /> Création de templates (contrats, fiches de poste)</li>
                                        <li className="flex items-start gap-2"><CheckCircle2 className="h-4 w-4 text-primary mt-1 shrink-0" /> Formation d'un référent RH interne</li>
                                    </ul>
                                    <p className="text-xs font-medium text-muted-foreground mt-4 border-t pt-2">Format : Mission de 2 mois + kit RH</p>
                                </div>

                                {/* Pack 3 */}
                                <div className="bg-card p-6 rounded-xl border hover:shadow-lg transition-shadow">
                                    <h4 className="font-bold text-xl text-primary mb-2">Sécurisation RH & Conformité</h4>
                                    <p className="text-sm text-muted-foreground mb-4 italic">Assurer la conformité et prévenir les risques</p>
                                    <ul className="space-y-2 text-sm mb-4">
                                        <li className="flex items-start gap-2"><CheckCircle2 className="h-4 w-4 text-primary mt-1 shrink-0" /> Mise en conformité des contrats</li>
                                        <li className="flex items-start gap-2"><CheckCircle2 className="h-4 w-4 text-primary mt-1 shrink-0" /> Vérification des obligations légales (CSE, affichage)</li>
                                        <li className="flex items-start gap-2"><CheckCircle2 className="h-4 w-4 text-primary mt-1 shrink-0" /> Prévention des risques psycho-sociaux</li>
                                    </ul>
                                    <p className="text-xs font-medium text-muted-foreground mt-4 border-t pt-2">Format : Mission ponctuelle ou suivi annuel</p>
                                </div>

                                {/* Pack 4 */}
                                <div className="bg-card p-6 rounded-xl border hover:shadow-lg transition-shadow">
                                    <h4 className="font-bold text-xl text-primary mb-2">Digitalisation RH</h4>
                                    <p className="text-sm text-muted-foreground mb-4 italic">Automatiser pour gagner du temps</p>
                                    <ul className="space-y-2 text-sm mb-4">
                                        <li className="flex items-start gap-2"><CheckCircle2 className="h-4 w-4 text-primary mt-1 shrink-0" /> Sélection et mise en place d'un SIRH</li>
                                        <li className="flex items-start gap-2"><CheckCircle2 className="h-4 w-4 text-primary mt-1 shrink-0" /> Formation aux nouveaux outils</li>
                                        <li className="flex items-start gap-2"><CheckCircle2 className="h-4 w-4 text-primary mt-1 shrink-0" /> Optimisation des workflows administratifs</li>
                                    </ul>
                                    <p className="text-xs font-medium text-muted-foreground mt-4 border-t pt-2">Format : Mission ponctuelle avec accompagnement</p>
                                </div>

                                {/* Pack 5 - Full width centered if possible, or just in grid */}
                                <div className="bg-card p-6 rounded-xl border hover:shadow-lg transition-shadow md:col-span-2 md:w-2/3 md:mx-auto">
                                    <h4 className="font-bold text-xl text-primary mb-2">Engagement & Fidélisation</h4>
                                    <p className="text-sm text-muted-foreground mb-4 italic">Développer la culture d'entreprise et l'expérience collaborateur</p>
                                    <ul className="space-y-2 text-sm mb-4">
                                        <li className="flex items-start gap-2"><CheckCircle2 className="h-4 w-4 text-primary mt-1 shrink-0" /> Enquêtes de satisfaction & baromètres</li>
                                        <li className="flex items-start gap-2"><CheckCircle2 className="h-4 w-4 text-primary mt-1 shrink-0" /> Onboarding & Parcours d'intégration</li>
                                        <li className="flex items-start gap-2"><CheckCircle2 className="h-4 w-4 text-primary mt-1 shrink-0" /> Politique d'avantages & QVT</li>
                                    </ul>
                                    <p className="text-xs font-medium text-muted-foreground mt-4 border-t pt-2">Format : Accompagnement sur 3 à 6 mois</p>
                                </div>
                            </div>

                            <p>
                                Ne restez plus seul face à vos enjeux humains. Construisons ensemble une organisation pérenne et alignée avec vos valeurs.
                            </p>
                        </div>

                        <div className="mt-16 text-center">
                            <Link href="/contact?subject=Conseil RH & Stratégie">
                                <Button size="lg">
                                    Échanger entre dirigeants <ArrowRight className="ml-2 h-4 w-4" />
                                </Button>
                            </Link>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
}
