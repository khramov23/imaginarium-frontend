import {Image} from "@/types/image.types";

export type ImageByPopularTag = Image & {tag: string}

export type ImagesByPopularTags = [[ImageByPopularTag]]