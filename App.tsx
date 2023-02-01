import { StatusBar } from 'expo-status-bar'
import { ThemeProvider } from 'styled-components/native'

import { useFonts } from 'expo-font'
import { Nunito_400Regular, Nunito_700Bold } from '@expo-google-fonts/nunito'

import { Text } from 'react-native'

import theme from './src/styles/theme'
import { Routes } from '@routes/index'

export default function App () {
  const [fontsLoaded] = useFonts({ Nunito_400Regular, Nunito_700Bold })

  return (
    <ThemeProvider theme={theme}>
      <StatusBar />

      { fontsLoaded ? <Routes /> : <Text>Não carregou</Text> }
    </ThemeProvider>
  )
}
