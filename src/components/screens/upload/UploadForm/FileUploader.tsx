import React, { ChangeEvent, Dispatch, FC, SetStateAction, useRef } from 'react'

import Button from '@/components/ui/Button/Button'

interface FileUploaderProps {
	setFile: Dispatch<SetStateAction<File | null>>
	file: File | null
	onChange?: (e: ChangeEvent<HTMLInputElement>) => any
	className?: string
	text?: string
}

const FileUploader: FC<FileUploaderProps> = ({ setFile, onChange, className, text = 'Load image' }) => {
	const inputRef = useRef<HTMLInputElement>(null)

	const onButtonClick = () => {
		if (inputRef.current) inputRef.current.click()
		console.log('clicked')
	}

	const onInputChange = (e: ChangeEvent<HTMLInputElement>) => {
		if (e.target.files) {
			setFile(e.target.files[0])
			onChange && onChange(e)
		}
	}

	return (
		<>
			<input onChange={onInputChange} hidden ref={inputRef} type="file" accept="image/*" />
			<Button type={'button'} className={className} onClick={onButtonClick}>
				{text}
			</Button>
		</>
	)
}

export default FileUploader
