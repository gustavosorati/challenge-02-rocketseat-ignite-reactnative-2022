import { Text } from '@components/Text'
import { useTheme } from 'styled-components/native'
import * as Styled from './style'

interface Props {
  title: number
  description: string
  status?: boolean
}

export function CardInfo ({ title, description, status }: Props) {
  const theme = useTheme()

  return (
    <Styled.Container status={status}>
      <Text
        weight={theme.FONT_FAMILY.BOLD}
        size={theme.FONT_SIZE['2XL']}
      >{title}</Text>
      <Text size={theme.FONT_SIZE.MD} style={{ textAlign: 'center' }}>{description}</Text>
    </Styled.Container>
  )
}
