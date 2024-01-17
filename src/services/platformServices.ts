import {
  FaAndroid,
  FaApple,
  FaLinux,
  FaPlaystation,
  FaWindows,
  FaXbox,
} from 'react-icons/fa';
import ApiClient from './api-client';
import { IconType } from 'react-icons';
import { BsGlobe } from 'react-icons/bs';
import { MdPhoneIphone } from 'react-icons/md';
import { SiNintendo, SiAtari, SiSega, SiCommodore } from 'react-icons/si';

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

export const iconsMap: { [key: string]: IconType } = {
  pc: FaWindows,
  playstation: FaPlaystation,
  xbox: FaXbox,
  nintendo: SiNintendo,
  mac: FaApple,
  linux: FaLinux,
  ios: MdPhoneIphone,
  android: FaAndroid,
  web: BsGlobe,
  atari: SiAtari,
  sega: SiSega,
  'commodore-amiga': SiCommodore,
};

export default new ApiClient<Platform>('/platforms/lists/parents');
