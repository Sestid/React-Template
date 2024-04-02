import React, { memo, useEffect } from 'react';
import { Button, message } from 'antd';
import Header from '../../components/Header';
import Content from '../../components/Content';
import './index.scss';

import { useAsync, useAsyncFn } from 'react-use';
import { api } from '../../api';

const Page1: React.FC = memo(() => {

    const getParams = '/lakers'
    const postParams = {
        invoke_info: {
            pos_1: [{}],
            pos_2: [{}],
        }
    }

    // 第一种调接口方法
    const testData = useAsync(async () => {
            return await api.getTestData(getParams);
    }, []);

    // 第二种调接口方法
    const [testDataState, getTestDataState] = useAsyncFn(async (params) => {
        return await api.postTestData(params);
    });
    useEffect(() => {
        getTestDataState(postParams)
    }, [])

    // 第三种调接口方法
    const handlePostTest = async (params: any) => {
        await api.postTestData(params).then((data) => {
            message.success(JSON.stringify(data));
        });
    }

    return (
        <div className='page1'>
            <Header title='page1' active='page1' />
            <Content>
                <h1 className='title'>接口返回数据</h1>
                <div className='title-content'>第一种方法 - get请求：<span>{JSON.stringify(testData)}</span></div>
                <div className='title-content'>第二种方法 - post ：<span>{JSON.stringify(testDataState)}</span></div>
                <div className='title-content'>
                    <Button
                        onClick={() =>  handlePostTest(postParams)}
                        type='primary'
                        size='small'
                    >
                        第三种方法
                    </Button>
                </div>
            </Content>
        </div>
    );
});
export default Page1;
