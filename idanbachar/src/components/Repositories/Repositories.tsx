import { useState } from "react";
import { IRepositories } from "../../interfaces/IRepository";
import { ITag } from "../../interfaces/ITag";
import { GetFirstLetterCapital, GetRepositoryCategory } from "../../utils/helpers";
import FilterTags from "../FilterTags/FilterTags";
import Repository from "../Repository/Repository";
import styles from "./repositories.module.css"

const Repositories: React.FC<IRepositories> = (props) => {
    const { repositories, title } = props;
    const [_selectedTag, _setSelectedTag] = useState("");
    const [_searchBoxValue, _setSearchBoxValue] = useState("");

    const getRepositoriesTags = (): string[] => {
        let distinctedTags: string[] = [];
        const tags = repositories
            .map(repository =>
                getRepositoryTag(repository.name));
        for (let i = 0; i < tags.length; i++) {
            if (!distinctedTags.includes(tags[i].text)) {
                distinctedTags.push(tags[i].text)
            }
        }
        return distinctedTags
    }

    const getRepositoryTag = (repositoryName: string): ITag => {
        const repositoryCategoryType = GetFirstLetterCapital(GetRepositoryCategory(repositoryName));
        switch (repositoryCategoryType) {
            case "Game":
                return { text: repositoryCategoryType, backgroundColor: "green" }
            case "Server":
                return { text: repositoryCategoryType, backgroundColor: "red" }
            default: {
                return { text: repositoryCategoryType, backgroundColor: "lightblue" }
            }
        }
    }
    return (
        <div className={styles.container}>
            <h1 style={{ fontFamily: "Lato-Bold", borderLeft: "1px solid black" }}>{title}</h1>
            <div className={styles.searchContainer}>
                <input
                    className={styles.searchInput}
                    type={"text"}
                    placeholder={"Search repository..."}
                    onChange={(e) => _setSearchBoxValue(e.target.value)}
                />
                <FilterTags
                    tags={getRepositoriesTags()}
                    selectedTag={_selectedTag}
                    onClick={_setSelectedTag} />
            </div>
            <div className={styles.repositories}>
                {repositories
                    .filter(repository =>
                        (_selectedTag === getRepositoryTag(repository.name).text) || !_selectedTag)
                    .filter(repository => (repository.name.toLowerCase().includes(_searchBoxValue.toLowerCase()) ||
                        repository.description && repository.description.toLowerCase().includes(_searchBoxValue.toLowerCase()
                        )))
                    .map((repository, index) =>
                        <Repository
                            {...repository}
                            key={index}
                            category_tag={getRepositoryTag(repository.name)}
                        />
                    )}
            </div>
        </div>
    )

}

export default Repositories;