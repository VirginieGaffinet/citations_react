import './citation.css';

function Citation({simpsonCitation, lordOfTheRingsCitation, starWarsCitation, randomNumber, buttonSimpson, buttonLordOfTheRings, buttonStarWars}) {
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

export default Citation;