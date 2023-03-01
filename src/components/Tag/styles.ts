import { StyleSheet } from 'react-native'
import { Colors } from '../../values/colors'

export const TAG_HEIGHT = 30

export const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.darkGray,
        paddingHorizontal: 8,
        borderRadius: 16,
        justifyContent: 'center'
    },
    name: {
        color: Colors.text,
        fontWeight: 'bold',
        fontSize: 16
    }
})
