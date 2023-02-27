import { Text, View } from 'react-native'
import { styles } from './styles'
import { LookForScreenProps } from './types'

export function LookForScreen({}: LookForScreenProps) {
    return (
        <View style={styles.container}>
            <Text>Look For Screen</Text>
        </View>
    )
}
