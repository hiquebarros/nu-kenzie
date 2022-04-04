import './styles.css'
import {BsFillTrashFill} from 'react-icons/bs'

function Card({transaction}){
    return(
        <>
        {transaction.value > 0 ? (
        <div className="green-card">
        <div className='card-left'>
            <h3>{transaction.description}</h3>
            <span>{transaction.type}</span>
        </div>
        <div className='card-right'>
            <h5>R$ {Math.abs(transaction.value).toFixed(2).replace('.',',')}</h5>
            <button className='card-excluir'><BsFillTrashFill /></button>
        </div>
    </div>
    ) : (
        <div className="red-card">
        <div className='card-left'>
            <h3>{transaction.description}</h3>
            <span>{transaction.type}</span>
        </div>
        <div className='card-right'>
            <h5>R$ {Math.abs(transaction.value).toFixed(2).replace('.',',')}</h5>
            <button className='card-excluir'><BsFillTrashFill /></button>
        </div>
    </div>
    )}
        </>
        
    )
}
export default Card