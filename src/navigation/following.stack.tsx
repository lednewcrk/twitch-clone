import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { FollowingScreen } from '../screens'
import { FollowingScreenParamList, Screens } from './types'

const Stack = createNativeStackNavigator<FollowingScreenParamList>()

export function FollowingScreenStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name={Screens.FollowingScreen}
                component={FollowingScreen}
            />
        </Stack.Navigator>
    )
}
