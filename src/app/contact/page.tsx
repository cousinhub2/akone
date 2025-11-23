"use client";

import { useState } from "react";
import { Header } from "@/components/layout/header";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Send } from "lucide-react";

export default function ContactPage() {
    const [formData, setFormData] = useState({
        firstname: "",
        lastname: "",
        email: "",
        subject: "",
        message: ""
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        const subject = formData.subject ? `[Contact Site Web] ${formData.subject}` : "[Contact Site Web] Nouvelle demande";
        const body = `
Nom: ${formData.lastname}
Prénom: ${formData.firstname}
Email: ${formData.email}

Message:
${formData.message}
        `.trim();

        const mailtoLink = `mailto:helene@akone.org?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

        window.location.href = mailtoLink;
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { id, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [id]: value
        }));
    };

    return (
        <div className="min-h-screen flex flex-col">
            <Header />
            <main className="flex-1">
                <section className="py-20 bg-muted/30">
                    <div className="container mx-auto px-4 text-center">
                        <h1 className="font-playfair text-4xl md:text-5xl font-bold mb-6">Contactez-nous</h1>
                        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                            Prêt à transformer vos défis RH en opportunités ? Échangeons sur vos besoins.
                        </p>
                    </div>
                </section>

                <section className="py-20">
                    <div className="container mx-auto px-4">
                        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
                            {/* Contact Info */}
                            <div className="space-y-8">
                                <h2 className="font-playfair text-3xl font-bold mb-6">Parlons de votre projet</h2>
                                <p className="text-muted-foreground mb-8">
                                    Que ce soit pour un accompagnement stratégique, un coaching ou une mission de transition, je suis à votre écoute pour définir la meilleure approche.
                                </p>

                                <div className="space-y-6">
                                    <div className="flex items-start gap-4">
                                        <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary shrink-0">
                                            <Mail className="h-6 w-6" />
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-foreground">Email</h3>
                                            <p className="text-muted-foreground">helene@akone.org</p>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-4">
                                        <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary shrink-0">
                                            <MapPin className="h-6 w-6" />
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-foreground">Localisation</h3>
                                            <p className="text-muted-foreground">Paris & Île-de-France</p>
                                            <p className="text-sm text-muted-foreground">Intervention possible dans toute la France</p>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-4">
                                        <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary shrink-0">
                                            <Phone className="h-6 w-6" />
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-foreground">Réseaux</h3>
                                            <a href="https://www.linkedin.com/in/heleneneukirchrhcoach" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                                                LinkedIn
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Contact Form */}
                            <div className="bg-card p-8 rounded-2xl border shadow-sm">
                                <form className="space-y-6" onSubmit={handleSubmit}>
                                    <div className="grid md:grid-cols-2 gap-4">
                                        <div className="space-y-2">
                                            <label htmlFor="firstname" className="text-sm font-medium">Prénom</label>
                                            <input
                                                type="text"
                                                id="firstname"
                                                value={formData.firstname}
                                                onChange={handleChange}
                                                className="w-full p-3 rounded-md border bg-background focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                                                placeholder="Votre prénom"
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <label htmlFor="lastname" className="text-sm font-medium">Nom</label>
                                            <input
                                                type="text"
                                                id="lastname"
                                                value={formData.lastname}
                                                onChange={handleChange}
                                                className="w-full p-3 rounded-md border bg-background focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                                                placeholder="Votre nom"
                                            />
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <label htmlFor="email" className="text-sm font-medium">Email</label>
                                        <input
                                            type="email"
                                            id="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            className="w-full p-3 rounded-md border bg-background focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                                            placeholder="votre@email.com"
                                        />
                                    </div>

                                    <div className="space-y-2">
                                        <label htmlFor="subject" className="text-sm font-medium">Sujet</label>
                                        <select
                                            id="subject"
                                            value={formData.subject}
                                            onChange={handleChange}
                                            className="w-full p-3 rounded-md border bg-background focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                                        >
                                            <option value="">Sélectionnez un sujet</option>
                                            <option value="Conseil RH & Stratégie">Conseil RH & Stratégie</option>
                                            <option value="Coaching & Leadership">Coaching & Leadership</option>
                                            <option value="Transition & Orientation">Transition & Orientation</option>
                                            <option value="Coaching Jeunes">Coaching Jeunes</option>
                                            <option value="Autre demande">Autre demande</option>
                                        </select>
                                    </div>

                                    <div className="space-y-2">
                                        <label htmlFor="message" className="text-sm font-medium">Message</label>
                                        <textarea
                                            id="message"
                                            rows={5}
                                            value={formData.message}
                                            onChange={handleChange}
                                            className="w-full p-3 rounded-md border bg-background focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                                            placeholder="Comment puis-je vous aider ?"
                                        ></textarea>
                                    </div>

                                    <Button size="lg" className="w-full" type="submit">
                                        Envoyer le message <Send className="ml-2 h-4 w-4" />
                                    </Button>
                                </form>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
}
