
import { Text } from '@components/Text'
import { type IMealDTO, MealsContext } from '@context/MealsContext'
import { useNavigation } from '@react-navigation/native'
import { dateFormatter, timeFormatter } from '@utils/formatter'
import { useContext, useState } from 'react'
import { KeyboardAvoidingView } from 'react-native'
import { useTheme } from 'styled-components/native'
import * as Styled from './styles'

interface FormProps {
  type: 'create' | 'update'
  meal?: IMealDTO

}

export function Form ({ type, meal }: FormProps) {
  const theme = useTheme()
  const { registerMeal, updateMeal } = useContext(MealsContext)

  const [name, setName] = useState(meal?.name ?? '')
  const [description, setDescription] = useState(meal?.description ?? '')
  const [date, setDate] = useState(meal?.date ?? '')
  const [hour, setHour] = useState(meal?.hour ?? '')

  const [goodDiet, setGoodDiet] = useState(meal?.status === true)
  const [badDiet, setbadDiet] = useState(meal?.status === false)

  const { navigate } = useNavigation()

  function handleUpdateGoodDiet () {
    setbadDiet(false)
    setGoodDiet(!goodDiet)
  }

  function handleUpdateBadDiet () {
    setGoodDiet(false)
    setbadDiet(!badDiet)
  }

  async function handleRegisterMeal () {
    if (name.trim().length <= 0 || date.trim().length <= 0 || hour.trim().length <= 0) {
      return
    }

    try {
      await registerMeal({
        name,
        description,
        date,
        hour,
        status: goodDiet ?? badDiet
      })

      navigate('feedback', { status: goodDiet ?? badDiet })
    } catch (err) {
      console.log(err)
    }
  }

  async function handleUpdateMeal () {
    if (!meal) return

    try {
      await updateMeal({
        id: meal?.id,
        name,
        description,
        date,
        hour,
        status: goodDiet ?? badDiet
      })

      navigate('home')
    } catch (err) {
      console.log(err)
    }
  }

  return (

    <Styled.Form>
      <KeyboardAvoidingView style={{ flex: 1 }} behavior="padding" enabled>
      <Styled.InputLabel>
        <Text weight={theme.FONT_FAMILY.BOLD}>Nome</Text>
        <Styled.Input
          defaultValue={name}
          onChangeText={setName}
          />
      </Styled.InputLabel>

      <Styled.InputLabel>
        <Text weight={theme.FONT_FAMILY.BOLD}>Descrição</Text>
        <Styled.Input
          multiline
          numberOfLines={5}
          defaultValue={description}
          onChangeText={setDescription} />
      </Styled.InputLabel>

      <Styled.Grid2>
        <Styled.GridElementLeft>
          <Text weight={theme.FONT_FAMILY.BOLD}>Data</Text>
          <Styled.Input
            defaultValue={date}
            maxLength={10}
            keyboardType="numeric"
            onChangeText={(text) => {
              const maskedText = dateFormatter(text)
              setDate(maskedText)
            }}
          />
        </Styled.GridElementLeft>

        <Styled.GridElementRight>
          <Text weight={theme.FONT_FAMILY.BOLD}>Hora</Text>
          <Styled.Input
            defaultValue={hour}
            maxLength={5}
            keyboardType="numeric"
            onChangeText={(text) => {
              const maskedText = timeFormatter(text)
              setHour(maskedText)
            }}
          />
        </Styled.GridElementRight>
      </Styled.Grid2>

      <Styled.InputLabel>
        <Text weight={theme.FONT_FAMILY.BOLD}>Está dentro da dieta?</Text>

        <Styled.Grid2>
          <Styled.GoodDietCheckbox
            isChecked={goodDiet}
            onPress={(handleUpdateGoodDiet)}
          >
            <Styled.Circle color='green' />
            <Text weight={theme.FONT_FAMILY.BOLD} size={theme.FONT_SIZE.MD}>Sim</Text>
          </Styled.GoodDietCheckbox>

          <Styled.BadDietCheckbox
            isChecked={badDiet}
            onPress={handleUpdateBadDiet}
          >
            <Styled.Circle color='red' />
            <Text weight={theme.FONT_FAMILY.BOLD} size={theme.FONT_SIZE.MD}>Não</Text>
          </Styled.BadDietCheckbox>
        </Styled.Grid2>
      </Styled.InputLabel>

      <Styled.SubmitButton onPress={type === 'create' ? handleRegisterMeal : handleUpdateMeal}>
        <Text
          color={theme.COLORS.white}
          weight={theme.FONT_FAMILY.BOLD}
          size={theme.FONT_SIZE.MD}>
          {type === 'create' ? 'Cadastrar refeição' : 'Salvar alrações'}
        </Text>
      </Styled.SubmitButton>
    </KeyboardAvoidingView>
    </Styled.Form>
  )
}
