import { StyleProp, Text, View, ViewStyle } from 'react-native'
import { styles, TAG_HEIGHT } from './styles'

export { TAG_HEIGHT } from './styles'

export type TagProps = {
    name: string
    height?: number
    style?: StyleProp<ViewStyle>
}

export function Tag({ name, height = TAG_HEIGHT, style = {} }: TagProps) {
    return (
        <View style={[styles.container, { height }, style]}>
            <Text style={styles.name}>{name}</Text>
        </View>
    )
}
