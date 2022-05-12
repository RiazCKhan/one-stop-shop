import { useState } from "react"

export default function ShopList() {

  const [shopData, setShopData] = useState([])

  axios.get('/api/items')
    .then((response, request) => {
      console.log(response.data)
    })


// const shopItem = 

  return(
    <>

    </>
  )
}