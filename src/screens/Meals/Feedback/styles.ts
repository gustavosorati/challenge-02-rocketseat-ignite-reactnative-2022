import styled from 'styled-components/native'
import { Platform, StatusBar } from 'react-native'
import { Button } from '@components/Button'

const isAndroid = Platform.OS === 'android'

export const Container = styled.SafeAreaView`
  padding-top: ${isAndroid ? `${StatusBar.currentHeight}px` : 0};
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.COLORS.white};
`

export const Content = styled.View`
  justify-content: center;
  align-items: center;
`

export const Btn = styled(Button)`
  margin-top: 32px;
  width: 191px;
  align-items: center;
  justify-content: center;
`
