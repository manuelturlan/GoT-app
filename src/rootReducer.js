import { GET_ALL_HOUSES } from "./redux/actions/actions";
import { CREATE_HOUSE } from "./redux/actions/actions";

const initialState = {
  houses: [],
};

function rootReducer(state = initialState, action) {
    if (action.fetchingTimes === 1) {

        if (action.type === GET_ALL_HOUSES) {
            return {
              ...state,
              houses: action.payload,
            };
          }
    }

  if (action.type === CREATE_HOUSE) {
    return {
      ...state,
      houses: [...state.houses, action.payload],
    };
  }

  return state;
}

export default rootReducer;
