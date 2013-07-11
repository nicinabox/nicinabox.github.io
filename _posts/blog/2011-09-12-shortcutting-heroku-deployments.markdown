---
layout: post
title: "Shortcutting Heroku Deployments"
date: 2011-09-12 10:53
comments: true
categories: blog software
---

If you are familiar with [Heroku](http://heroku.com), you may know that deploying is as easy as pushing to their remote repository:

{% highlight bash %}
  $ git push heroku
{% endhighlight %}

But, this can get really monotonous, especially if you're frequently pushing to a staging app (then you have to specify the branch name as well). To make things a little easier I whipped up a quick shell function to make deployments a snap.
<!--more-->

We always name our Heroku remotes _staging_ and _production_. To deploy to staging, for instance, just pass the branch name you want to deploy:

{% highlight bash %}
  $ deploy dev
{% endhighlight %}

Here's the function. Just drop it in your `.bashrc` (or whatever shell config you use).

{% gist 1072008 %}
