import PRODUCTS from '../tour-data.json'
import { createContext , useState, useEffect} from 'react'
import { getCategoriesAndDocuments } from '../componets/data.utils/json.utils'


export const CategoriesContext =
createContext ({
    products: [],
    categoriesMap: {}
    
})

export const CategoriesProvider = ({children})=>{
    const [products, setProducts] = useState(PRODUCTS)
    const [categoriesMap, setCategoriesMap]= useState({})
useEffect(()=> {
    const categoriesMap = getCategoriesAndDocuments()
        //console.log(categoriesMap)
        //This ensures that the newly created categoriesMap is set into the initial empty object
        setCategoriesMap(categoriesMap)
        
} ,[])
    const value = {products, categoriesMap,setCategoriesMap, setProducts}
    return (
        <CategoriesContext.Provider value= {value}>{children}</CategoriesContext.Provider>
    )
}