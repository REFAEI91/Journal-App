import "./EntryForm.css";
export default function EntryForm() {
  return (
    <>
      <form className="form">
        NEW ENTRY
        <br />
        <label className="motto" for="Motto">
          Motto:
        </label>
        <textarea className="textarea" name="Motto" />
        <br />
        <label for="Notes">Notes: </label>
        <textarea className="textarea" name="Notes" />
        <br />
        <Button />
      </form>
    </>
  );
}
function Button() {
  return <button type="submit">Create</button>;
}
