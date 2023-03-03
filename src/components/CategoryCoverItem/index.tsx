import { StyleProp, View, ViewStyle } from 'react-native'
import { Text } from 'react-native-paper'
import { Category } from '../../types'
import { AnimatedFastImage } from '../AnimatedFastImage'
import { Dot } from '../Dot'
import { styles } from './styles'

export type CategoryCoverItemProps = {
    category: Category
    style?: StyleProp<ViewStyle>
}

export function CategoryCoverItem({
    category: { coverUrl, name, onlineViewerCount },
    style
}: CategoryCoverItemProps) {
    const formated = new Intl.NumberFormat('pt-BR', {
        notation: 'compact'
    }).format(onlineViewerCount ?? 0)

    return (
        <View style={[styles.container, style]}>
            <View style={styles.coverImagecontainer}>
                <AnimatedFastImage
                    source={{ uri: coverUrl }}
                    style={styles.coverImage}
                />
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
