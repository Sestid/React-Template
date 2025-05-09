import React, { memo } from 'react';
import { Link } from 'react-router-dom';
import Content from '../components/Content';
import './Entry.scss';

const Index: React.FC = memo(props => {
    return (
        <>
            <Content>
                <div className='entry-content'>
                    <Link className='entry-box' to='/page3'>header布局</Link>
                </div>
            </Content>
        </>
    );
});
export default Index;
