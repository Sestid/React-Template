import React, { memo } from 'react';

import '../styles/header.scss';
import { Select, Space} from 'antd';
import { Link } from 'react-router-dom';
import { currentProjectIdAtom } from '../state'
import { useRecoilState } from 'recoil';

const { Option } = Select;

interface Props {
    title: string;
    active: string;
    children?: React.ReactNode;
}

const Header: React.FC<Props> = memo(props => {
    

    const options = [
        {
            label: '项目1',
            value: 1,
        },
        {
            label: '项目2',
            value: 2,
        },
        {
            label: '项目3',
            value: 3,
        },
    ]

    const [projectId, setProjectId] = useRecoilState(currentProjectIdAtom);

    return (
        <div className='header'>
            <div className='header-center'>
                <div className='header-center-navigation'>
                    <div className='navigation'>
                        <div className={`navigation-item ${props.active === 'home' ? 'active' : ''}`}>
                            <Link to='/'>系统首页</Link>
                        </div>
                        <div className={`navigation-item ${props.active === 'page1' ? 'active' : ''}`}>
                            <Link to='/page1'>页面1</Link>
                        </div>
                        <div className={`navigation-item ${props.active === 'page2' ? 'active' : ''}`}>
                            <Link to='/page2'>页面2</Link>
                        </div>
                    </div>
                </div>

                <div className='header-toolbar'>
                    <Space>
                        <div>
                            <Select
                                className='project-select'
                                placeholder='选择项目（状态管理）'
                                popupClassName='scene-list-men'
                                value={projectId}
                                onChange={(value: any) => {
                                    setProjectId(value);
                                }}
                            >
                                {options && options?.length > 0 && options.map(({ label, value }, index) => {
                                    return <Option key={`project_${index}`} value={value}>
                                        {label}
                                    </Option>
                                })}
                            </Select>
                        </div>
                    </Space>
                </div>
            </div>
        </div>
    );
});
export default Header;
