import { StyleSheet } from 'react-native'
import { StatusBar } from 'expo-status-bar'
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper'
import { ThemeProp } from 'react-native-paper/lib/typescript/types'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import { QueryClientProvider } from '@tanstack/react-query'
import { Router } from './navigation/router'
import { Colors } from './values/colors'
import { queryClient } from './services/api'
import { StreamViewerProvider } from './components/StreamViewer'
import { BuildProviderTree, ProviderProps } from './BuildProviderTree'

const theme: ThemeProp = {
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors,
        background: Colors.background,
        secondaryContainer: 'transparent'
    }
}

export default function App() {
    const Providers = BuildProviderTree([
        (props: ProviderProps) => (
            <QueryClientProvider client={queryClient} {...props} />
        ),
        (props: ProviderProps) => <PaperProvider theme={theme} {...props} />,
        StreamViewerProvider
    ])

    return (
        <GestureHandlerRootView style={styles.container}>
            <Providers>
                <StatusBar style='light' />
                <Router />
            </Providers>
        </GestureHandlerRootView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})
