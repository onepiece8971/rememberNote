import fetch, {url} from './base';

const getUserBooksByUid = async (uid, isAll) => {
  const method = isAll ? 'allRemember/' : 'remember/';
  try {
    let response = await fetch(url + method + uid);
    const json = await response.json();
//     console.log(json);
    return json
  } catch(e) {
    console.log("Oops, error", e);
  }
};

export {getUserBooksByUid}