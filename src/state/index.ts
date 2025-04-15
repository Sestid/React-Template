import { atom } from 'recoil';

export const currentProjectIdAtom = atom<string | null>({
    key: 'currentProjectIdAtom',
    default: null,
});

export const currentPageInfoAtom = atom<any>({
    key: 'currentPageInfoAtom',
    default: {
        key: '',
        title: '',
        path: '',
    },
});

