import classNames from "classnames";
import styles from "./BotaoPrincipal.module.css";

export default function BotaoPrincipal({ children, tamanho }) {
    return (
        <button className={classNames(styles.botaoPrincipal, {
            lg: tamanho === 'lg'
        })}>
            {children}
        </button>
    )
}