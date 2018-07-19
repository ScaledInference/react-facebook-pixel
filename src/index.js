/**
 * React Facebook Pixel Module
 *
 * @package react-quora-pixel
 * @author  Steve Mask <steve@scaledinference.com>
 */

//
let initialized = false;
let debug = false;

/**
 * Utilities
 */

const verifyInit = () => {
  if (!initialized) {
    console.warn('Pixel not initialized before using call ReactQuoraPixel.init with required params');
  }
  return initialized;
};

//
const log = (...args) => {
  console.info(...['[react-quora-pixel]'].concat(args));
};

//
const defaultOptions = {
  debug: false
};

//
export default {
  init(pixelId, options = defaultOptions) {
    /* eslint-disable */
    !function(q,e,v,n,t,s){if(q.qp) return; n=q.qp=function(){n.qp?n.qp.apply(n,arguments):n.queue.push(arguments);}; n.queue=[];t=document.createElement(e);t.async=!0;t.src=v; s=document.getElementsByTagName(e)[0]; s.parentNode.insertBefore(t,s);}(window, 'script', 'https://a.quora.com/qevents.js');
    /* eslint-enable */

    if (!pixelId) {
      console.warn('Please insert pixel id for initializing');
    } else {
      qp('init', pixelId); // eslint-disable-line no-undef

      initialized = true;
      debug = options.debug;
    }
  },

  track(title, data) {
    if (!verifyInit()) {
      return;
    }

    qp('track', title, data); // eslint-disable-line no-undef

    if (debug) {
      log(`called qp('track', '${title}');`);

      if (data) {
        log('with data', data);
      }
    }
  },

  qp(...args) {
    if (!verifyInit()) {
      return;
    }

    qp(...args); // eslint-disable-line no-undef

    if (debug) {
      log(`called qp('${args.slice(0, 2).join('\', \'')}')`);

      if (args[2]) {
        log('with data', args[2]);
      }
    }
  },
};
