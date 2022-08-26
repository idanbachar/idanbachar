import { IMenuItem } from "../../interfaces/INavbar";

const MenuItem: React.FC<IMenuItem> = (props) => {
    const { item, subItems } = props;
    return (
        <div>
            {item.text}
        </div>
    )
}

export default MenuItem;