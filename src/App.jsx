import { CategoriesProvider } from "./contexts/CategoriesProvider"
import { DrinksProvider } from "./contexts/DrinksProvider"
import MainLayout from "./layout"
import AppRoutes from "./routes"

function App() {

  return (
    <MainLayout>
      <DrinksProvider>
        <CategoriesProvider>
          <AppRoutes />
        </CategoriesProvider>
      </DrinksProvider>
    </MainLayout>
  )
}

export default App
