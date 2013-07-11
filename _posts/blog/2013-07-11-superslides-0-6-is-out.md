---
published: true
layout: post
title: "Superslides 0.6 is Out!"
date: "2013-07-11"
categories: blog projects
comments: "true"
---

Superslides has come a long way in a year. So what's changed?

<!-- more -->

<div class="wide-container">
  <div id="slides">
    <div class="slides-container">
      <img src="/images/posts/chicago-3.jpg">
      <img src="/images/posts/chicago-2.jpg">
      <img src="/images/posts/chicago-1.jpg">
      <img src="/images/posts/chicago-4.jpg">
    </div>
    <nav class="slides-navigation">
      <a href="#" class="next">Next</a>
      <a href="#" class="prev">Previous</a>
    </nav>
  </div>
</div>
(Chicago, early 1900s)

#### Fade animation

Probably one of the biggest requested features was a fade animation. I went one step further, though. I realize folks might want to customize how it works, and that's only fair. An extensible fx engine has been added so you can customize transitions.

#### Goodbye Coffeescript

I really do like Coffeescript and I continue to use it where appropriate. I felt that it wasn't right for this project though. Debugging issues through CS generated code was a huge frustration.

#### A bunch of new examples

A new examples folder now showcases about a dozen features.

#### Performance fixes

Double image loading, multiples, IE fixes, the works. Many long standing issues resolved on this release;

<script src="http://cdnjs.cloudflare.com/ajax/libs/jquery-easing/1.3/jquery.easing.min.js">
</script>
<script src="https://rawgithub.com/benbarnett/jQuery-Animate-Enhanced/master/jquery.animate-enhanced.min.js">
</script>
<script src="https://rawgithub.com/nicinabox/superslides/0.6.2/dist/jquery.superslides.min.js" type="text/javascript" charset="utf-8">
</script>

<style>
  .wide-container {
    width: 100%;
    height: 500px;
    margin-bottom: 30px;
  }
</style>

<script>
  $(function() {
    $('#slides').superslides({
      inherit_height_from: '.wide-container',
      animation: 'fade',
      play: 5000
    });
  });
</script>
