import axios from "axios";

export const baseUrl = 'https://bayut.p.rapidapi.com';

export const fetchApi = async (url) => {
  const { data } = await axios.get((url), {
    headers: {
      'x-rapidapi-host': 'bayut.p.rapidapi.com',
      'x-rapidapi-key': 'd5a5d25670mshea7379a7a6169c8p1f58aejsn002fc73b0ae9'
    },
  });
    
  return data;
}