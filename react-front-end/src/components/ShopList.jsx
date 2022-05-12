import { useState, useEffect } from "react"
import axios from "axios"

export default function ShopList() {

  const [shopData, setShopData] = useState([])

  useEffect(() => {
    axios.get('/api/items')
      .then((response) => {
        setShopData(response.data)
      }).catch((error) => {
        console.log('Error', error)
      })
  }, [])



  // const shopItem = 

  return (
    <>

    </>
  )
}