import moment from "moment";
import { IRepository } from "../../interfaces/IRepository";
import Tag from "../Tag/Tag";
import githubIcon from "../../assets/icons/github-icon.svg";
import styles from "./repository.module.css"

const Repository: React.FC<IRepository> = (props) => {
    const {
        name,
        html_url,
        description,
        created_at,
        updated_at,
        language,
        category_tag
    } = props;

    const openRepositoryInGithub = () => {
        window.open(html_url, "_blank");
    }

    const coverImage = `https://raw.githubusercontent.com/idanbachar/${name}/master/images/cover/cover.png`;

    return (
        <div className={styles.container}>
            <img
                src={coverImage}
                width={"100"}
                className={styles.cover}
                alt={""}
            />
            <div className={styles.card}>
                <div className={styles.header}>
                    <div style={{ display: "flex", gap: ".5rem" }}>
                        <img src={githubIcon} />
                        <h1
                            className={styles.title}
                            onClick={openRepositoryInGithub}>{name}</h1>
                    </div>
                    <Tag {...category_tag} />
                </div>
                <div>
                    <hr />
                </div>
                <div className={styles.description}>
                    {description}
                </div>
                <div className={styles.footer}>
                    <div>
                        <Tag
                            text={language}
                            backgroundColor={"blue"}
                        />
                    </div>
                    <div>
                        <div className={styles.createdAt} dangerouslySetInnerHTML={{
                            __html: `Created at<b>${moment(created_at).format("DD/MM/YYYY")}</b>`
                        }}>
                        </div>
                        <div className={styles.createdAt} dangerouslySetInnerHTML={{
                            __html: `Updated at<b>${moment(updated_at).format("DD/MM/YYYY")}</b>`
                        }}>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Repository;