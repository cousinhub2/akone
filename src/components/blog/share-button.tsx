"use client";

import { Button } from "@/components/ui/button";
import { Share2 } from "lucide-react";

interface ShareButtonProps {
    title: string;
    url: string;
}

export function ShareButton({ title, url }: ShareButtonProps) {
    const handleShare = () => {
        if (typeof navigator !== 'undefined' && navigator.share) {
            navigator.share({
                title,
                url
            }).catch(() => { });
        }
    };

    return (
        <Button variant="outline" size="icon" onClick={handleShare}>
            <Share2 className="h-4 w-4" />
        </Button>
    );
}
