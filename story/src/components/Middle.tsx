import {useState} from 'react'
import Story from './Story'
import Store from './Store'


interface Props {
    setPage: React.Dispatch<React.SetStateAction<boolean>>
    page: boolean
}


const Middle: React.FC<Props> = ({ setPage, page }) => {

return(
    <div className="Middle">
      <h1>Middle</h1>
        { page ? <Story setPage={setPage}/> : <Store setPage={setPage}/>}
    </div>
)
}
export default Middle
