import { useAuth } from "../../../config/AuthContext";


function FormBasicTest() {
    const{access_token,userToken}=useAuth();
    console.log(access_token);
    console.log(userToken);
    return (
        <div>
            FormBasicTest
        </div>
    );
}

export default FormBasicTest;