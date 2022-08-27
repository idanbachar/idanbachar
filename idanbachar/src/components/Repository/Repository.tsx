import moment from "moment";
import { IRepository } from "../../interfaces/IRepository";
import Tag from "../Tag/Tag";
import githubIcon from "../../assets/icons/github-icon.svg";
import styles from "./repository.module.css"
import { useDispatch } from "react-redux";
import { setModal } from "../../redux/slices/modalSlice";

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

    const dispatch = useDispatch();

    const openRepositoryInGithub = () => {
        window.open(html_url, "_blank");
    }

    const openModal = () => {
        dispatch(setModal({ component: <Repository {...props} />, isVisible: true }))
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
            <div
                className={styles.card}
                onClick={openModal}
            >
                <div className={styles.header}>
                    <div style={{ display: "flex", gap: ".5rem" }}>
                        <img src={githubIcon} />
                        <h1
                            className={styles.title}
                            onClick={(e) => {
                                e.stopPropagation();
                                openRepositoryInGithub();
                            }}>{name}</h1>
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
                            __html: `Created at<font face="Lato-Bold">${moment(created_at).format("DD/MM/YYYY")}</font>`
                        }}>
                        </div>
                        <div className={styles.createdAt} dangerouslySetInnerHTML={{
                            __html: `Updated at<font face="Lato-Bold">${moment(updated_at).format("DD/MM/YYYY")}</font>`
                        }}>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Repository;