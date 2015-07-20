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
  var map = {
    a: "at/topo",
    b: "be/ign/topo",
    bing: '{"bing/Road":"{{site.apikeys.bing}}"},'+
        '{"bing/AerialLabels":"{{site.apikeys.bing}}"}',
    cat: "es/icc/topo",
    cz: "cz/zm",
    d: "de/bkg/atlasde",
    e: "es/ign/mtn",
    i: "it/pcn",
    nl: "nl/ngr/achter",
    osm: "osm/osm",
    p: "pt/dgt/sc",
    pl: "pl/topo",
    relief: "srtm/maps4free",
    si: "si/gurs",
    topo: "osm/opentopo"
  };
  var parts = str.split('/');
  var el = document.createElement('rasters');
  el.innerHTML = map[parts[0]];
  mapDef.appendChild(el);
  el = document.createElement('components');
  el.innerHTML = "mouseposition,tooltip,featuredisplay";
  mapDef.appendChild(el);
  el = document.createElement('vectors');
  el.innerHTML = dir + parts[1] + '.geojson';
  mapDef.appendChild(el);
}
