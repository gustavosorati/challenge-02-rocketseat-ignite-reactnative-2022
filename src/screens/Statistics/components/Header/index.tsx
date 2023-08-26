import { useTheme } from 'styled-components/native'
import { useNavigation } from '@react-navigation/native'

import { Text } from '@components/Text'
import { TouchableOpacity } from 'react-native'

import { ArrowLeft } from 'phosphor-react-native'

import * as Styled from './styles'

interface HeaderProps {
  porcent: string
  status?: boolean | null
}

export function Header ({ porcent, status }: HeaderProps) {
  const theme = useTheme()

  const { navigate } = useNavigation()

  return (
    <Styled.Container status={status}>
      <TouchableOpacity
        onPress={() => { navigate('home') }}
        style={{ marginTop: 16 }}
      >
        <ArrowLeft size={22} color={status ? theme.COLORS['green-dark'] : theme.COLORS['red-dark']}/>
      </TouchableOpacity>

      <Styled.Central>
        <Text
          weight={theme.FONT_FAMILY.BOLD}
          size={theme.FONT_SIZE['3XL']}
        >{Number(porcent) > 0 ? porcent.replace('.', ',') : 0}%</Text>
        <Text
          weight={theme.FONT_FAMILY.REGULAR}
          size={theme.FONT_SIZE.MD}
        >das refeições dentro da dieta</Text>
      </Styled.Central>

      <Styled.HiddenBlock />
    </Styled.Container>
  )
}
