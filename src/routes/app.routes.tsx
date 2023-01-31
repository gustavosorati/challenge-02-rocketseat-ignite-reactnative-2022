import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { Home } from '@screens/Home'
import { RegisterMeal } from '@screens/Meals/Create'
import { Feedback } from '@screens/Meals/Feedback'
import { ShowMeals } from '@screens/Meals/Show'
import { UpdateMeal } from '@screens/Meals/Update'
import { Statistics } from '@screens/Statistics'

const { Navigator, Screen } = createNativeStackNavigator()

export function AppRoutes () {
  return (
    <Navigator screenOptions={{ headerShown: false }} initialRouteName="home">
      <Screen name="home" component={Home} />
      <Screen name="create" component={RegisterMeal} />
      <Screen name="update" component={UpdateMeal} />
      <Screen name="show" component={ShowMeals} />
      <Screen name="feedback" component={Feedback} />
      <Screen name="statistics" component={Statistics} />
    </Navigator>
  )
}
