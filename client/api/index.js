import request from 'superagent'

export function getWaves() {
  return request.get('/north')
  .then(res => {
    return res.body
  })
}