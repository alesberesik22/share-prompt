import '../styles/global.scss'
import React, {ReactNode} from "react";
import Nav from "@components/Nav";

export const metadata = {
    title: 'Share prompts',
    description: 'Discover and share AI propmts'
}

type Props = {
    children: ReactNode
}

const RootLayout:React.FC<Props> = ({children}) => {
    return (
        <html lang='en'>
            <body>
                <div className='main'>
                    <div className='gradient'/>
                </div>
                <main className='app'>
                    <Nav/>
                    {children}
                </main>
            </body>
        </html>
    );
};

export default RootLayout;
