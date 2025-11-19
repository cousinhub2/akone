import Link from "next/link";
import { Button } from "@/components/ui/button";

export function Header() {
    return (
        <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="container mx-auto px-4 h-16 flex items-center justify-between">
                <Link href="/" className="flex items-center gap-2 font-playfair font-bold text-xl tracking-tight hover:opacity-80 transition-opacity">
                    <span className="text-primary">AK</span> ONE
                </Link>
                <nav className="hidden md:flex gap-6 text-sm font-medium text-muted-foreground">
                    <div className="relative group">
                        <button className="hover:text-primary transition-colors flex items-center gap-1">
                            Mes offres
                        </button>
                        <div className="absolute top-full left-0 w-64 bg-white border rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 p-2 flex flex-col gap-1">
                            <Link href="/services/leader-rh" className="p-2 hover:bg-muted rounded text-sm">Leader RH à temps partiel</Link>
                            <Link href="/services/dirigeants-pme" className="p-2 hover:bg-muted rounded text-sm">Dirigeants PME</Link>
                            <Link href="/services/conseil-strategique" className="p-2 hover:bg-muted rounded text-sm">Conseil Stratégique</Link>
                            <Link href="/services/coaching" className="p-2 hover:bg-muted rounded text-sm">Coaching & Facilitation</Link>
                            <Link href="/services/coaching-jeunes" className="p-2 hover:bg-muted rounded text-sm">Coaching Jeunes</Link>
                            <Link href="/services/transition" className="p-2 hover:bg-muted rounded text-sm">Orientation & Transition</Link>
                        </div>
                    </div>
                    <Link href="/#about" className="hover:text-primary transition-colors">À propos</Link>
                    <Link href="/#contact" className="hover:text-primary transition-colors">Contact</Link>
                </nav>
                <Link href="#contact">
                    <Button>Prendre rendez-vous</Button>
                </Link>
            </div>
        </header>
    );
}
