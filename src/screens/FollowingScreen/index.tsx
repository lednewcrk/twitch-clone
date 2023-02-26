import { Text, View } from 'react-native'
import { styles } from './styles'
import { FollowingScreenProps } from './types'

export function FollowingScreen({}: FollowingScreenProps) {
    return (
        <View style={styles.container}>
            <Text>Home Screen</Text>
        </View>
    )
}
