import React from 'react';
import { useProcessInfo } from '../../../../config/ProcessContext';

function Abc_HT() {
    const processInfo = useProcessInfo();

    return (
        <div>
            Abc_HT
            <div>
                {JSON.stringify(processInfo)}
            </div>
        </div>
    );
}

export default Abc_HT;