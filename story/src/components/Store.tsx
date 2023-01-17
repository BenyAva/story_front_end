interface Props {
  setPage: React.Dispatch<React.SetStateAction<boolean>>
}
const Store: React.FC<Props> = ({ setPage }) => {
  
  const store = require('./images/store.jpeg')

  const showPage = () => {
      setPage(true)
      console.log(setPage);
  }
  
  return(
      <div className="Store bg-image">
         <h1 className="h1-store">STORE</h1>
          <button onClick={() => showPage()}> Go To Story</button>
          
      </div>
  )
}
export default Store