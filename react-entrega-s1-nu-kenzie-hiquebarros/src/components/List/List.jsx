import Card from "../Card/Card"
import NoCard from "../../img/NoCard.svg"
import './styles.css'

function List({listTransactions, filterEntradasOn, filterSaidasOn}){

    const entradasList = listTransactions.filter(item => {
        return item.type === "entrada"
    })

    const saidasList = listTransactions.filter(item => {
        return item.type === "saída"
    })

    return(
        <div>
        {listTransactions.length < 1 ? (
            <div className="empty">
            <h2>Você ainda não possui nenhum lançamento</h2>
            <img src={NoCard}></img>
            </div>
        ) : filterEntradasOn === true ? (
             entradasList.map((transaction, index) => <Card transaction={transaction} key={index}></Card>)
        ) : filterSaidasOn === true ? (
            saidasList.map((transaction, index) => <Card transaction={transaction} key={index}></Card>)
        ) : listTransactions.map((transaction, index) => <Card transaction={transaction} key={index}></Card>)
    }   
        </div>
    )
}

export default List