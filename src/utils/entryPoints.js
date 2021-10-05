const baseUrl = 'https://';

const url = {
  register: () => `${baseUrl}/auth/register`,
  login: () => `${baseUrl}/auth/login`,
  authGoogle: () => `${baseUrl}/auth/google`,
  user: () => `${baseUrl}/user`,
};

export default url;