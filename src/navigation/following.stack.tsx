import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { Avatar } from '../components/Avatar'
import { FollowingScreen } from '../screens'
import { Colors } from '../values/colors'
import { FollowingScreenParamList, Screens } from './types'

const Stack = createNativeStackNavigator<FollowingScreenParamList>()

export function FollowingScreenStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name={Screens.FollowingScreen}
                component={FollowingScreen}
                options={{
                    title: '',
                    headerTitle: () => null,
                    headerStyle: {
                        backgroundColor: Colors.background
                    },
                    headerLeft: () => (
                        <Avatar
                            source={{
                                uri: 'https://criticalhits.com.br/wp-content/uploads/2022/04/blob_7gmc.jpg'
                            }}
                        />
                    )
                }}
            />
        </Stack.Navigator>
    )
}
