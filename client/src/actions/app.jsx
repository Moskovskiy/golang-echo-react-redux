import axios from 'axios';

const FETCH_MESSAGES = 'FETCH_MESSAGES';
const FETCH_MESSAGES_SUCCESS = 'FETCH_MESSAGES_SUCCESS';
const REQUEST_URL = 'http://localhost:1323/'

function requestMessages() {
  return {
    type: FETCH_MESSAGES
  };
}

function receiveMessages(json) {
  return {
    type: FETCH_MESSAGES_SUCCESS,
    messages: json
  };
}
// メッセージ取得
export function fetchMessages() {
  return dispatch => {
    dispatch(requestMessages());
    return axios.get(REQUEST_URL).then((response) => {
      dispatch(receiveMessages(response.data));
    }).catch((response) => {
      console.log(response);
    });
  };
}
