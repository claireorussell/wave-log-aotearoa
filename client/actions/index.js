import request from 'superagent'
import { getApiRaglan } from '../api/index'


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
      dispatch(gotBeaches(beaches)) // return db table to where the func getBeaches was called
    })
  }
}

export function getSouthBeaches() {
  return (dispatch) => {
    request.get('/api/v1/southbeaches') // make a request to the server which requests the db table
    .then(res => res.body) // waves db table is returned
    .then(beaches => {
      dispatch(gotBeaches(beaches)) // return db table to where the func getBeaches was called
    })
  }
}


export function saveBeach(beach) { // posts the added beach to the database
  return () => {
    request
    .post('/api/v1/saveBeach')
    .send(beach)
    .then(res => res.body)
  }
}


export function gotRaglanMagic(raglanMagic) {
  return {
    type: 'GOT_RAGLAN',
    raglanMagic: raglanMagic
  }
}


export function fetchApiRaglan() {
  return (dispatch) => {
    getApiRaglan() // api body returned to magic page
    .then(raglanMagic => {
      return dispatch(gotRaglanMagic(raglanMagic[4].condition))
    })
    
  }
}

export function gotPortugalMagic(portugalMagic) {
  return {
    type: 'GOT_PORTUGAL',
    portugalMagic: portugalMagic
  }
}


export function fetchApiPortugal() {
  return (dispatch) => {
    getApiPortugal() // api body returned to magic page
    .then(portugalMagic => {
      return dispatch(gotPortugalMagic(portugalMagic))
    })
  }
}