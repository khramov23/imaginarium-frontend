import React, { FC } from 'react'


interface ButtonProps extends React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>{
	text: string
	className?: string
}

const Button: FC<ButtonProps> = ({ text, className, ...props }) => {
	const classNames =
		'px-10 py-2 text-xl rounded-md bg-transparent border-primary border-2 hover:bg-red-thin transition-colors text-primary dark:hover:text-white ' +
		className

	return <button className={classNames} {...props}>{text}</button>
}

export default Button
