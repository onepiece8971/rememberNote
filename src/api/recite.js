import url from './base'

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

const upLevelApi = async (id, isForget) => {
  const method = isForget ? 'forget' : 'remember';
  let formData = new FormData();
  formData.append('id', id);
  try {
    let response = await fetch(
      url + method,
      {
        method:  'POST',
        headers: {},
        body:    formData,
      }
    );
    const json = await response.json();
//     console.log(json);
    return json
  } catch(e) {
    console.log("Oops, error", e);
  }
};

export {addReciteApi, upLevelApi}