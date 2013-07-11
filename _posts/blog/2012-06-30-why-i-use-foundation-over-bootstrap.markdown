---
layout: post
title: "Why I Use Foundation Over Bootstrap"
date: 2012-06-30 08:11
comments: true
categories: blog thoughts
published: true
---

When discussing or suggesting [Foundation](http://foundation.zurb.com/) over [Twitter Bootstrap](http://twitter.github.com/bootstrap) I often get responses like "Why bother?", or "Why reinvent the wheel?", or whatever. Having deep-dived into the code of both of these frameworks, let me tell you what I like and dislike about them and why I ultimately chose Foundation.

<!-- more -->

## Software is opinionated

There are few topics that you can find such strong opinions on how things should be done. Politics and software are two of them. The beautiful thing about software is, if you don't like the way something is done, you can make your own.

Foundation and Bootstrap are built on opinions. These opinions include things like how a boilerplate framework should be tooled, what a boilerplate framework should include, how a responsive grid should work, naming conventions, and what browsers should be supported. And thats just a small handful of things! The decisions that go into building a framework like this have some serious thought.

Now, I feel like I owe you a confession right here. I come from the Ruby community and if you know anything about Rubyists, they're a pretty opinionated bunch. So, agree or disagree with the what you're about to read, you should take it with a grain of salt anyway.

## Tooling

Chris Coyier has a great post on [SASS vs LESS](http://css-tricks.com/sass-vs-less/) and why you should be using SASS over LESS. I'm not going to dive into a comparison of the two, but ultimately I feel that SASS is superior to LESS in a lot of ways (that post illustrates them nicely). SASS fits better into the Terminal/Editor workflow, at least in my experience. It's seamless with Ruby. This makes it very easy to use not only SASS, but also Compass, Bourbon, or other Compass/SASS modules. I like when tools work for me, and SASS does that.

Foundation 3 is built with SASS, while Bootstrap is built with LESS. Foundation's ability to integrate with Sinatra, Rails, or a basic Rack app makes integration faster. It's mixins and functions allow you to create rows and columns without cluttering up your markup. Bootstrap uses `.span1` on columns to set their widths. Not exactly semantic compared to Foundation's `.one.column`.

## Bundled packages

You may have noticed that Foundation doesn't include a whole heap of JavaScript plugins. That's a good thing! I use a few of Bootstrap's plugins frequently (specifically Dropdowns, Tooltips, Popovers, and Alert messages). They are excellently crafted and they work "pretty well" outside of Bootstrap.

Foundation assumes less about your project, your style, and your design. I prefer this to Bootstrap's philosophy of "make everything look like Bootstrap".At least, that seems to be what it's philosophy is.

## Flexibility

They both include a lot of similar type things: a responsive grid, typography, buttons, forms, and UI elements. I find Foundation's elements to be better crafted, more flexible, and assume less. Bootstrap tends to what you to do everything in Bootstrap, and I don't really care for that. I want to be able to use my own style (or house style) without a framework telling me what to do.

There have been many instances where, trying to use elements from Bootstrap, it wanted the exact markup structure from Bootstrap as well. I don't necessarily write my markup like Bootstrap does and I don't like to be forced to either.

## The Developer Audience

Bootstrap makes no secret that it's for everyone of all skill levels. That raises a bit of a red flag for me. I think its great that Bootstrap makes itself accessible to the newbie developer, but I feel like it also leaves something to be desired.

Consider the [312 Wheat Ale](http://beeradvocate.com/beer/profile/1549/17141) by Goose Island. If you've never had it, 312 a decent beer. It's a low ABV session ale. Easily drinkable, but the flavor is not all that compelling. *A lot of people like it.* Why? A lot of people like because it doesn't upset anyone. People who aren't beer geeks think they're drinking a good beer (because, it's not you know, Natty Ice) and beer geeks are only disappointed when there isn't something better available.

Which brings me back to my point: things that appeal to the widest audience, while good, tend to be disappointing to the more experienced and technical audience.

I dislike the classes that Bootstrap uses. I find them unsemantic and they clutter up the markup. I dislike the defaults that Bootstrap uses. I find the styles annoying to overwrite at best and difficult to at worst.

## These frameworks together make our developer lives better

While I rely heavily on Foundation, I do use some parts of Bootstrap: some JavaScript plugins, some CSS (for tables, badges, and labels). Ultimately, you should use whatever makes your project most successful. For me, that's Foundation. It's just a better fit for how I work and the tools I work with.

I offer a great amount of thanks to the developers of both of these projects, without which we'd be using underwhelming responsive grids. I'm not saying that one is "better" than another. Try both and use what is best for you.
