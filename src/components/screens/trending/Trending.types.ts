import { IImage } from '@/types/api/image.types'

export type ImageByPopularTag = IImage & { tag: string }

export type ImagesByPopularTags = [[ImageByPopularTag]]
