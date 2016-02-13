---
layout: fc
permalink: /unmapped.geojson
---
{% assign first = true %}
{% for page in site.routes %}{% for branch in page.branches %}{% if branch.unmapped %}{% if first == true %}{% assign first = false %}{% else %},{% endif %}
  {"type":"Feature","properties":{"route":"{{page.id}}","title":"{{page.title}}"{% if branch.status %},"status":"{{branch.status}}"{% endif %}},"geometry":{"type":"LineString","coordinates":[
  {% assign towns = branch.towns | split:"," %}{% for town in towns %}{{ site.data.places[town].geometry }}{% if forloop.last == false %},{% else %}]{% endif %}{% endfor %}
  }}
{% endif %}{% endfor %}{% endfor %}
