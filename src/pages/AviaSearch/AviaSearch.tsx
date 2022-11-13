import { useEffect, useState } from "react";
import { useMyDispatch, useMySelector } from "../../utils/types";
import { useNavigate } from "react-router-dom";
import { addTicket } from "../../services/actions/tickets";
import Input from "../../components/Input/Input";
import "./AviaSearch.css";
import { cities } from "../../utils/constants";

export const AviaSearch = () => {
  const { from, to, departure, arrival } = useMySelector((store) => store);
  const [cityFrom, setCityFrom] = useState(from);
  const [cityTo, setTo] = useState(to);
  const [departureDate, setDeparture] = useState(departure);
  const [arrivalDate, setArrival] = useState(arrival || "");
  const [valid, setValid] = useState(true);
  const dispatch = useMyDispatch();
  const navigate = useNavigate();

  let date = new Date();
  const now = date.toJSON().split("T")[0];

  useEffect(() => {
    let validTemp = cityFrom !== "" && cityTo !== "" && departureDate !== "";
    console.log(validTemp);
    if (
      cities.includes(cityFrom) &&
      cities.includes(cityTo) &&
      cityFrom !== cityTo
    )
      validTemp = validTemp && true;
    else validTemp = false;
    setValid(validTemp);
  }, [cityFrom, cityTo, departureDate]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(addTicket(cityFrom, cityTo, departureDate, arrivalDate));
    navigate("/avia/info");
  };

  const changeFrom = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCityFrom(e.target.value);
    checkInvalid();
  };
  const changeTo = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTo(e.target.value);
    checkInvalid();
  };
  const changeDeparture = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDeparture(e.target.value);
    checkInvalid();
  };
  const changeArrival = (e: React.ChangeEvent<HTMLInputElement>) => {
    setArrival(e.target.value);
  };

  const checkInvalid = () => {};

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
          value={cityTo}
          setValue={changeTo}
          placeholder="Город прилета"
          icon={false}
          required={true}
        />
        <Input
          label="Туда"
          value={departureDate}
          setValue={changeDeparture}
          placeholder="дд.мм.гг"
          icon={true}
          minDate={now}
          required={true}
        />
        <Input
          label="Обратно"
          value={arrivalDate}
          setValue={changeArrival}
          placeholder="дд.мм.гг"
          icon={true}
          minDate={departureDate}
          required={false}
        />
      </div>
      <div className="search_form_container">
        <button disabled={!valid}>Найти билеты</button>
      </div>
    </form>
  );
};
