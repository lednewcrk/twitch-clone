import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs'
import { HomeScreen } from '../screens/Home'

const Tab = createMaterialBottomTabNavigator()

export function HomeTabs() {
    return (
        <Tab.Navigator>
            <Tab.Screen name='Home' component={HomeScreen} />
        </Tab.Navigator>
    )
}
