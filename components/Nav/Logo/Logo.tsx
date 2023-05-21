import React from 'react';
import '../styles.scss'
import logo from '../../../public/assets/images/logo.png'
import Link from 'next/link';
import Image from 'next/image';

const Logo = () => {
    return (
        <Link href={'/'} className='logo_container'>
            <Image src={logo} alt='my_logo'/>
            <h1 className='orange_gradient'>Ales Beresik</h1>
        </Link>
    );
};

export default Logo;
