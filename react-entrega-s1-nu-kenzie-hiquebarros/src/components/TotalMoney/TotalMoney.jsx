function TotalMoney({listTransactions}){
    return(
        <div>
        {listTransactions.length > 0 ? (
        <div className="valor-total">
          <div className="valor-total--left">
            <h3>Valor total:</h3>
            <span>O valor se refere ao saldo</span>
          </div>
          <div className="valor-total--rigth">
            <h4>$ {listTransactions.reduce((a, b) => a + b.value, 0)}</h4>
          </div>
        </div>
      ) : (
        <></>
      )}
        </div>
    )
}

export default TotalMoney