import React, {FC} from 'react';

interface TitleProps {
    title: string,
    className?: string
}

const Title: FC<TitleProps> = ({ title, className = '' }) => {
    return (
        <h1 className={`text-5xl py-3 dark:text-white ${className}`}>
            {title}
        </h1>
    );
};

export default Title;