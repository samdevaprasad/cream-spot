import { RSAA } from 'redux-api-middleware';
import { REQUEST, SUCCESS, FAILURE, PLAYER_DATA, ALL_PLAYERS } from '../constants/actionTypes';

export const pullPlayerData = (id) => {
    return {
        [RSAA]: {
            endpoint: `https://statdata.pgatour.com/players/${id}/2019results.json`,
            method: 'GET',
            types: [`${PLAYER_DATA}_${REQUEST}`, `${PLAYER_DATA}_${SUCCESS}`, `${PLAYER_DATA}_${FAILURE}`]
        }
    }
}

export const findAllPlayers = () => {
    return {
        [RSAA]: {
            endpoint: 'https://statdata.pgatour.com/players/player.json',
            method: 'GET',
            types: [`${ALL_PLAYERS}_${REQUEST}`, `${ALL_PLAYERS}_${SUCCESS}`, `${ALL_PLAYERS}_${FAILURE}`]
        }
    }
}