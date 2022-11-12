import "./AviaInfo.css";
import LogoS7 from "../../images/Logo_s7.png";
import { useMySelector } from "../../utils/types";
import { ticketInfo } from "../../utils/constants";
import LuggageLarge from "../../images/LuggageLarge.svg";
import LuggageSmall from "../../images/LuggageSmall.svg";

export const AviaInfo = () => {
  const { from, to, departure, arrival } = useMySelector((store) => store);
  const wayTime = "1 ч 55 минут";
  const airportFrom = "SVO";
  const airportTo = "ROV";
  return (
    <div className="avia_info_container">
      <div className="ticket_container">
        <section className="left_side_ticket">
          <div className="ticket_return_box">Невозвратный</div>
          <img src={LogoS7} alt="S7" />
          <p>S7 Airlines</p>
        </section>
        <section className="center_side_ticket">
          <div className="center_up_box">
            <div className="departure_box">
              <p className="text_time">{ticketInfo.departure}</p>
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
              <p className="text_time">{ticketInfo.arrival}</p>
              <p className="text_city_date">
                {to}
                <br />
                {departure.split("-").reverse().join(".")}
              </p>
            </div>
            <div className="luggage_box">
              <img src={LuggageSmall} />
              <img src={LuggageLarge} />
            </div>
          </div>
          <div className="center_down_box"></div>
        </section>
        <section className="right_side_ticket">
          <div className="price_box">{ticketInfo.price} ₽</div>
        </section>
      </div>
    </div>
  );
};
