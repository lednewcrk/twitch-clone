import { StyleSheet } from 'react-native'
import { Colors } from '../../values/colors'

export const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    coverImagecontainer: {
        flex: 1,
        marginBottom: 8
    },
    coverImage: {
        height: '100%'
    },
    name: {
        color: Colors.text,
        fontWeight: 'bold',
        fontSize: 18
    },
    onlineViewerContainer: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    onlineViewerCount: {
        color: Colors.textDark
    },
    dot: {
        marginRight: 8
    }
})
