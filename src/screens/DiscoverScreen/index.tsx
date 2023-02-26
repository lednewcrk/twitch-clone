import { Text, View } from 'react-native'
import { styles } from './styles'
import { DiscoverScreenProps } from './types'

export function DiscoverScreen({}: DiscoverScreenProps) {
    return (
        <View style={styles.container}>
            <Text>Discover Screen</Text>
        </View>
    )
}
