// import css
import './citations.css';

// import composants
import Citation from './Citation/Citation';
import RandomButton from './RandomButton/RandomButton';


function Citations({simpsonCitation, lordOfTheRingsCitation, starWarsCitation, randomNumber, buttonSimpson, buttonLordOfTheRings,buttonStarWars, setRandomNumber}) {
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
}

export default Citations;