const url = 'http://45.62.97.4:5050/';
// const url = 'http://192.168.31.191:8080/';

const oldFetch = fetch;
export default fetch = function(url, options) {
  options = options || {};
  if (!options.timeout) {
    options.timeout = 5000;
  }
  return Promise.race([
    oldFetch(url, options),
    new Promise(function(resolve, reject) {
      setTimeout(() => reject(new Error('request timeout')), options.timeout)
    })
  ])
};

export {url}