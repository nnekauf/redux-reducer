export function manageFriends(state= {friends: [] }, action){

    switch (action.type) {
        case 'ADD_FRIEND':
          return {friends: [...state.friends,  action.friend]}
        case 'REMOVE_FRIEND':
            const removalIndex = state.friends.findIndex(friend => friend.id === action.id)
            return(
                {friends:[
                ...state.friends.slice(0,removalIndex),
                ...state.friends.slice(removalIndex + 1)
                ]}
            )
        default:
          return state;
      }
    
  
}
