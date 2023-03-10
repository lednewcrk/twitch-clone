import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { Avatar } from '../components/Avatar'
import { LookForScreen } from '../screens/LookForScreen'
import { Colors } from '../values/colors'

import { LookForScreenParamList, Screens } from './types'

const Stack = createNativeStackNavigator<LookForScreenParamList>()

export function LookForScreenStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name={Screens.LookForScreen}
                component={LookForScreen}
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
                            fadeAnimationIsEnabled={false}
                        />
                    )
                }}
            />
        </Stack.Navigator>
    )
}
