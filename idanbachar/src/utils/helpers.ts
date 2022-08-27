export const GetFirstLetterCapital = (text: string) => {
  const textLetters = text.split("");
  textLetters[0] = textLetters[0].toUpperCase();
  return textLetters.join("");
};

export const GetRepositoryCategory = (repositoryName: string) => {
  const splittedRepoName = repositoryName.split("-");
  if (splittedRepoName.length > 0) {
    const category = splittedRepoName.reverse()[0];
    return category;
  }
  return "Other";
};
