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

                            <h3 className="text-2xl font-playfair font-bold text-foreground mb-4">Mon rôle à vos côtés</h3>
                            <div className="grid md:grid-cols-2 gap-6 mb-12">
                                <div className="bg-card p-6 rounded-xl border">
                                    <h4 className="font-bold text-foreground mb-2">Sparring Partner</h4>
                                    <p className="text-sm">Un espace de confiance pour challenger vos idées, préparer vos décisions stratégiques et prendre du recul.</p>
                                </div>
                                <div className="bg-card p-6 rounded-xl border">
                                    <h4 className="font-bold text-foreground mb-2">Sécurisation RH</h4>
                                    <p className="text-sm">Audit de vos risques sociaux, mise en conformité et gestion des situations de crise.</p>
                                </div>
                                <div className="bg-card p-6 rounded-xl border">
                                    <h4 className="font-bold text-foreground mb-2">Recrutement Stratégique</h4>
                                    <p className="text-sm">Définition des besoins clés, structuration de l'équipe de direction et fidélisation des talents.</p>
                                </div>
                                <div className="bg-card p-6 rounded-xl border">
                                    <h4 className="font-bold text-foreground mb-2">Transmission</h4>
                                    <p className="text-sm">Préparer la relève, accompagner la cession ou la transmission familiale sous l'angle humain.</p>
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
