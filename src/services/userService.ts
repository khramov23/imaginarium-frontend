import {$authApi} from '@/http'
import { IUser } from '@/types/user.types'
import {AxiosResponse} from "axios";

export class UserService {
	static async fetchUsers(): Promise<AxiosResponse<IUser[]>> {
        return $authApi.get<IUser[]>('/users')
	}
}
