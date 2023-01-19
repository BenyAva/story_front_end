interface Props {
  setPage: React.Dispatch<React.SetStateAction<boolean>>
}
const Store: React.FC<Props> = ({ setPage }) => {
  
  const store = require('./images/store.jpeg')


  
  return(
      <div className="Store bg-image">
         <h1 className="h1-store">STORE</h1>
  
          
      </div>
  )
}
export default Store