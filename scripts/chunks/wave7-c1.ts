  /* ---- wave 7: instrument and registry screens ---- */

  'harbour-tide-table': [
    'display:grid; grid-template-columns:200px minmax(0,1fr); grid-template-areas:"rail chart" "rail table" "rail status"; gap:16px; align-items:start; padding:20px;',
    '.pt-i0{grid-area:rail; position:sticky; top:12px;} .pt-i1{grid-area:chart;} .pt-i2{grid-area:table;} .pt-i3{grid-area:status;}',
  ],

  'kiln-firing-schedule': [
    'display:grid; grid-template-columns:minmax(0,1.5fr) minmax(240px,1fr); grid-template-areas:"bar bar" "week curve" "week controls"; gap:16px 20px; align-items:start; padding:20px;',
    '.pt-i0{grid-area:bar;} .pt-i1{grid-area:week;} .pt-i2{grid-area:curve;} .pt-i3{grid-area:controls;}',
  ],

  'accession-registry': [
    'display:grid; grid-template-columns:64px minmax(0,1fr) 300px; grid-template-areas:"bar bar bar" "alpha rows detail"; gap:16px 20px; align-items:start; padding:20px;',
    '.pt-i0{grid-area:bar;} .pt-i1{grid-area:alpha; position:sticky; top:12px;} .pt-i2{grid-area:rows;} .pt-i3{grid-area:detail; position:sticky; top:12px;}',
  ],

  'night-market-aisles': [
    'display:grid; grid-template-columns:repeat(6,minmax(0,1fr)); grid-template-areas:"head head head head head head" "aisles aisles aisles aisles aisles aisles" "stalls stalls stalls stalls offers offers" "stalls stalls stalls stalls call call"; gap:14px 16px; align-items:start; padding:20px;',
    '.pt-i0{grid-area:head;} .pt-i1{grid-area:aisles;} .pt-i2{grid-area:stalls;} .pt-i3{grid-area:offers;} .pt-i4{grid-area:call; align-self:end;}',
  ],
