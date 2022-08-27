export interface ITag {
  text: string;
  backgroundColor: string;
}

export interface IFilterTags {
  tags: string[];
  selectedTag: string;
  onClick: (selectedTag: string) => void;
}
