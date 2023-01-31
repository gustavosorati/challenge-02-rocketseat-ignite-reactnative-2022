import { useContext, useState } from 'react'
import { useTheme } from 'styled-components/native'
import { MealsContext } from '@context/MealsContext'
import { useNavigation, useRoute } from '@react-navigation/native'

import { Text } from '@components/Text'
import { Button } from '@components/Button'
import { Header } from '@screens/Meals/components/Header'

import { PencilSimpleLine, Trash } from 'phosphor-react-native'

import * as Styled from './styles'
import { DeleteModal } from '../components/DeleteModal'

interface RouteParams {
  id: string
  date: string
}

export function ShowMeals () {
  const { meals, deleteMeal } = useContext(MealsContext)
  const [modalDeleteVisible, setModalDeleteVisible] = useState(false)

  const route = useRoute()
  const { id, date } = route.params as RouteParams

  const { navigate } = useNavigation()

  const theme = useTheme()

  const meal = meals
    .find(meal => meal.date === date)
    ?.foods.find(food => food.id === id)

  function handleUpdate () {
    if (meal) { navigate('update', { id: meal.id, date: meal.date }) }
  }

  async function handleDeleteMeal () {
    if (meal) await deleteMeal(meal?.id, meal?.date)

    setModalDeleteVisible(false)
    navigate('home')
  }

  if (!meal) {
    return <Text>Aguardando</Text>
  }

  return (
    <Styled.Container status={meal.status}>

      <Header
        title="Refeição"
        status={meal.status}
      />

      <Styled.Card>
        <Styled.Section>
          <Text weight={theme.FONT_FAMILY.BOLD}>{meal.name}</Text>
          <Text size={theme.FONT_SIZE.SM}>{meal.description}</Text>
        </Styled.Section>

        <Styled.Section>
          <Text
            weight={theme.FONT_FAMILY.BOLD}
            size={theme.FONT_SIZE.SM}>
            Data e hora
          </Text>
          <Text size={theme.FONT_SIZE.LG}>{meal.date} às {meal.hour}</Text>
        </Styled.Section>

        <Styled.Section>
          <Styled.Status>
            <Styled.Circle color={meal.status ? 'green' : 'red'} />
            <Text size={theme.FONT_SIZE.SM}>
              {meal.status ? 'dentro da dieta' : 'fora da dieta' }
            </Text>
          </Styled.Status>
        </Styled.Section>

        <Styled.Footer>
          <Button onPress={handleUpdate}>
            <PencilSimpleLine size={16} color={theme.COLORS.white} />
            <Text
              color={theme.COLORS.white}
              size={theme.FONT_SIZE.SM}
              weight={theme.FONT_FAMILY.BOLD}
              style={{ marginLeft: 8 }}>
              Editar refeição
            </Text>
          </Button>

          <Button
            onPress={() => { setModalDeleteVisible(!modalDeleteVisible) }}
            variant='secondary'
            style={{ marginTop: 8 }}>
            <Trash size={16} color={theme.COLORS['gray-2']} />
            <Text
              color={theme.COLORS['gray-2']}
              size={theme.FONT_SIZE.SM}
              weight={theme.FONT_FAMILY.BOLD}
              style={{ marginLeft: 8 }}>
              Excluir refeição
            </Text>
          </Button>
        </Styled.Footer>
      </Styled.Card>

      <DeleteModal
        visible={modalDeleteVisible}
        deleteModal={handleDeleteMeal}
        closeModal={setModalDeleteVisible}
      />
    </Styled.Container>
  )
}
