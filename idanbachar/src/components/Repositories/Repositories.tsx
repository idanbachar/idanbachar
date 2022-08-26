import { IRepositories } from "../../interfaces/IRepository";
import Repository from "../Repository/Repository";
import styles from "./repositories.module.css"

const Repositories: React.FC<IRepositories> = (props) => {
    const { repositories, title } = props;
    return (
        <div className={styles.container}>
            {repositories.map((repository, index) =>
                <Repository
                    key={index}
                    {...repository}
                />)}
        </div>
    )

}

export default Repositories;