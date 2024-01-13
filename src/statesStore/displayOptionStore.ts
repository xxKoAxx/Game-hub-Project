import { create } from 'zustand';

type DisplayOption = 'grid' | 'column';

interface DisplayOptionStore {
  displayOption: DisplayOption;
  setDisplayOption: (displayOption: DisplayOption) => void;
}

const useDisplayOptionStore = create<DisplayOptionStore>()((set) => ({
  displayOption: 'grid',

  setDisplayOption: (displayOption) => set(() => ({ displayOption })),
}));

export default useDisplayOptionStore;
