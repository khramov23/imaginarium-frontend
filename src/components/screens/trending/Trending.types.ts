import { Image } from '@/types/api/image.types'

export type ImageByPopularTag = Image & { tag: string }

export type ImagesByPopularTags = [[ImageByPopularTag]]
