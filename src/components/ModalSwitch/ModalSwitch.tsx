import { Navigate, Route, Routes } from "react-router-dom";
import { AviaSearch } from "../../pages/AviaSearch/AviaSearch";
import { AviaInfo } from "../../pages/AviaInfo/AviaInfo";

export const ModalSwitch = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Navigate to="/avia" />} />
        <Route path="/avia" element={<AviaSearch />}></Route>
        <Route path="/avia/info" element={<AviaInfo />} />
      </Routes>
    </div>
  );
};
