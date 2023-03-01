import { StyleSheet } from 'react-native'
import { Colors } from '../../values/colors'

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row'
    },
    infoContainer: {
        flex: 1,
        marginLeft: 16
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    streamerName: {
        color: Colors.text,
        fontWeight: 'bold',
        fontSize: 22
    },
    avatar: {
        marginRight: 8
    },
    streamTitle: {
        color: Colors.text,
        fontWeight: 'normal',
        fontSize: 18
    },
    categoryName: {
        color: Colors.textDark,
        fontWeight: 'normal',
        fontSize: 18
    },
    space: {
        height: 8
    }
})
