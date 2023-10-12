import { Link, useLocation } from "react-router-dom";
import classNames from "classnames";

import styles from "./MenuLink.module.css";

export default function MenuLink({ children, to }) {
    const localizacao = useLocation();

    return (
        <Link className={classNames(styles.link, {
            [styles.linkDestacado]: localizacao.pathname === to
        })} to={to}>
            {children}
        </Link>
    )
}