import cls from 'classnames'
import {observer} from 'mobx-react-lite'
import React, {FC} from 'react'

import styles from './Avatar.module.scss'
import authStore from "@/store/auth.store";
import {getAvatar} from "@/http/api.paths";

interface AvatarProps {
    size?: number
    className?: string
    src: string
}

const Avatar: FC<AvatarProps> = ({size = 50, className, src}) => {
    return (
        <div
            className={cls({
                [styles.box]: true,
                className,
                [styles.noAvatar]: !!authStore.user.avatar
            })}
            style={{width: size, height: size}}
        >
            {
                authStore.user.avatar ? (
                    <img src={getAvatar(src)} alt=""/>
                ) : (
                    authStore.user.username.charAt(0).toUpperCase()
                )
            }
        </div>
    )
}

export default observer(Avatar)
