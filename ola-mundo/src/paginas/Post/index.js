import { useParams } from "react-router-dom";
import posts from "json/posts.json";
import PostModelo from "componentes/PostModelo";

export default function Post() {
    const parametros = useParams();

    const post = posts.find(post => post.id === Number(parametros.id));
    
    return (
        <PostModelo
            fotoCapa={require(`assets/posts/${post.id}/capa.png`)}
            titulo={post.titulo}
        >

        </PostModelo>
    )
}