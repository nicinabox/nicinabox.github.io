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

<style>
  .wide-container {
    height: 500px;
    margin-left: -65px;
    margin-right: -65px;
    visibility: hidden;
  }
  #slides {
    position: relative;
  }
  #slides .slides-container {
    display: none;
  }
  .slides-navigation {
    margin: 0 auto;
    position: absolute;
    z-index: 3;
    top: 0;
    bottom: 0;
    width: 100%;
    font-family: Lato;
    font-weight: bold;
  }
  .slides-navigation a {
    position: absolute;
    display: block;
    padding: 10px;
    color: white;
    font-size: 46px;
    text-shadow: 0 1px 1px #000;
    top: 204px;
  }
  .slides-navigation a.prev {
    left: 0;
  }
  .slides-navigation a.next {
    right: 0;
    text-align: right;
  }

  @media screen and (max-width: 649px) {
    .wide-container {
      margin-left: -15px;
      margin-right: -15px;
      height: 300px;
    }
    .slides-navigation a {
      top: 104px;
    }
  }
</style>

<div class="wide-container">
  <div id="slides">
    <div class="slides-container">
      <img src="/images/posts/chicago-4.jpg">
      <img src="/images/posts/chicago-1.jpg">
      <img src="/images/posts/chicago-2.jpg">
      <img src="/images/posts/chicago-3.jpg">
    </div>
    <nav class="slides-navigation">
      <a href="#" class="next">
        <i class="icon-angle-right">
        </i>
      </a>
      <a href="#" class="prev">
        <i class="icon-angle-left">
        </i>
      </a>
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

If you do happen upon a bug, [post an issue on Github](https://github.com/nicinabox/superslides/issues) and we'll get it resolved.

<script src="http://cdnjs.cloudflare.com/ajax/libs/jquery-easing/1.3/jquery.easing.min.js">
</script>
<script src="https://rawgithub.com/EightMedia/hammer.js/master/dist/hammer.min.js">
</script>
<script src="https://rawgithub.com/benbarnett/jQuery-Animate-Enhanced/master/jquery.animate-enhanced.min.js">
</script>
<script src="https://rawgithub.com/nicinabox/superslides/0.6.2/dist/jquery.superslides.min.js" type="text/javascript" charset="utf-8">
</script>

<script>
  $(function() {
    var $slides = $('#slides');
    Hammer($slides[0]).on("swipeleft", function(e) {
      $slides.data('superslides').animate('next');
    });

    Hammer($slides[0]).on("swiperight", function(e) {
      $slides.data('superslides').animate('prev');
    });
    $slides.on('init.slides', function() {
      $('.wide-container').css('visibility', 'visible');
    });
    $slides.superslides({
      inherit_height_from: '.wide-container'
    });
  });
</script>
