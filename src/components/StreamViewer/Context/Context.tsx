import { createContext, useMemo, useState } from 'react'
import {
    Stream,
    StreamViewerContextType,
    StreamViewerProviderType
} from './types'

export const StreamViewerContext = createContext({} as StreamViewerContextType)

export function StreamViewerProvider({ children }: StreamViewerProviderType) {
    const [currentStream, setCurrentStream] = useState<Stream | null>(null)

    const isLiveStreaming = useMemo(() => !!currentStream, [currentStream])
    const onStartStream: StreamViewerContextType['onStartStream'] =
        setCurrentStream

    return (
        <StreamViewerContext.Provider
            value={{ isLiveStreaming, currentStream, onStartStream }}
        >
            {children}
        </StreamViewerContext.Provider>
    )
}
