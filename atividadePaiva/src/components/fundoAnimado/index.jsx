"use client";
import { motion } from "motion/react";
import "./fundo.css";

export default function FundoAnimado() {
    return (
        <div className="fundo">
            <motion.div
                className="mascara"
                animate={{
                    x: [0, 180, -180, 0],
                    y: [0, -130, 150, 0],
                    scale: [1, 1.25, 1.08, 1]
                }}
                transition={{
                    duration: 7,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
            />
        </div>
    );
}