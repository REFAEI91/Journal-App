import star from "./star.svg";
// import starfilled from "./star-filled.svg";
export default function TabBar() {
  return (
    <>
      {new Date().getDate()}.{new Date().getMonth()}.{new Date().getFullYear()}
      <button>
        <img src={star} alt="star" />
      </button>
      <h2>"That's life in the city"</h2>
      <p> Si sine causak dkjls skdjlkdf </p>
    </>
  );
}
