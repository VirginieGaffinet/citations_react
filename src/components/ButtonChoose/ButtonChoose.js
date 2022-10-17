// import css
import './buttonChoose.css';
// import propTypes
import PropTypes from 'prop-types';

function ButtonChoose({setButtonSimpson, setButtonLordOfTheRings, setButtonStarWars}) {
  return (
  <div className='buttonChoose'>
    <button className='themeButton button-animation' onClick={() => {
      setButtonLordOfTheRings(true);
      setButtonSimpson(false);
      setButtonStarWars(false);
    }}>
      Le seigneur des anneaux
    </button>
    <button className='themeButton button-animation'onClick={() => {
      setButtonSimpson(true);
      setButtonLordOfTheRings(false);
      setButtonStarWars(false);
    }}>
      Les Simpson
    </button>
    <button className='themeButton button-animation' onClick={() => {
      setButtonStarWars(true);
      setButtonLordOfTheRings(false);
      setButtonSimpson(false);
    }}>
      Star Wars
    </button>
  </div>
  );
};

ButtonChoose.propTypes = {
  setButtonSimpson : PropTypes.func,
  setButtonLordOfTheRings : PropTypes.func,
  setButtonStarWars : PropTypes.func
};

export default ButtonChoose;