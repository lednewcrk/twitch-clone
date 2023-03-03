import { StyleSheet } from 'react-native'
import { Colors } from '../../../values/colors'

export const styles = StyleSheet.create({
    container: {
        aspectRatio: 1920 / 1080,
        backgroundColor: Colors.darkGray
    },
    video: {
        ...StyleSheet.absoluteFillObject
    },
    loading: {
        ...StyleSheet.absoluteFillObject
    }
})
