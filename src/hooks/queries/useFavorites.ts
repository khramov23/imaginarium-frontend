import { useImages } from '@/hooks/queries/useImages'

export const useFavorites = (userId: string) => {
	return useImages('favorites', userId)
}
