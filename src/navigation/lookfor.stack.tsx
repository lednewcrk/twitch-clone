import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { LookForScreen } from '../screens/LookForScreen'

import { LookForScreenParamList, Screens } from './types'

const Stack = createNativeStackNavigator<LookForScreenParamList>()

export function LookForScreenStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name={Screens.LookForScreen}
                component={LookForScreen}
            />
        </Stack.Navigator>
    )
}
