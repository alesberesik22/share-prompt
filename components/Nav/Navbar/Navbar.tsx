import React from 'react';
import Logo from "@components/Nav/Logo/Logo";
import Buttons from "@components/Nav/Navbar/Buttons/Buttons";
import {ClientSafeProvider, LiteralUnion} from "@node_modules/next-auth/react";
import {BuiltInProviderType} from "@node_modules/next-auth/providers";

type Props = {
    loggedIn:boolean;
    providers: Record<LiteralUnion<BuiltInProviderType, string>, ClientSafeProvider> | null
}
const Navbar:React.FC<Props> = ({loggedIn,providers}) => {
    return (
        <nav className='navbar'>
            <Logo/>
            <Buttons loggedIn={loggedIn} providers={providers}/>
        </nav>
    );
};

export default Navbar;
