import "./TabBar.css";
import { useState } from "react";
import star from "./star.svg";
import starfilled from "./star-filled.svg";
export default function TabBar() {
  const [isFilled, setIsFilled] = useState(false);
  return (
    <div className="tab">
      <date className="date" type="date">
        {new Date().getDate()}.{new Date().getMonth() + 1}.
        {new Date().getFullYear()}
      </date>
      <button
        type="button"
        className="star"
        onClick={() => {
          setIsFilled(!isFilled);
        }}
      >
        {isFilled ? (
          <img src={starfilled} alt="star filled" />
        ) : (
          <img src={star} alt="star" />
        )}
      </button>

      <h3 className="title">"That's life in the city"</h3>
      <p> Si sine causak dkjls skdjlkdf </p>
      <p className="bottom"></p>
    </div>
  );
}
