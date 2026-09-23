'use client';
import { useState, useEffect } from "react";
import "./cont.css";

export default function Contador() {
    const [contador, setContador] = useState(0);

    function addUmCont() {
        if (contador >= 100) {
            alert("NÂO");
            return
        }
        setContador(contador + 1);
        // console.log(contador);

    }

    function remUmCont() {
        if (contador <= -5) {
            alert("NÂO");
            return
        }
        setContador(contador - 1)
    }

    useEffect(() => {
        console.log(contador), [contador];
    })

    return (
        <>
            <div className="fundo">
                <div className="mascara">

                </div>

                <div className="conteudo">
                    <h1>Fazendo um contador</h1>
                    <p> {contador} </p>
                    <div style={{ display: "flex", gap: "10px" }}>
                        <button type="button" onClick={addUmCont} >+</button>
                        <button type="button" onClick={remUmCont} >-</button>
                    </div>
                </div>
            </div>
        </>
    );
}