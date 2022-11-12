import { useState } from "react";
import { useMyDispatch } from "../../utils/types";
import { useNavigate } from "react-router-dom";
import { addTicket } from "../../services/actions/tickets";
import Input from "../../components/Input/Input";
import "./AviaSearch.css";

export const AviaSearch = () => {
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [departure, setDeparture] = useState("");
  const [arrival, setArrival] = useState("");
  const dispatch = useMyDispatch();
  const navigate = useNavigate();

  let date = new Date();
  const now = date.toJSON().split("T")[0];

  const changeFrom = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFrom(e.target.value);
  };
  const changeTo = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTo(e.target.value);
  };
  const changeDeparture = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDeparture(e.target.value);
    console.log(departure);
  };
  const changeArrival = (e: React.ChangeEvent<HTMLInputElement>) => {
    setArrival(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(addTicket(from, to, departure, arrival));
    navigate("/avia/info");
  };

  return (
    <form className="main_container" onSubmit={handleSubmit}>
      <div className="input_wrapper">
        <Input
          label="Откуда"
          value={from}
          setValue={changeFrom}
          placeholder="Город вылета"
          icon={false}
          required={true}
        />
        <Input
          label="Куда"
          value={to}
          setValue={changeTo}
          placeholder="Город прилета"
          icon={false}
          required={true}
        />
        <Input
          label="Туда"
          value={departure}
          setValue={changeDeparture}
          placeholder="дд.мм.гг"
          icon={true}
          minDate={now}
          required={true}
        />
        <Input
          label="Обратно"
          value={arrival}
          setValue={changeArrival}
          placeholder="дд.мм.гг"
          icon={true}
          minDate={departure}
          required={false}
        />
      </div>
      <div className="search_form_container">
        <button disabled={from === "" || to === "" || departure === ""}>
          Найти билеты
        </button>
      </div>
    </form>
  );
};
