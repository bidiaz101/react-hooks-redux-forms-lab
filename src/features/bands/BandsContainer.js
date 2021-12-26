import React from "react";
import { useSelector, useDispatch } from 'react-redux'
import BandInput from './BandInput'
import { v4 as uuid } from 'uuid';
import { bandAdded } from './bandsSlice'

function BandsContainer() {
  const bands = useSelector(state => state.bands.entities)
  const dispatch = useDispatch()

  const bandList = bands.map(band => <li key={uuid()}>{band}</li>)

  function onBandSubmit(payload){
    dispatch(bandAdded(payload))
  }

  return (
    <div>
      <BandInput onBandSubmit={onBandSubmit}/>
      <ul>{bandList}</ul>
    </div>
  )
}

export default BandsContainer;
