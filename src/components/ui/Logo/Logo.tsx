import logoImage from '@/assets/test-logo.png'

const Logo = () => {
    return (
        <div className='logo'>
            <a href="/">
                <img src={logoImage} alt="imaginarium"/>
            </a>
        </div>
    );
};

export default Logo;