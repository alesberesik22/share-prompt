'use client';

import '../styles/global.scss'
import {
    getProviders,
    LiteralUnion,
    ClientSafeProvider
} from "@node_modules/next-auth/react";
import Navbar from "@components/Nav/Navbar/Navbar";
import SmallNavbar from "@components/Nav/SmallNavbar/SmallNavbar";
import {useEffect, useState} from "react";
import {BuiltInProviderType} from "@node_modules/next-auth/providers";

const Nav = () => {
    const isUserLoggedIn = true;
    const [providers, setProviders] = useState<Record<LiteralUnion<BuiltInProviderType, string>, ClientSafeProvider> | null>(null);
    const [toggleDropDown, setToggleDropDown] = useState(false);

    useEffect(()=>{
       const providers = async () => {
           const response = await getProviders();
           setProviders(response)
       }
    },[])
    return (
        <>
            <Navbar loggedIn={isUserLoggedIn} providers={providers}/>
            <SmallNavbar loggedIn={isUserLoggedIn} providers={providers} setToggleDropDown={setToggleDropDown} toggleDropDown={toggleDropDown}/>
        </>
    );
};

export default Nav;
