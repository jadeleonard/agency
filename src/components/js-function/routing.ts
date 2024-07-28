import Navigo from 'navigo';
import { Home } from '../../pages/public/home/home';
import { Services } from '../../pages/public/services/services';
import { SignUp } from '../../pages/public/sign-up/sign-up';
import { Dashboard } from '../../pages/protected/dashboard';


const router = new Navigo('/');
type ComponentType = () => HTMLElement
// Helper function to render components
const renderComponent = (Component:ComponentType) => {
  const app = document.getElementById('app');
  if (app) {
    app.innerHTML = '';
    app.appendChild(Component());
  }
};

// Route definitions
router
  .on('/', () => {
    renderComponent(Home);
  })
  .on('/services', () => {
    renderComponent(Services);
  })
  .on('/sign-up', () => {
    renderComponent(SignUp);
  }).resolve();
