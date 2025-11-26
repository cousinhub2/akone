"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import Image from "next/image";

export function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <header className="border-b bg-white sticky top-0 z-50">
            <div className="container mx-auto px-4 h-20 md:h-28 flex items-center justify-between">
                <Link href="/" className="flex items-center gap-2">
                    <div className="relative w-48 h-16 md:w-80 md:h-28 transition-all duration-300">
                        <Image
                            src="/akone-logo-v3.png"
                            alt="AK ONE Logo"
                            fill
                            className="object-contain"
                            priority
                        />
                    </div>
                </Link>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex gap-6 text-sm font-medium text-gray-600 items-center">
                    <div className="relative group">
                        <button className="hover:text-primary transition-colors flex items-center gap-1 py-2">
                            Mes offres
                        </button>
                        <div className="absolute top-full left-0 w-64 bg-white border rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 p-2 flex flex-col gap-1">
                            <Link href="/services/leader-rh" className="p-2 hover:bg-muted rounded text-sm text-gray-600">Leader RH à temps partiel</Link>
                            <Link href="/services/dirigeants-pme" className="p-2 hover:bg-muted rounded text-sm text-gray-600">Dirigeants PME</Link>
                            <Link href="/services/conseil-strategique" className="p-2 hover:bg-muted rounded text-sm text-gray-600">Conseil Stratégique</Link>
                            <Link href="/services/coaching" className="p-2 hover:bg-muted rounded text-sm text-gray-600">Coaching & Facilitation</Link>
                            <Link href="/services/coaching-jeunes" className="p-2 hover:bg-muted rounded text-sm text-gray-600">Coaching Jeunes</Link>
                            <Link href="/services/transition" className="p-2 hover:bg-muted rounded text-sm text-gray-600">Orientation & Transition</Link>
                        </div>
                    </div>
                    <Link href="/#about" className="hover:text-primary transition-colors">À propos</Link>
                    <Link href="/contact" className="hover:text-primary transition-colors">Contact</Link>
                    <Link href="/rendez-vous">
                        <Button>Prendre rendez-vous</Button>
                    </Link>
                </nav>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden p-2 text-black"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                    {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Navigation Overlay */}
            {isMenuOpen && (
                <div className="md:hidden absolute top-full left-0 w-full bg-white border-b shadow-lg p-4 flex flex-col gap-4 animate-in slide-in-from-top-5">
                    <div className="flex flex-col gap-2">
                        <p className="font-bold text-primary mb-2">Mes offres</p>
                        <Link href="/services/leader-rh" className="pl-4 py-2 hover:bg-muted rounded text-sm text-black" onClick={() => setIsMenuOpen(false)}>Leader RH</Link>
                        <Link href="/services/dirigeants-pme" className="pl-4 py-2 hover:bg-muted rounded text-sm text-black" onClick={() => setIsMenuOpen(false)}>Dirigeants PME</Link>
                        <Link href="/services/conseil-strategique" className="pl-4 py-2 hover:bg-muted rounded text-sm text-black" onClick={() => setIsMenuOpen(false)}>Conseil Stratégique</Link>
                        <Link href="/services/coaching" className="pl-4 py-2 hover:bg-muted rounded text-sm text-black" onClick={() => setIsMenuOpen(false)}>Coaching</Link>
                        <Link href="/services/coaching-jeunes" className="pl-4 py-2 hover:bg-muted rounded text-sm text-black" onClick={() => setIsMenuOpen(false)}>Coaching Jeunes</Link>
                        <Link href="/services/transition" className="pl-4 py-2 hover:bg-muted rounded text-sm text-black" onClick={() => setIsMenuOpen(false)}>Transition</Link>
                    </div>
                    <hr />
                    <Link href="/#about" className="py-2 font-medium hover:text-primary text-black" onClick={() => setIsMenuOpen(false)}>À propos</Link>
                    <Link href="/contact" className="py-2 font-medium hover:text-primary text-black" onClick={() => setIsMenuOpen(false)}>Contact</Link>
                    <Link href="/rendez-vous" onClick={() => setIsMenuOpen(false)}>
                        <Button className="w-full">Prendre rendez-vous</Button>
                    </Link>
                </div>
            )}
        </header>
    );
}
