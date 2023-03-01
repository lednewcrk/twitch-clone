import { StyleSheet } from 'react-native'
import { Colors } from '../../values/colors'

export const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.gray
    },
    absoluteContainer: {
        ...StyleSheet.absoluteFillObject,
        justifyContent: 'flex-end',
        paddingLeft: 8,
        paddingBottom: 8
    },
    onlineViewerContainer: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    onlineViewerCount: {
        color: Colors.textDark,
        fontWeight: 'bold',
        fontSize: 18
    },
    dot: {
        marginRight: 8
    }
})
