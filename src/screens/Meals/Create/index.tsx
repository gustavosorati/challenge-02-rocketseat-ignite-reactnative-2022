import { Header } from '@screens/Meals/components/Header'
import { Form } from '@screens/Meals/components/Form'

import * as Styled from './styles'

export function RegisterMeal () {
  return (
    <Styled.Container>
      <Header title="Nova refeição" />

      <Form type='create' />
    </Styled.Container>
  )
}
