import { GET_ALL_PLAYERS, POST_NEW_PLAYER, PUT_PLAYER } from "./actionsTypes";

const initialState = {
  players: [],
  error: null,
};

const updatePlayerInArray = (players, updatedPlayer) => {
  const updatedPlayerIndex = players.findIndex(
    (player) => player._id === updatedPlayer._id
  );

  if (updatedPlayerIndex === -1) {
    return players; // Si no se encuentra el jugador, retornar el array original
  }

  const updatedPlayers = [...players];
  updatedPlayers[updatedPlayerIndex] = updatedPlayer;
  return updatedPlayers;
};

const playerReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_PLAYERS:
      return {
        ...state,
        players: action.payload,
      };
    case POST_NEW_PLAYER:
      return {
        ...state,
        players: [...state.players, action.payload],
      };

    case PUT_PLAYER:
      return {
        ...state,
        players: updatePlayerInArray(state.players, action.payload),
      };

    default:
      return state;
  }
};

export default playerReducer;
