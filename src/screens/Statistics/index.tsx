
import { Text } from '@components/Text'
import { type IMealDTO, MealsContext } from '@context/MealsContext'
import { useContext } from 'react'
import { useTheme } from 'styled-components/native'
import { CardInfo } from './components/CardInfo'
import { Header } from './components/Header'

import * as Styled from './styles'

export function Statistics () {
  const theme = useTheme()
  const { getMeals } = useContext(MealsContext)

  const meals = getMeals()
  const allFoods = meals.reduce<IMealDTO[]>((acc, item) => {
    acc.push(...item.foods)
    return acc
  }, [])

  let aux = 0
  const bestSequencieGoodFoods = allFoods.reduce((acc, item) => {
    if (item.status) aux = aux + 1

    if (!item.status) {
      if (aux > acc) acc = aux

      aux = 0
    }
    return acc
  }, 0)

  const countGoodFoods = meals.reduce((goodFoodCount, meal) => {
    return goodFoodCount + meal.foods.filter((food) => food.status).length
  }, 0)
  const countBadFoods = meals.reduce((badFoodCount, meal) => {
    return badFoodCount + meal.foods.filter((food) => !food.status).length
  }, 0)

  const porcentGoodFoods = ((countGoodFoods / allFoods.length) * 100)
  const porcentBadFoods = ((countBadFoods / allFoods.length) * 100)

  const resultStatus = porcentGoodFoods > porcentBadFoods

  return (
    <Styled.Container status={resultStatus || undefined}>

      <Header
        porcent={resultStatus ? porcentGoodFoods.toFixed(2) : porcentBadFoods.toFixed(2)}
        status={resultStatus || undefined}
      />

      <Styled.Content>
        <Text weight={theme.FONT_FAMILY.BOLD} style={{ marginBottom: 23 }}>
          Estatísticas gerais
        </Text>

        <CardInfo title={bestSequencieGoodFoods} description="melhor sequência de pratos dentro da dieta" />
        <CardInfo title={allFoods.length} description="refeições registradas" />

        <Styled.Grid2>
          <Styled.GridElementLeft>
            <CardInfo
              title={countGoodFoods}
              description="refeições dentro da dieta"
              status={true}
            />
          </Styled.GridElementLeft>

          <Styled.GridElementRight>
            <CardInfo
              title={countBadFoods}
              description="refeições dentro da dieta"
              status={false}
            />
          </Styled.GridElementRight>
        </Styled.Grid2>

      </Styled.Content>
    </Styled.Container>
  )
}
