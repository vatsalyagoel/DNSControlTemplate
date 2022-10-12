# Requirements

* This template is required. Any request that does not include enough information may be closed at the maintainers' discretion.
* If you are updating ```dnsconfig.js```, Have you (put an X between the brackets on each line to confirm):
  * [ ] Checked that ```CNAME``` records have the trailing dot as [described here](https://stackexchange.github.io/dnscontrol/why-the-dot).
  * [ ] Checked you have used single quotes.
  * [ ] Confirmed there are no dangling DNS entries i.e. old records that haven't been cleaned up.
  * [ ] Confirmed any ```SPF``` changes do not violate the DNS request limits. The SPF RFC says that SPF settings should not require more than 10 DNS lookups. [See](https://www.mailhardener.com/blog/spf-lookup-limit-explained)

## Description of the Change

[ We must be able to understand the design of your change from this description. If we cannot get a good idea of what the code will be doing from the description here, the pull request may be closed at the maintainers' discretion. Keep in mind that the maintainer reviewing this PR may not be familiar with or have worked with the code here recently, so please walk us through the concepts. ]

## Associated/Resolved Issues

[ Enter any applicable issues here, this could include backlog, issue or ticket numbers ]

> Note: By creating a pull request, you are expected to comply with this project's Code of Conduct.
