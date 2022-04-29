import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import national from './nationalText.json';
import international from './internationalText.json';
import { useCopyToClipboard } from 'usehooks-ts';

interface AppProps {}

function App({}: AppProps) {
  // Create the count state.
  const [count, setCount] = useState(0);
  const [nationalMotion, setNationalMotion] = useState(0);
  const [internationalMotion, setInternationalMotion] = useState(0);
  const [value, copy] = useCopyToClipboard()
  // Create the counter (+1 every second).
  function handleNationalClick() {
		setNationalMotion(Math.floor(Math.random()*486));
  }
	function handleInternationalClick() {
		setInternationalMotion(Math.floor(Math.random()*306));
		if (internationalMotion === 12){
			setInternationalMotion(13);
		}
  }

//   useEffect(() => {
//     const timer = setTimeout(() => setCount(count + 1), 1000);
//     return () => clearTimeout(timer);
//   }, [count, setCount]);
  // Return the App component.
  return (
    <div className="App">
		<h3 className="title">the University of Tokyo   UTDS</h3>
		<div>
			<button className="button" onClick={handleNationalClick}>national motion</button>
			<button className="copy" onClick={() => copy(national[nationalMotion])}>Copy</button>
			<div className="motion">{national[nationalMotion]}</div>
			</div>
		<div>
			<button className="button" onClick={handleInternationalClick}>international motion</button>
			<button className="copy" onClick={() => copy(national[nationalMotion])}>Copy</button>
			<div className="motion">{international[internationalMotion]}</div>
		</div>
    </div>
  );
}

export default App;
