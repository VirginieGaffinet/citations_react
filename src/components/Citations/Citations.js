// import css
import './citations.css';
// import propTypes
import PropTypes from 'prop-types';

// import composants
import Citation from './Citation/Citation';
import RandomButton from './RandomButton/RandomButton';


function Citations({
  simpsonCitation,
  lordOfTheRingsCitation,
  starWarsCitation,
  randomNumber,
  buttonSimpson,
  buttonLordOfTheRings,
  buttonStarWars,
  setRandomNumber
}) {
  return (
    <main className="citations">
      <Citation
        lordOfTheRingsCitation={lordOfTheRingsCitation}
        simpsonCitation={simpsonCitation}
        starWarsCitation={starWarsCitation}
        randomNumber={randomNumber}
        buttonSimpson={buttonSimpson}
        buttonLordOfTheRings={buttonLordOfTheRings}
        buttonStarWars={buttonStarWars}
      />
      <RandomButton 
        setRandomNumber={setRandomNumber}
        simpsonCitation={simpsonCitation} 
      />
    </main>
  );
};

Citations.propTypes = {
  simpsonCitation : PropTypes.array,
  lordOfTheRingsCitation : PropTypes.array,
  starWarsCitation : PropTypes.array,
  randomNumber : PropTypes.number,
  buttonSimpson : PropTypes.bool,
  buttonLordOfTheRings : PropTypes.bool,
  buttonStarWars : PropTypes.bool,
  setRandomNumber : PropTypes.func
};

export default Citations;