---
layout: null
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
    case 'routes':
      createMapdef('srtmea/[{"id":"Unmapped%20sections","url":"/simp.geojson"},'+
        '{"id":"Routelines","url":"/unmapped.geojson","style":{"stroke":{"color":"rgba(255,255,0,0.6)","width":3,"lineDash":[5]}}}'+
        ']');
      break;
    default:
      el = document.createElement(pair[0]);
      el.innerHTML = pair[1];
      mapDef.appendChild(el);
  }
});

document.body.appendChild(mapDef);

// str - url string 'maptype/filename'
// dir - optional dir to prefix to filename
function createMapdef(str, dir) {
  var maptypes = {{site.data.maptypes | jsonify}};
  // what a horrible hack!
  maptypes.bing.map = maptypes.bing.map.replace(/site.apikeys.bing/g, '{{site.apikeys.bing}}');
  maptypes.f.map = maptypes.f.map.replace(/site.apikeys.ignf/g, '{{site.apikeys.ignf}}');
  maptypes.gb.map = maptypes.gb.map.replace(/site.apikeys.os/g, '{{site.apikeys.os}}');
  var parts = str.split('/');
  var el = document.createElement('rasters');
  el.innerHTML = maptypes[parts[0]].map;
  mapDef.appendChild(el);
  el = document.createElement('components');
  el.innerHTML = "mouseposition,tooltip,featuredisplay";
  mapDef.appendChild(el);
  el = document.createElement('vectors');
  // if dir, prepend and add geojson, else remove maptype/ from str
  el.innerHTML = dir ? dir + parts[1] + '.geojson' : str.substring(str.indexOf('/')+1);
  mapDef.appendChild(el);
}
