import { httpClient } from '../httpClient'

export const fetchFollowedCategories = () =>
    httpClient.get('followed_categories').then(response => response.data)
