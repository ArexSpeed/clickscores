import React from 'react'
import {getFixtures} from './FixturesFunc'

const LeagueFixtures = ({inputValues}) => {
  
  return <section className="tables">{getFixtures(inputValues.length, inputValues)}</section>;
}

export default LeagueFixtures
