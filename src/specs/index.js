/*eslint-disable*/
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import polyfills from './polyfills';

Enzyme.configure({ adapter: new Adapter() });
