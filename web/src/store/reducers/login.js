
const DATA_USER = {
}


export default function login(state = DATA_USER, action){
  switch (action.type){
    case 'INITIAL_SESSION':
      return {token:action.data.token}
    case 'ERROR_SESSION':
      return {message:action.data.message};
    default:
      return state
  }
}
