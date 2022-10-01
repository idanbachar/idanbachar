import { IFilterTags } from "../../interfaces/ITag";
import styles from "./filterTags.module.css"

const FilterTags: React.FC<IFilterTags> = (props) => {
    const { tags, selectedTag, onClick } = props;
    return (
        <div className={styles.container}>
            <span className={styles.filtersTitle}>
                Filters:
            </span>
            <div className={styles.tags}>
                {tags.map((tag, index) =>
                    <span
                        key={index}
                        className={`${selectedTag === tag ? styles.tagSelected : styles.tag}`}
                        onClick={() => {
                            if (selectedTag !== tag) {
                                onClick(tag)
                            } else {
                                onClick("")
                            }
                        }}
                    >{tag}</span>)}
            </div>
        </div>
    )
}

export default FilterTags;