import { Text, View } from 'react-native'
import { styles } from './styles'
import { SearchForScreenProps } from './types'

export function SearchForScreen({}: SearchForScreenProps) {
    return (
        <View style={styles.container}>
            <Text>Search For Screen</Text>
        </View>
    )
}
