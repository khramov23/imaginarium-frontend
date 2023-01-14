import React, { DetailedHTMLProps, forwardRef } from 'react'

interface TextInputProps
	extends DetailedHTMLProps<
		React.InputHTMLAttributes<HTMLInputElement>,
		HTMLInputElement
	> {}

const TextInput = forwardRef<HTMLInputElement, TextInputProps>((props, ref) => {
	return (
		<input
			ref={ref}
			{...props}
			className={
				'px-5 py-2 border-b-2 border-gray-800 text-xl darK:bg-gray-700 ' +
				props.className
			}
		/>
	)
})

export default TextInput
