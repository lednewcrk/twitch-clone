import { DefaultTheme, Provider } from 'react-native-paper'
import { ThemeProp } from 'react-native-paper/lib/typescript/types'
import { Router } from './src/navigation/router'
import { Colors } from './src/values/colors'

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
        <Provider theme={theme}>
            <Router />
        </Provider>
    )
}
