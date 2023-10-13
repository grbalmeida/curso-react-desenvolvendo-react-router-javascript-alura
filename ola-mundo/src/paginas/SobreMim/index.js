import PostModelo from "componentes/PostModelo";
import fotoCapa from "assets/sobre_mim_capa.png";
import fotoSobreMim from "assets/minha_foto.png";
import styles from "./SobreMim.module.css";

export default function SobreMim() {
    return (
        <PostModelo
            fotoCapa={fotoCapa}
            titulo="Sobre mim"
        >
            <h3 className={styles.subtitulo}>
                Olá, eu sou o Gilvan Ribeiro!
            </h3>

            <img
                src={fotoSobreMim}
                alt="Foto do Gilvan Ribeiro com cara de bravo"
                className={styles.fotoSobreMim}
            />

            <h4 className={styles.paragrafo}>Formação acadêmica</h4>
            <ul>
                <li className={styles.paragrafo}>Técnico em Informática - ETEC Centro Paula Souza</li>
                <li className={styles.paragrafo}>Bacharel em Tecnologia da Informação - Univesp</li>
            </ul>

            <h4 className={styles.paragrafo}>Experiência</h4>
            <ul>
                <li className={styles.paragrafo}>Cargo Atual: Desenvolvedor de sistemas pleno - DXC Technology</li>
            </ul>

            <p className={styles.paragrafo}>Entrei no curso de técnico em informática em 2017.</p>
            <p className={styles.paragrafo}>Consegui meu primeiro emprego na área como desenvolvedor trainee em 2018.</p>
            <p className={styles.paragrafo}>Desde agosto de 2019 atuo na empresa DXC Technology como desenvolver.</p>
            <p className={styles.paragrafo}>Inicialmente fui contratado para atuar na sustentação de aplicações não críticas .NET (utilizando o .NET Full Framework), mas já tive oportunidade de trabalhar com os frameworks Angular(Typescript) e Django(Python).</p>
        </PostModelo>
    )
}