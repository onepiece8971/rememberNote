const get = async () => {
  const url = 'http://192.168.31.191:8080/home';
  try {
    let response = await fetch(url);
    const json = await response.json();
    console.log(json);
    return json[0].BookName
  } catch(e) {
    console.log("Oops, error", e);
  }
};

export {get}