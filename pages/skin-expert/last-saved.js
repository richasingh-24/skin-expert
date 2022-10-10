import { useRouter } from "next/router";
import React from "react";
import Navbar from "../../components/Navbar";

export default function LastSaved() {
  const router = useRouter()
  const resultArray = [
    "Myself",
    "Female",
    "40yrs",
    "Desk job",
    "Oily",
    "I breakout",
    "Dark Spots",
    "Dullness",
    "Uneven Texture",
    "Dark Circles",
  ];

  const handleResult = () =>{
    router.push('/skin-expert/last-result')
  }

  return (
    <>
      <Navbar />
      <div className="p48">
        <div className="imgCircle"></div>
        <div className="pTop19 headFontColor">Hi Vaneesa,</div>
        <div className="pTop19 font15">
          Your previous saved options, feel free to edit to alter the results….
        </div>
        <div className="pTop19">
        {resultArray &&
          resultArray.map((item) => (
              <button className="resultBox font17" key={item}>
                {item}
              </button>
          ))}
          </div>
        <div className="pTop79">
          <button className="buttonUi bgWhite font17 colorGray">Edit</button>
        </div>
        <div className="pTop17">
          <button
            className="buttonUi brandBgColor font17 colorWhite"
            onClick={() => handleResult()}
          >
            Continue
          </button>
        </div>
      </div>
    </>
  );
}
