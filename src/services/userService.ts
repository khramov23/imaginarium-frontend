import { AxiosResponse } from 'axios'

import { $authApi } from '@/http'
import { IUser } from '@/types/api/user.types'

export class UserService {
	static async fetchUsers(): Promise<AxiosResponse<IUser[]>> {
		return $authApi.get<IUser[]>('/users')
	}
}
