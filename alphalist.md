---
title: Alphabetical list of routes
---

{% assign counter = 0 %}{% assign mappedcounter = 0 %}
{% assign sorted_pages = (site.routes | sort: 'title', 'last') %}

{% for page in sorted_pages %}
* [{{ page.title }}]({{ page.url }}){% if site.data.mapsections[page.id] %} (mapped) {% assign mappedcounter = mappedcounter | plus: 1 %}{% endif %}
{% assign counter = counter | plus: 1 %}
{% endfor %}

Total no: {{ counter }}; mapped {{ mappedcounter }}
