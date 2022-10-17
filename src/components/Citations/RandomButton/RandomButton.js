// import css
import './randomButton.css';
// mport utils
import genererNombreEntier from '../../../assets/utils/randomNumber';
// import propTypes
import PropTypes from 'prop-types';

function RandomButton({setRandomNumber , simpsonCitation}) {
  return (
    <button className='randomButton' onClick={() => {
      setRandomNumber(genererNombreEntier(simpsonCitation.length));
    }}>
    Nouvelle citation
    </button>
  );
};

RandomButton.propTypes = {
  setRandomNumber : PropTypes.func,
  simpsonCitation : PropTypes.array
}

export default RandomButton;