import './randomButton.css';
import genererNombreEntier from '../../../assets/utils/randomNumber';

function RandomButton({setRandomNumber , simpsonCitation}) {
  return (
    <button className='randomButton' onClick={() => {
      setRandomNumber(genererNombreEntier(simpsonCitation.length));
    }}>
    Nouvelle citation
    </button>
  );
};

export default RandomButton;