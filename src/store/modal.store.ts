import { makeAutoObservable } from 'mobx'

class ModalStore {
	imageSliderModal = false
	authModal = false
	uploadAvatarModal = false
	updatePasswordModal = false

	constructor() {
		makeAutoObservable(this)
	}

	setImageSliderModal(flag: boolean) {
		this.imageSliderModal = flag
	}

	setAuthModal(flag: boolean) {
		this.authModal = flag
	}

	setUploadAvatarModal(flag: boolean) {
		this.uploadAvatarModal = flag
	}

	setUpdatePasswordModal(flag: boolean) {
		this.updatePasswordModal = flag
	}
}

export default new ModalStore()
