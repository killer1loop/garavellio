---
title: "How to configure Ghost transactional emails with Docker Compose ENV variables"
date: "2023-12-30"
tag: "Ghost"
image: "/photo-1573164713988-8665fc963095.jpeg"
permalink: "how-to-configure-ghost-transactional-emails-with-docker-compose-env-variables"
excerpt: "If you are getting errors in Ghost running on Docker when signing up for a new user, adjust your ENV variables to get rid of a couple of variables."
---

I struggled with this for a few more hours than I wanted to spend on it, so let me save you some time and get straight to the solution to errors in Ghost when users sign up for a user on your Ghost blog.
The Docker Ghost container comes with a few mail options ENV variables that need to be adjusted for SMTP email sending to work with Mailgun or AWS SES.

mail__options__auth__pass

mail__options__auth__user

mail__options__host smtp.eu.mailgun.org

mail__options__port: 587

mail__transport: SMTP

These are the only required ENV variables to get Ghost setup with SMTP transactional emails on Mailgun EU. The same goes for AWS SES adjusting the sending host accordingly.