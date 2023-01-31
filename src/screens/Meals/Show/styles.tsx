import styled from 'styled-components/native'
import { Platform, StatusBar } from 'react-native'

const isAndroid = Platform.OS === 'android'

interface ContainerProps {
  status?: boolean
}

export const Container = styled.SafeAreaView<ContainerProps>`
  padding-top: ${isAndroid ? `${StatusBar.currentHeight}px` : 0};
  flex: 1;

  background-color: ${({ theme }) => theme.COLORS['gray-5']};
  background-color: ${({ theme, status }) => {
    if (status === true) return theme.COLORS['green-light']

    if (status === false) return theme.COLORS['red-light']
  }};
`

export const Card = styled.View`
  flex: 1;
  padding: 40px 24px;
  border-radius: 20px;
  background-color: ${({ theme }) => theme.COLORS.white};
`

export const Section = styled.View`
  margin-bottom: 24px;
`

export const Footer = styled.View`
  margin-top: auto;
`

export const Status = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;

  width: 120px;
  padding: 4px 8px;
  background-color: ${({ theme }) => theme.COLORS['gray-6']};
  border-radius: 16px;
`

interface CircleProps {
  color: 'green' | 'red'
}

export const Circle = styled.View<CircleProps>`
  width: 6px;
  height: 6px;
  border-radius: 4px;
  background-color: ${({ theme, color }) => color === 'green' ? theme.COLORS['green-dark'] : theme.COLORS['red-dark']};
  margin-right: 6px;
`
