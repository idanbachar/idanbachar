import { INavbar } from "../../interfaces/INavbar";
import MenuItem from "../MenuItem/MenuItem";
import styles from "./navbar.module.css"

const Navbar: React.FC<INavbar> = (props) => {
    const { items, title } = props;
    return (
        <nav className={styles.navbar}>
            {items.map((menuItem, index) =>
                <MenuItem
                    key={index}
                    {...menuItem}
                />
            )}
        </nav>
    )
}

export default Navbar;