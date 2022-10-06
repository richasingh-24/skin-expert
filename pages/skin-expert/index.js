import { useRouter } from "next/router";
import React from "react";
import Navbar from "../../components/Navbar";

export default function SkinExpert() {
    const router = useRouter()
    const handleResult = () => {
        router.push('/skin-expert/last-result')
    }

  return (
    <>
      <Navbar />
      <div className="p30">
        <div className="">
          <div className="pTop121 headFontColor">Hello, Krishna!</div>
          <div className="headFontColor"> Welcome back</div>
        </div>
        <div className="pTop19 font15">
          Please enter your valid phone number. We will send you 4-digit code to
          verify your account. (Dummy copy)
        </div>
        <div className="pTop79">
          <button className="buttonUi brandBgColor font17 colorWhite" onClick={()=>handleResult()}>View my last results</button>
        </div>
        <div className="pTop17">
          <button className="buttonUi bgWhite font17 colorGray">Retake Test</button>
        </div>
        <div className="d-flex colorTerms pTop17 font14">
          <div className="px-2">Terms of Service</div>
          <div className="px-2">Privacy Policy</div>
        </div>
      </div>
    </>
  );
}
