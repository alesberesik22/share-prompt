import React from 'react';
import Link from "next/link";
import '../../styles.scss'
import {ClientSafeProvider, LiteralUnion, signIn, signOut, useSession} from "@node_modules/next-auth/react";
import Image from "next/image";
import {BuiltInProviderType} from "@node_modules/next-auth/providers";

type Props = {
    loggedIn:boolean
    providers: Record<LiteralUnion<BuiltInProviderType, string>, ClientSafeProvider> | null;
}
const Buttons:React.FC<Props> = ({loggedIn,providers}) => {
    const { data: session } = useSession();
    return (
        <>
            {session?.user ? (
                <div className='navbar-logged-in'>
                    <Link href={'/create-prompt'} className={'black-btn'}>
                        Create Post
                    </Link>
                    <button type={'button'} className={'outline-button'}>Sign out</button>
                    <Link href={'/profile'} className={'user-picture'}>
                        <Image src={''} alt={'image'} />
                    </Link>
                </div>
            ):(
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
        </>
    );
};

export default Buttons;
