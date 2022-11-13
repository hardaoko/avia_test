import "./AviaInfo.css";
import OneTicket from "../../components/TicketInfo/OneTicket";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useMySelector } from "../../utils/types";
import TwoTickets from "../../components/TicketInfo/TwoTickets";

export const AviaInfo = () => {
  const { from, to, arrival } = useMySelector((store) => store);
  const navigate = useNavigate();
  useEffect(() => {
    (from === "" || to === "") && navigate("/avia");
  });

  return arrival === "" ? (
    <div className="avia_info_container">
      <OneTicket />
    </div>
  ) : (
    <div className="avia_info_container">
      <TwoTickets />
    </div>
  );
};
