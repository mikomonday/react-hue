import axios from 'axios';

const nupnpSearch = () => axios({
  method: 'get',
  url: 'https://www.meethue.com/api/nupnp',
});


export default {
  nupnpSearch,
};
