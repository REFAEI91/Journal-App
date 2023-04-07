import "./TabBar.css";
import { useState } from "react";
import { ReactComponent as StarFilled } from "./star-filled.svg";
import { ReactComponent as Star } from "./star.svg";
export default function TabBar(entry) {
  const [isFavorite, setisFavorite] = useState(false);
  return (
    <div className="tab">
      <button
        type="button"
        className="star"
        onClick={() => {
          setisFavorite(!isFavorite);
        }}
      >
        {isFavorite ? <StarFilled /> : <Star />}
      </button>
      <p className="date">{entry.date}</p>
      <h3 className="title">{entry.motto}</h3>
      <p> {entry.notes}</p>
      <p className="bottom"></p>
    </div>
  );
}
