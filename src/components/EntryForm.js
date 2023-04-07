import "./EntryForm.css";
export default function EntryForm() {
  return (
    <>
      <form className="form">
        <label className="title" for="Title">
          NEW ENTRY
        </label>
        <br />
        <label className="motto" for="Motto">
          Motto
        </label>
        <textarea className="inputs" name="motto" id="motto" />
        <br />
        <label for="notes" className="notes_title">
          Notes
        </label>
        <textarea className="inputs" name="notes" id="notes" />
        <br />
        <div className="button_center">
          <Button />
        </div>
      </form>
    </>
  );
}
function Button() {
  return (
    <button className="button" type="submit">
      Create
    </button>
  );
}
