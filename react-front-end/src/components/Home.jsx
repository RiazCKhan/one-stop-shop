import axios from 'axios';

export default function Home() {


  axios.get('/api/items')
    .then((response, request) => {
      console.log(response.data)
    })

  return (
    <>
      Hello
      {/* Render ItemList */}
    </>
  )
}