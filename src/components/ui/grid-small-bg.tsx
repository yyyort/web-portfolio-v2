import { div } from "framer-motion/client";
import React from "react";

export function GridSmallBackground(
    { className }: Readonly<{ className?: string }>,
) {
    return (
        <div className={className}>
            <div className="h-[40rem] w-full dark:bg-black bg-white  dark:bg-grid-small-white/[0.4] bg-grid-small-black/[0.4] relative flex items-center justify-center">
                {/* Radial gradient for the container to give a faded look */}
                <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
            </div>
        </div>

    );
}