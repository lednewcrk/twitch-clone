import { useMemo } from 'react'
import {
    StyleSheet,
    Image,
    Platform,
    PixelRatio,
    ImageProps
} from 'react-native'

export type InlineImageProps = ImageProps

export function InlineImage(props: InlineImageProps) {
    const style = useMemo<InlineImageProps['style']>(() => {
        if (props.style && Platform.OS !== 'ios') {
            const _style = Object.assign({}, StyleSheet.flatten(props.style))

            return _style
        }

        return props.style
    }, [props.style])

    return <Image {...props} style={style} />
}
