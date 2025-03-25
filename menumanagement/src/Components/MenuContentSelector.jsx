import React from 'react'
import Food from './Food'
import Drinks from '../Components/Drinks.jsx'

const MenuContentSelector = ({menu}) => {
  return (
    <>
     
    {menu == 'Foods'?
        <Food menu={menu}/>: menu=='Drinks' ?<Drinks menu={menu}/>:''  
    }
    </>
  )
}

export default MenuContentSelector