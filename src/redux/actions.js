import axios from "axios";
import { GET_ALL_PLAYERS, POST_NEW_PLAYER, PUT_PLAYER } from "./actionsTypes";

// Acción para obtener los jugadores
export const fetchPlayers = () => async (dispatch) => {
  try {
    const res = await axios("http://localhost:3001/api/players");
    dispatch({
      type: GET_ALL_PLAYERS,
      payload: res.data,
    });
  } catch (error) {
    console.log({ error: error.message });
  }
};

export const postPlayers = (playerData) => async (dispatch) => {
  try {
    const res = await axios.post(
      "http://localhost:3001/api/players",
      playerData
    );
    dispatch({
      type: POST_NEW_PLAYER,
      payload: res.data,
    });
  } catch (error) {
    console.log({ error: error.message });
  }
};

export const putPlayers = (playerId, updatedPlayerData) => async (dispatch) => {
  try {
    const res = await axios.put(
      `http://localhost:3001/api/players/${playerId}`,
      updatedPlayerData
    );
    dispatch({
      type: PUT_PLAYER,
      payload: res.data,
    });
  } catch (error) {
    console.log({ error: error.message });
  }
};
