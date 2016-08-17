export const ua = () => navigator.userAgent;

export const device =
  () => (/iPhone|iPod|iPad|Android|BlackBerry|Macintosh|Windows/.exec(ua()) || ['unknown'])[0];

export const browser =
  () => ((/MicroMessenger|Chrome|Safari|Opera|Firefox/.exec(ua()) ||
  [0])[0] || /MAIE|Trident/.test(ua()) ? 'IE' : 'unknown');

export const os = () => {
  const d = device();
  /* eslint no-nested-ternary: 0 */
  return /iPhone|iPod|iPad/.test(d) ? 'iOS' :
    /Macintosh/.test(d) ? 'macOS' : /Android|Windows|Linux/.exec(d)[0];
};

export default {
  ua,
  device,
  os,
  browser
};
