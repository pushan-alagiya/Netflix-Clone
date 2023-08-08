import { ReactComponent as Mylang } from "../../assets/asset 6.svg";
import "./Lang.css";

const Lang = () => {
  return (
    <div className="language flex">
      <Mylang></Mylang>
      <select name="lang" id="lang">
        <option value="english">English</option>
        <option value="hindi">Hindi</option>
      </select>
    </div>
  );
};

export default Lang;
