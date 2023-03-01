import { StatusBar } from 'expo-status-bar'
import { DefaultTheme, Provider } from 'react-native-paper'
import { ThemeProp } from 'react-native-paper/lib/typescript/types'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import { Router } from './navigation/router'
import { Colors } from './values/colors'

const theme: ThemeProp = {
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors,
        background: Colors.background,
        secondaryContainer: 'transparent'
    }
}

export default function App() {
    return (
        <GestureHandlerRootView style={{ flex: 1 }}>
            <Provider theme={theme}>
                <StatusBar style='light' />
                <Router />
            </Provider>
        </GestureHandlerRootView>
    )
}
