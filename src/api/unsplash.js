import axios from 'axios';
export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization:
      'Client-ID 86a11ca74317dba51d021e6d7e684e199a78bc6cf8a7f6f419d06e40993a4d25'
  }
});
