import { useState } from "react";
import { IMenuItem } from "../../interfaces/INavbar";
import styles from "./menuItem.module.css"

const MenuItem: React.FC<IMenuItem> = (props) => {
    const { item, subItems } = props;
    const [_isSubMenuVisible, _setIsSubMenuVisible] = useState(false);
    return (
        <div
            className={styles.menuItem}
            onMouseOver={() => _setIsSubMenuVisible(true)}
            onMouseLeave={() => _setIsSubMenuVisible(false)}
        >
            <span
                className="material-symbols-rounded"
                title={item.link}>
                {item.text}
            </span>
            {subItems && subItems.length > 0 &&
                _isSubMenuVisible &&
                <ul className={styles.subItemsContainer}>
                    {subItems.map((subItem, index) =>
                        <li
                            key={index}
                            className={styles.subItem}
                        >
                            {subItem.text}
                        </li>
                    )}
                </ul>
            }
        </div>
    )
}

export default MenuItem;