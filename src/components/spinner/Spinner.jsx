import "./spinner.css";

const Spinner = ()=> {
  return (
    <div className="spinner-container">
      <div className="spinner"></div>
      <p>Carregando o site...</p>
    </div>
  );
}
export default Spinner;