import { ITag } from "../../interfaces/ITag";

const Tag: React.FC<ITag> = (props) => {
    const { text, backgroundColor } = props;
    return (
        <h4 style={{
            backgroundColor,
            color: "white",
            borderRadius: "1.2rem",
            padding: "0 1rem",
        }}>{text}</h4>
    )

}

export default Tag;