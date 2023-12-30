import platform from '../data/platform';

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

// const usePlatform = () => useData<Platform>('/platforms/lists/parents');
const usePlatform = () => ({ data: platform, error: null });

export default usePlatform;
