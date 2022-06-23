import "./App.css";
import Landing from "./components/Landing";
import { useState } from "react";
import Header from "./components/Header/Header";
import Form from "./components/Form/Form";
import List from "./components/List/List";
import TotalMoney from "./components/TotalMoney/TotalMoney";

function App() {
  const [listTransactions, setListTransactions] = useState([]);
  const [filterEntradasOn, setFilterEntradasOn] = useState(false);
  const [filterSaidasOn, setFilterSaidasOn] = useState(false);
  const [showAllOn, setShowAllOn] = useState(true);
  const [landing, setLanding] = useState(true);

  function filtrarEntradas() {
    setFilterEntradasOn(true);
    setShowAllOn(false);
  }

  function filtrarSaidas() {
    setFilterSaidasOn(true);
    setShowAllOn(false);
    setFilterEntradasOn(false);
  }

  function zerarFiltros() {
    setShowAllOn(true);
    setFilterSaidasOn(false);
    setFilterEntradasOn(false);
  }

  function excluirCard(id) {
    const filtered = listTransactions.filter((transaction) => {
      return transaction.id !== id;
    });
    setListTransactions(filtered);
  }

  return (
    <>
      {landing ? (
        <Landing setLanding={setLanding} />
      ) : (
        <div className="App">
          <Header setLanding={setLanding} />
          <div className="app-container">
            <div className="app-content">
              <div className="form">
                <Form
                  listTransactions={listTransactions}
                  setListTransactions={setListTransactions}
                />
                <TotalMoney listTransactions={listTransactions} />
              </div>
              <div className="resumo-financeiro">
                <div className="resumo-financeiro--head">
                  <div className="resumo-financeiro--title">
                    <h3>Resumo financeiro</h3>
                  </div>
                  <div className="resumo-financeiro--buttons">
                    <button className="filtrar-todos" onClick={zerarFiltros}>
                      Todos
                    </button>
                    <button className="filtrar" onClick={filtrarEntradas}>
                      Entradas
                    </button>
                    <button className="filtrar" onClick={filtrarSaidas}>
                      {" "}
                      Despesas
                    </button>
                  </div>
                </div>
                <List
                  listTransactions={listTransactions}
                  filterEntradasOn={filterEntradasOn}
                  filterSaidasOn={filterSaidasOn}
                  showAllOn={showAllOn}
                  excluirCard={excluirCard}
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default App;
