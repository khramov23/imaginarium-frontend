import React, { FC } from 'react'
import * as MaterialIcons from 'react-icons/md'

import { TypeMaterialIconName } from '@/components/ui/MaterialIcon/MaterialIcon.types'

interface MaterialIconProps {
	name: TypeMaterialIconName
}

const MaterialIcon: FC<MaterialIconProps> = ({ name }) => {
	const IconComponent = MaterialIcons[name]

	return <IconComponent /> || <MaterialIcons.MdDragIndicator />
}

export default MaterialIcon
