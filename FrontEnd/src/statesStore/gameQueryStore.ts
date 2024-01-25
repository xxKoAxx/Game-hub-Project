import { create } from 'zustand';
import { Genres } from '../services/genresService';
import { Platform } from '../services/platformServices';

interface GameQueryStore {
  selectedGenre?: Genres | null;
  selectedPlatform?: Platform | null;
  selectedOrder?: string | null;
  searchQuery?: string | null;

  setSearchQuery: (searchQuery?: string | null) => void;
  setSelectedGenre: (selectedGenre?: Genres | null) => void;
  setSelectedPlatform: (selectedPlatform?: Platform | null) => void;
  setSelectedOrder: (selectedOrder?: string | null) => void;
  setDefaultValue: () => void;
}
const defaultGameQuery = {
  selectedOrder: null,
  selectedPlatform: null,
  selectedGenre: null,
  searchQuery: null,
};

const useGameQueryStore = create<GameQueryStore>()((set) => ({
  setSearchQuery: (searchQuery) =>
    set(() => ({ ...defaultGameQuery, searchQuery })), // when search, clear all others selectors
  setSelectedGenre: (selectedGenre) => set(() => ({ selectedGenre })),
  setSelectedPlatform: (selectedPlatform) => set(() => ({ selectedPlatform })),
  setSelectedOrder: (selectedOrder) => set(() => ({ selectedOrder })),
  setDefaultValue: () => set(() => ({ ...defaultGameQuery })),
}));

export default useGameQueryStore;
