import request from 'superagent'


// export const getBeaches = () => {
//   return {
//     type: 'GET_BEACHES'
//   }
// }

export const gotBeaches = (beaches) => {
  return {
    type: 'GOT_BEACHES',
    beaches: beaches
  }
}

export function getBeaches() {
  return (dispatch) => {
    request.get('/api/v1/beaches') // make a request to the server which requests the db table
    .then(res => res.body) //waves db table is returned
    .then(beaches => {
      dispatch(gotBeaches(beaches)) //return db table to where the func getBeaches was called
    })
  }
}