import "./App.css";
import Header from "../src/components/Header.js";
import EntryForm from "../src/components/EntryForm.js";
import EntriesSection from "../src/components/EntriesSection.js";
import Footer from "../src/components/Footer.js";
function App() {
  return (
    <>
      <Header />
      <EntryForm />
      <EntriesSection />
      <Footer />
    </>
  );
}

export default App;
