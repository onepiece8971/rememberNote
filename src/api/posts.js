import url from './base'

const getPostsByUserBooksId = async (userBooksId, page) => {
  try {
    let response = await fetch(url + 'posts/' + userBooksId + '/' + page);
    const json = await response.json();
//     console.log(json);
    return {id: userBooksId, json: json}
  } catch(e) {
    console.log("Oops, error", e);
  }
};

const getPostById = async (ubId, pageId) => {
  try {
    let response = await fetch(url + 'post/' + ubId + '/' + pageId);
    const json = await response.json();
//     console.log(json);
    return json;
  } catch(e) {
    console.log("Oops, error", e);
  }
};

const getReviews = async (userBooksId) => {
  try {
    let response = await fetch(url + 'recite/' + userBooksId);
    const json = await response.json();
//     console.log(json);
    return json;
  } catch(e) {
    console.log("Oops, error", e);
  }
};

const getPostByNameApi = async (ubId, name) => {
  try {
    let response = await fetch(url + 'getPostByName/' + ubId + '/' + name);
    return await response.json();
  } catch(e) {
    console.log("Oops, error", e);
  }
};

export {getPostsByUserBooksId, getPostById, getReviews, getPostByNameApi}