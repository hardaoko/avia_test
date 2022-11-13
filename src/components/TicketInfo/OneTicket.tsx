import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ticketInfo } from "../../utils/constants";
import { useMySelector } from "../../utils/types";
import LuggageLarge from "../../images/LuggageLarge.svg";
import LuggageSmall from "../../images/LuggageSmall.svg";
import LogoS7 from "../../images/Logo_s7.png";
import "./TicketInfo.css";

const OneTicket = () => {
  const { from, to, departure, arrival } = useMySelector((store) => store);
  const [numFlight, setNumFlight] = useState(0);
  const navigate = useNavigate();
  const wayTime = "1 ч 55 минут";
  const airportFrom = "SVO";
  const airportTo = "ROV";

  useEffect(() => {
    (from === "" || to === "") && navigate("/avia");
  }, []);

  const handleClick = (e: React.MouseEvent<HTMLInputElement>) => {
    setNumFlight(Number.parseInt(e.currentTarget.value));
  };
  return (
    <div className="ticket_container one_ticket">
      <div className="ticket_info">
        <section className="left_side_ticket">
          <div className="ticket_return_box">Невозвратный</div>
          <img src={LogoS7} alt="S7" />
          <p>S7 Airlines</p>
        </section>
        <section className="center_side_ticket">
          <div className="center_up_box">
            <div className="departure_box">
              <p className="text_time">
                {ticketInfo[numFlight].departure.charAt(0) === "0"
                  ? ticketInfo[numFlight].departure.substring(1)
                  : ticketInfo[numFlight].departure}
              </p>
              <p className="text_city_date">
                {from}
                <br />
                {departure.split("-").reverse().join(".")}
              </p>
            </div>
            <div className="way_line_box">
              <span className="airport_from">{airportFrom}</span>
              <span className="airport_to">{airportTo}</span>
              <div className="way_line"></div>
              <p className="text_way_time">Время в пути {wayTime}</p>
            </div>
            <div className="destination_box">
              <p className="text_time">{ticketInfo[numFlight].arrival}</p>
              <p className="text_city_date">
                {to}
                <br />
                {departure.split("-").reverse().join(".")}
              </p>
            </div>
            <div className="luggage_box">
              <img src={LuggageSmall} alt="small luggage" />
              <img src={LuggageLarge} alt="large luggage" />
            </div>
          </div>
          <div className="center_down_box">
            {ticketInfo.map((ticket, index) => {
              return (
                <div className="form_radio_btn" key={index}>
                  <input
                    id={`radio-${index}`}
                    type="radio"
                    name="radio"
                    value={index}
                    onClick={handleClick}
                    defaultChecked={index === 0}
                  />
                  <label htmlFor={`radio-${index}`}>
                    {ticket.departure} - <span>{ticket.arrival}</span>
                  </label>
                </div>
              );
            })}
          </div>
        </section>
      </div>
      <section className="right_side_ticket">
        <div className="price_box">{ticketInfo[numFlight].price} ₽</div>
      </section>
    </div>
  );
};

export default OneTicket;
