const { httpGet } = require("./mock-http-interface");

const getArnieQuotes = async urls => {
  // TODO: Implement this function.
  // for (url of urls) {
  //   results.push(await getResult(url));
  // }
  const results = await Promise.all(
    urls.map(async function(url) {
      try {
        return await getResult(url);
      } catch (err) {
        throw err;
      }
    })
  );
  return results;
};
const getResult = async url => {
  const res = await httpGet(url);
  const { message } = JSON.parse(res.body);
  return res.status == 200 ? { "Arnie Quote": message } : { FAILURE: message };
};
module.exports = {
  getArnieQuotes
};
