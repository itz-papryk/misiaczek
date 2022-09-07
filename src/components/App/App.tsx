import React, { useState } from "react";
import Countdown from "../Countdown/Countdown";
import "./App.scss";

const App = () => {
  const [year, setYear] = useState<any>(null);
  return (
    <div className='mainWrapper'>
      <div className='header'>
        <h1>
          Michuuuuu jesteśmy już razem <span>💖💗💓</span>&nbsp;:
        </h1>
      </div>
      <Countdown setYear={setYear} />
      <div className='important'>
        {year === 1 ? (
          <p>
            Jesteś najlepszym co mnie w życiu spotkało.
            <br />
            Już rok nie wiem kieedy to minęło miśkuu <br />
            Kocham cie najmocniej na świecie 💖💗
          </p>
        ) : (
          <p>
            Jesteś najlepszym co mnie w życiu spotkało.
            <br />
            Mam nadzieje że będziemy ze sobą na zawsze&nbsp;.
            <br />
            💖 KOCHAM CIE! 💓
          </p>
        )}
      </div>
      <div className='cprights'>
        Developed & Designed by Patryk Ilkiw (Martynka's Boyfriend) &copy;
      </div>
      <div className='decorator decorator-1'>💗</div>
      <div className='decorator decorator-2'>💖</div>
      <div className='decorator decorator-3'>🥰</div>
      <div className='decorator decorator-4'>🤓</div>
      {year === 1 && (
        <>
          <div className='decorator decorator-5'>🎉</div>
          <div className='decorator decorator-6'>💞</div>
        </>
      )}
    </div>
  );
};

export default App;
