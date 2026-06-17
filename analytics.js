// =============================================
// MachLink China — Google Analytics (GA4) + lead tracking
// To change tracking, edit GA_ID below — this is the ONLY place.
// GA4 Measurement ID is found in: Admin -> Data Streams.
// =============================================
(function () {
  var GA_ID = 'G-2FRYG84LK1';
  var configured = GA_ID && GA_ID !== 'G-XXXXXXXXXX';

  if (configured) {
    var s = document.createElement('script');
    s.async = true;
    s.src = 'https://www.googletagmanager.com/gtag/js?id=' + GA_ID;
    document.head.appendChild(s);
    window.dataLayer = window.dataLayer || [];
    function gtag() { dataLayer.push(arguments); }
    window.gtag = gtag;
    gtag('js', new Date());
    gtag('config', GA_ID);
  }

  // ---- Lead / conversion tracking ----
  // Sends an event when a visitor clicks any WhatsApp or email link.
  // 'generate_lead' is a GA4 recommended event you can mark as a
  // conversion in GA (Admin -> Events -> toggle "Mark as conversion").
  function send(name, params) {
    if (window.gtag) {
      window.gtag('event', name, params);
    }
  }

  document.addEventListener('click', function (e) {
    var a = e.target.closest ? e.target.closest('a') : null;
    if (!a || !a.href) return;

    if (a.href.indexOf('wa.me') > -1 || a.href.indexOf('api.whatsapp') > -1) {
      var p = {
        transport_type: 'beacon',
        page_path: location.pathname,
        link_text: (a.innerText || '').trim().slice(0, 60) || 'WhatsApp',
        link_url: a.href
      };
      send('whatsapp_click', p);
      send('generate_lead', p);
    } else if (a.href.indexOf('mailto:') === 0) {
      send('email_click', { page_path: location.pathname, link_url: a.href });
    }
  }, true);

  // For conversions that are not plain links (e.g. the contact form,
  // which opens WhatsApp via JS). Call window.trackLead({...}) there.
  window.trackLead = function (extra) {
    var base = { transport_type: 'beacon', page_path: location.pathname, link_text: 'Contact form' };
    if (extra) { for (var k in extra) { if (extra.hasOwnProperty(k)) base[k] = extra[k]; } }
    send('whatsapp_click', base);
    send('generate_lead', base);
  };
})();
