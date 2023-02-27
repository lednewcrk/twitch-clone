import {
    NavigationContainer,
    Theme,
    DefaultTheme
} from '@react-navigation/native'
import { Colors } from '../values/colors'
import { HomeTabs } from './home.tabs'

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
            <HomeTabs />
        </NavigationContainer>
    )
}
