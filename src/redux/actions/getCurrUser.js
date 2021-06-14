import { GET_CURR_USER } from './types';
import Axios from 'axios';

const getCurrUser = email => dispatch => {
  Axios.get(`/user/${email}`)
    .then(res => {
      dispatch({
        type: GET_CURR_USER,
        payload: res.data.data[0],
      });
      console.log('from REDUX: ', res.data);
    })
    .catch(err => console.log(err));
};

export default getCurrUser;
