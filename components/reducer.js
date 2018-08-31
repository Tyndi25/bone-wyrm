export const GET_CARDS = 'bone-wyrm/cards/LOAD';
export const GET_CARDS_SUCCESS = 'bone-wyrm/cards/LOAD_SUCCESS';
export const GET_CARDS_FAIL = 'bone-wyrm/cards/LOAD_FAIL';

export default function reducer(state = { cards: [] }, action) {
  switch (action.type) {
    case GET_CARDS:
      return { ...state, loading: true };
    case GET_CARDS_SUCCESS:
      return { ...state, loading: false, cards: action.payload.data.cards };
    case GET_CARDS_FAIL:
      return { ...state, loading: false, error: action.payload.error };
    default:
      return state;
  }
}

export function getAllCards(page) {
  return {
    type: GET_CARDS,
    payload: {
      request: {
        url: `/cards${page !== undefined ? `?page=${page}` : ''}`
      }
    }
  };
}