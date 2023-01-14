import axios from 'axios'

import {Image} from '@/types/image.types'
import {ImagesByPopularTags} from "@/components/screens/trending/Trending.types";


export class ImageService {
    static async getAll() {
        const response = await axios.get<Image[]>(`${process.env.REACT_APP_API_URL}/images`)
        return response.data
    }

    static async getByPopularTags() {
        const response = await axios.get<ImagesByPopularTags>(`${process.env.REACT_APP_API_URL}/images/by-tags`)
        return response.data
    }
}