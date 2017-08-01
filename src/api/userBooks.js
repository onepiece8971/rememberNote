const url = 'http://192.168.31.191:8080/';

const getUserBooksByUid = async () => {
  try {
    let response = await fetch(url + 'remember/1');
    const json = await response.json();
//     console.log(json);
    return json
  } catch(e) {
    console.log("Oops, error", e);
  }
};

export {getUserBooksByUid}