import React from "react";
import Navbar from "../../components/Navbar";

export default function LastResult() {
  const analysis = [
    { label: "Wrinkles", percent: "75", tag: "Excellent" },
    { label: "Acne", percent: "75", tag: "Excellent" },
    { label: "Dark Circles", percent: "75", tag: "Excellent" },
  ];

  const regimeSchedule = [
    {
      step: "Step One",
      productType: "Cleanser",
      tag: "Highly Mandatory",
      src: "",
      title: "Papaya Deep Cleanse… ",
      subtitle: "Best suited for acne skin",
      rating: "5 star",
      price: "500",
      bgColor: "#F3E5F7",
    },
    {
      step: "Step Two",
      productType: "Toner",
      tag: "Highly Mandatory",
      src: "",
      title: "Papaya Deep Cleanse… ",
      subtitle: "Best suited for acne skin",
      rating: "5 star",
      price: "500",
      bgColor: "#9AD7A4",
    },
    {
      step: "Step One",
      productType: "Cleanser",
      tag: "Highly Mandatory",
      src: "",
      title: "Papaya Deep Cleanse… ",
      subtitle: "Best suited for acne skin",
      rating: "5 star",
      price: "500",
      bgColor: "#F3E5F7",
    },
    {
      step: "Step One",
      productType: "Cleanser",
      tag: "Highly Mandatory",
      src: "",
      title: "Papaya Deep Cleanse… ",
      subtitle: "Best suited for acne skin",
      rating: "5 star",
      price: "500",
      bgColor: "#EBEBEB",
    },
  ];
  return (
    <>
      <Navbar />
      <div className="p23">
        <div className="bigImgCircle">
          <img src="/Assest-1/Profile Image.png" width="100%" height="100%" />
        </div>
        <div className="card196">
          <div className="cardHeadings pl28">Overall Skin Score</div>
          <div className="d-flex">
            <div style={{ margin: "auto" }}>
              <img src="/Assest-1/Group 129.png" />
            </div>
            <div>
              <div className="titleHeading pb12">Excellent</div>
              <div className="subtitleHeading">
                You have well balanced skin.
              </div>
            </div>
          </div>
        </div>
        <div className="resultHeadings pb8">Details Analysis</div>
        <div className="d-flex horScroll ">
          {analysis &&
            analysis.map((item) => (
              <div key={item.label} className="card162 text-center">
                <div className="py12">{item.label}</div>
                <div>
                  <img src="/Assest-1/Group 129.png" />
                </div>
                <div className="py12">{item.tag}</div>
              </div>
            ))}
        </div>
        <div className="summaryCard pl28">
          <div className="cardHeadings">Skin Summary</div>
          <div>Skin Type: Normal</div>
          <div>Condition : Skin Sensitivity</div>
          <div className="pb12">
            You have all balanced skin. The T-Zone (forehead, chin and nose) may
            be a bit oily but
          </div>
        </div>
        <div className="summaryCard d-flex align-items-center">
          <div className="py12 pl28">
            <div className="concernHeading">Concerns & Solutions</div>
            <div>You have well balanced skin…</div>
          </div>
          <div>
            <img src="/Assest-1/Group_354.png" />
          </div>
          <div>
            <img src="/Assest-1/Scroll Group 2.png" />
          </div>
        </div>
        <div className="resultHeadings pb8">Regime Schedule</div>
        <div className="d-flex justify-content-between ">
          <div className="bgWhite py20 px12 borderRadiusTop">Day Care</div>
          <div className="py20">Noon Care</div>
          <div className="py20">Night Care</div>
        </div>
        <div className="regimeCard">
          {regimeSchedule &&
            regimeSchedule.map((item) => (
              <div key={item.title}>
                <div className="d-flex justify-content-between pb12">
                  <div>
                    <div className="mb12 font13">{item.step}</div>
                    <div className="font20 fontBold">{item.productType}</div>
                  </div>
                  <div>
                    <div
                      className="mb12 font13 px12 py4 borderRadius13"
                      style={{ backgroundColor: `${item.bgColor}` }}
                    >
                      {item.tag}
                    </div>
                    <div className="font13 underline d-flex justify-content-end">
                      View Products
                    </div>
                  </div>
                </div>

                <div className="d-flex justify-content-between py15">
                  <div className="productImage">
                    <img src="" />
                  </div>
                  <div className="pl15">
                    <div className="titleHeading">{item.title}</div>
                    <div className="subtitleHeading">{item.subtitle}</div>
                    <div>{item.rating}</div>
                    <div className="d-flex justify-content-between">
                      <div>Rs. {item.price}</div>
                      <button className="addButton">Add</button>
                    </div>
                  </div>
                </div>
                <div className="borderBottom mb15"></div>
              </div>
            ))}
          <div className="py15">
            <button className="buttonUi bgWhite colorBrand borderBrand font17">
              Buy Full Regime
            </button>
          </div>

          <div className="sticky stickyOfferMain py12 text-center my15 font17 d-flex justify-content-center align-items-center flex-column">
            <div className="">Buy full regime and get 20%off.</div>
            <div>
              <div className="offerSticky mt12 d-flex justify-content-center align-items-center ">Use code REGIME20</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
