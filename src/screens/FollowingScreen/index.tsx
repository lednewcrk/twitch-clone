import { View, Text } from 'react-native'
import { styles } from './styles'
import { FollowingScreenProps } from './types'

export function FollowingScreen({}: FollowingScreenProps) {
    return (
        <View style={styles.container}>
            <Text>Following Screen</Text>
        </View>
    )
}
