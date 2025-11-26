import { Header } from "@/components/layout/header";
import { Button } from "@/components/ui/button";
import { ArrowRight, CalendarClock } from "lucide-react";
import Link from "next/link";

export default function RendezVousPage() {
    return (
        <div className="min-h-screen flex flex-col">
            <Header />
            <main className="flex-1 flex items-center justify-center bg-muted/30">
                <section className="py-20 px-4">
                    <div className="container mx-auto max-w-2xl text-center bg-card p-8 md:p-12 rounded-2xl border shadow-sm">
                        <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6 text-primary">
                            <CalendarClock className="h-8 w-8" />
                        </div>

                        <h1 className="font-playfair text-3xl md:text-4xl font-bold mb-6">Prendre rendez-vous</h1>

                        <p className="text-lg text-muted-foreground mb-8">
                            Pour organiser un premier échange et discuter de vos besoins, je vous invite à me contacter directement via le formulaire dédié.
                        </p>

                        <div className="space-y-4">
                            <p className="text-muted-foreground">
                                Je reviendrai vers vous très rapidement pour fixer un créneau qui nous convienne.
                            </p>

                            <div className="pt-4">
                                <Link href="/contact?subject=Demande de rendez-vous">
                                    <Button size="lg" className="w-full md:w-auto">
                                        Accéder au formulaire de contact <ArrowRight className="ml-2 h-4 w-4" />
                                    </Button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
}
