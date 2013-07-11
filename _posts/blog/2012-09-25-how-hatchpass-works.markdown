---
layout: post
title: "How Hatchpass Works"
date: 2012-09-25 20:45
comments: true
categories: blog projects software
published: true
---

<p class="lead">
  <a href="http://beta.hatchpass.org">Hatchpass</a> is a password tool I built to help with the password problem--or, using the same password everywhere. It creates complex, pseudo-random, unique passwords. You don't have to remember any of them.
</p>

<!-- more -->

<img src="/images/posts/hatchpass.png" />

Now, many would say that the the only way to solve the password problem is to absolve passwords altogether. And, while this is probably true, they're not going away any time soon.

It's very common that users will reuse the same password across the web on accounts varying security, from banks to Myspace. The problem is that if any one account is compromised, an attacker could have access to any number of different accounts, including high risk ones.

## How is this different than LastPass, 1Password, etc?

These 3rd party services store your password. That makes them inherently untrustworthy. Hatchpass does not store anything. Since you can easily recreate **your** passwords, storage is an unnecessary risk.

There is no sign up, no account, no "user". You simply use it.

They also generate actual random passwords. Since they're random, they have to be stored. You can't get that random password again.

## I get it. How does this help me?

Hatchpass generates unique passwords. The passwords aren't *randomly* generated, however. They're mathematically created based on an algorithm. By combining the same pieces of information (a key, password, and domain), you'll always get the same generated password.

<img src="/images/posts/hatchpass-settings.png" />

Let me explain more about these pieces.

### The key

Upon visiting, a pseudo-random key will be generated for you. It's a 5 character string based on the time you visited (to the millisecond). This key is effectively unique to you and helps randomize the algorithm.

### The master password

This is what makes Hatchpass easy to use. If you're already using the same password on every site, this is all you really need to remember. Hatchpass basically translates this (probably simple) password into a complex password. You aren't expected to remember the generated passwords, you can always comeback and regenerate it.

Remember, the best kept secret is one nobody knows.

### The domain

This is the site you want to log in to. Once you type your password and the domain, a password will be created on the fly. **For a given key, password, and domain, you will always get the same password.**

This is important. Remember, the generated passwords **aren't random**. They're mathematically recreatable with the information you provided. Since your password (and probably key) are secret, you don't need to worry about someone having the same generated password as you. The key randomizes this.

## But, security!

Hatchpass is a JavaScript application (Backbone to be exact). It has no database. In fact, nothing is ever even sent to the server. Once you've loaded the page, all calculations are done **in your browser**.

localStorage is utilized to save settings and recent domains. If you're unfamiliar with localStorage, this means that everything is stored right in your browser, similar to a cookie. It's not a cookie, however, and won't be cleared if you clear your cookies.

It can't be accessed by other sites or applications. It's specific to the Hatchpass domain and only it can see the settings.

<img src="/images/posts/hatchpass-recent.png" />

## Okay, but how do I use it?

When you register on a site, open up Hatchpass, type the domain name, and copypasta the password into the registration form. Whenever you want to login again, open Hatchpass, type the domain, copypasta. Easy peasy.

<img src="/images/posts/hatchpass-generated.png" />

Yes, it's a little tedious. Make it a habit and you'll be used to it in no time. Your real life is at stake here.

## Tips

* **Save your settings** unless you're on a public computer. View the Settings pane and turn on "Save All". This will save all your settings and your master password. Upon subsequent visits, all you need to do is type the domain you want to log in to.

* **Bookmark it** and put it in your url bar, or some place convenient. If you use an iPhone, save it on your homescreen. It's a fullscreen, touch enabled web app.

* **Memorize your key.** If you are away from your computer and you need to login to a site that you've used Hatchpass to generate the password with, the key and the master password are the most critical pieces of information. You can't get the same password without them.

## That's all!

I've been using Hatchpass daily for over a couple years now. I'd love to hear your feedback if you're using it (or if you're not). I know it's not a perfect solution, but it's an area that needs improvement.

<a class="button radius expand" href="http://beta.hatchpass.org">Try it out &rarr;</a>
