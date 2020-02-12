import request from 'superagent'


export function getLocations() {
  return request 
  .get('/locations') // calls the server router
  .then(res => {
    return res.body // passes the data in the res body to the component calling this func
  })
}

export function getNorthBeaches() {
  return request
  .get('/northBeaches')
  .then(res => {
    return res.body
  })
}

export function getSouthBeaches() {
  return request
  .get('/southBeaches')
  .then(res => {
    return res.body
  })
}

export function shareBeach(beach) {
  return request 
  .post('/share') // posts info to database
  .send(beach)
  .then(res => res.body)
}


