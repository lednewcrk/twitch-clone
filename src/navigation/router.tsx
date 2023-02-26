import {
    NavigationContainer,
    Theme,
    DefaultTheme
} from '@react-navigation/native'
import { Colors } from '../values/colors'
import { MainStack } from './main.stack'

const theme: Theme = {
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors,
        background: Colors.background
    }
}

export function Router() {
    return (
        <NavigationContainer theme={theme}>
            <MainStack />
        </NavigationContainer>
    )
}
