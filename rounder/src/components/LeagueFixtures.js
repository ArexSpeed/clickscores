import React from 'react'

const LeagueFixtures = ({inputValues}) => {
  const showValues = inputValues.map(input => (
    <div>
      {input.teamId} : {input.value}
    </div>
  ));
  return <div>{showValues}</div>;
}

export default LeagueFixtures
