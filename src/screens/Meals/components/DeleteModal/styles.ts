import { Button } from '@components/Button'
import { Text } from '@components/Text'
import styled from 'styled-components/native'

export const Container = styled.Modal`
  flex: 1;
  justify-content: center;
  align-items: center;
`

export const Content = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: rgba(0,0,0,.75);
`

export const Modal = styled.View`
  width: 327px;
  padding: 24px;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.COLORS.white};
`

export const ModalHeader = styled(Text)`
  text-align: center;
  font-weight: 700;
  font-size: ${({ theme }) => theme.FONT_SIZE.XL}px;
`

export const ButtonsContainer = styled.View`
  margin-top: 32px;
  flex-direction: row;
`

export const Btn = styled(Button)`
  width: auto;
  flex: 1;
  padding: 16px 24px;
`
