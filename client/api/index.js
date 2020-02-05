import request from 'superagent'

// export function getWaves() {
//   return request
//   .get('/north')
//   .then(res => {
//     return res.body
//   })
// }

export function getLocations() {
  return request 
  .get('/location') // calls the server router
  .then(res => {
    return res.body // passes the data in the res body to the component calling this func
  })
}

// export function getWaves

// func that does a sa 
