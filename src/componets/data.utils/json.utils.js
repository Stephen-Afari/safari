import documents from "../../tour-data2.json";

export const getCategoriesAndDocuments = () => {
  // const categoryMap = documents.reduce((acc, currdoc) => {
  //   const { title, items } = currdoc;
  //   acc[title] = items;
  //   return acc;
  // }, {});
  // return categoryMap;
  const categoryMap = documents;
  return categoryMap;
};
