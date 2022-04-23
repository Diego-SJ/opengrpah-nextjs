import axios from 'axios';

export const fetchRegistry = async () => {
  try {
    const result = (await axios.get('https://api.ipregistry.co/?key=tryout')).data;
    return result;
  } catch (error) {
    return {};
  }
};
