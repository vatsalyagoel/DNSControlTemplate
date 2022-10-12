D("example.com", REG_THIRDPARTY, DnsProvider(DNS_CLOUDFLARE),
  DefaultTTL('1h'),
  Office365Records('example.com', 'ms00000001', 'contoso.onmicrosoft.com'),
  SPF_BUILDER({
    label: '@',
    parts: [
      'v=spf1',
      'include:spf.protection.outlook.com',
      '-all'
    ],
    ttl: '1h'
  }),
  GLOBAL_DMARC_POLICY,
  A('@', '192.168.1.1', CF_PROXY_ON)
);