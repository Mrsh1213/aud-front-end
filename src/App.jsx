import RtlThemeProvider from "./config/RtlProvider";
import RouterAppProvider from "./config/RouterAppProvider";
import "./assets/css/app.css"

function App() {
  return (
    <RtlThemeProvider>
      {/* {process.env.REACT_APP_CUSTOM_ENV} */}
      <RouterAppProvider/>
    </RtlThemeProvider>
  );
}
export default App;
