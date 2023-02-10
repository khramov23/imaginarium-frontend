import { observer } from 'mobx-react-lite'
import React, { useState } from 'react'

import FileUploader from '@/components/screens/upload/UploadForm/FileUploader'
import UploadModal from '@/components/screens/user-edit/UploadModal/UploadModal'

import modalStore from '@/store/modal.store'

const UserEditScreen = () => {
	const [file, setFile] = useState<File | null>(null)

	const onOpen = () => {
		modalStore.setUploadAvatarModal(true)
	}

	return (
		<div>
			<FileUploader setFile={setFile} file={file} onChange={onOpen} />
			{file && <UploadModal file={file} />}
		</div>
	)
}

export default observer(UserEditScreen)
