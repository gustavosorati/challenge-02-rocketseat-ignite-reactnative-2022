import { NavigationContainer } from '@react-navigation/native'
import { MealsContextProvider } from '../context/MealsContext'
import { AppRoutes } from './app.routes'

export function Routes () {
  return (
    <NavigationContainer>
      <MealsContextProvider>
        <AppRoutes />
      </MealsContextProvider>
    </NavigationContainer>
  )
}
