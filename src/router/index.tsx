import './index.scss';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from '../pages/Entry';
import Page3 from '../pages/page3';
import Page1 from '../pages/page1';
import Page2 from '../pages/page2';
import Variables from '../pages/variables';

function Router() {
    const router = createBrowserRouter([
        {
            path: '/',
            element: <Home />,
        },
        {
            path: '/page3',
            element: <Page3 />,
        },
        {
            path: '/page1',
            element: <Page1 />,
        },
        {
            path: '/page2',
            element: <Page2 />,
        },
        {
            path: '/variables',
            element: <Variables />,
        },
    ]);
    return <RouterProvider router={router} />;
}

export default Router;
