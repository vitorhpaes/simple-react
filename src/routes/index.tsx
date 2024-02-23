import React from 'react'
import { Routes, Route } from 'react-router-dom'

import PUBLIC_ROUTES from './public.routes.json'
import HomePage from './../pages/public/HomePage/index';

const AppRouter: React.FC = () => {

    return (
        <Routes>
            <Route path={PUBLIC_ROUTES.HOME} element={<HomePage />} />
        </Routes>
    )

}

export default AppRouter
