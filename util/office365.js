function Office365Records(domain_name, domain_identifier, onmicrosoft_domain) {
  var domain_name_dashed = domain_name.split('.').join('-');
  var dkim1_record = 'selector1-{replace1}._domainkey.{replace2}.onmicrosoft.com.'.replace('{replace1}', domain_name_dashed).replace('{replace2}', onmicrosoft_domain);
  var dkim2_record = 'selector2-{replace1}._domainkey.{replace2}.onmicrosoft.com.'.replace('{replace1}', domain_name_dashed).replace('{replace2}', onmicrosoft_domain);

  return [
    TXT('@', 'MS='.concat(domain_identifier), hour_ttl),
    MX('@', 0, domain_name_dashed.concat('.mail.protection.outlook.com.'), hour_ttl),
    CNAME('selector1._domainkey', dkim1_record, hour_ttl),
    CNAME('selector2._domainkey', dkim2_record, hour_ttl),
    SRV('_sip._tls', 100, 1, 443, 'sipdir.online.lync.com.', hour_ttl),
    SRV('_sipfederationtls._tcp', 100, 1, 5061, 'sipfed.online.lync.com.', hour_ttl),
    CNAME('enterpriseenrollment', 'enterpriseenrollment.manage.microsoft.com.', hour_ttl),
    CNAME('autodiscover', 'autodiscover.outlook.com.', hour_ttl),
    CNAME('enterpriseregistration', 'enterpriseregistration.windows.net.', hour_ttl),
    CNAME('lyncdiscover', 'webdir.online.lync.com.', hour_ttl),
    CNAME('msoid', 'clientconfig.microsoftonline-p.net.', hour_ttl),
    CNAME('sip', 'sipdir.online.lync.com.', hour_ttl)
  ];
}