import { httpClient } from '../httpClient'

export const fetchRecommendedChannels = () =>
    httpClient.get('recommended_channels').then(response => response.data)
