import fetch, {url} from './base';

const getBooks = async () => {
  try {
    let response = await fetch(url + 'home');
    const json = await response.json();
//     console.log(json);
    return json
  } catch(e) {
    console.log("Oops, error", e);
  }
};

export {getBooks}