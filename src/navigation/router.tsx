import { NavigationContainer } from '@react-navigation/native'
import { MainStack } from './main.stack'

export function Router() {
    return (
        <NavigationContainer>
            <MainStack />
        </NavigationContainer>
    )
}
