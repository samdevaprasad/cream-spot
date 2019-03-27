import { RSAA } from 'redux-api-middleware';
import { REQUEST, SUCCESS, FAILURE } from '../constants/actionTypes';

export const pullPlayerData = (id) => {
    //https://statdata.pgatour.com/players/player.json
    return {
        [RSAA]: {
            endpoint: `https://statdata.pgatour.com/players/${id}/2019results.json`,
            method: 'GET',
            types: [REQUEST, SUCCESS, FAILURE]
        }
    }
}