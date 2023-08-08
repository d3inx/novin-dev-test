import { atom } from "recoil";

import { recoilPersist } from 'recoil-persist'

const { persistAtom } = recoilPersist()

export const tokenState = atom({
    key: 'tokenState', // unique ID (with respect to other atoms/selectors)
    default: '', // default value (aka initial value)
    effects_UNSTABLE: [persistAtom],
  });