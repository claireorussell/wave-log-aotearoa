import request from 'superagent'


export function getApiRaglan() {
  return request 
  .get('/api/v1/raglan') // calls the server router
  .then(res => {
    return res.body // passes the data in the res body to the component calling this func
  })
}


export function fetchApiPortugal() {
  return request 
  .get('/api/v1/portugal') // calls the server router
  .then(res => {
    return res.body // passes the data in the res body to the component calling this func
  })
}

