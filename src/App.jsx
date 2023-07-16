import { CartProvider } from "./contexts/CartProvider"
import { CategoriesProvider } from "./contexts/CategoriesProvider"
import { DrinksProvider } from "./contexts/DrinksProvider"
import { ModalProvider } from "./contexts/ModalProvider"
import MainLayout from "./layout"
import AppRoutes from "./routes"


function App() {

  return (
    <ModalProvider>
      <CartProvider>
        <MainLayout>
          <DrinksProvider>
            <CategoriesProvider>
              <AppRoutes />
            </CategoriesProvider>
          </DrinksProvider>
        </MainLayout>
      </CartProvider>
    </ModalProvider>
  )
}

export default App
