import { INavbar } from "../../interfaces/INavbar";
import MenuItem from "../MenuItem/MenuItem";
import styles from "./navbar.module.css"

const Navbar: React.FC<INavbar> = (props) => {
    const { items, title, img_url } = props;
    return (
        <nav className={styles.navbar}>
            <div className={styles.titleContainer}>
                {img_url && <img
                    src={img_url}
                    width={"30"}
                    style={{
                        borderRadius: "50%"
                    }} />}
                <span className={styles.title}>{title}</span>
            </div>
            <div className={styles.menu}>
                {items.map((menuItem, index) =>
                    <MenuItem
                        key={index}
                        {...menuItem}
                    />)}
            </div>
        </nav>
    )
}

export default Navbar;