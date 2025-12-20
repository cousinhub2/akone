
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Briefcase, Users, Compass, ArrowRight, CheckCircle2 } from "lucide-react";

import { Header } from "@/components/layout/header";

export default function Home() {
    return (
        <div className="min-h-screen flex flex-col">
            {/* Navigation */}
            <Header />

            <main className="flex-1">
                {/* Hero Section */}
                <section className="relative py-20 md:py-32 overflow-hidden bg-muted/30">
                    <div className="container mx-auto px-4 relative z-10">
                        <div className="max-w-3xl mx-auto text-center space-y-8">
                            <h1 className="font-playfair text-4xl md:text-6xl font-bold leading-tight text-foreground">
                                Transformez vos défis RH en leviers de <span className="text-primary">croissance</span>.
                            </h1>
                            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
                                Conseil stratégique, DRH à temps partiel et Coaching de dirigeants.
                                Nous accompagnons votre transformation humaine.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                                <Link href="/contact">
                                    <Button size="lg" className="text-base">
                                        Discuter de vos enjeux <ArrowRight className="ml-2 h-4 w-4" />
                                    </Button>
                                </Link>
                                <Link href="#services">
                                    <Button size="lg" variant="outline" className="text-base">
                                        Découvrir nos offres
                                    </Button>
                                </Link>
                            </div>
                        </div>
                    </div>

                    {/* Abstract Background Elements */}
                    <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 opacity-10">
                        <div className="absolute -top-[20%] -right-[10%] w-[600px] h-[600px] rounded-full bg-primary blur-3xl" />
                        <div className="absolute top-[40%] -left-[10%] w-[400px] h-[400px] rounded-full bg-secondary blur-3xl" />
                    </div>
                </section>

                {/* Services Section */}
                <section id="services" className="py-20 bg-background">
                    <div className="container mx-auto px-4">
                        <div className="text-center mb-16 space-y-4">
                            <h2 className="font-playfair text-3xl md:text-4xl font-bold">Nos Expertises</h2>
                            <p className="text-muted-foreground max-w-2xl mx-auto">
                                Une approche globale pour aligner votre stratégie business avec votre capital humain.
                            </p>
                        </div>

                        <div className="grid md:grid-cols-3 gap-8">
                            {/* Service 1 */}
                            <div className="group p-8 rounded-2xl border bg-card hover:shadow-lg transition-all hover:-translate-y-1 duration-300">
                                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
                                    <Briefcase className="h-6 w-6" />
                                </div>
                                <h3 className="font-playfair text-xl font-bold mb-3">Conseil & Stratégie RH</h3>
                                <p className="text-muted-foreground mb-6">
                                    Pour les entreprises en croissance ou en transformation. Audit, structuration des processus, et pilotage du changement.
                                </p>
                                <ul className="space-y-2 text-sm text-muted-foreground">
                                    <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-primary" /> DRH à temps partiel</li>
                                    <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-primary" /> Audit social</li>
                                    <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-primary" /> GPEC & Formation</li>
                                </ul>
                            </div>

                            {/* Service 2 */}
                            <div className="group p-8 rounded-2xl border bg-card hover:shadow-lg transition-all hover:-translate-y-1 duration-300">
                                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
                                    <Users className="h-6 w-6" />
                                </div>
                                <h3 className="font-playfair text-xl font-bold mb-3">Coaching & Leadership</h3>
                                <p className="text-muted-foreground mb-6">
                                    Accompagnement individuel et collectif pour développer le potentiel des dirigeants et la cohésion des équipes.
                                </p>
                                <ul className="space-y-2 text-sm text-muted-foreground">
                                    <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-primary" /> Coaching de dirigeant</li>
                                    <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-primary" /> Cohésion d'équipe</li>
                                    <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-primary" /> Gestion de conflits</li>
                                </ul>
                            </div>

                            {/* Service 3 */}
                            <div className="group p-8 rounded-2xl border bg-card hover:shadow-lg transition-all hover:-translate-y-1 duration-300">
                                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
                                    <Compass className="h-6 w-6" />
                                </div>
                                <h3 className="font-playfair text-xl font-bold mb-3">Transition & Orientation</h3>
                                <p className="text-muted-foreground mb-6">
                                    Aider les individus à trouver leur voie et à rebondir professionnellement avec sens et alignement.
                                </p>
                                <ul className="space-y-2 text-sm text-muted-foreground">
                                    <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-primary" /> Bilan de compétences</li>
                                    <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-primary" /> Outplacement</li>
                                    <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-primary" /> Orientation jeunes</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>

                {/* About / Trust Section */}
                <section id="about" className="py-20 bg-muted/30">
                    <div className="container mx-auto px-4">
                        <div className="flex flex-col md:flex-row items-center gap-12">
                            <div className="flex-1 space-y-6">
                                <h2 className="font-playfair text-3xl md:text-4xl font-bold">Plus de 20 ans d'expertise humaine</h2>
                                <p className="text-lg text-muted-foreground">
                                    "Je suis animée par une volonté solidement chevillée au corps d’être utile au monde. Convaincue que nous avons tous un talent, j’ai à cœur de contribuer à ce que chacun se réalise."
                                </p>
                                <p className="text-muted-foreground">
                                    AK ONE est né de la conviction que la performance durable passe par l'épanouissement des hommes et des femmes qui composent l'entreprise.
                                </p>
                                <Link href="https://www.linkedin.com/in/heleneneukirchrhcoach" target="_blank" rel="noopener noreferrer">
                                    <Button variant="outline">En savoir plus sur la fondatrice</Button>
                                </Link>
                            </div>
                            <div className="flex-1 relative h-[400px] w-full rounded-2xl overflow-hidden shadow-lg">
                                <Image
                                    src="/helene-neukirch.jpg"
                                    alt="Hélène Neukirch - Fondatrice AK ONE"
                                    fill
                                    className="object-cover"
                                    priority
                                />
                            </div>
                        </div>

                        {/* LinkedIn Posts Section */}
                        <div className="mt-20 pt-20 border-t border-muted">
                            <div className="max-w-4xl mx-auto text-center space-y-8">
                                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium">
                                    <Users className="h-4 w-4" />
                                    Actualités & Partages
                                </div>
                                <h2 className="font-playfair text-3xl md:text-4xl font-bold">Mes réflexions & posts LinkedIn</h2>
                                <p className="text-lg text-muted-foreground">
                                    Je partage régulièrement mes retours d'expérience, conseils et réflexions sur le management, les ressources humaines et le coaching. Rejoignez la conversation.
                                </p>
                                <Link href="https://www.linkedin.com/in/heleneneukirchrhcoach/recent-activity/all/" target="_blank" rel="noopener noreferrer">
                                    <Button size="lg" className="bg-[#0077b5] hover:bg-[#006097] text-white">
                                        Voir mes derniers posts LinkedIn <ArrowRight className="ml-2 h-4 w-4" />
                                    </Button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            <footer className="bg-neutral-900 text-white py-12">
                <div className="container mx-auto px-4">
                    <div className="grid md:grid-cols-4 gap-8 mb-8">
                        <div className="col-span-1 md:col-span-2">
                            <div className="relative w-64 h-20 md:w-80 md:h-28 mb-4">
                                <Image
                                    src="/akone-logo-new.png"
                                    alt="AK ONE Logo"
                                    fill
                                    className="object-contain invert mix-blend-screen"
                                />
                            </div>
                            <p className="text-gray-400 max-w-sm">
                                Cabinet de conseil en ressources humaines et d'accompagnement des entreprises et des dirigeants.
                            </p>
                        </div>
                        <div>
                            <h4 className="font-bold mb-4">Services</h4>
                            <ul className="space-y-2 text-gray-400 text-sm">
                                <li><Link href="#" className="hover:text-primary">Conseil RH</Link></li>
                                <li><Link href="#" className="hover:text-primary">Coaching</Link></li>
                                <li><Link href="#" className="hover:text-primary">Transition</Link></li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="font-bold mb-4">Contact</h4>
                            <ul className="space-y-2 text-gray-400 text-sm">
                                <li>helene@akone.org</li>
                                <li>Paris, France</li>
                                <li><a href="https://www.linkedin.com/in/heleneneukirchrhcoach/recent-activity/all/" target="_blank" rel="noopener noreferrer" className="hover:text-primary">Mes posts LinkedIn</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="border-t border-gray-800 pt-8 text-center text-sm text-gray-500">
                        © {new Date().getFullYear()} AK ONE. Tous droits réservés.
                    </div>
                </div>
            </footer>
        </div>
    );
}
