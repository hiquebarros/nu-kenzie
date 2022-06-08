import "./App.css";
import { useState } from "react";
import Header from "./components/Header/Header";
import Form from "./components/Form/Form";
import List from "./components/List/List";
import TotalMoney from "./components/TotalMoney/TotalMoney";

function App() {
  const [listTransactions, setListTransactions] = useState([
  ]);
  const [filterEntradasOn, setFilterEntradasOn] = useState(false)
  const [filterSaidasOn, setFilterSaidasOn] = useState(false)
  const [showAllOn, setShowAllOn] = useState(true)

  function filtrarEntradas(){
    setFilterEntradasOn(true)
    setShowAllOn(false)
  }

  function filtrarSaidas(){
    setFilterSaidasOn(true)
    setShowAllOn(false)
    setFilterEntradasOn(false)
  }

  function zerarFiltros(){
    setShowAllOn(true)
    setFilterSaidasOn(false)
    setFilterEntradasOn(false)
  }

  function excluirCard(id){
    const filtered = listTransactions.filter(transaction => {
      return transaction.id !== id
    })
    setListTransactions(filtered)
  }

  return (
    <div className="App">
      <div>
        <Header></Header>
      </div>
      <div className="content">
        <div className="form">
          <Form
            listTransactions={listTransactions}
            setListTransactions={setListTransactions}
          ></Form>
          <TotalMoney listTransactions={listTransactions}></TotalMoney>
        </div>
        <div className="resumo-financeiro">
          <div className="resumo-financeiro--head">
            <div className="resumo-financeiro--title">
              <h3>Resumo financeiro</h3>
            </div>
              <div className="resumo-financeiro--buttons">
                <button className="filtrar-todos" onClick={zerarFiltros}>Todos</button>
                <button className="filtrar" onClick={filtrarEntradas}>Entradas</button>
                <button className="filtrar" onClick={filtrarSaidas}> Despesas</button>
              </div>
          </div>
          <List
            listTransactions={listTransactions}
            filterEntradasOn={filterEntradasOn}
            filterSaidasOn={filterSaidasOn}
            showAllOn={showAllOn}
            excluirCard={excluirCard}
          ></List>
        </div>
      </div>
    </div>
  );
}

export default App;
