import { StyleProp, Text, TextStyle } from 'react-native'
import { styles } from './styles'

export type ListHeaderProps = {
    title: string
    style?: StyleProp<TextStyle>
}

export function ListHeader({ title, style }: ListHeaderProps) {
    return <Text style={[styles.title, style]}>{title}</Text>
}
