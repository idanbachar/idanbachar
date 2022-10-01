import { useEffect, useState } from "react";
import { IRepositoryReadme } from "../../../interfaces/IRepository";
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import rehypeRaw from "rehype-raw";
import styles from "./repositoryReadme.module.css"
import { GetReadmeFile } from "../../../services/github";

const RepositoryReadme: React.FC<IRepositoryReadme> = (props) => {
    const { repository } = props;
    const [_readme, _setReadme] = useState("");

    useEffect(() => {
        (async () => {
            const readme = await GetReadmeFile(repository.name);
            _setReadme(readme);
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