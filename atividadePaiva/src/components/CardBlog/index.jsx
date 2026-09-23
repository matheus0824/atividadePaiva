'use client'
import './cardBlog.css';
import { motion } from "motion/react"

export default function CardBlog({ titulo, imagem, hora, desc, subTitulo }) {
    return (
        <motion.div className="card-wrap"
        whileHover={{scale: 1.01,y:-5, boxShadow: "0 5px 15px rgba(0,0,0,0.3)"}}
        transition={{duration: 0.1}}
        >
            <div className="left">
                <img src={imagem} />
            </div>
            <div className="right">
                <h3>{subTitulo}</h3>
                <h1>{titulo}</h1>
                <p>{desc}</p>
                <p className="menor"><i>Hora: {hora}</i></p>
            </div>
        </motion.div>
    )
}