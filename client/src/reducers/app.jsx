const initialState = {
  messages: "",
  isFetching: false,
};
export default function app(state = initialState, action) {
  switch (action.type) {
    case 'FETCH_MESSAGES':
      return Object.assign({}, state, {
        isFetching: true
      });
    case 'FETCH_MESSAGES_SUCCESS':
      return Object.assign({}, state, {
        isFetching: false,
        messages: action.messages
      });
    default:
      return state;
  }
}
