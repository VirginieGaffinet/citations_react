// import css
import './App.css';
// import react
import { useState,  useEffect } from 'react';
// import data
import simpsonCitations from '../../data/citations-table/simpson';
import lordOfTheRingsCitations from '../../data/citations-table/lordOfTheRings';
import starWarsCitations from '../../data/citations-table/starWars';
// import composants
import Header from "../Header/Header";
import Citations from '../Citations/Citations';
import ButtonChoose from '../ButtonChoose/ButtonChoose';

function App() {
  const [simpsonCitation] = useState(simpsonCitations);
  const [buttonSimpson, setButtonSimpson] = useState(false);
  const [lordOfTheRingsCitation] = useState(lordOfTheRingsCitations);
  const [buttonLordOfTheRings, setButtonLordOfTheRings] = useState(false);
  const [starWarsCitation] = useState(starWarsCitations);
  const [buttonStarWars, setButtonStarWars] = useState(false);
  const [randomNumber, setRandomNumber] = useState (0);
  const [buttonClick, setButtonClick] = useState(false);

  function checkButtonClick() {
    if (buttonSimpson || buttonLordOfTheRings || buttonStarWars) {
      setButtonClick(true);
      // console.log(buttonClick);
    } else {
      setButtonClick(false);
    }
  };

  useEffect(() => {
    checkButtonClick();
  });

  return (
    <div className={'app ' + (buttonLordOfTheRings ? 'lotr-img' : '' || buttonSimpson ? 'simpson-img' : '' || buttonStarWars ? 'star-wars-img' : '')}>
      <Header 
        buttonSimpson={buttonSimpson}
        buttonLordOfTheRings={buttonLordOfTheRings}
        buttonStarWars={buttonStarWars}
      />
      {buttonClick && <Citations 
        simpsonCitation={simpsonCitation}
        lordOfTheRingsCitation={lordOfTheRingsCitation}
        starWarsCitation={starWarsCitation}
        randomNumber={randomNumber}
        buttonSimpson={buttonSimpson}
        buttonLordOfTheRings={buttonLordOfTheRings}
        buttonStarWars={buttonStarWars}
        setRandomNumber={setRandomNumber}
      />}
      <ButtonChoose 
        setButtonSimpson={setButtonSimpson}
        setButtonLordOfTheRings={setButtonLordOfTheRings}
        setButtonStarWars={setButtonStarWars}
      />
    </div>
  );
}

export default App;
