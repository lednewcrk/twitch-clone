import { StyleSheet, Dimensions } from 'react-native'
import { Colors } from '../../values/colors'

export const ANIMATED_HEADER_HEIGHT = 70

export const styles = StyleSheet.create({
    container: {
        height: ANIMATED_HEADER_HEIGHT,
        backgroundColor: Colors.background,
        alignItems: 'flex-start'
    },
    title: {
        color: Colors.text,
        fontSize: 46,
        fontWeight: 'bold'
    }
})
