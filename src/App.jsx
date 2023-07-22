import { AuthProvider } from "./contexts/AuthProvider"
import { CartProvider } from "./contexts/CartProvider"
import { CategoriesProvider } from "./contexts/CategoriesProvider"
import { DrinksProvider } from "./contexts/DrinksProvider"
import { ModalProvider } from "./contexts/ModalProvider"
import MainLayout from "./layout"
import AppRoutes from "./routes"
import { BrowserRouter as Router } from "react-router-dom";


function App() {

  return (
    <Router>
   <AuthProvider>
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
   </AuthProvider>
    </Router>
  )
}

export default App
