import { Button } from '@components/Button'
import styled, { css } from 'styled-components/native'

export const Form = styled.ScrollView`
  flex: 1;
  padding: 40px 24px;
  /* border-radius: 20px; */
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  background-color: ${({ theme }) => theme.COLORS.white};
`

export const InputLabel = styled.View``

interface InputProps {
  multiline?: boolean
}

export const Input = styled.TextInput<InputProps>`
  width: 100%;
  border: 1px solid ${({ theme }) => theme.COLORS['gray-5']};
  padding: 8px 16px;
  margin-top: 8px;
  margin-bottom: 24px;
  border-radius: 6px;

  textAlignVertical: ${({ multiline }) => multiline ? 'top' : 'center'}
`

export const Grid2 = styled.View`
  flex-direction: row;
`

export const GridElementLeft = styled(InputLabel)`
  flex: 1;
  margin-right: 8px;
`

export const GridElementRight = styled(InputLabel)`
  flex: 1;
  margin-left: 8px;
`

interface Props {
  isChecked: boolean
}

export const GenericCheckbox = styled.Pressable`
  margin-top: 8px;
  flex: 1;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  height: 50px;
  background-color: ${({ theme }) => theme.COLORS['gray-5']};
  border-color: ${({ theme }) => theme.COLORS['gray-5']};
  border-radius: 6px;
`

export const GoodDietCheckbox = styled(GenericCheckbox)<Props>`
  margin-right: 8px;
  ${({ isChecked, theme }) => isChecked && css`
    border: 1px solid ${theme.COLORS['green-dark']};
    background-color: ${theme.COLORS['green-light']};
  `}
`

export const BadDietCheckbox = styled(GenericCheckbox)<Props>`
  margin-left: 8px;
  ${({ isChecked, theme }) => isChecked && css`
    border: 1px solid ${theme.COLORS['red-dark']};
    background-color: ${theme.COLORS['red-light']};
  `}
`

interface CircleProps {
  color: 'green' | 'red'
}

export const Circle = styled.View<CircleProps>`
  width: 8px;
  height: 8px;
  border-radius: 4px;
  background-color: ${({ theme, color }) => color === 'green' ? theme.COLORS['green-dark'] : theme.COLORS['red-dark']};
  margin-right: 8px;
`

export const SubmitButton = styled(Button)`
  margin-top: 40px;
`
