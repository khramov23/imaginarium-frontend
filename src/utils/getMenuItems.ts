import { MenuItem } from '@/components/layout/Navbar/Menu/Menu.types'

import { RoutePaths } from '@/router/router.types'

import authStore from '@/store/auth.store'

export const getMenuItems = () => {
	const items: MenuItem[] = authStore.isAuth
		? [
				{ link: RoutePaths.GALLERY, value: 'Gallery' },
				{ link: RoutePaths.USERS, value: 'Users' },
				{ link: RoutePaths.FEED, value: 'Feed' },
				{ link: RoutePaths.UPLOAD, value: 'Upload' },
		  ]
		: [{ link: RoutePaths.GALLERY, value: 'Gallery' }]
	return items
}
