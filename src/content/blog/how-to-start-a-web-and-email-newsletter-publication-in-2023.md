---
title: "How to start a web and email newsletter publication in 2023"
date: "2023-10-26"
tag: "Publishing"
image: "/photo-1504465039710-0f49c0a47eb7.jpeg"
permalink: "how-to-start-a-web-and-email-newsletter-publication-in-2023"
excerpt: "Integrate email newsletters with web posts in WordPress."
---

I have been working in digital publishing since 2012 and it's been a ride. Lately, and 100M+ page views later, I came to the conclusion that figuring out a simple and effective way to start a web and email publication can be overwhelming.

Let me offer my hard-gained experience with just a few simple tips.

## Future proofing the simple setup
Everyone starting a new publication or scaling a recent one wants to first validate the demand and then figure out how to grow adding complications. It becomes obvious to pick either a hosted blogging (Medium, Substack) platform, or an open-source self-hosted (Ghost, WordPress).

All platforms have their merits. As well as going hosted or self-hosted.

Ghost is beautiful blogging and emailing platform and it has already achieved the goal of bringing more people with skills back to blogging throwing in a plug-and-play business model.

Future proofing the platform requires two things though:
1. A vast eco-system of developers, plug-ins and information to expand the platform's original scope.
2. Ability to turn the platform into a headless publishing environment to drive future needs that can only be achieved via a custom web application fetching data from the API.

WordPress is therefore my recommendation to build a web and email publication in 2023.

## Making WordPress the best publishing platform to start and grow
WordPress has been around for decades and runs on rusty PHP code and a MySQL database. Yet, it's very powerful and scalable if used, configured and maintained correctly.

The basic WordPress deployment allows to pick a simple theme, even the default ones provided with the platform, and turn it into a publication with multiple categories and tags, host media, and configure the styling more than what's achievable with the out of the box Ghost. Theme and plug-in development is the already well-known nightmare though, so my advice is to grow the publication to the far reaches of what can be done without coding and look at a custom web applications using the WordPress Rest API when the needs require it.

MailPoet is the plug-in you'll need to send email newsletters from your WordPress publication. It's easy to configure and to create templates. It runs in WordPress, allowing to send email newsletters with merge fields from content and user data. It also provides open and click tracking and simple metrics, and best of all it can be configured to use any email sending platform like the powerful and cheap AWS SES.

## Deploying, maintaining and scaling WordPress
WordPress can be hosted virtually anywhere. From complex scalable and load-balanced deployments to simple dedicated WordPress hosting platforms.

I have found that the benefits of [Cloudways](https://www.cloudways.com/en/?id=1374914&ref=garavelli.io) are the ones that make more sense for publishers looking at WordPress as their platform of choice.

Cloudways is an automation tool that deploys the latest version of WordPress with the options to deploy Woocommerce for e-commerce enabled publications.

They let you pick your favorite hosting infrastructure supporting Digital Ocean, Linode, AWS, Google Cloud and more.

They automatically spin up the server and deploy the needed MySQL as well as the caching extensions like Varnish and Redis for object cache.

What's most important though is that a staging environment is automatically created for testing changes without breaking the live publication.

Migrations to and from staging are also automatic as well as SSL certificate generation and domain name changes performed as a managed search and replace in the database. The migration tool provided by Cloudways is suitable for existing WordPress sites to be imported into the new Cloudways server.

Cloudways has also recently introduced an autoscaling offering for busy publications that need a managed solution to scale the servers to handle spikes of traffic.

Clicking this [link to Cloudways](https://www.cloudways.com/en/?id=1374914&ref=garavelli.io) will get you $50 of free credit to test it and start building your web and email publication on WordPress