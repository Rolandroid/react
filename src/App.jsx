import { CartProvider } from "./contexts/CartProvider"
import { CategoriesProvider } from "./contexts/CategoriesProvider"
import { DrinksProvider } from "./contexts/DrinksProvider"
import MainLayout from "./layout"
import AppRoutes from "./routes"

function App() {

  return (
    <MainLayout>
      <DrinksProvider>
        <CategoriesProvider>
          <CartProvider>
          <AppRoutes />
          </CartProvider>
        </CategoriesProvider>
      </DrinksProvider>
    </MainLayout>
  )
}

export default App
