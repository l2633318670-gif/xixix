// =============================================
// MachLink China — Google Analytics (GA4)
// To enable tracking, replace G-XXXXXXXXXX below with your own
// GA4 Measurement ID (Admin -> Data Streams in Google Analytics).
// This is the ONLY place you need to change it.
// =============================================
(function () {
  var GA_ID = 'G-2FRYG84LK1';
  if (!GA_ID || GA_ID === 'G-XXXXXXXXXX') {
    // Placeholder not yet configured — skip loading to avoid bad data.
    return;
  }
  var s = document.createElement('script');
  s.async = true;
  s.src = 'https://www.googletagmanager.com/gtag/js?id=' + GA_ID;
  document.head.appendChild(s);
  window.dataLayer = window.dataLayer || [];
  function gtag() { dataLayer.push(arguments); }
  window.gtag = gtag;
  gtag('js', new Date());
  gtag('config', GA_ID);
})();
