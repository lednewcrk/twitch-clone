export type ProviderProps = {
    children: React.ReactNode
}

// TODO: Fix types
export function BuildProviderTree(providers: any): any {
    if (providers.length === 1) {
        return providers[0]
    }
    const A = providers.shift()
    const B = providers.shift()

    return BuildProviderTree([
        ({ children }: any) => (
            <A>
                <B>{children}</B>
            </A>
        ),
        ...providers
    ])
}
