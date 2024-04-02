import { atom } from 'recoil';

export const currentProjectIdAtom = atom<string | null>({
    key: 'currentProjectIdAtom',
    default: null,
});
