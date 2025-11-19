import { Header } from "@/components/layout/header";
import { Button } from "@/components/ui/button";
import { CheckCircle2, ArrowRight } from "lucide-react";

export default function LeaderRHPage() {
    return (
        <div className="min-h-screen flex flex-col">
            <Header />
            <main className="flex-1">
                <section className="py-20 bg-muted/30">
                    <div className="container mx-auto px-4 text-center">
                        <h1 className="font-playfair text-4xl md:text-5xl font-bold mb-6">Leader RH à temps partiel</h1>
                        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                            Une expertise DRH flexible pour structurer votre croissance sans alourdir vos coûts fixes.
                        </p>
                    </div>
                </section>

                <section className="py-20">
                    <div className="container mx-auto px-4 max-w-4xl">
                        <div className="prose prose-lg mx-auto text-muted-foreground">
                            <p className="mb-8">
                                Pour les PME et ETI qui n'ont pas besoin d'un DRH à temps plein mais qui nécessitent une vision stratégique et opérationnelle solide. Je deviens votre partenaire RH de confiance, intégré à vos équipes.
                            </p>

                            <h3 className="text-2xl font-playfair font-bold text-foreground mb-4">Pourquoi choisir un DRH à temps partiel ?</h3>
                            <ul className="space-y-4 mb-12">
                                <li className="flex items-start gap-3">
                                    <CheckCircle2 className="h-6 w-6 text-primary shrink-0 mt-1" />
                                    <span><strong>Flexibilité :</strong> Une intervention adaptée à votre rythme et à vos besoins (1 à 3 jours par semaine).</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <CheckCircle2 className="h-6 w-6 text-primary shrink-0 mt-1" />
                                    <span><strong>Expertise immédiate :</strong> Bénéficiez de 20 ans d'expérience sans délai de recrutement.</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <CheckCircle2 className="h-6 w-6 text-primary shrink-0 mt-1" />
                                    <span><strong>Maîtrise des coûts :</strong> Un budget optimisé par rapport à un recrutement cadre dirigeant.</span>
                                </li>
                            </ul>

                            <h3 className="text-2xl font-playfair font-bold text-foreground mb-4">Mes domaines d'intervention</h3>
                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="p-6 border rounded-xl bg-card">
                                    <h4 className="font-bold text-foreground mb-2">Stratégie & Organisation</h4>
                                    <p className="text-sm">Définition de la politique RH, organigrammes, accompagnement du CODIR.</p>
                                </div>
                                <div className="p-6 border rounded-xl bg-card">
                                    <h4 className="font-bold text-foreground mb-2">Relations Sociales</h4>
                                    <p className="text-sm">Gestion des IRP, négociations obligatoires, climat social.</p>
                                </div>
                                <div className="p-6 border rounded-xl bg-card">
                                    <h4 className="font-bold text-foreground mb-2">Talent Management</h4>
                                    <p className="text-sm">Recrutement, fidélisation, entretiens annuels, GPEC.</p>
                                </div>
                                <div className="p-6 border rounded-xl bg-card">
                                    <h4 className="font-bold text-foreground mb-2">Juridique & Conformité</h4>
                                    <p className="text-sm">Veille sociale, contrats, procédures disciplinaires.</p>
                                </div>
                            </div>
                        </div>

                        <div className="mt-16 text-center">
                            <Button size="lg">
                                Discuter de vos besoins RH <ArrowRight className="ml-2 h-4 w-4" />
                            </Button>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
}
