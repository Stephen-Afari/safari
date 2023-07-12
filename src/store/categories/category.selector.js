import { createSelector } from "reselect";

export const selectCategoriesArray = (state) => state.categories;
export const selectCategories = createSelector(
  [selectCategoriesArray],
  (categoriesSlice) => categoriesSlice.categories
);

export const selectCategoriesMap = createSelector(
  [selectCategories],
  (categories) =>
    categories.reduce((acc, category) => {
      console.log("selector fired");
      const { title, items } = category;
      acc[title] = items;
      return acc;
    }, {})
);

// export const selectCategoriesMap1 = (state) =>
//   state.categories.categories.reduce((acc, category) => {
//     const { title, items } = category;
//     acc[title] = items;
//     return acc;
//   }, {});
