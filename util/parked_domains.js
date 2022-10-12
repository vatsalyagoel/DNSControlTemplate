function Placeholder(Name, Registrar, Provider) {
  return D(Name, Registrar, DnsProvider(Provider),

    // SPF specifies no allowed servers
    SPF_BUILDER({
      label: '@',
      parts: [
        'v=spf1',
        '-all'
      ],
      ttl: hour_ttl
    }),

    // Wildcard DKIM to fail all
    TXT('*._domainkey', 'v=DKIM1; p=', hour_ttl)

    // Use the Global DMARC Policy
    // TODO: ADD DMARC
  );
}