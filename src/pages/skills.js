import SkillsComponent from '@/components/SkillsComponent';
import Head from 'next/head';
import React from 'react';

const skills = () => {
    return (
        <>
        <Head>
        <title>Cindy Chassin | Skills page</title>
        <meta name="description" content="Generated by create next app" />
        </Head>
        <SkillsComponent />
        </>
    );
};

export default skills;