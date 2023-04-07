import { post } from '../../requests';

export const signInPost = async body => {
  const resp = await post('/api/auth/signin', body);
  return resp;
};
