import React, { memo } from 'react';
import Header from '../../components/Header'
import Content from '../../components/Content'
import './index.scss'

import { currentProjectIdAtom } from '../../state'
import { useRecoilValue } from 'recoil';

const HomeContent: React.FC = memo(props => {

    const projectId = useRecoilValue(currentProjectIdAtom);

    return (
        <>
            <Header title='系统首页' active='home' />
            <Content>
                <div className='state'>
                    <h1 className='title'>状态管理 </h1>
                    <div className='title-content'>选择的项目id：<span>{projectId}</span></div>
                </div>
            </Content>
        </>
    );
});
export default HomeContent;
