import React from "react";

function DebitCard() {
  return (
    <div className="cardGroup">
      {/* card right img */}
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Rupay-Logo.png/320px-Rupay-Logo.png"
        alt=""
        className="cardLogo"
      />
{/* card  chip img */}
      <img
        src="https://cdn-icons-png.flaticon.com/512/6404/6404100.png"
        alt=""
        className="cardChip"
      />

      <div className="card_number">1234 567 8920 3200</div>
      <div className="card_name">User</div>
      <div className="card_from">12/23</div>
      <div className="card_to">10/28</div>
      <div className="card_ring"></div>
    </div>
  );
}

export default DebitCard;
