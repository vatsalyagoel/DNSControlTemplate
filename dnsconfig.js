require('util/ttl.js');
require('util/parked_domains.js');
require('util/office365.js');

// Registrar
var REG_THIRDPARTY = NewRegistrar('none');

// DNS Providers
var DNS_CLOUDFLARE = NewDnsProvider('cloudflare.com', {
  "manage_redirects": true
});

var GLOBAL_DMARC_POLICY = TXT(
  '_dmarc',
  'v=DMARC1; p=reject; pct=100; rua=mailto:example@dmarc.report-uri.com; ruf=mailto:example@dmarc.report-uri.com; fo=1; aspf=r; adkim=r',
  hour_ttl
);

require('domains/example_com.js');
