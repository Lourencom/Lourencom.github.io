(function () {
  // ============================================================
  // VISITED COUNTRIES — Edit this array to update the map.
  // Use ISO 3166-1 alpha-2 codes (e.g. "PT" = Portugal, "ES" = Spain).
  // Full list: https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2
  // ============================================================
  var visitedCountries = ["PT", "ES"];

  // Country display names (update alongside the array above)
  var countryNames = {
    PT: "Portugal",
    ES: "Spain"
  };
  // ============================================================

  var root = am5.Root.new("chartdiv");
  root.setThemes([am5themes_Animated.new(root)]);

  var chart = root.container.children.push(
    am5map.MapChart.new(root, {
      panX: "rotateX",
      panY: "translateY",
      projection: am5map.geoMercator()
    })
  );

  // Background polygon series (all countries)
  var polygonSeries = chart.series.push(
    am5map.MapPolygonSeries.new(root, {
      geoJSON: am5geodata_worldLow,
      exclude: ["AQ"]
    })
  );

  polygonSeries.mapPolygons.template.setAll({
    tooltipText: "{name}",
    interactive: true,
    fill: am5.color(0xdcdcdc),
    strokeWidth: 0.5,
    stroke: am5.color(0xffffff)
  });

  polygonSeries.mapPolygons.template.states.create("hover", {
    fill: am5.color(0xb0b0b0)
  });

  // Color visited countries
  polygonSeries.mapPolygons.template.adapters.add("fill", function (fill, target) {
    if (
      target.dataItem &&
      visitedCountries.indexOf(target.dataItem.get("id")) !== -1
    ) {
      return am5.color(0x1565c0);
    }
    return fill;
  });

  // Hover state for visited countries
  polygonSeries.mapPolygons.template.adapters.add("tooltipText", function (text, target) {
    if (
      target.dataItem &&
      visitedCountries.indexOf(target.dataItem.get("id")) !== -1
    ) {
      return "{name} ✓";
    }
    return text;
  });

  // Zoom controls
  chart.set("zoomControl", am5map.ZoomControl.new(root, {}));

  // Animate on load
  chart.appear(1000, 100);

  // Populate stats below the map
  var statsEl = document.getElementById("travel-stats");
  if (statsEl) {
    var count = visitedCountries.length;
    var names = visitedCountries.map(function (code) {
      return countryNames[code] || code;
    });

    statsEl.innerHTML =
      "<p><strong>Countries visited: " + count + "</strong></p>" +
      '<ul class="country-list">' +
      names
        .map(function (name) {
          return '<li class="country-tag">' + name + "</li>";
        })
        .join("") +
      "</ul>";
  }
})();
