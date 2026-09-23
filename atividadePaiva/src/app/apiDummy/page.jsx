'use client';

import { useDados } from "./function";
import '@/components/Dummycomp/dummycss.css';
export default function Dummy() {
  const { lista, msgErro } = useDados();

    return (
        <main className="mainDum">
            <h1>Oi</h1>
            {msgErro != "" && <p>Erro:{msgErro}</p>}
            {lista?.length > 0 ?
                <div className="conteiner-dum">
                    {lista.map((u, idx) => {
                        return (
                            <div key={idx} className="card">
                                <div className="top">
                                    <img src={u.image} />
                                </div>
                                <div className="body">
                                    <h2 className="introduction">{u.firstName}{""}{u.lastName}</h2>
                                    <p className="email">{u.email}</p>
                                    <div className="row">
                                        <p>{u.gender}</p>
                                        <p>{u.hair.color}</p>
                                    </div>
                                    <p className="age">{u.age}</p>
                                </div>
                            </div>
                        )
                    })}
                </div>
                :
                <div>
                    <p>Não há usuários</p>
                </div>}

        </main>
    )
}