'use client';

import { SessionProvider } from "next-auth/react";
import {Session} from "next-auth";
import React from "react";

type Props = {
    children: React.ReactNode;
    session: Session
}
const Provider:React.FC<Props> = ({ children, session }) => (
    <SessionProvider session={session}>
        {children}
    </SessionProvider>
)

export default Provider;