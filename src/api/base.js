const url = 'http://remapi.applinzi.com/';
// const url = 'http://192.168.31.191:8080/';

const oldFetch = fetch;
export default fetch = function(url, options) {
  options = options || {};
  if (!options.timeout) {
    options.timeout = 1000;
  }
  return Promise.race([
    oldFetch(url, options),
    new Promise(function(resolve, reject) {
      setTimeout(() => reject(new Error('request timeout')), options.timeout)
    })
  ])
};

export {url}