import React from 'react';
import H2 from '../H2/H2';
import styles from './LogosStack.module.css';
import shopifyLogo from '../../images/shopify.svg';
import amazonLogo from '../../images/amazon.svg';
import eBayLogo from '../../images/EBay_logo1280px.png';
import proStoresLogo from '../../images/ProStores-Ebay.png';
import vendioLogo from '../../images/vendio.png';
import volusionLogo from '../../images/volusion.png';
import yahooLogo from '../../images/yahoo.png';
import zencartLogo from '../../images/zencart.png';

function LogosStack() {
  return (
    <div>
      <H2 text="Integrate PLAYTHEM with your favorite ecommerce stack" />
      <ul className={styles.ul}>
        <li>
          <img src={shopifyLogo} alt="Shopify logo" />
        </li>
        <li>
          <img src={amazonLogo} alt="Amazon logo" />
        </li>
        <li>
          <img src={yahooLogo} alt="Yahoo logo" />
        </li>
        <li>
          <img src={zencartLogo} alt="Zen cart logo" />
        </li>
        <li>
          <img src={eBayLogo} alt="ebay logo" />
        </li>
        <li>
          <img src={proStoresLogo} alt="ProStores an ebay company logo" />
        </li>
        <li>
          <img src={vendioLogo} alt="vendio logo" />
        </li>
        <li>
          <img src={volusionLogo} alt="volusion logo" />
        </li>
      </ul>
    </div>
  );
}

export default LogosStack;
