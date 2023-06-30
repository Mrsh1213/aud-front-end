import React from 'react';
import { Outlet } from 'react-router-dom';
import ProcessContextProvider from '../../config/ProcessContext';

function ProcessPageLayout() {
  //TODO Layout Processess 
    return (
        <ProcessContextProvider>
        <div> 
            <div>عنوان فرم فرآیندی</div>
            <main><Outlet/></main>
        </div>
        </ProcessContextProvider>
    );
}

export default ProcessPageLayout;