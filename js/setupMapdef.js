---
layout: none
---
var mapDef = document.createElement('mapdef');
var qs = window.location.search.substring(1).split('&');

qs.forEach(function(part) {
  var pair = part.split('=');
  var el;
  switch (pair[0]) {
    case 'route':
      createMapdef(pair[1], '/');
      break;
    case 'feature':
      createMapdef(pair[1], '/features/');
      break;
    default:
      el = document.createElement(pair[0]);
      el.innerHTML = pair[1];
      mapDef.appendChild(el);
  }
});

document.body.appendChild(mapDef);

function createMapdef(str, dir) {
  var maptypes = {{site.data.maptypes | jsonify}};
  // what a horrible hack!
  maptypes.bing.map = maptypes.bing.map.replace(/site.apikeys.bing/g, '{{site.apikeys.bing}}');
  var parts = str.split('/');
  var el = document.createElement('rasters');
  el.innerHTML = maptypes[parts[0]].map;
  mapDef.appendChild(el);
  el = document.createElement('components');
  el.innerHTML = "mouseposition,tooltip,featuredisplay";
  mapDef.appendChild(el);
  el = document.createElement('vectors');
  el.innerHTML = dir + parts[1] + '.geojson';
  mapDef.appendChild(el);
}
