'use client'
import Card from "@/components/error-body";
import "./daniel.css";
import Silk from './Silk';
import { motion, AnimatePresence } from "motion/react";
import { useState, useEffect } from "react";

export default function Test() {

    const [index, setIndex] = useState(0);
    const palavras = [
        " Fiz", " Fui", " Consegui"
    ]

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((i) => (i + 1) % palavras.length);
        }, 2000);

        return () => clearInterval(interval);
    }, []);


    return (
        <main>
            <motion.div className="silk"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}>
                <Silk
                    speed={5}
                    scale={1}
                    width={100}
                    height={100}
                    color="#363638"
                    noiseIntensity={1.5}
                    rotation={0} />
            </motion.div>
            <motion.div className="intro"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}>
                <h1>Welcome to the Silk Demo</h1>
                <p>Eu
                    <AnimatePresence mode="wait">
                        <motion.span className="palavras" key={palavras[index]}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}>{palavras[index]}</motion.span>
                    </AnimatePresence>
                </p>
            </motion.div>

        </main>

    )
}
