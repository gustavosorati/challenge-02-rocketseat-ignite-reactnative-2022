import styled from 'styled-components/native'

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
