import { View, Text } from 'react-native'
import { AnimatedFastImage } from '../AnimatedFastImage'
import { Dot } from '../Dot'
import { styles } from './styles'

export type LiveStreamThumbnailProps = {
    streamUrl: string
    size?: { width: number; height: number }
    onlineViewerCount: number | null
}

export function LiveStreamThumbnail({
    streamUrl,
    size = { width: 150, height: 84 },
    onlineViewerCount
}: LiveStreamThumbnailProps) {
    const formated = new Intl.NumberFormat('pt-BR', {
        notation: 'compact'
    }).format(onlineViewerCount ?? 0)
    return (
        <View style={[styles.container, size]}>
            <AnimatedFastImage
                style={styles.thumbnail}
                source={{
                    uri: 'https://pbs.twimg.com/media/DeYVmVqW4AEIjlk.jpg'
                }}
            />
            <View style={styles.absoluteContainer}>
                <View style={styles.onlineViewerContainer}>
                    <Dot style={styles.dot} size={12} />
                    <Text style={styles.onlineViewerCount}>{formated}</Text>
                </View>
            </View>
        </View>
    )
}
