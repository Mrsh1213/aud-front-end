import { Button } from '@mui/material';
import React from 'react';
import { useNavigate } from 'react-router-dom';

function AuditorFinding() {
    const navigate = useNavigate();
    return (
        <div>
            AuditorFinding_HT form
            <div>
            <Button onClick={()=>{navigate("/AUD/pages/audAuditing/abc_HT/flowId2/taskId1/accessToken1/taskState1/taskTitle2/userToken1/processVersion1")}} >to test form HT</Button>
        </div>
        </div>
    );
}

export default AuditorFinding;