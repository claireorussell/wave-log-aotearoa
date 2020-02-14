import request from 'superagent'


export const gotBeaches = (beaches) => {
  return {
    type: 'GOT_BEACHES',
    beaches: beaches
  }
}

export function getNorthBeaches() {
  return (dispatch) => {
    request.get('/api/v1/northbeaches') // make a request to the server which requests the db table
    .then(res => res.body) //waves db table is returned
    .then(beaches => {
      dispatch(gotBeaches(beaches)) //return db table to where the func getBeaches was called
    })
  }
}
export function getSouthBeaches() {
  return (dispatch) => {
    request.get('/api/v1/southbeaches') // make a request to the server which requests the db table
    .then(res => res.body) //waves db table is returned
    .then(beaches => {
      dispatch(gotBeaches(beaches)) //return db table to where the func getBeaches was called
    })
  }
}


export function saveBeach(beach) {
  console.log(beach)
  return () => {
    request
    .post('/api/v1/saveBeach')
    .send(beach)
    .then(res => res.body)
  }
}