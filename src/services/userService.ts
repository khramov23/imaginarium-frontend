import $api from '@/http'
import { IUser } from '@/types/user.types'
import {AxiosResponse} from "axios";

export class UserService {
	static async fetchUsers(): Promise<AxiosResponse<IUser[]>> {
        return $api.get<IUser[]>('/users')
	}
}
