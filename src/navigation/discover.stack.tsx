import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { DiscoverScreen } from '../screens'
import { DiscoverScreenParamList, Screens } from './types'

const Stack = createNativeStackNavigator<DiscoverScreenParamList>()

export function DiscoverScreenStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name={Screens.DiscoverScreen}
                component={DiscoverScreen}
            />
        </Stack.Navigator>
    )
}
