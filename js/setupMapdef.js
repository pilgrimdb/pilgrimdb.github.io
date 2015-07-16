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
    b: "be/ign/Topo",
    bing: "bing/Road,bing/AerialLabels",
    cat: "es/icc/Topo",
    e: "es/ign/Mtn",
    osm: "osm/osm"
  };
  var parts = str.split('/');
  var el = document.createElement('rasters');
  el.innerHTML = map[parts[0]];
  mapDef.appendChild(el);
  el = document.createElement('components');
  el.innerHTML = 'tooltip,popup';
  mapDef.appendChild(el);
  el = document.createElement('vectors');
  el.innerHTML = dir + parts[1] + '.geojson';
  mapDef.appendChild(el);
}
