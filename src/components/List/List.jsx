import Card from "../Card/Card";
import NoCard from "../../img/NoCard.svg";
import "./styles.css";

function List({ listTransactions, filterEntradasOn, filterSaidasOn, excluirCard }) {
  const entradasList = listTransactions.filter((item) => {
    return item.type === "entrada";
  });

  const saidasList = listTransactions.filter((item) => {
    return item.type === "saída";
  });

  return (
    <div className="list">
      {listTransactions.length < 1 ? (
        <div className="empty">
          <h2>Você ainda não possui nenhum lançamento</h2>
          <img src={NoCard}></img>
        </div>
      ) : filterEntradasOn === true ? (
        entradasList.map((transaction) => (
          <Card transaction={transaction} key={transaction.id} excluirCard={excluirCard}></Card>
        ))
      ) : filterSaidasOn === true ? (
        saidasList.map((transaction) => (
          <Card transaction={transaction} key={transaction.id} excluirCard={excluirCard}></Card>
        ))
      ) : (
        listTransactions.map((transaction, index) => (
          <Card transaction={transaction} key={index} excluirCard={excluirCard}></Card>
        ))
      )}
    </div>
  );
}

export default List;
