// eslint-disable-next-line
import axios from 'axios';
import { configure } from 'enzyme';
// eslint-disable-next-line
import Adapter from 'enzyme-adapter-react-16';
import 'regenerator-runtime/runtime';

configure({ adapter: new Adapter() });

// Mock fetch to avoid external xhr requests
global.fetch = axios;
