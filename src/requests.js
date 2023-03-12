import ky from "ky";

export const get = async (url) => {
  try {
    const resp = await ky(url, { method: 'get' });
    const respBody = await resp.json();
    return respBody;
  } catch(err) {
    throw err;
  }
};

export const post = async (url, body) => {
  try {
    const resp = await ky(url, {
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