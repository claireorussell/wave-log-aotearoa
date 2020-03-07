//combined reducers
import { combineReducers } from 'redux'

import beaches from './beaches'
import raglanMagic from './raglan'
import portugalMagic from './portugal'


export default combineReducers({
  beaches,
  raglanMagic,
  portugalMagic,
})