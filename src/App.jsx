import Header from "./header/header"
import MainSection from "./main/main-section"
import { CartProvider } from "./context/cart"

function App() {
  return (
    <>
      <CartProvider>
        <Header />
        <MainSection />
      </CartProvider>
    </>
  )
}

export default App
