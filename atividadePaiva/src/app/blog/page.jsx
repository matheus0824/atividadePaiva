"use client";
import CardBlog from '@/components/CardBlog';
import './page.css';
import { motion, AnimatePresence } from "motion/react";
import { animate } from 'motion';

export default function BlogPage() {

    const listaNoticias = [
        { id: 1, subTitulo: "Hardware & Games", titulo: "Lenovo atualiza linha IdeaPad Gaming com novas placas RTX e foco em IA", desc: "Os novos modelos trazem processadores de última geração e otimização por inteligência artificial para garantir máxima taxa de quadros nos jogos mais pesados.", imagem: "./img/ideapad.png", hora: "Há 10 minutos" },
        { id: 2, subTitulo: "Monitores", titulo: "Vale a pena comprar um Monitor IPS com HDR? Analisamos a fidelidade de imagem", desc: "Entenda por que a combinação de painel IPS e tecnologia HDR virou o item indispensável para designers, editores e gamers que buscam cores realistas.", imagem: "./img/monitor.jpg", hora: "Há 2 horas" },
        { id: 3, subTitulo: "Produtividade", titulo: "Logitech MX Master: O mouse definitivo para devs e profissionais de criação", desc: "Colocamos à prova o periférico premium mais famoso do mercado. Descubra se a ergonomia avançada e a rolagem magnética justificam o investimento.", imagem: "./img/mouse.png", hora: "Há 5 horas" },
        { id: 4, subTitulo: "Periféricos", titulo: "Como o tipo de tecido do seu mousepad muda completamente a sua mira", desc: "Speed, Control ou Hybrid? Explicamos as diferenças técnicas que afetam o deslize do periférico e como escolher o modelo ideal para o seu estilo de jogo.", imagem: "./img/mousepad.png", hora: "Ontem" },
        { id: 5, subTitulo: "Mercado Tech", titulo: "Preço dos componentes de PC deve cair no segundo semestre; veja o que comprar", desc: "Analistas apontam uma normalização no estoque global de semicondutores, o que promete baratear memórias RAM, SSDs e placas de vídeo de entrada.", imagem: "./img/componentes.jpg", hora: "Há 1 dia" },
        { id: 6, subTitulo: "Setup Gamer", titulo: "Guia definitivo de gerenciamento de cabos para deixar sua mesa limpa", desc: "Chega de bagunça! Reunimos acessórios baratos e truques simples de organização para esconder os fios e transformar o visual do seu ambiente de trabalho.", imagem: "./img/setup.jpg", hora: "Há 2 dias" },
        { id: 7, subTitulo: "E-sports", titulo: "Campeonatos de jogos de tiro registram recorde de audiência nas plataformas de streaming", desc: "O cenário competitivo global de FPS alcançou marcas históricas neste mês, impulsionado por finais eletrizantes e novas atualizações de servidores.", imagem: "./img/esports.jpg", hora: "Há 3 dias" },
        { id: 8, subTitulo: "Inovação", titulo: "Novos teclados mecânicos magnéticos prometem tempo de resposta quase zero", desc: "A tecnologia de switches magnéticos com acionamento rápido virou febre entre jogadores profissionais. Entenda o funcionamento por trás dessa inovação.", imagem: "./img/teclado.jpg", hora: "Há 4 dias" },
        { id: 9, subTitulo: "Segurança Digital", titulo: "Roteador antigo em casa? Saiba por que ele pode estar limitando sua internet", desc: "Protocolos antigos de Wi-Fi e falta de atualizações de segurança podem reduzir a velocidade do seu plano contratado e expor sua rede a invasões.", imagem: "./img/roteador.jpg", hora: "Há 5 dias" },
        { id: 10, subTitulo: "Sustentabilidade", titulo: "Grandes marcas de tecnologia anunciam periféricos feitos com plástico reciclado", desc: "Iniciativa visa reduzir a pegada de carbono na fabricação de mouses, teclados e headsets, mantendo a mesma durabilidade dos materiais tradicionais.", imagem: "./img/sustentavel.jpg", hora: "Há 1 semana" }
    ];


    return (
        <>
            <div className="conteiner">
                <div className="row">
                    <h1 className='titulo'>Ultimas Noticias</h1>
                    <p>Hoje</p>
                </div>
                <div className="row2">
                    <h2>Blog ByteHaus</h2>
                </div>
                <AnimatePresence>
                    <motion.div className="conteinerGrid"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{duration: 0.5}}>
                        {listaNoticias.map((p) => {
                            return <CardBlog
                                key={p.id}
                                subTitulo={p.subTitulo}
                                titulo={p.titulo}
                                desc={p.desc}
                                imagem={p.imagem}
                                hora={p.hora}
                            />
                        })}
                    </motion.div>
                </AnimatePresence>
            </div>
        </>
    );
}