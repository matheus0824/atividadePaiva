"use client"
import { p } from "motion/react-m";
import { useEffect, useState } from "react"
import duuum from "@/app/apiDummy/function";

export default function Usuarios() {

    const [listaUsers, setListaUsers] = useState([]);
    const [msgErro, setMsgErro] = useState("");


    return (
        <>
            <h1>Opagina de Usuários</h1>
            {msgErro != "" && <p>Erro:{msgErro}</p>}
            {listaUsers.length > 0 ?
                <div>
                    {listaUsers.map((p, idx) => {
                        return (
                            <div key={idx}>
                                <h3>{p.name.firstName}{" "}{p.name.lastName}</h3>
                                <img src={p.picture.large} alt="" />
                                <p>E-mail: <b>{p.email}</b> </p>
                            </div>
                        )
                    })}
                </div>
                :
                <div>
                    <p>N há usuários</p>
                </div>
            }
        </>
    )
}