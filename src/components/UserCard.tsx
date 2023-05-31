import React from "react";

const UserCard = ({ image }: { image: string }) => {
  return (
    <div className="services__usercard">
      <img src={image} alt="employee" />
      <h4 className="team__card-heading">jeff baigre</h4>
      <p className="team__card-text">partner</p>
    </div>
  );
};

export default UserCard;
