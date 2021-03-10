import {useState} from 'react'
import '../styles/Main.css'

const League = ({kind, setKind}) => {
  const [start, setStart] = useState(false)
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
      <button className="button">1</button>
      <button className="button">2</button>
      <button className="button">3</button>
      <button className="button">4</button>
      <button className="button">5</button>

      </div>
      <h3 className="title">Your teams</h3>
      <div className="input-group">
        <input type="text" className="input" placeholder="Team 1"/>
        <input type="text" className="input" placeholder="Team 2"/>
        <input type="text" className="input" placeholder="Team 3"/>
        <input type="text" className="input" placeholder="Team 4"/>
        <input type="text" className="input" placeholder="Team 1"/>
        <input type="text" className="input" placeholder="Team 2"/>
        <input type="text" className="input" placeholder="Team 3"/>
        <input type="text" className="input" placeholder="Team 4"/>
      </div>

      <div className="button-group">
        <button className="button-accept" onClick={() => setStart(true)}>START</button>
        <button className="button-accept cancel">RESET</button>
      </div>

      {start && 
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
      )}
    </main>
  )
}

export default League
