import { View } from 'react-native'
import { Tag, TAG_HEIGHT } from '../Tag'
import { Tag as TagType } from '../../types'
import { styles } from './styles'
import { useMemo } from 'react'

export type TagsList = {
    tags: TagType[]
    numberOfLines?: number
}

export function TagList({ tags, numberOfLines }: TagsList) {
    const containerHeight = useMemo(() => {
        if (numberOfLines) {
            return TAG_HEIGHT * numberOfLines
        }
        return undefined
    }, [numberOfLines])

    return (
        <View style={[styles.container, { height: containerHeight }]}>
            {tags.map(it => (
                <Tag key={it} name={it} style={styles.tag} />
            ))}
        </View>
    )
}
