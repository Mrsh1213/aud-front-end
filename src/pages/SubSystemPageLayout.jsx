import React from 'react';
import { Outlet } from 'react-router-dom';
import AuthContextProvider from '../config/AuthContext';

function SubSystemPageLayout() {
    //TODO: DESIGN LAYOUT FOR APP
    return (
        <AuthContextProvider>
            <Outlet/>
        </AuthContextProvider>
    );
}

export default SubSystemPageLayout;