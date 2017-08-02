const url = 'http://192.168.31.191:8080/';

const getPostsByUserBooksId = async (userBooksId) => {
  try {
    let response = await fetch(url + 'posts/' + userBooksId);
    const json = await response.json();
//     console.log(json);
    return {id: userBooksId, json: json}
  } catch(e) {
    console.log("Oops, error", e);
  }
};

const getPostById = async (postId) => {
  try {
    let response = await fetch(url + 'post/' + postId);
    const json = await response.json();
//     console.log(json);
    return json;
  } catch(e) {
    console.log("Oops, error", e);
  }
};

export {getPostsByUserBooksId, getPostById}