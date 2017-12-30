import ReactOnRails from 'react-on-rails';

import PricesApp from '../bundles/Prices/startup/PricesApp';

// This is how react_on_rails can see the HelloWorld in the browser.
ReactOnRails.register({
  PricesApp,
});
