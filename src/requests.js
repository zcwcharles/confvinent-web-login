import ky from "ky";

const send = async (url, options) => {
  try {
    const resp = await ky(url, options);
    if (resp.redirected) {
      window.location.href = resp.url;
    }
    return resp;
  } catch(err) {
    throw err;
  }
};

export const get = async (url) => {
  try {
    const resp = await send(url, { method: 'get' });
    const respBody = await resp.json();
    return respBody;
  } catch(err) {
    throw err;
  }
};

export const post = async (url, body) => {
  try {
    const resp = await send(url, {
      method: 'post',
      body: JSON.stringify(body),
      headers: {
        'content-type': 'application/json',
      }
    });
    const respBody = await resp.json();
    return respBody;
  } catch(err) {
    throw err;
  }
};