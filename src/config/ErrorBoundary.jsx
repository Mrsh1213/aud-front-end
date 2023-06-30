import {Grid } from '@mui/material';
import React from 'react';
import { Link, useRouteError } from 'react-router-dom';

function Error({ error }) {
    if (error.status === 404) {
        return <div>
            <h3>404</h3>
            <div>صفحه مورد نظر یافت نشد</div>
        </div>;
    } else if (error.status === 401) {
        return <div>
            <h3>401</h3>
            <div>صفحه مورد نظر نیاز به احراز هویت دارد</div>
            <div><Link to="/login">صفحه ورود</Link></div>
        </div>;
    } else if (error.status === 503) {
        return <div>
            <h3>503</h3>
            <div>سرویس مورد نظر در دسترس نیست</div>
        </div>;
    } else if (error.status === 418) {
        return <div>🫖</div>;
    } else {
        return <div>
        <h3>{error?.status}</h3>
        <small>{error?.data}</small>
    </div>;;
    }

}

function ErrorBoundary() {
    const error = useRouteError();
console.log("ErrorBoundary: ",error);
    return <Grid minHeight="100%" justifyContent="center" alignContent="center" container>
        <Grid textAlign="center" xs={12} item>
            <Error error={error} />
        </Grid>
    </Grid>
}

export default ErrorBoundary;