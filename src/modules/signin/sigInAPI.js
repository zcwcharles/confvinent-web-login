import { post } from '../../requests';

export const signInPost = async body => {
  const resp = await post('http://confvinent.com:5000/api/auth/signin', body);
  return resp;
};
