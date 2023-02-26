import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { HomeTabs } from './home.tabs'

const Stack = createNativeStackNavigator()

export function MainStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen name='HomeTabs' component={HomeTabs} />
        </Stack.Navigator>
    )
}
