import styled from 'styled-components/native'
import { Platform, StatusBar } from 'react-native'

const isAndroid = Platform.OS === 'android'

interface Props {
  status?: boolean
}

export const Container = styled.SafeAreaView<Props>`
  padding-top: ${isAndroid ? `${StatusBar.currentHeight}px` : 0};
  flex: 1;

  background-color: ${({ theme, status }) => {
    if (status === true) return theme.COLORS['green-light']

    if (status === false) return theme.COLORS['red-light']

    if (status === undefined) return theme.COLORS['gray-5']
  }};
`

export const Content = styled.View`
  flex: 1;
  align-items: center;
  padding: 40px 24px;
  border-radius: 20px;
  background-color: ${({ theme }) => theme.COLORS.white};
`

export const Grid2 = styled.View`
  flex-direction: row;
`

export const GridElementLeft = styled.View`
  flex: 1;
  margin-right: 4px;
`

export const GridElementRight = styled.View`
  flex: 1;
  margin-left: 4px;
`
