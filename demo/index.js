import React from 'react';
import ReactDOM from 'react-dom';
import ReactQuoraPixel from '../src/index';

ReactQuoraPixel.init('quora', {}, { debug: true });
ReactQuoraPixel.qp('track', 'Demo');

ReactDOM.render(
  <div>
    <h1>React Quora Pixel Tested</h1>
    <button
      onClick={() => ReactQuoraPixel.track('ViewContent', {
        content_name: 'Really Fast Running Shoes',
        content_category: 'Apparel & Accessories > Shoes',
        content_ids: ['1234'],
        content_type: 'product',
        value: 0.50,
        currency: 'USD'
      })}
    >Track View Content</button>
  </div>,
  document.getElementById('app')
);
