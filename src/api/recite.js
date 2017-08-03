const url = 'http://192.168.31.191:8080/';

const addReciteApi = async (ubId, postId) => {
  try {
    let response = await fetch(url + 'addrecite/' + ubId + '/' + postId);
    const json = await response.json();
//     console.log(json);
    return json
  } catch(e) {
    console.log("Oops, error", e);
  }
};

export {addReciteApi}