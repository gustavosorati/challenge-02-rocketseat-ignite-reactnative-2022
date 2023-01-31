import { useTheme } from 'styled-components/native'
import { useNavigation } from '@react-navigation/native'

import { Text } from '@components/Text'
import { TouchableOpacity } from 'react-native'

import { ArrowLeft } from 'phosphor-react-native'

import * as Styled from './styles'

interface HeaderProps {
  title: string
  status?: boolean
}

export function Header ({ title, status }: HeaderProps) {
  const theme = useTheme()

  const { navigate } = useNavigation()

  return (
    <Styled.Header status={status}>
      <TouchableOpacity
        onPress={() => { navigate('home') }}>
        <ArrowLeft size={22} />
      </TouchableOpacity>

      <Text weight={theme.FONT_FAMILY.BOLD}>{title}</Text>

      <Styled.HiddenBlock />
    </Styled.Header>
  )
}
