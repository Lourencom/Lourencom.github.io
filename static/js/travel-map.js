(function () {
  // ============================================================
  // VISITED COUNTRIES — Edit this array to update the map.
  // Use ISO 3166-1 alpha-2 codes (e.g. "PT" = Portugal, "ES" = Spain).
  // Full list: https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2
  // ============================================================
  var visitedCountries = [
    "PT", "ES", "FR", "GB", "DE", "IT", "BE", "NL", "CH", "AT", 
    "US", "BR", "MA", "CV", "EG", "ST", "TN", "VN", "AL", "AD", 
    "BA", "HR", "CZ", "DK", "GR", "VA", "HU", "IE", "LI", "LU", 
    "MT", "ME", "MK", "NO", "SI", "CR", "CU", "JM"
  ];

  // Mapping of territories to their UN parent states for visual coloring
  var territoryToParent = {
    "GL": "DK", "FO": "DK",                                          // Denmark
    "GF": "FR", "RE": "FR", "YT": "FR", "MQ": "FR", "GP": "FR",      // France
    "NC": "FR", "PF": "FR", "TF": "FR", "PM": "FR", "WF": "FR",
    "PR": "US", "GU": "US", "AS": "US", "VI": "US", "MP": "US",      // USA
    "FK": "GB", "GI": "GB", "GS": "GB", "IO": "GB", "SH": "GB",      // UK
    "AI": "GB", "BM": "GB", "VG": "GB", "KY": "GB", "MS": "GB",
    "SJ": "NO", "BV": "NO",                                          // Norway
    "AW": "NL", "CW": "NL", "SX": "NL", "BQ": "NL",                  // Netherlands
    "EH": "MA"                                                       // Morocco
  };

  // Location display names
  var countryNames = {
    PT: "Portugal",
    ES: "Spain",
    FR: "France",
    GB: "United Kingdom",
    DE: "Germany",
    IT: "Italy",
    BE: "Belgium",
    NL: "Netherlands",
    CH: "Switzerland",
    AT: "Austria",
    US: "United States",
    BR: "Brazil",
    MA: "Morocco",
    CV: "Cabo Verde",
    EG: "Egypt",
    ST: "Sao Tome and Principe",
    TN: "Tunisia",
    VN: "Vietnam",
    AL: "Albania",
    AD: "Andorra",
    BA: "Bosnia and Herzegovina",
    HR: "Croatia",
    CZ: "Czechia",
    DK: "Denmark",
    GR: "Greece",
    VA: "Holy See",
    HU: "Hungary",
    IE: "Ireland",
    LI: "Liechtenstein",
    LU: "Luxembourg",
    MT: "Malta",
    ME: "Montenegro",
    MK: "North Macedonia",
    NO: "Norway",
    SI: "Slovenia",
    CR: "Costa Rica",
    CU: "Cuba",
    JM: "Jamaica"
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
    var id = target.dataItem ? target.dataItem.get("id") : null;
    var parentId = territoryToParent[id] || id;
    if (visitedCountries.indexOf(parentId) !== -1) {
      return am5.color(0x1565c0);
    }
    return fill;
  });

  // Hover state for visited countries
  polygonSeries.mapPolygons.template.adapters.add("tooltipText", function (text, target) {
    var id = target.dataItem ? target.dataItem.get("id") : null;
    var parentId = territoryToParent[id] || id;
    if (visitedCountries.indexOf(parentId) !== -1) {
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
    var totalCountries = 195; // UN Member & Observer States

    var percentage = ((count / totalCountries) * 100).toFixed(1);

    var names = visitedCountries.map(function (code) {
      return countryNames[code] || code;
    });
    names.sort();

    statsEl.innerHTML =
      "<p><strong>Visited: " + count + " / " + totalCountries + " Countries (" + percentage + "%)</strong></p>" +
      '<ul class="country-list">' +
      names
        .map(function (name) {
          return '<li class="country-tag">' + name + "</li>";
        })
        .join("") +
      "</ul>" +
      '<p style="font-size: 0.7rem; color: #777; margin-top: 1rem;">' +
      "Note: The total count (195) is based on the UN Member and Observer States. " +
      "The map visualization includes additional territories and regions for geographic completeness." +
      "</p>";
  }
})();
