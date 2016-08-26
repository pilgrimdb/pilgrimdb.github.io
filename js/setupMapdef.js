---
layout: null
---
var mapDef = document.createElement('map-def');
mapDef.style.display = 'none';
var qs = window.location.search.substring(1).split('&');
var attribution = encodeURIComponent('route lines: see route attributions page');
var routes = [
  {
    "id":encodeURIComponent("Unmapped%20sections"),
    "url":"/simp.geojson"
  },
  {
    "id":"Routelines",
    "url":"/unmapped.geojson",
    "style":{"stroke":{"color":"rgba(255,255,0,0.6)","width":3,"lineDash":[5]}},
    "attribution": attribution
  }
];

qs.forEach(function(part) {
  var pair = part.split('=');
  var el;
  switch (pair[0]) {
    case 'route':
      createMapdef(pair[1], '/', true);
      break;
    case 'feature':
      createMapdef(pair[1], '/features/');
      break;
    case 'routes':
      createMapdef('srtmea/' + JSON.stringify(routes));
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
// attr - optional boolean to output attribution text
function createMapdef(str, dir, attr) {
  var maptypes = {{ site.data.maptypes | jsonify }};
  var apikeys = {{ site.apikeys | jsonify }};
  for (var type in maptypes) {
    var mt = maptypes[type];
    if (mt.api) {
      mt.map = mt.map.replace(/apikey/g, apikeys[mt.api]);
    }
  }
  var parts = str.split('/');
  var el = document.createElement('rasters');
  el.innerHTML = maptypes[parts[0]].map;
  mapDef.appendChild(el);
  el = document.createElement('components');
  el.innerHTML = "cursorposition,tooltip,featuredisplay";
  mapDef.appendChild(el);
  // if dir, prepend and add geojson, else remove maptype/ from str
  var url = dir ? dir + parts[1] + '.geojson' : str.substring(str.indexOf('/')+1);
  // if attr, use array obj instead of simple url
  var attrObj = [
    {
      url: url,
      attribution: attribution
    }
  ];
  el = document.createElement('vectors');
  el.innerHTML = attr ? JSON.stringify(attrObj) : url;
  mapDef.appendChild(el);
}
