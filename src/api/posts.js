const url = 'http://192.168.31.191:8080/';

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

export {getPostsByUserBooksId, getPostById, getReviews}