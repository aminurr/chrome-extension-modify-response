const { fetch: originalFetch } = window;
const re = new RegExp("^(http|https)://", "i");
window.fetch = async (...args: any[]) => {
  let [resource, config] = args;
  // request interceptor here
  const response = await originalFetch(resource, config);
  const url = resource.url;
  if (url && url.includes("<todo_replace_your_patterm>") ) {
    const json = () =>
      response
        .clone()
        .json()
        .then((responseData) => {
          //todo_manipulate_your_response
          return responseData;
        });
    response.json = json;

  }
  // response interceptor here
  return response;
};