import React, { memo } from 'react';
import './Header.scss';
import { DownOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import { headerConfig } from '../contants/headerConfig';
import { currentPageInfoAtom, currentProjectIdAtom } from '../state'
import { useRecoilState } from 'recoil';

const Header: React.FC = memo(() => {
    const [currentPageInfo, setCurrentPageInfo] = useRecoilState(currentPageInfoAtom);

    console.log('当前页面信息', currentPageInfo);
    
    return (
        <header className='header'>
            <ul>
                {headerConfig.map(item => {
                    return (
                        <li key={item.key} className='li-parrent'>
                            <Link to={item.path}>{item.title}</Link>
                            {item.children && item.children.length > 0 && <DownOutlined className='ml-12' />}
                            {item.children && item.children.length > 0 && (
                                <div className='dropdown-menu'>
                                    {item.children.map(child => {
                                        return (
                                            <li key={child.key} onClick={() => setCurrentPageInfo(child)}>
                                                <Link to={child.path}>{child.title}</Link>
                                            </li>
                                        );
                                    })}
                                </div>
                            )}
                        </li>
                    );
                })}
            </ul>
        </header>
    );
});
export default Header;
