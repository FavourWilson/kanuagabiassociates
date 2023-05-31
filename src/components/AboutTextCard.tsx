import React from "react";

const AboutTextCard = ({ text }: { text: string }) => {
  return (
    <div className="about__exp-box">
      <p>{text}</p>
    </div>
  );
};

export default AboutTextCard;
