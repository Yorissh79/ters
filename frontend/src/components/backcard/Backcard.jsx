import React, {useState} from 'react'
import style from './Backcard.module.scss'
import Card from "./components/card/Card.jsx";

const Backcard = ({data, who}) => {

    const [searchText, setSearchText] = useState('')
    const [filterText, setFilterText] = useState('default')

    const regex = new RegExp(searchText + ".+$")
    const filteredData = data?.filter(item => item.name.toLowerCase().search(regex) !== -1)
        .sort((a, b) => {
            if (filterText === "asc") return Number(b.price) - Number(a.price)
            if (filterText === "desc") return Number(a.price) - Number(b.price)
            if (filterText === "default") return 0
        })

    return (
       <div className={style.main}>

           <div className={style.top}>
               <input placeholder="Search for..." value={searchText} onChange={(e) => setSearchText(e.target.value)} />
               <button onClick={() => {setFilterText("desc")}}>Az</button>
               <button onClick={() => {setFilterText("asc")}}>Cox</button>
               <button onClick={() => {setFilterText("default")}}>Default</button>
           </div>
           <div className={style.cards}>
               {filteredData?.map((item) => <Card key={"item" + Math.random() * 10212} item={item} who={who} />)}
           </div>

       </div>
    )
}

export default Backcard