import React, {Dispatch, SetStateAction} from 'react';
import {ClientSafeProvider, LiteralUnion, signIn, signOut} from "@node_modules/next-auth/react";
import {BuiltInProviderType} from "@node_modules/next-auth/providers";
import Image from "@node_modules/next/image";
import Link from "@node_modules/next/link";

type Props = {
    loggedIn:boolean;
    providers:Record<LiteralUnion<BuiltInProviderType, string>, ClientSafeProvider> | null;
    setToggleDropDown: Dispatch<SetStateAction<boolean>>;
    toggleDropDown:boolean;
}
const SmallNavbar:React.FC<Props> = ({loggedIn,providers,setToggleDropDown,toggleDropDown}) => {
    return (
        <nav className='small-navbar'>
            {loggedIn ? (
                <div className='small-navbar-logged'>
                    <Image
                        src={''}
                        alt={'image'}
                        style={{width:'35px', height:'35px', objectFit:'contain', borderRadius:'50%'}}
                        onClick={()=> setToggleDropDown(prev => !prev)}
                    />
                    {toggleDropDown && (
                        <div className={'dropdown'}>
                            <Link href={'/profile'} className={'dropdown-link'} onClick={()=>setToggleDropDown(false)}>
                                My profile
                            </Link>
                            <Link href={'/create-prompt'} className={'dropdown-link'} onClick={()=>setToggleDropDown(false)}>
                                Create prompt
                            </Link>
                            <button
                                type={'button'}
                                onClick={()=> {
                                setToggleDropDown(false);
                                signOut();
                                }}
                                className={'dropdown-link-button'}
                            >
                                Sign Out
                            </button>
                        </div>
                    )}
                </div>
            ): (
                <>
                    {providers && (
                        Object.values(providers).map(provider => (
                            <button
                                type={'button'}
                                key={provider.name}
                                onClick={()=> signIn(provider.id)}
                                className={'black-btn'}
                            >
                                {provider.name}
                            </button>
                        ))
                    )}
                </>
            )}
        </nav>
    );
};

export default SmallNavbar;
