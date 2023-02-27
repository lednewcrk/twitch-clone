import { useEffect } from 'react'
import { Text, View } from 'react-native'
import { Avatar } from '../../components'
import { styles } from './styles'
import { FollowingScreenProps } from './types'

export function FollowingScreen({ navigation }: FollowingScreenProps) {
    return (
        <View style={styles.container}>
            <Text>Home Screen</Text>
        </View>
    )
}
