import { IRepository } from "../../interfaces/IRepository";
import styles from "./repository.module.css"

const Repository: React.FC<IRepository> = (props) => {
    const {
        id,
        name,
        full_name,
        owner,
        html_url,
        description,
        created_at,
        updated_at,
        language,
    } = props;
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>{name}</h1>
            <div className={styles.description}>
                {description}
            </div>
        </div>
    )
}

export default Repository;