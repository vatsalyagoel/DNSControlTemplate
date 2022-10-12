# DNS

We use [DNSControl](https://stackexchange.github.io/dnscontrol/) to manage our external DNS Zones.

## Getting Started

To make a change to a DNS Zone, follow the following steps.

1. Locate the Domain you want to modify within the `domains` folder.
    - For instance `example.com` records live within the `domains/example_com.js` file.
1. Locate the entry you wish to modify or an area with similar entries to the one you wish to add.
1. Make your changes or additions. A few examples can be found below.
1. Commit to branch, push, and create a pull request.
1. The changes will be reviewed and merged by admins.

## Examples

### A Record

```javascript
    A('@', '192.168.1.1', CF_PROXY_ON),
    A('www', '192.168.1.1', CF_PROXY_ON)
```

### CNAME Record

__Note the trailing `.`__. See [Why trailing dot](https://stackexchange.github.io/dnscontrol/why-the-dot)

```javascript
    CNAME('dev', 'example.com.', CF_PROXY_ON)
```

## Cloudflare CDN

The macros `CF_PROXY_ON`, `CF_PROXY_OFF`, and `CF_PROXY_FULL` control the use of CloudFlare CDN. Typically web hosted webapp use `CF_PROXY_ON`. This provides DDOS protection as well as caching and other security and traffic flow benefits. [See](https://stackexchange.github.io/dnscontrol/providers/cloudflare).

## Build and test

DNSControl can be run within Docker.

Running the following from the root folder will validate the dnsconfig.js file and report any errors during validation.

```sh
docker run --rm -i -v ${pwd}:/dns stackexchange/dnscontrol:latest dnscontrol check
```

When a PR is opened, the CI will run `dnscontrol preview` which describes changes (if any) which will be made and stops the build if any errors are found.
