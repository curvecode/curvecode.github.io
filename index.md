---
title: Home
layout: default
---

## Welcome

This is my personal blog built with Jekyll. Below are the latest posts — use the pager to cycle through them.

<div id="posts-data" style="display:none">[
{% for post in site.posts %}{% unless forloop.first == false and false %}{% endunless %}{"title": "{{ post.title | escape }}", "url": "{{ post.url | relative_url }}", "date": "{{ post.date | date: '%Y-%m-%d' }}", "excerpt": "{{ post.excerpt | strip_newlines | escape }}"}{% if forloop.last %}{% else %},{% endif %}{% endfor %}
]</div>

<div id="posts-list" class="posts-list"></div>

<div class="posts-load">
  <button id="load-more" class="load-more">Load more</button>
  <p id="load-end" class="load-end" style="display:none">No more posts.</p>
</div>
