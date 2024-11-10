import { useState } from "react"
import { AddCategory, GifGrid } from "./components";

export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['One Punch']);

    const onAddCategory = (value) => {
        
        if(categories.includes(value)){
            alert('Ya existe la categoria')
            return
        }

        setCategories( cat => [value, ...cat])
    }


  return (
    <>
        
        <h1>GifExpertApp</h1>
        
        <AddCategory onNewCategory={onAddCategory}/>

        {
            categories.map( category => (
                <GifGrid key={category} category={category} />
            )) 
        }
            
    </>
  )
}
