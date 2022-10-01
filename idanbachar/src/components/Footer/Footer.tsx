import styles from "./footer.module.css"

const Footer: React.FC = () => {
    return (
        <nav className={styles.footer}>
            <h1 className={styles.copyright}>&copy; {`${new Date().getFullYear()} All rights reserved to Idan Bachar.`}</h1>
        </nav>
    )
}

export default Footer;