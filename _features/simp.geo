---
layout: fc
permalink: /simp.geojson
---
{% assign first = true %}{% for route in site.data.mapsections %}{% for mapsection in route[1] %}{% assign f = site.data.features[mapsection] %}
{% if first == false %},{% else %}{% assign first = false %}{% endif %}{% assign simple = true %}{% include feature.json %}{% endfor %}{% endfor %}
