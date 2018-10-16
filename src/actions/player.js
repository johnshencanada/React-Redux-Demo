export const addPlayer = name => {
	return {
		type: 'ADD_PLAYER',
		name
	}
};

export const removePlayer = index => {
	return {
		type: 'REMOVE_PLAYER',
		index
	};
};

export const updatePlayerScore = (index,score) => {
	return {
		type: 'UPDATE_PLAYER_SCORE',
		index,
		score
	};
};