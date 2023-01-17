import { AxiosResponse } from 'axios'

import { $authApi } from '@/http'
import { IUser } from '@/types/api/user.types'

export class UserService {
	static async fetchUsers(query: string): Promise<AxiosResponse<IUser[]>> {
		const response = query
			? $authApi.get<IUser[]>('/users/by-username/' + query)
			: $authApi.get<IUser[]>('/users')
		return response
	}

	static async fetchUserById(id: string): Promise<AxiosResponse<IUser>> {
		return $authApi.get<IUser>('/users/' + id)
	}
}
