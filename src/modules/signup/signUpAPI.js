import { post } from '../../requests';

export const signUpPost = async body => {
  const resp = await post('http://confvinent.com:5000/api/user/signup', body);
  return resp;
};
