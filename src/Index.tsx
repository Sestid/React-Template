import ReactDOM from 'react-dom/client';
import Router from './router/index.tsx';

import './index.css'; 
import 'antd/dist/reset.css';
import { RecoilRoot } from 'recoil';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <RecoilRoot>
        <Router />
    </RecoilRoot>,
);
