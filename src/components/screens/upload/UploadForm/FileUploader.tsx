import React, { ChangeEvent, Dispatch, FC, SetStateAction, useRef } from 'react'

import Button from '@/components/ui/Button/Button'

interface FileUploaderProps {
	setFile: Dispatch<SetStateAction<File | null>>
	file: File | null
	onChange?: (e: ChangeEvent<HTMLInputElement>) => any
}

const FileUploader: FC<FileUploaderProps> = ({ setFile, onChange }) => {
	const inputRef = useRef<HTMLInputElement>(null)

	const onButtonClick = () => {
		if (inputRef.current) inputRef.current.click()
	}

	const onInputChange = (e: ChangeEvent<HTMLInputElement>) => {
		if (e.target.files) {
			setFile(e.target.files[0])
			onChange && onChange(e)
		}
	}

	return (
		<>
			<input
				onChange={onInputChange}
				ref={inputRef}
				type="file"
				accept="image/*"
				className="hidden"
			/>
			<Button onClick={onButtonClick}>Load image</Button>
		</>
	)
}

export default FileUploader
