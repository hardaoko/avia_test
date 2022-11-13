import { FC, useRef } from "react";
import { IInputProps } from "../../utils/types";
import DateRangeIcon from "@mui/icons-material/DateRange";
import "./Input.css";
import { cities } from "../../utils/constants";

const Input: FC<IInputProps> = ({
  placeholder,
  label,
  value,
  icon,
  minDate,
  setValue,
  required,
}) => {
  const color = value === "" ? "#5C5C5C" : "#5C87DB ";
  const inputRef = useRef() as React.MutableRefObject<HTMLInputElement>;
  let filtered: Array<string> = [];

  if (!icon) {
    filtered = cities.filter((city) =>
      city.toUpperCase().includes(value.toUpperCase())
    );
  }

  const handleClick = () => {
    inputRef.current.focus();
  };

  return (
    <div>
      <label htmlFor={label}>{label}</label>
      {icon ? (
        <label htmlFor={label} className="text_input" onClick={handleClick}>
          <DateRangeIcon
            sx={{
              color: { color },
              height: "18px",
              width: "18px",
              marginRight: "13px",
            }}
          />
          <input
            type="date"
            id={label}
            onChange={setValue}
            value={value}
            ref={inputRef}
            min={minDate}
            style={{ color: `${value ? "#5C5C5C" : "#B7BAC1"}` }}
            required={required}
          />
        </label>
      ) : (
        <div className="text_input" onClick={handleClick}>
          <input
            type="text"
            onChange={setValue}
            value={value}
            placeholder={placeholder}
            ref={inputRef}
            required={required}
            list={value}
          />
          <datalist id={value}>
            {filtered.map((city, index) => {
              return <option value={city} key={index} />;
            })}
          </datalist>
        </div>
      )}
    </div>
  );
};

export default Input;
