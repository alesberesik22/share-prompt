import React from 'react';
import './styles.scss'
import Feed from "@components/Feed";

const Home = () => {
    return (
        <section className='home'>
            <h1 className='header-text'>Discover & Share</h1>
            <span className='header-text orange_gradient'> AI-Powered Prompts</span>
            <p>
                It is an open-source AI prompting
                tool for moder world to discover, create
                and share creative prompts.
            </p>
            <Feed/>
        </section>
    );
};

export default Home;
