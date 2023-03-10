import { createContext, useMemo, useState } from 'react'
import {
    Stream,
    StreamViewerContextType,
    StreamViewerProviderType
} from './types'

export const StreamViewerContext = createContext({} as StreamViewerContextType)

export function StreamViewerProvider({ children }: StreamViewerProviderType) {
    const [currentLiveStream, setCurrentLiveStream] = useState<Stream | null>(
        null
    )

    const isLiveStreaming = useMemo(
        () => !!currentLiveStream,
        [currentLiveStream]
    )
    const onStartStream: StreamViewerContextType['onStartStream'] =
        setCurrentLiveStream

    const onCloseStream: StreamViewerContextType['onCloseStream'] = () => {
        setCurrentLiveStream(null)
    }

    return (
        <StreamViewerContext.Provider
            value={{
                isLiveStreaming,
                currentLiveStream,
                onStartStream,
                onCloseStream
            }}
        >
            {children}
        </StreamViewerContext.Provider>
    )
}
