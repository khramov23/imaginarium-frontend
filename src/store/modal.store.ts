import { makeAutoObservable } from 'mobx'

class ModalStore {
	imageSliderModal = false

	constructor() {
		makeAutoObservable(this)
	}

	setImageSliderModal(flag: boolean) {
		this.imageSliderModal = flag
	}
}

export default new ModalStore()
