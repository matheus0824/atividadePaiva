import CardPostBlog from "@/components/CardPostBlog";
import "./blog.css"

export default function noticias() {

    const listaNoticias = [
        {
            id: 1,
            titulo: "Morre a lenda da música country Dolly Parton aos 80 anos",
            descricao: "A cantora e compositora norte-americana Dolly Parton, um dos maiores ícones da história da música country e da cultura pop global, faleceu aos 80 anos. A artista deixou um legado gigante que inclui sucessos atemporais como 'Jolene' e 'I Will Always Love You', além de um amplo trabalho filantrópico.",
            imagem: "DollyParton.png"
        },
        {
            id: 2,
            titulo: "EUA suspendem agendamento de vistos de imigrantes em todo o mundo",
            descricao: "O governo dos Estados Unidos anunciou a suspensão temporária de entrevistas e novos agendamentos para vistos de imigrantes de todas as nacionalidades. A medida afeta milhares de solicitações globais e faz parte de novas diretrizes e restrições impostas pela administração norte-americana às regras de imigração.",
            imagem: "vistoAmericano.png"
        },
        {
            id: 3,
            titulo: "Inundações e deslizamentos deixam mortos e desaparecidos na Ásia",
            descricao: "Fortes tempestades provocaram inundações repentinas e deslizamentos de terra devastadores na região de fronteira entre o Nepal e o Tibete. O desastre natural destruiu vilas inteiras, causando a morte de ao menos nove pessoas e deixando centenas de turistas e moradores locais desaparecidos enquanto equipes de resgate atuam na área",
            imagem: "inundacaoAsia.png"
        },
        {
            id: 4,
            titulo:"Brasil e Estados Unidos agendam nova reunião sobre tarifas comerciais",
            descricao:"Após negociações diretas entre as lideranças dos dois países, equipes técnicas do Brasil e dos EUA marcaram um novo encontro para negociar a ampliação da lista de produtos brasileiros isentos de tarifas.",
            imagem:"brasilEua.png"
        },
        {
            id: 5,
            titulo:"TCU libera uso de “dinheiro esquecido” como garantia no Novo Desenrola",
            descricao:"O Tribunal de Contas da União reverteu uma decisão anterior e autorizou o uso de valores esquecidos em instituições financeiras como garantia para os bancos participantes do programa de renegociação de dívidas.  ",
            imagem:"tcu.png"
        },
        {
            id: 6,
            titulo:"Governo avalia mudanças nas regras de contratação de PJ  ",
            descricao:"A equipe econômica estuda medidas de combate ao avanço desordenado do modelo PJ em substituição ao regime CLT. A intenção do Ministério da Fazenda é reduzir impactos no déficit previdenciário e incentivar empregos formais.  ",
            imagem:"pj.png"
        },
        {
            id:7,
            titulo:"Irã e Omã negociam estabilização do tráfego no Estreito de Ormuz  ",
            descricao:"Em meio às tensões geopolíticas no Oriente Médio, autoridades do Irã e de Omã avançaram em tratativas diplomáticas para tentar desbloquear e garantir a segurança do trânsito de navios petroleiros na região.  ",
            imagem:"iraEoma.png"
        }, 
        {
            id:8,
            titulo:"Preço de canetas emagrecedoras cai com fim de patente e concorrência no mercado  ",
            descricao:"Com o término da proteção patentária de medicamentos à base de semaglutida no mercado nacional, mais de duas dezenas de novos pedidos de registro chegaram à Anvisa, derrubando o custo do tratamento.  ",
            imagem:"canetaEmagrecedoras.png"
        }, 
        {
            id: 9,
            titulo:"Serpro lança ferramenta de Inteligência Artificial Soberana no Brasil  ",
            descricao:"Durante evento de tecnologia bancária, a estatal de tecnologia lançou uma plataforma de inteligência artificial inteiramente desenvolvida e hospedada em infraestrutura nacional, visando maior segurança de dados públicos.  ",
            imagem:"serpro.png"
        },
        {
            id:10,
            titulo:"Frente fria traz chuva intensa e queda de temperatura ao Sul e Sudeste  ",
            descricao:"O avanço de uma massa de ar instável nesta quarta-feira provocou pancadas de chuva forte e alagamentos pontuais no Paraná, Santa Catarina e em áreas do estado de São Paulo, acompanhado por um declínio acentuado nos termômetros.  ",
            imagem:"frio.png"
        }
    ];

    return(
        <>
        <h1>Noticias da Semana</h1>
        <div className="card-container">
            
            {listaNoticias.map(noticia => {
                return <CardPostBlog
                key={noticia.id}
                titulo={noticia.titulo}
                descricao={noticia.descricao}
                imagem={noticia.imagem}
                />
            })}
        </div>
        </>
    )
}