import { createSelector } from 'reselect';

const getDemoDataReducerData = state => state.demoDataReducer.data;
const getAuthorById = (_, authorId) => authorId;

export const getArticles = createSelector(
  getDemoDataReducerData,
  rawData => (rawData && mapIntoObject(rawData.articles)) || {}
);

export const getAuthors = createSelector(
  getDemoDataReducerData,
  rawData => (rawData && mapIntoObject(rawData.authors)) || {}
);

export const getAuthorByAuthorId = createSelector(
  getDemoDataReducerData,
  getAuthorById,
  (rawData, authorId) => rawData && mapIntoObject(rawData.authors)[authorId]
);

function mapIntoObject(arr = []) {
  return arr.reduce((acc, curr) => {
    if (curr.id) {
      acc[curr.id] = curr;
    }

    return acc;
  }, {});
}