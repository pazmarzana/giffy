import React, {useState} from 'react'
import { Link, useLocation } from "wouter"
import {useGifs} from '../../hooks/useGifs'

import Spinner from '../../components/Spinner'
import ListOfGifs from '../../components/ListOfGifs'

const POPULAR_GIFS = ["cat","panda","dog","suits","programmer"]

export default function Home(){
    const [keyword,setKeyword] = useState('')
    const[path,setPath] = useLocation()

    const {loading, gifs} = useGifs({keyword})

    const handleSubmit = evt => {
        evt.preventDefault()
        setPath(`/search/${keyword}`)
    }

    const handleChange = evt =>{
        setKeyword(evt.target.value)
    }
    return(
        <>
  
            <form onSubmit={handleSubmit}>
                <input onChange={handleChange} type="text" value={keyword} placeholder="Search a gif here ..."/>
            </form>
                {loading ? <Spinner /> : <ListOfGifs gifs={gifs} />
                }
            <h3 className="App-title">Los gifs mas populares</h3>
            <ul>
                {
                   POPULAR_GIFS.map((popularGif)=>(
                       <li key={popularGif}>
                           <Link to={`/search/${popularGif}`}>
                               Gifs de {popularGif}
                           </Link>
                       </li>
                        )
                   ) 
                }
            </ul>
        </>
    )
}