import moment from "moment";
import { useState, useEffect } from "react"
import { IRepository } from "../../interfaces/IRepository";
import Tag from "../Tag/Tag";
import githubIcon from "../../assets/icons/github-icon.svg";
import styles from "./repository.module.css"
import { useDispatch } from "react-redux";
import { setModal } from "../../redux/slices/modalSlice";
import RepositoryReadme from "./RepositoryReadme/RepositoryReadme";
import { USERNAME } from "../../services/github";
import axios from "axios";

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
    const [_coverImage, _setCoverImage] = useState("");

    useEffect(() => {
        (async () => {
            await getCoverImage();
        })()
    }, [])

    const openRepositoryInGithub = () => {
        window.open(html_url, "_blank");
    }

    const openModal = () => {
        dispatch(setModal({ component: <RepositoryReadme repository={props} />, isVisible: true }))
    }

    const getCoverImage = async () => {
        await fetch(`https://raw.githubusercontent.com/${USERNAME}/${name}/master/images/cover/cover.png`)
            .then(response => {
                response.blob().then(blob => {
                    const imageUrl = URL.createObjectURL(blob);
                    _setCoverImage(imageUrl);
                }).catch(error => {
                    console.log(error);
                    _setCoverImage("https://en.wikipedia.org/static/images/project-logos/enwiki.png");
                })
            }).catch(error => {
                console.log(error);
                _setCoverImage("https://en.wikipedia.org/static/images/project-logos/enwiki.png");
            })
    }

    return (
        <div className={styles.container}>
            <div
                className={styles.card}
                onClick={openModal}
            >
                <div className={styles.header}>
                    <div style={{ display: "flex", gap: ".5rem" }}>
                        <img src={githubIcon} width={30} />
                        <h1
                            className={styles.title}
                            onClick={(e) => {
                                e.stopPropagation();
                                openRepositoryInGithub();
                            }}>{name}</h1>
                    </div>
                </div>
                <img src={_coverImage} />
                <div className={styles.description}>
                    {description}
                </div>
                <div className={styles.footer}>
                    <Tag
                        text={language}
                        backgroundColor={"blue"}
                    />
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