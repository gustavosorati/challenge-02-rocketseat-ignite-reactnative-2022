import { useTheme } from 'styled-components/native'
import { useNavigation, useRoute } from '@react-navigation/native'

import { Image } from 'react-native'
import { Text } from '@components/Text'

import badStatus from '../../../assets/bad_status.png'
import goodStatus from '../../../assets/good_status.png'

import * as Styled from './styles'

interface RouteParams {
  status: boolean
}

export function Feedback () {
  const theme = useTheme()

  const route = useRoute()
  const { status } = route.params as RouteParams

  const { navigate } = useNavigation()

  return (
    <Styled.Container>
      <Styled.Content>
        <Text
          color={status ? theme.COLORS['green-dark'] : theme.COLORS['red-dark']}
          size={theme.FONT_SIZE['2XL']}
          weight={theme.FONT_FAMILY.BOLD}>
          {status ? 'Continue assim!' : 'Que pena!'}
        </Text>

        {status
          ? (
          <Text
            size={theme.FONT_SIZE.LG}>
            Você continua <Text weight={theme.FONT_FAMILY.BOLD}>dentro da dieta.</Text> Muito bem!
          </Text>
            )
          : (
          <Text size={theme.FONT_SIZE.LG}>
            Você <Text weight={theme.FONT_FAMILY.BOLD}>saiu da dieta</Text> dessa vez, mas continue se esforçando e não desista!
          </Text>
            )}

        <Image
          source={status ? goodStatus : badStatus}
          style={{ marginTop: 40 }}
        />

        <Styled.Btn onPress={() => { navigate('home') }}>
          <Text
            color={theme.COLORS.white}
            weight={theme.FONT_FAMILY.BOLD}
            size={theme.FONT_SIZE.SM}>
            Ir para a página inicial
          </Text>
        </Styled.Btn>
      </Styled.Content>
    </Styled.Container>
  )
}
