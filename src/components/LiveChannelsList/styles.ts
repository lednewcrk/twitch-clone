import { StyleSheet, Dimensions } from 'react-native'

const DEVICE_WIDTH = Dimensions.get('window').width
export const ITEM_WIDTH = DEVICE_WIDTH - 32
export const ITEM_HEIGHT = 140

export const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    list: {
        flex: 1
    },
    categoryCoverItem: {
        marginRight: 8
    }
})
