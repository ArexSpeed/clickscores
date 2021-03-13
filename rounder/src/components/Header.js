import {useState} from 'react'
const Header = () => {
  const [help, setHelp] = useState(false)
  return (
    <>
    <header className='header'>
      <button className="button" onClick={() => setHelp(!help)}>?</button>
    </header>
    {help && (
    <section className="helpBox">
      <p>
      Create a schedule for your competitions. Choose the number of teams, enter the names and see who will play against whom.<br />
      The generator also allows you to draw groups. Select the appropriate number of groups and teams, then complete the division into pots and the algorithm will draw the groups and generate the schedule for them.<br />
      You can copy the entire fixtures to you docs. <br />
      Quick and easy, enjoy ! 
      </p>
      <div className="button-group">
      <button className="button-accept" onClick={() => setHelp(false)}>OK</button>
      </div>
    </section>
    )}
    </>
  )
}

export default Header
