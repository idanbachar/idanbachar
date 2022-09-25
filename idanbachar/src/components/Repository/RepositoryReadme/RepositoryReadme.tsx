import axios from "axios";
import { useEffect, useState } from "react";
import { IRepositoryReadme } from "../../../interfaces/IRepository";
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import rehypeRaw from "rehype-raw";
import styles from "./repositoryReadme.module.css"

const RepositoryReadme: React.FC<IRepositoryReadme> = (props) => {
    const { repository } = props;
    const [_readme, _setReadme] = useState("");

    useEffect(() => {
        (async () => {
            const readmeData = await axios(`https://raw.githubusercontent.com/idanbachar/${repository.name}/master/README.md`);
            _setReadme(readmeData.data);
        })()
    }, [])

    return (
        <div className={styles.container}>
            <div style={{
                width: "80%"
            }}>
                <h1 style={{ textDecoration: "underline" }}>{repository.name}/README.md</h1>
                <ReactMarkdown
                    children={_readme}
                    remarkPlugins={[remarkGfm]}
                    rehypePlugins={[rehypeRaw]}
                />
            </div>
        </div>
    )

}

export default RepositoryReadme;