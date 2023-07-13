import '../App.css';
// FILES
import calculatorLogo from '../images/calculator-logo.png'

const Logo = () => (

  <div className='calculator-logo-container'>
    <img 
      className='calculator-logo' 
      src={calculatorLogo} 
      alt="calculator logo" />
  </div>
)

export default Logo