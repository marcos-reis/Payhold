export default function requestOFTransfer(state = 0,action){
  switch (action.type){
    case 'INIT_TRANSFER':
      return action.data
    case 'ABORT_TRANSFER':
      return 0;
    default:
      return state
  }
}
