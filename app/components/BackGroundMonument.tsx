"use client";

import Image from "next/image";
import { useEffect } from "react";
import { motion, useMotionValue, useSpring } from "motion/react";

export default function BackgroundMonument() {
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const x = useSpring(mouseX, { stiffness: 40, damping: 18, mass: 0.8 });
    const y = useSpring(mouseY, { stiffness: 40, damping: 18, mass: 0.8 });

    useEffect(() => {
        function handleMove(event: MouseEvent) {
            const { innerWidth, innerHeight } = window;

            const offsetX = (event.clientX / innerWidth - 0.5) * 24;
            const offsetY = (event.clientY / innerHeight - 0.5) * 18;

            mouseX.set(offsetX);
            mouseY.set(offsetY);
        }

        window.addEventListener("mousemove", handleMove);
        return () => window.removeEventListener("mousemove", handleMove);
    }, [mouseX, mouseY]);

    return (
        <motion.div
            style={{ x, y }}
            className="pointer-events-none absolute left-[8%] top-[18%] z-[1] h-[520px] w-[520px] opacity-[0.16] mix-blend-screen"
        >
            <div className="relative h-full w-full">
                <div className="absolute inset-0 rounded-full bg-[#2F6D86]/10 blur-3xl" />

                <div
                    className="absolute inset-0"
                    style={{
                        maskImage:
                            "radial-gradient(circle at center, black 40%, transparent 82%)",
                        WebkitMaskImage:
                            "radial-gradient(circle at center, black 40%, transparent 82%)",
                    }}
                >
                    <Image
                        src="/clock.png"
                        alt=""
                        fill
                        priority
                        className="object-contain"
                    />
                </div>

                <div
                    className="absolute inset-0"
                    style={{
                        background:
                            "linear-gradient(180deg, rgba(47,109,134,0.12), rgba(255,255,255,0.03))",
                        mixBlendMode: "screen",
                        maskImage:
                            "radial-gradient(circle at center, black 42%, transparent 84%)",
                        WebkitMaskImage:
                            "radial-gradient(circle at center, black 42%, transparent 84%)",
                    }}
                />
            </div>
        </motion.div>
    );
}