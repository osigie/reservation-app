

import React from 'react'
import {Navbar} from "../../components/navbar/Navbar"
import {Header} from "../../components/header/Header"

interface HomeProps {

}

export const Home: React.FC<HomeProps> = ({}) => {
        return (
            <div>
<Navbar/>
<Header/>
            </div>
        );
}