import React, { Suspense } from 'react';
import { useRoutes } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import routes from './routes';

const Routes = () => {
    const routing = useRoutes(routes);
    return routing;
};

const App = () => {
    return (
        <Suspense fallback={null}>
            <Routes />
            <Toaster position="bottom-center" reverseOrder={false} />
        </Suspense>
    );
};

export default App;
