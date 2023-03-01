import { Image, StyleProp, View, ViewStyle } from 'react-native'
import { Text } from 'react-native-paper'
import { Dot } from '../Dot'
import { styles } from './styles'

export type CategoryCoverItemProps = {
    coverUrl: string
    name: string
    onlineViewerCount: number
    style?: StyleProp<ViewStyle>
}

export function CategoryCoverItem({
    coverUrl,
    name,
    onlineViewerCount,
    style
}: CategoryCoverItemProps) {
    const formated = new Intl.NumberFormat('pt-BR', {
        notation: 'compact'
    }).format(onlineViewerCount)

    return (
        <View style={[styles.container, style]}>
            <View style={styles.coverImagecontainer}>
                <Image source={{ uri: coverUrl }} style={styles.coverImage} />
            </View>
            <Text style={styles.name} numberOfLines={1}>
                {name}
            </Text>
            <View style={styles.onlineViewerContainer}>
                <Dot style={styles.dot} />
                <Text style={styles.onlineViewerCount}>{formated}</Text>
            </View>
        </View>
    )
}
