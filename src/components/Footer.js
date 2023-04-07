import "./Footer.css";
export default function Footer() {
  return (
    <footer className="footer">
      <p>Journal App - {new Date().getFullYear()}</p>
    </footer>
  );
}
