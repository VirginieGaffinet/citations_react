import './citation.css';
// import propTypes
import PropTypes from 'prop-types';

function Citation({
  simpsonCitation,
  lordOfTheRingsCitation,
  starWarsCitation,
  randomNumber,
  buttonSimpson,
  buttonLordOfTheRings,
  buttonStarWars
}) {
  return (
    <div className='citations-container'>
      {buttonSimpson ? <div className='citation-container'><p className='citation'>{simpsonCitation[randomNumber][0]}</p>
      <div className="lign"></div>
      <p className='author'>{simpsonCitation[randomNumber][1]}</p></div> : '' }

      {buttonLordOfTheRings ? <div className='citation-container'><p className='citation'>{lordOfTheRingsCitation[randomNumber][0]}</p>
      <div className="lign"></div>
      <p className='author'>{lordOfTheRingsCitation[randomNumber][1]}</p></div> : ''}

      {buttonStarWars ? <div className='citation-container'><p className='citation'>{starWarsCitation[randomNumber][0]}</p>
      <div className="lign"></div>
      <p className='author'>{starWarsCitation[randomNumber][1]}</p></div> : '' } 
    </div>
  );
};

Citation.propTypes = {
  simpsonCitation : PropTypes.array,
  lordOfTheRingsCitation : PropTypes.array,
  starWarsCitation : PropTypes.array,
  randomNumber : PropTypes.number,
  buttonSimpson : PropTypes.bool,
  buttonLordOfTheRings : PropTypes.bool,
  buttonStarWars : PropTypes.bool,
};

export default Citation;