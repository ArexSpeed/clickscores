import {useState, useEffect, useRef} from 'react'
import '../styles/Main.css'
import {getFixtures} from './FixturesFunc'

const League = ({kind, setKind}) => {
  const [start, setStart] = useState(false);
  const [numberOfTeams, setNumberOfTeams] = useState('')
  const [inputValues, setInputValues] = useState([])
  let teamsQty = [4,6,8,10,12,14,16,18,20]
  const tablesRef = useRef('')

  //reset teamsName on change teamsValue
  useEffect(() => {
    setInputValues([])
    for(let i = 1; i<=numberOfTeams; i++){
      setInputValues(prev => [...prev,
        {
        teamId: i,
        name: ''
      }] 
      )  
   }
  }, [numberOfTeams])

  const showTeamQty = teamsQty.map((number,i) => (
    <button key={i} className={`${numberOfTeams === number ? "button active" : "button"}`} onClick={() => setNumberOfTeams(number)} >{number}</button>
  ))
  
  const showInputToFill = inputValues.map((input,i) => (
    <input
      key={i}
      type="text"
      className="input"
      placeholder={`Team ${input.teamId}`}
      name="name"
      value={input.name}
      onChange={e => handleChangeInput(i, e)}
    />
  ))
  
  const handleChangeInput = (i, e) => {
    const values = [...inputValues];
    values[i][e.target.name] = e.target.value;
    setInputValues(values);
  };

  function copy() {
    var elm = tablesRef.current;
    // for Internet Explorer
  
    if(document.body.createTextRange) {
     let range = document.body.createTextRange();
      range.moveToElementText(elm);
      range.select();
      document.execCommand("Copy");
      alert("Skopiowałeś terminiarz");
    }
    else if(window.getSelection) {
      // other browsers
  
      let selection = window.getSelection();
      let range = document.createRange();
      range.selectNodeContents(elm);
      selection.removeAllRanges();
      selection.addRange(range);
      document.execCommand("Copy");
      alert("Skopiowałeś terminiarz");
    }
  }

  return (
    <main className="main">
      <h3 className="title">Create your fixtures</h3>
      <div className="button-group">
      <div className="selector">
        <button className={`${kind === 'Group' ? "selector-button active" : "selector-button"}`} onClick={() => setKind('Group')}>GROUP</button>
        <button className={`${kind === 'League' ? "selector-button active" : "selector-button"}`} onClick={() => setKind('League')}>LEAGUE</button>
      </div>
      </div>
      <h3 className="title">Teams quantity</h3>
      <div className="button-group">
      {showTeamQty}

      </div>
      {numberOfTeams && 
      (
        <>
        <h3 className="title">Your teams</h3>
        <div className="input-group">
          {showInputToFill}
        </div>

        <div className="button-group">
          <button className="button-accept" onClick={() => setStart(true)}>START</button>
          <button className="button-accept cancel">RESET</button>
        </div>
        </>
      )}
      
      {start && <section ref={tablesRef} className="tables">{getFixtures(inputValues.length, inputValues)}</section>}
      <button className="button-accept" onClick={copy}>COPY</button>
      {/* {start && 
      (
        <section className="tables">
        <table className="table">
        <tr className="table-title">ROUND 1</tr>
        <tr className="table-vs">
          <td className="table-host">Unia</td>
          <td className="table-guest">Lech</td>
        </tr>
        <tr className="table-vs">
        <td className="table-host">Unia</td>
          <td className="table-guest">Lech</td>
        </tr>
        <tr className="table-vs">
        <td className="table-host">Unia Leszno</td>
          <td className="table-guest">Kosmiczni</td>
        </tr>
        <tr className="table-vs">
        <td className="table-host last">Unia</td>
          <td className="table-guest last">Lech </td>
        </tr>
        
        </table>

        <table className="table">
        <tr className="table-title">ROUND 2</tr>
        <tr className="table-vs">
          <td className="table-host">Unia</td>
          <td className="table-guest">Lech</td>
        </tr>
        <tr className="table-vs">
        <td className="table-host">Unia</td>
          <td className="table-guest">Lech</td>
        </tr>
        <tr className="table-vs">
        <td className="table-host">Leszczynskanialna Liga Piłki Siatkowej</td>
          <td className="table-guest">Leszczynskanialna Liga Piłki Siatkowej </td>
        </tr>
        <tr className="table-vs">
        <td className="table-host last">Unia</td>
          <td className="table-guest last">Leszczynska liga Pilki sia </td>
        </tr>
        
        </table>

        <div className="button-group">
        <button className="button-accept">COPY</button>
        <button className="button-accept cancel">RESET</button>
      </div>
      </section>
      )} */}
    </main>
  )
}

export default League
