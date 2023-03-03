import { StyleSheet } from 'react-native'
import { Colors } from '../../values/colors'

export const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    infoContainer: {
        flex: 1,
        justifyContent: 'space-between',
        paddingHorizontal: 8
    },
    name: {
        color: Colors.text,
        fontWeight: 'bold',
        fontSize: 22
    },
    newVideosCount: {
        color: Colors.textDark,
        fontSize: 18
    }
})
