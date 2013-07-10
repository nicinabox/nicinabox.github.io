---
layout: post
title: "shortcode.js"
date: 2012-11-16 19:42
description: A JavaScript implementation of Wordpress shortcodes.
comments: true
categories: Projects
published: true
---

<p class="lead">
  If you know about Wordpress' shortcodes, then this should already be familiar to you. In any case, read on my gallant friend.
</p>

<!-- more -->

`[overview]`

## What is it?

From the Wordpress Shortcode API:

<blockquote>
  <p>
    It enables plugin developers to create special kinds of content (e.g. forms, content generators) that users can attach to certain pages by adding the corresponding shortcode into the page text.
  </p>
</blockquote>

[shortcode.js](https://github.com/nicinabox/shortcode.js) is similar, except it's JavaScript based and it works basically anywhere. It's essentially a modular find-and-replace in the page. You find the shortcode, then replace it with something that can be added via JavaScript--pretty much anything. You could add a form, gallery, table of contents, or some special functionality to the page just with `[gallery id="123"]`.

## How does it help?

It's very useful in the case where one might be using a typical WYSIWG/M editor. Many editors don't support (or make it very difficult) to add rich functionality. Since the placeholder shortcode is just a string, an editor won't try to do anything to it.

By shifting the replacement to the frontend, not only does the action happen asynchronously, it works in pretty much any environment. You're not locked down to this backend language or that one. Honey badger don't care. You will need jQuery, however (a future version could easily remove this dependency).

## Demo

**You're looking at it!** The section overview at the top is generated from the `h2`s on the page. View the source to the see the actual implementation, or [check out the docs on Github](https://github.com/nicinabox/shortcode.js).

<script src="https://rawgithub.com/nicinabox/shortcode.js/master/dist/jquery.shortcode.js"></script>
<script src="https://rawgithub.com/nicinabox/shortcode.js/master/dist/jquery.shortcode.services.js"></script>

<script type="text/javascript">
  $('#main').shortcode();
</script>
