import React from 'react';
import { Outlet } from 'react-router-dom';

//TODO: DESIGN LAYOUT FOR APP
function BasicPageLayout() {
    return (
        <div> 
            <div>عنوان فرم پایه</div>
            <main><Outlet/></main>
        </div>
    );
}

export default BasicPageLayout;