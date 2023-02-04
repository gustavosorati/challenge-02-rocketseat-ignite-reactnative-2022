/* eslint-disable @typescript-eslint/no-non-null-asserted-optional-chain */
/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { Header } from '@screens/Meals/components/Header'
import { Form } from '@screens/Meals/components/Form'

import * as Styled from './styles'
import { useContext } from 'react'
import { MealsContext } from '@context/MealsContext'
import { useRoute } from '@react-navigation/native'

interface RouteParams {
  id: string
  date: string
}

export function UpdateMeal () {
  const { meals } = useContext(MealsContext)
  const route = useRoute()
  const { id, date } = route.params as RouteParams

  const meal = meals
    .find(meal => meal.date === date)
    ?.foods.find(food => food.id === id)

  return (
    <Styled.Container>

      <Header title="Atualizar refeição" />

      <Form
        type='update'
        meal={meal}
      />
    </Styled.Container>
  )
}
