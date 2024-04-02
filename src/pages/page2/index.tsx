import React, { memo } from 'react';
import Header from '../../components/Header';
import Content from '../../components/Content';

import { useAsync } from 'react-use';
import { api } from '../../api';

const Page2: React.FC = memo(() => {

    const devData = useAsync(async () => {
        return await api.getdevData();
    }, []);
    return (
        <div className='page2'>
            <Header title='page2' active='page2' />
            <Content>
                <h1 className='title'>本地接口联调（api.py）</h1>
                <div className='title-content'>请求数据：<span>{JSON.stringify(devData)}</span></div>
                
            </Content>
        </div>
    );
});
export default Page2;
