import React, { forwardRef } from 'react'

import { InputType } from '@/types/elements/html-elements.types'

const TextInput = forwardRef<HTMLInputElement, InputType>((props, ref) => {
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
