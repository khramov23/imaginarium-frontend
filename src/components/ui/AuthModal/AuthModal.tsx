import { observer } from 'mobx-react-lite'
import React from 'react'
import { Link } from 'react-router-dom'

import Modal from '@/components/ui/Modal/Modal'
import Title from '@/components/ui/Title/Title'

import { RoutePaths } from '@/router/router.types'

import modalStore from '@/store/modal.store'

import Button from '../Button/Button'

import styles from './AuthModal.module.scss'

const AuthModal = () => {
	const onClose = () => {
		modalStore.setAuthModal(false)
	}

	return (
		<Modal onClose={onClose} visible={modalStore.authModal}>
			<div className={styles.content}>
				<Title>You need to register or log in to your account</Title>
				<div className={styles.buttons}>
					<Link to={RoutePaths.LOGIN}>
						<Button onClick={onClose}>Login</Button>
					</Link>
					<Link to={RoutePaths.REGISTRATION}>
						<Button onClick={onClose}>Register</Button>
					</Link>
				</div>
			</div>
		</Modal>
	)
}

export default observer(AuthModal)
