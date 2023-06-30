import { Button, TextField } from "@mui/material";
import { useNavigate } from "react-router-dom";


function ManagementTrainingManagementCourses() {
    const navigate = useNavigate();
    return (
        <div>
            <TextField placeholder="ورودی را  پر نمایید" label="سلام" variant="outlined" />
            ManagementTrainingManagementCourses- basic form
            <Button onClick={()=>{navigate("/AUD/basic/formBasicTest/access_token1/userToken1")}} >to test form basic</Button>
        </div>
    );
}

export default ManagementTrainingManagementCourses;