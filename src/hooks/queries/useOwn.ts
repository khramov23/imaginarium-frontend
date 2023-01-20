import { useImages } from '@/hooks/queries/useImages'

export const useOwn = (userId: string) => {
	return useImages('own', userId)
}
