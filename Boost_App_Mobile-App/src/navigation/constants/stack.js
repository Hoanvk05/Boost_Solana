import {Game} from '~screens/game';
import Swipe from '~screens/game/components/FlatList/Swipe';
import {Splash, Wallet} from '~screens/';
import BottomTabNavigation from '../tab';

const Main = [
  {
    name: 'Tab',
    component: BottomTabNavigation,
    isHeaderShown: false,
  },
  {
    name: 'Game',
    component: Game,
    isHeaderShown: false,
  },
  {
    name: 'Swipe',
    component: Swipe,
    isHeaderShown: false,
  },
  {
    name: 'Wallet',
    component: Wallet,
    isHeaderShown: false,
  },
  {
    name: 'Splash',
    component: Splash,
    isHeaderShown: false,
  },
];
export {Main};
