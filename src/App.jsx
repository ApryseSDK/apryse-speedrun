import { useState } from "react";
import "./App.css";
import Header from "./components/Header";

import challengeInfo from "./data/challenges.json";

import Challenge1 from "./components/Challenge1";
import Challenge2 from "./components/Challenge2";
import Challenge3 from "./components/Challenge3";
import Challenge4 from "./components/Challenge4";
import Challenge5 from "./components/Challenge5";
const challengeComponents = [
  Challenge1,
  Challenge2,
  Challenge3,
  Challenge4,
  Challenge5,
];

function App() {
  const [activeIndex, setActiveIndex] = useState(0);
  const currentChallenge = challengeInfo[activeIndex];
  const ChallengeComponent = challengeComponents[activeIndex];

  return (
    <>
      <Header onNavClick={setActiveIndex} activeIndex={activeIndex} />

      <main className="main-content">
        <div className="content-layout">
          <section className="text-section">
            {currentChallenge ? (
              <>
                <h2>{currentChallenge.name}</h2>
                <p>{currentChallenge.description}</p>
                <ul>
                  {currentChallenge.requirements.map((req, index) => (
                    <li key={index}>{req}</li>
                  ))}
                </ul>
              </>
            ) : (
              <></>
            )}
          </section>

          <section className="viewer-section">
            {ChallengeComponent ? (
              <ChallengeComponent />
            ) : (
              <div className="webviewer"></div>
            )}
          </section>
        </div>
      </main>
    </>
  );
}

export default App;
