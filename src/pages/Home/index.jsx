import { useRef, useState } from "react"
import { v4 } from "uuid"
import { AddButton, Container, Product, TrashButton } from "./styles"

function Home() {

  const inputRef = useRef()
  const [products, setProducts] = useState([])

  function clicked() {

    if (inputRef.current.value !== '') {
      setProducts([
        {
          id: v4(),
          name: inputRef.current.value
        },
        ...products
      ])

      inputRef.current.value = ''
    }
  }

  function deleteProduct(id) {
    setProducts(products.filter(item => item.id !== id))
  }

  return (
    <>      
      <Container>
        <h1>Shopping List</h1>
        <input placeholder="products..." ref={inputRef} />
        <AddButton onClick={clicked}>Add</AddButton>
        {
          products.map((item) => (
            <Product key={item.id}>
              <p>{item.name}</p>
              <TrashButton onClick={() => deleteProduct(item.id)}>🗑️</TrashButton>
            </Product>
          ))
        }
      </Container>
    </>
  )

}
export default Home
