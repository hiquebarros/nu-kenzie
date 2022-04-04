import "./styles.css";
import "./reset.css";
import { useState } from "react";

function Form({ listTransactions, setListTransactions}) {
  const [description, setDescription] = useState("");
  const [type, setType] = useState("entrada");
  const [value, setValue] = useState('');

  function ListarTrans() {
    if(value > 0 && description){
      if(type === "entrada"){
        setListTransactions([
          ...listTransactions,
          { description: description, type: type, value: parseInt(value) },
        ]);
      } else {
        setListTransactions([
          ...listTransactions,
          { description: description, type: type, value: parseInt(value) - (parseInt(value) * 2) },
        ]);
      }
    }
  }

  return (
    <>
      <div className="form-descricao">
        <h5>Descrição</h5>
        <input
          className="form-descricao--input"
          placeholder="Digite aqui sua descrição"
          onChange={(event) => setDescription(event.target.value)}
        ></input>
        <span>Ex: Compra de roupas</span>
      </div>
      <div className="form-valor">
        <div className="form-valor--div1">
          <h5>Valor</h5>
          <input
            type="number"
            className="form-valor--input"
            onChange={(event) => setValue(event.target.value)}
          ></input>
        </div>
        <div className="form-valor--div2">
          <h5>Tipo de valor</h5>
          <select
            className="form-valor--select"
            onChange={(event) => setType(event.target.value)}
          >
            <option value="entrada" selected>
              Entrada
            </option>
            <option value="saída">Saída</option>
          </select>
        </div>
      </div>
      <div className="form-button">
        <button onClick={() => ListarTrans()}>Inserir valor</button>
      </div>
    </>
  );
}

export default Form;
