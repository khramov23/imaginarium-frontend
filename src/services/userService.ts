import { AxiosResponse } from 'axios'

import { IUser } from '@/types/api/user.types'

import { UpdatePasswordArgs } from '@/hooks/mutations/useUpdatePasswordMutation'

import { $authApi } from '@/http'

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

	static fetchUsersInfo(): Promise<AxiosResponse<IUser[]>> {
		return $authApi.get<IUser[]>('/users/info/')
	}

	static async fetchUserInfoById(id: string): Promise<AxiosResponse<IUser>> {
		return $authApi.get<IUser>('/users/info/' + id)
	}

	static async getSubscriptions(id: string): Promise<AxiosResponse<IUser[]>> {
		return $authApi.get<IUser[]>(`/users/subscriptions/${id}`)
	}

	static async getFollowers(id: string): Promise<AxiosResponse<IUser[]>> {
		return $authApi.get<IUser[]>(`/users/followers/${id}`)
	}

	static subscribe(id: string): Promise<AxiosResponse<IUser[]>> {
		return $authApi.post<IUser[]>(`/users/subscribe/${id}`)
	}

	static async addAvatar(data: FormData): Promise<AxiosResponse<IUser>> {
		const response = await $authApi.post<IUser>('/users/add-avatar', data)
		console.log(response)
		return response
	}

	static async updatePassword(
		data: UpdatePasswordArgs
	): Promise<AxiosResponse<IUser>> {
		return await $authApi.post<IUser>('/users/update-password', data)
	}
}
