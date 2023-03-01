import { AnimatedScreen } from './AnimatedScreen'
import { StreamViewerProps } from './types'

export function StreamViewer({ children }: StreamViewerProps) {
    return <AnimatedScreen>{children}</AnimatedScreen>
}
