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
  const [cityTo, setCityTo] = useState(to);
  const [departureDate, setDepartureDate] = useState(departure);
  const [arrivalDate, setArrivalDate] = useState(arrival || "");
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
    setCityTo(e.target.value);
    checkInvalid();
  };
  const changeDeparture = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDepartureDate(e.target.value);
    checkInvalid();
  };
  const changeArrival = (e: React.ChangeEvent<HTMLInputElement>) => {
    setArrivalDate(e.target.value);
  };

  const checkInvalid = () => {};

  return (
    <form className="main_container" onSubmit={handleSubmit}>
      <div className="input_wrapper">
        <Input
          label="????????????"
          value={cityFrom}
          setValue={changeFrom}
          placeholder="?????????? ????????????"
          icon={false}
          required={true}
        />
        <Input
          label="????????"
          value={cityTo}
          setValue={changeTo}
          placeholder="?????????? ??????????????"
          icon={false}
          required={true}
        />
        <Input
          label="????????"
          value={departureDate}
          setValue={changeDeparture}
          placeholder="????.????.????"
          icon={true}
          minDate={now}
          required={true}
        />
        <Input
          label="??????????????"
          value={arrivalDate}
          setValue={changeArrival}
          placeholder="????.????.????"
          icon={true}
          minDate={departureDate}
          required={false}
        />
      </div>
      <div className="search_form_container">
        <button disabled={!valid}>?????????? ????????????</button>
      </div>
    </form>
  );
};
