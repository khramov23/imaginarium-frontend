import { AxiosError } from 'axios'

export type ApiError = AxiosError & {
	response: { data: { message: string } }
}
