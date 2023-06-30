import { createContext, useContext, useMemo } from "react";
import { useLocation, useParams } from "react-router-dom";

export const ProcessContext = createContext({});
function ProcessContextProvider({ children }) {
    const { flowId, taskId, taskState, taskTitle, processVersion } = useParams();
    const pathname = useLocation().pathname.split('/');
    const systemContext = pathname[1];
    const processName = pathname[3];
    const taskName = pathname[4];
    const processInfo = useMemo(() => {
        console.info("ProcessContext Updated");
        localStorage.setItem('systemContext', systemContext);
        localStorage.setItem('processName', processName);
        localStorage.setItem('taskName', taskName);
        localStorage.setItem('flowId', flowId);
        localStorage.setItem('taskId', taskId);
        localStorage.setItem('taskState', taskState);
        localStorage.setItem("taskTitle", taskTitle);
        localStorage.setItem("processVersion", processVersion);
        return { flowId, taskId, taskState, taskTitle, processVersion, systemContext, processName, taskName }
    }, [flowId, taskId, taskState, taskTitle, processVersion, systemContext, processName, taskName]);
    return (
        <ProcessContext.Provider value={processInfo}>
            {children}
        </ProcessContext.Provider>
    );
}
export const useProcessInfo = () => useContext(ProcessContext);
export default ProcessContextProvider;