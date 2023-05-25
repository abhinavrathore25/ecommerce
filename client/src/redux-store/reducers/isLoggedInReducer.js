export const isLoggedInReducer = (state = false, action) => {
    switch(action.type){
        case 'IS LOGGED IN':
            return state = action.payload;
        
        default:
            return state;
    }
}