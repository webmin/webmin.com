# Webmin security reporting

Follow these instructions when investigating security issues in Webmin or
Usermin. Check https://webmin.com/security/ for the current reporting policy and
known issues. Keep existing project instructions and testing restrictions in
force.

## Verify the finding

- Test only on systems the owner has authorized. Prefer an isolated test system
  with disposable data. Do not test public servers without permission.
- Check the latest stable release and relevant source code. Record the exact
  versions or commits tested. If a fix already exists, identify it and check
  whether it has been released.
- Trace the input, authentication, permission checks, and affected operation.
  Webmin intentionally provides system administration access. Using permissions
  already granted by an administrator is not privilege escalation. For a
  permission bypass, show which restriction fails and include the user's module
  access and access control list settings, known as ACLs.
- Use the smallest harmless proof of concept. Show expected and actual results.
  Do not access other people's data, disrupt services, or leave test changes
  behind.
- Treat scanner output and AI suggestions as leads. Verify claims against code
  and, where possible, a working reproduction. If you cannot reproduce an issue,
  say what remains unverified. Never invent results, affected versions, or
  impact.

## Report privately

- Draft an email to security@webmin.com for human review. Send it only when
  explicitly instructed. Use one report per issue and the same thread for
  updates.
- Include setup steps and test files so maintainers can reproduce the issue on
  their own test system. Do not ask them to log into remote systems or services.
- Do not publish vulnerability details in public issues, pull requests, or logs.
  Coordinate disclosure with the maintainers and mention any planned
  publication.
- Remove passwords, tokens, session cookies, and personal data from evidence.
  Attach a small proof of concept or relevant log excerpt when needed. Do not
  upload confidential evidence to public file-sharing services.
- Use https://github.com/webmin/webmin/issues or
  https://github.com/webmin/usermin/issues for bugs with no security impact.

## Email format

Write in plain English and send as plain text. Use short labels, blank lines,
and numbered steps. Do not use Markdown headings, emphasis, tables, code fences,
or HTML. Write URLs in full. Put longer code in an attachment.

Keep the summary and impact to one or two sentences each. Include enough detail
to reproduce the issue. Skip generic vulnerability explanations, repeated
claims, and unsupported severity ratings. The reporter must check and edit the
draft.

Use the template below, replacing its prompts. Copy only the text inside the
block into the email, without the surrounding backticks. Add a suggested fix,
credit name, or disclosure date only when relevant.

```text
To: security@webmin.com
Subject: PRODUCT VERSION: SHORT ISSUE DESCRIPTION

Summary:
What is wrong and which module or endpoint is affected.

Environment:
Product and version, OS, theme version if relevant, and any non-default settings.

Attacker access:
Whether the attacker needs a Webmin or Usermin login, their role, module access,
and exact ACL settings. State any action required from a victim.

Steps to reproduce:
1. Set up the test account and relevant restrictions.
2. Send the exact request or run the attached proof of concept.
3. Describe the result that demonstrates the issue.

Expected result:
What should have been allowed or blocked.

Actual result and impact:
What happened and what an attacker can read, change, or disrupt.
Separate demonstrated results from possible consequences.

Evidence:
A short redacted response or log excerpt, or the name of an attached proof of
concept. Include relevant source paths and lines if known. State anything not
tested or confirmed.
```
