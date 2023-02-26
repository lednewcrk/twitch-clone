import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs'
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons'
import {
    DiscoverScreen,
    FollowingScreen,
    SearchByScreen,
    SearchForScreen
} from '../screens'
import { Colors } from '../values/colors'
import { HomeTabsParamList, Screens } from './types'

const Tab = createMaterialBottomTabNavigator<HomeTabsParamList>()

function getTabIcon(name: any, color: string) {
    return <MaterialCommunityIcons name={name} color={color} size={26} />
}

export function HomeTabs() {
    return (
        <Tab.Navigator
            activeColor={Colors.primaryLight}
            inactiveColor={Colors.text}
            barStyle={{ backgroundColor: Colors.background }}
        >
            <Tab.Screen
                name={Screens.FollowingScreen}
                component={FollowingScreen}
                options={{
                    tabBarLabel: 'Seguindo',
                    tabBarIcon: ({ color, focused }) =>
                        getTabIcon(focused ? 'heart' : 'heart-outline', color)
                }}
            />
            <Tab.Screen
                name={Screens.DiscoverScreen}
                component={DiscoverScreen}
                options={{
                    tabBarLabel: 'Descubra',
                    tabBarIcon: ({ color, focused }) =>
                        getTabIcon(
                            focused ? 'compass' : 'compass-outline',
                            color
                        )
                }}
            />
            <Tab.Screen
                name={Screens.SearchForScreen}
                component={SearchForScreen}
                options={{
                    tabBarLabel: 'Procurar',
                    tabBarIcon: ({ color, focused }) =>
                        getTabIcon(
                            focused ? 'card-multiple' : 'card-multiple-outline',
                            color
                        )
                }}
            />
            <Tab.Screen
                name={Screens.SearchByScreen}
                component={SearchByScreen}
                options={{
                    tabBarLabel: 'Busca',
                    tabBarIcon: ({ color }) => getTabIcon('magnify', color)
                }}
            />
        </Tab.Navigator>
    )
}
