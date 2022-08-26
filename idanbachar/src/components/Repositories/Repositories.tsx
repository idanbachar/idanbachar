import { IRepositories } from "../../interfaces/IRepository";
import styles from "./repositories.module.css"

const Repositories: React.FC<IRepositories> = (props) => {
    const { repositories, title } = props;
    return (
        <div className={styles.container}>

        </div>
    )

}

export default Repositories;