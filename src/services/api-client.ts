import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.rawg.io/api',
  params: {
    key: '11536f937fea4f12bc71e054741f18da',
  },
});
