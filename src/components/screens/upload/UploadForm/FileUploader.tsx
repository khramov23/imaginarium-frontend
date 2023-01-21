import React, {
	ChangeEvent,
	Dispatch,
	FC,
	SetStateAction,
	useRef,
	useState,
} from 'react'

import Button from '@/components/ui/Button/Button'

import styles from './UploadForm.module.scss'

interface FileUploaderProps {
	setFile: Dispatch<SetStateAction<File | null>>
}

const FileUploader: FC<FileUploaderProps> = ({ setFile }) => {
	const inputRef = useRef<HTMLInputElement>(null)
	const [loaded, setLoaded] = useState(false)

	const onButtonClick = () => {
		if (inputRef.current) inputRef.current.click()
	}

	const onInputChange = (e: ChangeEvent<HTMLInputElement>) => {
		if (e.target.files) {
			setFile(e.target.files[0])
			setLoaded(true)
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
			{loaded && <span className={styles.loaded}>loaded!</span>}
		</>
	)
}

export default FileUploader
