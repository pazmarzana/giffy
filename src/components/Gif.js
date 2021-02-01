import React from 'react'
import './Gif.css'

export default function Gif({id, title, url}){
    return (
      <a href={`#${id}`} className='Gif'>
        <h4>{title}</h4>
        <p>{id}</p>
        <img src={url} alt={title}></img>
      </a>
    )
}