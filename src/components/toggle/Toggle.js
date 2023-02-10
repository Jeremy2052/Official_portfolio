import { useContext } from "react"
import { ThemeContext } from "../../context"
import "./toggle.css"

const Toggle = () => {
  const theme = useContext(ThemeContext)

  const handleClick = () => { 
    theme.dispatch({type:"TOGGLE"})
  }
  return (
    <div className="toggle" style={{backgroundColor: theme.state.darkMode && "#ffffff"}}>
      <button className="toggle-btn" onClick={handleClick} style={{left:theme.state.darkMode ? 5 : 38, backgroundColor: theme.state.darkMode && "#fdfdfd"}}></button>
    </div>
  )
}

export default Toggle
