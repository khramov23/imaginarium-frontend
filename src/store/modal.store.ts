import { makeAutoObservable } from 'mobx'

class ModalStore {
	imageSliderModal = false
	authModal = false

	constructor() {
		makeAutoObservable(this)
	}

	setImageSliderModal(flag: boolean) {
		this.imageSliderModal = flag
	}

	setAuthModal(flag: boolean) {
		this.authModal = flag
	}
}

export default new ModalStore()
