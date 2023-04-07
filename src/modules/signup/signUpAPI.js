import { post } from '../../requests';

export const signUpPost = async body => {
  const resp = await post('/api/auth/signup', body);
  return resp;
};
