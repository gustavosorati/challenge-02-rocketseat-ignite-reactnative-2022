import { type TextInput, type TextInputProps } from 'react-native'

import { useTheme } from 'styled-components/native'

import { Text } from '@components/Text'
import * as Styled from './styles'
import { forwardRef } from 'react'

type Props = TextInputProps & {
  title: string
}

export const InputLabel = forwardRef<TextInput, Props>(({ title, ...props }: Props, ref) => {
  const theme = useTheme()

  return (
    <Styled.InputLabel>
      <Text weight={theme.FONT_FAMILY.BOLD}>{title}</Text>
      <Styled.Input
        multiline
        numberOfLines={5}
        ref={ref}
        {...props}
      />
    </Styled.InputLabel>
  )
})

InputLabel.displayName = 'TextInput'
