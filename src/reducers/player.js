const initialState = [
  {
    name: 'Jim Hoskins',
    score: 31,
  },
  {
    name: 'Andrew Chalkley',
    score: 20,
  },
  {
    name: 'Alena Holligan',
    score: 50,
  },
];

export default function Player(state=initialState, action) {
  switch(action.tytpe) {
    
    case 'ADD_PLAYER':
      return [
        ...state,
        {
          action.name,
          score:0
        }
      ];
    default:
      return state;
  }
}