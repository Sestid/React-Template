import './axios';
import axios from 'axios';

interface Response<T> {
    code: 200 | 500;
    msg: string;
    data: T;
}

export interface Ratio {
    [key: string]: number;
}

export interface DevDataInfo {
    name: string,
    sex: string,
    age: number,
}

export interface OtherInfo {
    otherProps: Ratio[];
}

export const api = {
    // 本地接口假数据测试
    getdevData:async (url?: string): Promise<Response<DevDataInfo>> => {
        const { data } = await axios.get('/dev-api/code', { params: { url } });
        return data;
    },

    // 调接口方法测试
    getTestData:async (url: string): Promise<{}> => {
        const { data } = await axios.get('/api/v2/nav', { params: { url } });
        return data;
    },
    postTestData: async (params: any): Promise<{}> => {
        const { data } = await axios.post('/mcp/pc/pcsearch', params);
        return data;
    },
};
