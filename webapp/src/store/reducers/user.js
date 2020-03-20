const INITIAL_STATE = {

}

export default function user(state = INITIAL_STATE, action){
  switch (action.type){
    case 'SAVE_DATA_USER':
      return state = action.data
    default:
      return state
  }
}
