import { Text, View } from 'react-native'
import { styles } from './styles'
import { SearchByScreenProps } from './types'

export function SearchByScreen({}: SearchByScreenProps) {
    return (
        <View style={styles.container}>
            <Text>Search By Screen</Text>
        </View>
    )
}
