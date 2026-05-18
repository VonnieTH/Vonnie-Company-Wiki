import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2/+esm';
const sb = createClient('https://hfwywsfqwnlavhnmepyj.supabase.co','eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imhmd3l3c2Zxd25sYXZobm1lcHlqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzUyMDY5OTYsImV4cCI6MjA5MDc4Mjk5Nn0.tzytS8S0EzA0RylSt3RM0Y36zxlQVU0KyxKstQlSPX8');

// Image preview helper — safe cross-browser (no URL.createObjectURL in Safari module)
window.prevImg=function(input,previewId){
  const file=input.files[0];if(!file)return;
  const reader=new FileReader();
  reader.onload=e=>{const img=document.getElementById(previewId);if(img){img.src=e.target.result;img.style.display='block';}};
  reader.readAsDataURL(file);
};

const PROVINCES = [{"id":2,"name":"Eastridge","x":238.73,"y":63.81,"terrain":"coast","gold":14,"manpower":8,"supply":5},{"id":3,"name":"Westfen","x":251.43,"y":74.92,"terrain":"plains","gold":8,"manpower":14,"supply":6},{"id":4,"name":"Ironfen","x":328.57,"y":67.3,"terrain":"plains","gold":9,"manpower":10,"supply":8},{"id":5,"name":"Sacredhold","x":388.57,"y":87.94,"terrain":"plains","gold":8,"manpower":15,"supply":7},{"id":6,"name":"Innerstrand","x":434.92,"y":86.35,"terrain":"plains","gold":6,"manpower":15,"supply":5},{"id":7,"name":"Highhollow","x":499.37,"y":71.43,"terrain":"plains","gold":8,"manpower":13,"supply":8},{"id":8,"name":"Redgate","x":501.27,"y":73.97,"terrain":"mountain","gold":4,"manpower":6,"supply":14},{"id":9,"name":"Blackhollow","x":552.38,"y":90.16,"terrain":"mountain","gold":5,"manpower":8,"supply":17},{"id":10,"name":"Blackbay","x":694.92,"y":74.92,"terrain":"forest","gold":2,"manpower":11,"supply":11},{"id":11,"name":"Whitepeak","x":700.32,"y":90.48,"terrain":"coast","gold":15,"manpower":11,"supply":7},{"id":12,"name":"Bluewood","x":37.46,"y":137.78,"terrain":"forest","gold":4,"manpower":12,"supply":6},{"id":13,"name":"Newcliff","x":95.87,"y":120.32,"terrain":"plains","gold":9,"manpower":15,"supply":6},{"id":14,"name":"Oldport","x":108.57,"y":112.7,"terrain":"forest","gold":6,"manpower":11,"supply":6},{"id":15,"name":"Hiddenridge","x":186.67,"y":130.48,"terrain":"coast","gold":12,"manpower":6,"supply":4},{"id":16,"name":"Thunderhold","x":204.44,"y":108.89,"terrain":"forest","gold":2,"manpower":10,"supply":7},{"id":17,"name":"Fallengrove","x":262.22,"y":108.25,"terrain":"coast","gold":15,"manpower":6,"supply":8},{"id":18,"name":"Stonefield","x":345.4,"y":128.57,"terrain":"hills","gold":7,"manpower":9,"supply":9},{"id":19,"name":"Deepgrove","x":387.94,"y":133.33,"terrain":"mountain","gold":7,"manpower":7,"supply":12},{"id":20,"name":"Northmoor","x":426.67,"y":94.6,"terrain":"mountain","gold":5,"manpower":4,"supply":14},{"id":21,"name":"Wildfalls","x":498.1,"y":130.79,"terrain":"hills","gold":6,"manpower":11,"supply":11},{"id":22,"name":"Northreach","x":540.63,"y":121.9,"terrain":"coast","gold":10,"manpower":10,"supply":5},{"id":23,"name":"Lowerhold","x":566.03,"y":132.38,"terrain":"forest","gold":2,"manpower":12,"supply":9},{"id":24,"name":"Uppergrove","x":618.1,"y":136.83,"terrain":"forest","gold":2,"manpower":10,"supply":8},{"id":25,"name":"Redvale","x":685.08,"y":128.89,"terrain":"coast","gold":12,"manpower":9,"supply":5},{"id":26,"name":"Southbridge","x":703.81,"y":109.84,"terrain":"plains","gold":9,"manpower":10,"supply":9},{"id":27,"name":"Deephaven","x":790.16,"y":126.03,"terrain":"hills","gold":8,"manpower":6,"supply":13},{"id":28,"name":"Westbasin","x":838.41,"y":127.3,"terrain":"coast","gold":13,"manpower":10,"supply":5},{"id":29,"name":"Deepbluff","x":885.4,"y":120.32,"terrain":"hills","gold":6,"manpower":8,"supply":9},{"id":30,"name":"Crystalport","x":929.52,"y":99.37,"terrain":"coast","gold":10,"manpower":11,"supply":4},{"id":31,"name":"Thunderridge","x":26.98,"y":145.4,"terrain":"forest","gold":2,"manpower":13,"supply":7},{"id":32,"name":"Hiddenfalls","x":97.14,"y":165.08,"terrain":"plains","gold":8,"manpower":13,"supply":9},{"id":33,"name":"Ancientkeep","x":110.16,"y":167.62,"terrain":"forest","gold":2,"manpower":9,"supply":10},{"id":34,"name":"Darkmarsh","x":170.79,"y":162.22,"terrain":"coast","gold":14,"manpower":10,"supply":4},{"id":35,"name":"Brightwood","x":249.52,"y":157.78,"terrain":"plains","gold":10,"manpower":15,"supply":6},{"id":36,"name":"Farstrand","x":254.29,"y":150.48,"terrain":"coast","gold":12,"manpower":6,"supply":5},{"id":37,"name":"Whiteford","x":346.67,"y":153.65,"terrain":"hills","gold":5,"manpower":8,"supply":11},{"id":38,"name":"Eastwood","x":390.16,"y":161.59,"terrain":"plains","gold":7,"manpower":14,"supply":5},{"id":39,"name":"Southdale","x":416.51,"y":146.35,"terrain":"hills","gold":7,"manpower":7,"supply":8},{"id":40,"name":"Stormport","x":461.59,"y":145.71,"terrain":"plains","gold":8,"manpower":14,"supply":8},{"id":41,"name":"Highbluff","x":514.6,"y":164.76,"terrain":"coast","gold":11,"manpower":9,"supply":6},{"id":42,"name":"Fallenbasin","x":549.84,"y":149.21,"terrain":"plains","gold":8,"manpower":15,"supply":8},{"id":43,"name":"Blueport","x":637.14,"y":155.24,"terrain":"forest","gold":3,"manpower":12,"supply":7},{"id":44,"name":"Shadowbridge","x":686.03,"y":182.54,"terrain":"plains","gold":10,"manpower":14,"supply":7},{"id":45,"name":"Brightpass","x":734.29,"y":167.94,"terrain":"coast","gold":10,"manpower":11,"supply":3},{"id":46,"name":"Brokenmarsh","x":789.21,"y":169.52,"terrain":"mountain","gold":6,"manpower":9,"supply":15},{"id":47,"name":"Darkhaven","x":803.17,"y":142.54,"terrain":"hills","gold":6,"manpower":8,"supply":9},{"id":48,"name":"Newridge","x":860.63,"y":170.48,"terrain":"plains","gold":9,"manpower":13,"supply":8},{"id":49,"name":"Silverheath","x":918.41,"y":155.56,"terrain":"plains","gold":10,"manpower":13,"supply":6},{"id":50,"name":"Upperbluff","x":77.78,"y":231.75,"terrain":"hills","gold":3,"manpower":8,"supply":12},{"id":51,"name":"Westridge","x":116.83,"y":192.06,"terrain":"plains","gold":10,"manpower":13,"supply":6},{"id":52,"name":"Innercrossing","x":154.29,"y":205.4,"terrain":"coast","gold":15,"manpower":8,"supply":4},{"id":53,"name":"Ancientgate","x":247.94,"y":188.25,"terrain":"mountain","gold":8,"manpower":8,"supply":14},{"id":54,"name":"Ironpass","x":258.41,"y":217.78,"terrain":"mountain","gold":8,"manpower":8,"supply":14},{"id":55,"name":"Brightvale","x":340.0,"y":206.35,"terrain":"plains","gold":6,"manpower":10,"supply":7},{"id":56,"name":"Bluecliff","x":368.57,"y":227.62,"terrain":"plains","gold":9,"manpower":14,"supply":4},{"id":57,"name":"Redgrove","x":413.33,"y":227.3,"terrain":"plains","gold":8,"manpower":12,"supply":5},{"id":58,"name":"Stormmarsh","x":449.84,"y":210.16,"terrain":"plains","gold":9,"manpower":14,"supply":8},{"id":59,"name":"Stonepass","x":535.87,"y":230.16,"terrain":"coast","gold":10,"manpower":8,"supply":8},{"id":60,"name":"Sacredford","x":562.22,"y":192.06,"terrain":"plains","gold":8,"manpower":12,"supply":5},{"id":61,"name":"Losthaven","x":602.22,"y":191.11,"terrain":"forest","gold":2,"manpower":12,"supply":6},{"id":62,"name":"Bluefalls","x":691.43,"y":190.16,"terrain":"plains","gold":7,"manpower":10,"supply":6},{"id":63,"name":"Blackfen","x":716.19,"y":232.7,"terrain":"coast","gold":11,"manpower":8,"supply":6},{"id":64,"name":"Hiddenford","x":771.11,"y":207.62,"terrain":"hills","gold":7,"manpower":6,"supply":8},{"id":65,"name":"Ancientshore","x":819.68,"y":205.4,"terrain":"coast","gold":14,"manpower":8,"supply":4},{"id":66,"name":"Blackbluff","x":855.87,"y":193.97,"terrain":"plains","gold":11,"manpower":13,"supply":7},{"id":69,"name":"Greatbluff","x":71.11,"y":234.29,"terrain":"hills","gold":4,"manpower":6,"supply":9},{"id":70,"name":"Longhold","x":148.25,"y":250.48,"terrain":"forest","gold":2,"manpower":8,"supply":9},{"id":71,"name":"Darkgrove","x":178.1,"y":258.41,"terrain":"plains","gold":6,"manpower":11,"supply":9},{"id":72,"name":"Cursedpass","x":208.89,"y":263.49,"terrain":"hills","gold":4,"manpower":8,"supply":8},{"id":73,"name":"Stonefalls","x":252.7,"y":275.56,"terrain":"forest","gold":3,"manpower":12,"supply":6},{"id":74,"name":"Brokenhollow","x":309.84,"y":276.51,"terrain":"plains","gold":9,"manpower":11,"supply":7},{"id":75,"name":"Farwood","x":371.11,"y":246.67,"terrain":"forest","gold":5,"manpower":12,"supply":7},{"id":76,"name":"Bluemarsh","x":408.57,"y":236.19,"terrain":"plains","gold":8,"manpower":11,"supply":7},{"id":77,"name":"Innermoor","x":473.97,"y":263.17,"terrain":"plains","gold":9,"manpower":12,"supply":8},{"id":78,"name":"Shadowmarch","x":531.75,"y":240.32,"terrain":"mountain","gold":8,"manpower":6,"supply":14},{"id":79,"name":"Brokendale","x":599.05,"y":253.97,"terrain":"forest","gold":2,"manpower":8,"supply":10},{"id":80,"name":"Innerbay","x":611.75,"y":252.06,"terrain":"forest","gold":7,"manpower":8,"supply":11},{"id":81,"name":"Longridge","x":677.46,"y":279.05,"terrain":"plains","gold":9,"manpower":11,"supply":7},{"id":82,"name":"Highmarsh","x":733.02,"y":278.1,"terrain":"plains","gold":7,"manpower":10,"supply":6},{"id":83,"name":"Eastreach","x":773.33,"y":276.19,"terrain":"plains","gold":7,"manpower":13,"supply":7},{"id":84,"name":"Greatfalls","x":803.17,"y":235.87,"terrain":"forest","gold":2,"manpower":8,"supply":7},{"id":85,"name":"Outercrossing","x":849.84,"y":250.48,"terrain":"plains","gold":7,"manpower":15,"supply":4},{"id":87,"name":"Brightfalls","x":191.11,"y":284.44,"terrain":"plains","gold":6,"manpower":15,"supply":4},{"id":88,"name":"Stoneport","x":237.46,"y":324.44,"terrain":"forest","gold":4,"manpower":9,"supply":6},{"id":89,"name":"Westgrove","x":288.25,"y":295.56,"terrain":"plains","gold":6,"manpower":11,"supply":6},{"id":90,"name":"Ironmoor","x":322.54,"y":291.75,"terrain":"coast","gold":10,"manpower":10,"supply":8},{"id":91,"name":"Crystalgate","x":352.7,"y":317.46,"terrain":"forest","gold":6,"manpower":10,"supply":8},{"id":92,"name":"Loststrand","x":443.49,"y":305.08,"terrain":"plains","gold":10,"manpower":12,"supply":6},{"id":93,"name":"Darkpass","x":475.24,"y":290.16,"terrain":"plains","gold":8,"manpower":14,"supply":4},{"id":94,"name":"Stonehold","x":539.05,"y":322.86,"terrain":"forest","gold":7,"manpower":9,"supply":10},{"id":95,"name":"Darkcrossing","x":554.92,"y":324.76,"terrain":"plains","gold":11,"manpower":14,"supply":9},{"id":96,"name":"Crystaldale","x":647.3,"y":299.05,"terrain":"forest","gold":7,"manpower":13,"supply":6},{"id":97,"name":"Greatdale","x":699.05,"y":324.44,"terrain":"forest","gold":5,"manpower":11,"supply":8},{"id":98,"name":"Frozengrove","x":733.97,"y":300.95,"terrain":"plains","gold":9,"manpower":10,"supply":6},{"id":99,"name":"Southbasin","x":757.78,"y":281.59,"terrain":"plains","gold":7,"manpower":12,"supply":5},{"id":100,"name":"Stormreach","x":846.03,"y":313.02,"terrain":"hills","gold":3,"manpower":6,"supply":10},{"id":101,"name":"Westbluff","x":853.65,"y":323.17,"terrain":"hills","gold":5,"manpower":7,"supply":10},{"id":102,"name":"Losthold","x":927.94,"y":282.54,"terrain":"coast","gold":12,"manpower":10,"supply":7},{"id":103,"name":"Outerfalls","x":189.52,"y":358.73,"terrain":"coast","gold":10,"manpower":8,"supply":5},{"id":104,"name":"Greencrossing","x":236.19,"y":352.7,"terrain":"hills","gold":3,"manpower":6,"supply":8},{"id":105,"name":"Shadowreach","x":276.19,"y":343.81,"terrain":"mountain","gold":7,"manpower":6,"supply":17},{"id":106,"name":"Newheath","x":326.35,"y":329.84,"terrain":"plains","gold":9,"manpower":10,"supply":7},{"id":107,"name":"Longford","x":363.49,"y":353.33,"terrain":"plains","gold":9,"manpower":11,"supply":4},{"id":108,"name":"Newgrove","x":403.17,"y":368.25,"terrain":"hills","gold":6,"manpower":7,"supply":11},{"id":109,"name":"Greenhold","x":494.92,"y":357.46,"terrain":"plains","gold":6,"manpower":14,"supply":7},{"id":110,"name":"Goldenbay","x":506.67,"y":350.48,"terrain":"plains","gold":11,"manpower":15,"supply":8},{"id":111,"name":"Greatstrand","x":576.51,"y":359.05,"terrain":"hills","gold":5,"manpower":10,"supply":12},{"id":112,"name":"Brightmarch","x":614.92,"y":342.86,"terrain":"plains","gold":8,"manpower":12,"supply":5},{"id":113,"name":"Curseddale","x":698.41,"y":356.51,"terrain":"mountain","gold":4,"manpower":7,"supply":12},{"id":114,"name":"Deepfen","x":742.54,"y":328.57,"terrain":"plains","gold":10,"manpower":11,"supply":4},{"id":115,"name":"Ancientbay","x":774.92,"y":370.48,"terrain":"hills","gold":6,"manpower":10,"supply":13},{"id":116,"name":"Crystalhaven","x":841.9,"y":353.02,"terrain":"plains","gold":7,"manpower":10,"supply":7},{"id":117,"name":"Eastgrove","x":850.16,"y":358.73,"terrain":"hills","gold":8,"manpower":6,"supply":9},{"id":119,"name":"Losthollow","x":974.6,"y":355.24,"terrain":"mountain","gold":8,"manpower":7,"supply":14},{"id":120,"name":"Newbridge","x":148.25,"y":410.48,"terrain":"forest","gold":5,"manpower":13,"supply":11},{"id":121,"name":"Innerhold","x":173.65,"y":411.75,"terrain":"plains","gold":7,"manpower":11,"supply":9},{"id":122,"name":"Thunderkeep","x":213.97,"y":412.38,"terrain":"forest","gold":6,"manpower":11,"supply":11},{"id":123,"name":"Silverkeep","x":274.92,"y":412.7,"terrain":"forest","gold":3,"manpower":12,"supply":10},{"id":124,"name":"Frozenhold","x":348.57,"y":403.17,"terrain":"plains","gold":10,"manpower":14,"supply":9},{"id":125,"name":"Deepwood","x":363.17,"y":385.4,"terrain":"coast","gold":15,"manpower":10,"supply":3},{"id":127,"name":"Southhaven","x":537.78,"y":382.86,"terrain":"hills","gold":6,"manpower":8,"supply":13},{"id":128,"name":"Stoneheath","x":566.67,"y":406.67,"terrain":"coast","gold":14,"manpower":10,"supply":8},{"id":129,"name":"Brightdale","x":646.03,"y":376.51,"terrain":"plains","gold":6,"manpower":12,"supply":4},{"id":130,"name":"Thunderreach","x":666.98,"y":415.87,"terrain":"mountain","gold":6,"manpower":7,"supply":17},{"id":131,"name":"Newstrand","x":748.89,"y":374.29,"terrain":"plains","gold":11,"manpower":14,"supply":4},{"id":132,"name":"Farbay","x":786.67,"y":380.0,"terrain":"forest","gold":3,"manpower":12,"supply":11},{"id":133,"name":"Innerbasin","x":844.76,"y":382.86,"terrain":"mountain","gold":8,"manpower":5,"supply":17},{"id":134,"name":"Blackfield","x":875.24,"y":384.13,"terrain":"forest","gold":4,"manpower":12,"supply":11},{"id":135,"name":"Goldenport","x":96.83,"y":436.83,"terrain":"mountain","gold":5,"manpower":5,"supply":12},{"id":136,"name":"Westpass","x":129.84,"y":448.57,"terrain":"coast","gold":15,"manpower":7,"supply":5},{"id":137,"name":"Deephollow","x":197.46,"y":462.54,"terrain":"plains","gold":11,"manpower":15,"supply":7},{"id":138,"name":"Newbasin","x":212.7,"y":423.81,"terrain":"coast","gold":11,"manpower":10,"supply":8},{"id":139,"name":"Northfield","x":264.13,"y":445.71,"terrain":"plains","gold":8,"manpower":12,"supply":9},{"id":140,"name":"Whitebridge","x":306.35,"y":442.22,"terrain":"mountain","gold":5,"manpower":4,"supply":15},{"id":141,"name":"Redridge","x":406.35,"y":466.03,"terrain":"forest","gold":2,"manpower":13,"supply":9},{"id":142,"name":"Lostpass","x":580.0,"y":426.35,"terrain":"plains","gold":8,"manpower":13,"supply":7},{"id":143,"name":"Eastpass","x":656.51,"y":422.22,"terrain":"forest","gold":4,"manpower":10,"supply":7},{"id":144,"name":"Frozenpass","x":797.78,"y":434.92,"terrain":"coast","gold":13,"manpower":11,"supply":7},{"id":145,"name":"Farvale","x":819.68,"y":420.32,"terrain":"plains","gold":7,"manpower":15,"supply":7},{"id":146,"name":"Greatheath","x":868.25,"y":426.67,"terrain":"mountain","gold":7,"manpower":9,"supply":12},{"id":147,"name":"Wildbridge","x":932.06,"y":429.21,"terrain":"plains","gold":8,"manpower":12,"supply":8},{"id":148,"name":"Greenfalls","x":89.52,"y":511.75,"terrain":"plains","gold":8,"manpower":11,"supply":4},{"id":149,"name":"Outergrove","x":137.78,"y":478.73,"terrain":"plains","gold":10,"manpower":10,"supply":8},{"id":150,"name":"Lostridge","x":158.73,"y":496.51,"terrain":"mountain","gold":4,"manpower":5,"supply":13},{"id":151,"name":"Wildford","x":231.75,"y":487.94,"terrain":"forest","gold":7,"manpower":11,"supply":11},{"id":152,"name":"Bluereach","x":278.41,"y":479.37,"terrain":"forest","gold":2,"manpower":10,"supply":10},{"id":153,"name":"Sacredreach","x":309.21,"y":470.48,"terrain":"hills","gold":5,"manpower":6,"supply":13},{"id":155,"name":"Cursedheath","x":798.1,"y":467.94,"terrain":"mountain","gold":9,"manpower":7,"supply":15},{"id":156,"name":"Eastpeak","x":846.03,"y":469.84,"terrain":"plains","gold":6,"manpower":12,"supply":8},{"id":157,"name":"Fallenridge","x":899.05,"y":484.44,"terrain":"forest","gold":4,"manpower":10,"supply":6},{"id":158,"name":"Brightshore","x":901.9,"y":480.0,"terrain":"plains","gold":6,"manpower":10,"supply":7},{"id":159,"name":"Fallenwood","x":953.65,"y":504.76,"terrain":"forest","gold":2,"manpower":9,"supply":8},{"id":160,"name":"Stonemoor","x":29.84,"y":556.19,"terrain":"forest","gold":6,"manpower":11,"supply":8},{"id":162,"name":"Longport","x":128.57,"y":555.24,"terrain":"hills","gold":8,"manpower":9,"supply":12},{"id":163,"name":"Farmarsh","x":168.89,"y":513.33,"terrain":"hills","gold":4,"manpower":7,"supply":11},{"id":164,"name":"Redhollow","x":816.19,"y":559.37,"terrain":"forest","gold":5,"manpower":13,"supply":9},{"id":165,"name":"Hiddenhollow","x":883.49,"y":555.24,"terrain":"hills","gold":6,"manpower":11,"supply":10},{"id":166,"name":"Lowerbridge","x":914.92,"y":539.37,"terrain":"forest","gold":5,"manpower":8,"supply":10},{"id":168,"name":"Highford","x":36.83,"y":601.59,"terrain":"plains","gold":7,"manpower":15,"supply":7},{"id":169,"name":"Whitecrossing","x":72.38,"y":601.59,"terrain":"coast","gold":12,"manpower":10,"supply":4},{"id":170,"name":"Stonefen","x":148.25,"y":575.56,"terrain":"coast","gold":11,"manpower":11,"supply":6},{"id":171,"name":"Lowerbay","x":167.3,"y":581.9,"terrain":"forest","gold":6,"manpower":8,"supply":8},{"id":172,"name":"Hiddenpass","x":222.22,"y":588.89,"terrain":"plains","gold":7,"manpower":12,"supply":9},{"id":173,"name":"Thundermoor","x":298.41,"y":581.59,"terrain":"plains","gold":8,"manpower":13,"supply":5},{"id":174,"name":"Oldcrossing","x":338.1,"y":599.37,"terrain":"hills","gold":7,"manpower":7,"supply":12},{"id":175,"name":"Greatkeep","x":353.97,"y":603.49,"terrain":"hills","gold":7,"manpower":10,"supply":8},{"id":176,"name":"Greenbluff","x":401.59,"y":605.71,"terrain":"hills","gold":7,"manpower":9,"supply":8},{"id":178,"name":"Darkvale","x":699.05,"y":591.11,"terrain":"plains","gold":7,"manpower":10,"supply":6},{"id":179,"name":"Newbluff","x":720.0,"y":596.51,"terrain":"mountain","gold":7,"manpower":5,"supply":12},{"id":180,"name":"Frozenwood","x":789.52,"y":587.94,"terrain":"plains","gold":10,"manpower":15,"supply":5},{"id":181,"name":"Innerpeak","x":833.65,"y":592.06,"terrain":"plains","gold":7,"manpower":15,"supply":6},{"id":182,"name":"Highbay","x":867.62,"y":563.49,"terrain":"forest","gold":7,"manpower":11,"supply":6},{"id":183,"name":"Shadowfield","x":913.65,"y":574.6,"terrain":"hills","gold":6,"manpower":9,"supply":13},{"id":186,"name":"Thunderpass","x":284.76,"y":84.76,"terrain":"hills","gold":4,"manpower":10,"supply":9},{"id":187,"name":"Farfield","x":325.08,"y":92.7,"terrain":"plains","gold":6,"manpower":12,"supply":9},{"id":188,"name":"Newpass","x":354.92,"y":92.38,"terrain":"plains","gold":9,"manpower":15,"supply":9},{"id":189,"name":"Fallenford","x":470.79,"y":91.43,"terrain":"coast","gold":15,"manpower":7,"supply":7},{"id":190,"name":"Cursedbluff","x":671.43,"y":88.25,"terrain":"plains","gold":8,"manpower":12,"supply":8},{"id":191,"name":"Greengate","x":501.59,"y":106.67,"terrain":"hills","gold":4,"manpower":10,"supply":9},{"id":192,"name":"Greatmarch","x":601.27,"y":108.25,"terrain":"plains","gold":9,"manpower":14,"supply":6},{"id":193,"name":"Bluehold","x":647.3,"y":114.92,"terrain":"plains","gold":9,"manpower":12,"supply":8},{"id":194,"name":"Upperpeak","x":726.98,"y":93.33,"terrain":"coast","gold":12,"manpower":6,"supply":6},{"id":195,"name":"Southmoor","x":66.03,"y":138.1,"terrain":"hills","gold":5,"manpower":7,"supply":11},{"id":196,"name":"Hiddenmarsh","x":125.08,"y":137.46,"terrain":"hills","gold":3,"manpower":11,"supply":11},{"id":197,"name":"Redhaven","x":283.17,"y":138.1,"terrain":"forest","gold":2,"manpower":9,"supply":8},{"id":198,"name":"Silvergate","x":306.67,"y":130.79,"terrain":"coast","gold":14,"manpower":6,"supply":3},{"id":199,"name":"Northbridge","x":440.0,"y":118.1,"terrain":"forest","gold":4,"manpower":11,"supply":9},{"id":200,"name":"Sacredmoor","x":719.37,"y":134.29,"terrain":"plains","gold":7,"manpower":11,"supply":9},{"id":201,"name":"Ancientbasin","x":140.32,"y":160.95,"terrain":"plains","gold":11,"manpower":14,"supply":5},{"id":202,"name":"Cursedhaven","x":219.68,"y":142.54,"terrain":"forest","gold":3,"manpower":10,"supply":10},{"id":203,"name":"Brokenheath","x":581.27,"y":154.6,"terrain":"forest","gold":6,"manpower":13,"supply":9},{"id":204,"name":"Northpass","x":830.16,"y":157.46,"terrain":"hills","gold":6,"manpower":7,"supply":13},{"id":205,"name":"Stormford","x":896.19,"y":151.75,"terrain":"plains","gold":10,"manpower":12,"supply":7},{"id":206,"name":"Shadowport","x":63.17,"y":163.49,"terrain":"plains","gold":11,"manpower":13,"supply":6},{"id":207,"name":"Westford","x":194.29,"y":185.4,"terrain":"plains","gold":8,"manpower":11,"supply":6},{"id":208,"name":"Newfield","x":222.54,"y":168.57,"terrain":"plains","gold":11,"manpower":15,"supply":5},{"id":209,"name":"Ironwood","x":282.54,"y":165.71,"terrain":"plains","gold":7,"manpower":15,"supply":6},{"id":210,"name":"Sacredbay","x":312.7,"y":169.21,"terrain":"forest","gold":4,"manpower":13,"supply":11},{"id":211,"name":"Darkhollow","x":367.3,"y":182.54,"terrain":"plains","gold":6,"manpower":11,"supply":9},{"id":212,"name":"Ancientbridge","x":422.54,"y":185.4,"terrain":"hills","gold":3,"manpower":8,"supply":9},{"id":213,"name":"Lostgate","x":471.43,"y":176.19,"terrain":"mountain","gold":8,"manpower":9,"supply":15},{"id":214,"name":"Shadowvale","x":642.22,"y":180.32,"terrain":"plains","gold":7,"manpower":11,"supply":7},{"id":215,"name":"Cursedford","x":766.98,"y":176.19,"terrain":"plains","gold":10,"manpower":13,"supply":4},{"id":216,"name":"Shadowheath","x":284.13,"y":189.52,"terrain":"coast","gold":12,"manpower":7,"supply":4},{"id":217,"name":"Farmarch","x":516.19,"y":194.29,"terrain":"plains","gold":6,"manpower":14,"supply":8},{"id":218,"name":"Whitefield","x":633.02,"y":204.13,"terrain":"coast","gold":15,"manpower":9,"supply":5},{"id":219,"name":"Greatport","x":731.43,"y":200.95,"terrain":"forest","gold":7,"manpower":13,"supply":7},{"id":221,"name":"Blackstrand","x":100.32,"y":224.44,"terrain":"hills","gold":8,"manpower":8,"supply":10},{"id":222,"name":"Redkeep","x":209.52,"y":231.75,"terrain":"plains","gold":10,"manpower":13,"supply":6},{"id":223,"name":"Deephold","x":315.24,"y":221.27,"terrain":"forest","gold":7,"manpower":9,"supply":8},{"id":224,"name":"Innershore","x":494.29,"y":230.48,"terrain":"mountain","gold":4,"manpower":9,"supply":12},{"id":225,"name":"Brokenshore","x":663.81,"y":213.97,"terrain":"coast","gold":10,"manpower":11,"supply":7},{"id":226,"name":"Fallencliff","x":828.57,"y":228.25,"terrain":"forest","gold":7,"manpower":8,"supply":7},{"id":227,"name":"Greenbridge","x":234.6,"y":252.06,"terrain":"forest","gold":3,"manpower":11,"supply":10},{"id":228,"name":"Greendale","x":257.14,"y":251.11,"terrain":"coast","gold":12,"manpower":8,"supply":6},{"id":229,"name":"Silverbluff","x":447.94,"y":234.29,"terrain":"mountain","gold":6,"manpower":8,"supply":16},{"id":230,"name":"Brokenfen","x":653.33,"y":246.35,"terrain":"mountain","gold":7,"manpower":8,"supply":12},{"id":231,"name":"Highmoor","x":683.81,"y":253.33,"terrain":"forest","gold":7,"manpower":8,"supply":11},{"id":232,"name":"Brokenridge","x":738.41,"y":240.63,"terrain":"mountain","gold":9,"manpower":5,"supply":13},{"id":233,"name":"Longbridge","x":771.11,"y":238.1,"terrain":"hills","gold":4,"manpower":10,"supply":9},{"id":234,"name":"Silverford","x":287.62,"y":261.59,"terrain":"forest","gold":3,"manpower":12,"supply":10},{"id":235,"name":"Sacredridge","x":341.27,"y":268.89,"terrain":"hills","gold":3,"manpower":6,"supply":13},{"id":237,"name":"Westmarsh","x":445.71,"y":260.95,"terrain":"mountain","gold":6,"manpower":6,"supply":13},{"id":238,"name":"Frozenbluff","x":506.35,"y":266.67,"terrain":"plains","gold":10,"manpower":12,"supply":9},{"id":239,"name":"Sacredpass","x":574.29,"y":276.51,"terrain":"plains","gold":10,"manpower":13,"supply":5},{"id":240,"name":"Darkford","x":815.56,"y":269.52,"terrain":"forest","gold":6,"manpower":13,"supply":10},{"id":243,"name":"Bluemarch","x":502.22,"y":296.83,"terrain":"coast","gold":15,"manpower":6,"supply":6},{"id":244,"name":"Upperfen","x":582.86,"y":301.59,"terrain":"plains","gold":7,"manpower":12,"supply":9},{"id":245,"name":"Greatbasin","x":198.1,"y":318.41,"terrain":"hills","gold":6,"manpower":6,"supply":8},{"id":246,"name":"Upperwood","x":472.06,"y":315.56,"terrain":"hills","gold":6,"manpower":8,"supply":12},{"id":247,"name":"Highpass","x":611.11,"y":318.73,"terrain":"plains","gold":11,"manpower":13,"supply":9},{"id":248,"name":"Redbay","x":766.98,"y":312.38,"terrain":"coast","gold":11,"manpower":6,"supply":6},{"id":249,"name":"Upperfalls","x":421.27,"y":343.81,"terrain":"forest","gold":7,"manpower":8,"supply":7},{"id":250,"name":"Crystalford","x":548.89,"y":347.3,"terrain":"coast","gold":11,"manpower":7,"supply":4},{"id":251,"name":"Lowermarsh","x":587.62,"y":336.19,"terrain":"hills","gold":7,"manpower":8,"supply":8},{"id":252,"name":"Ironford","x":643.49,"y":330.16,"terrain":"plains","gold":11,"manpower":12,"supply":6},{"id":253,"name":"Brokenstrand","x":318.73,"y":369.84,"terrain":"plains","gold":7,"manpower":14,"supply":6},{"id":254,"name":"Northhollow","x":469.84,"y":359.05,"terrain":"plains","gold":11,"manpower":15,"supply":9},{"id":255,"name":"Goldenhold","x":676.19,"y":367.62,"terrain":"coast","gold":15,"manpower":10,"supply":6},{"id":256,"name":"Ironhaven","x":720.95,"y":353.33,"terrain":"forest","gold":5,"manpower":12,"supply":7},{"id":257,"name":"Frozenpeak","x":817.46,"y":357.46,"terrain":"mountain","gold":4,"manpower":4,"supply":12},{"id":258,"name":"Innerreach","x":224.13,"y":387.62,"terrain":"mountain","gold":7,"manpower":5,"supply":16},{"id":259,"name":"Blackpass","x":266.98,"y":376.51,"terrain":"plains","gold":10,"manpower":15,"supply":9},{"id":260,"name":"Longhaven","x":426.67,"y":378.73,"terrain":"plains","gold":7,"manpower":15,"supply":8},{"id":261,"name":"Oldshore","x":723.81,"y":392.38,"terrain":"coast","gold":15,"manpower":11,"supply":5},{"id":262,"name":"Silverhold","x":820.0,"y":386.98,"terrain":"mountain","gold":4,"manpower":4,"supply":14},{"id":263,"name":"Whitehold","x":119.37,"y":419.37,"terrain":"hills","gold":6,"manpower":11,"supply":13},{"id":264,"name":"Hiddenport","x":240.32,"y":417.78,"terrain":"plains","gold":7,"manpower":13,"supply":9},{"id":265,"name":"Shadowbluff","x":318.41,"y":413.33,"terrain":"coast","gold":14,"manpower":10,"supply":5},{"id":266,"name":"Crystalcliff","x":753.65,"y":400.0,"terrain":"coast","gold":12,"manpower":9,"supply":8},{"id":267,"name":"Burningkeep","x":779.05,"y":405.08,"terrain":"plains","gold":7,"manpower":11,"supply":9},{"id":268,"name":"Upperhold","x":171.43,"y":435.56,"terrain":"mountain","gold":5,"manpower":7,"supply":15},{"id":269,"name":"Sacredkeep","x":235.56,"y":455.56,"terrain":"forest","gold":6,"manpower":12,"supply":11},{"id":270,"name":"Goldenfalls","x":822.54,"y":449.21,"terrain":"coast","gold":14,"manpower":10,"supply":8},{"id":271,"name":"Southcliff","x":875.56,"y":466.03,"terrain":"coast","gold":10,"manpower":9,"supply":8},{"id":272,"name":"Redstrand","x":930.48,"y":486.98,"terrain":"forest","gold":3,"manpower":13,"supply":9},{"id":273,"name":"Outermarsh","x":198.73,"y":492.38,"terrain":"hills","gold":4,"manpower":7,"supply":8},{"id":274,"name":"Thunderbluff","x":862.22,"y":500.32,"terrain":"hills","gold":5,"manpower":7,"supply":10},{"id":275,"name":"Cursedkeep","x":890.79,"y":512.7,"terrain":"plains","gold":7,"manpower":14,"supply":9},{"id":276,"name":"Weststrand","x":930.48,"y":513.33,"terrain":"coast","gold":13,"manpower":8,"supply":6},{"id":277,"name":"Eastgate","x":54.92,"y":553.02,"terrain":"hills","gold":5,"manpower":9,"supply":13},{"id":278,"name":"Hiddenhold","x":83.81,"y":558.73,"terrain":"hills","gold":4,"manpower":11,"supply":9},{"id":279,"name":"Whitemarsh","x":106.35,"y":554.6,"terrain":"hills","gold":4,"manpower":8,"supply":9},{"id":280,"name":"Fallenhaven","x":125.08,"y":580.95,"terrain":"hills","gold":6,"manpower":11,"supply":11},{"id":281,"name":"Oldmarch","x":244.44,"y":577.46,"terrain":"hills","gold":7,"manpower":10,"supply":8},{"id":282,"name":"Farcrossing","x":267.94,"y":574.29,"terrain":"forest","gold":3,"manpower":10,"supply":8},{"id":283,"name":"Greenbasin","x":737.46,"y":571.75,"terrain":"plains","gold":11,"manpower":11,"supply":7},{"id":284,"name":"Easthaven","x":937.78,"y":582.54,"terrain":"hills","gold":4,"manpower":9,"supply":13},{"id":285,"name":"Burninghold","x":10.16,"y":595.24,"terrain":"hills","gold":6,"manpower":7,"supply":8},{"id":286,"name":"Frozenmoor","x":96.83,"y":585.08,"terrain":"plains","gold":7,"manpower":11,"supply":8},{"id":287,"name":"Crystalheath","x":140.0,"y":605.4,"terrain":"coast","gold":10,"manpower":6,"supply":3},{"id":288,"name":"Ironcrossing","x":196.51,"y":594.6,"terrain":"mountain","gold":9,"manpower":8,"supply":16},{"id":289,"name":"Wildfen","x":298.73,"y":605.08,"terrain":"forest","gold":5,"manpower":8,"supply":6},{"id":290,"name":"Stormgate","x":423.81,"y":603.81,"terrain":"hills","gold":8,"manpower":9,"supply":12},{"id":291,"name":"Brightcliff","x":753.33,"y":604.13,"terrain":"coast","gold":14,"manpower":6,"supply":7},{"id":292,"name":"Stonehollow","x":870.48,"y":598.73,"terrain":"plains","gold":9,"manpower":10,"supply":7},{"id":293,"name":"Highport","x":913.02,"y":597.14,"terrain":"coast","gold":13,"manpower":10,"supply":6},{"id":294,"name":"Outerbasin","x":967.62,"y":602.54,"terrain":"hills","gold":7,"manpower":9,"supply":13},{"id":295,"name":"Darkstrand","x":214.6,"y":62.22,"terrain":"plains","gold":7,"manpower":12,"supply":9},{"id":298,"name":"Burninggrove","x":466.98,"y":71.75,"terrain":"coast","gold":13,"manpower":8,"supply":3},{"id":299,"name":"Eastford","x":523.81,"y":72.06,"terrain":"coast","gold":15,"manpower":10,"supply":8},{"id":300,"name":"Greatfen","x":541.27,"y":74.6,"terrain":"hills","gold":6,"manpower":8,"supply":13},{"id":301,"name":"Newbay","x":222.86,"y":90.16,"terrain":"plains","gold":6,"manpower":12,"supply":8},{"id":302,"name":"Silverpeak","x":253.97,"y":92.7,"terrain":"plains","gold":6,"manpower":12,"supply":9},{"id":303,"name":"Fallenpeak","x":451.75,"y":91.11,"terrain":"coast","gold":12,"manpower":10,"supply":5},{"id":304,"name":"Hiddenbasin","x":226.98,"y":106.35,"terrain":"mountain","gold":7,"manpower":5,"supply":17},{"id":305,"name":"Newhold","x":285.08,"y":100.95,"terrain":"forest","gold":7,"manpower":8,"supply":8},{"id":306,"name":"Longstrand","x":357.14,"y":110.48,"terrain":"plains","gold":11,"manpower":10,"supply":7},{"id":307,"name":"Newshore","x":374.92,"y":105.08,"terrain":"plains","gold":7,"manpower":12,"supply":9},{"id":308,"name":"Brokenbay","x":392.7,"y":106.98,"terrain":"hills","gold":7,"manpower":7,"supply":10},{"id":309,"name":"Crystalfen","x":409.84,"y":109.21,"terrain":"coast","gold":13,"manpower":10,"supply":3},{"id":310,"name":"Greenkeep","x":472.38,"y":109.21,"terrain":"hills","gold":6,"manpower":6,"supply":13},{"id":311,"name":"Westhaven","x":522.22,"y":110.16,"terrain":"plains","gold":8,"manpower":10,"supply":8},{"id":312,"name":"Longvale","x":580.32,"y":105.71,"terrain":"coast","gold":14,"manpower":11,"supply":7},{"id":313,"name":"Hiddenwood","x":810.79,"y":108.89,"terrain":"plains","gold":7,"manpower":12,"supply":6},{"id":314,"name":"Brightgrove","x":859.05,"y":109.52,"terrain":"forest","gold":4,"manpower":12,"supply":7},{"id":315,"name":"Frozendale","x":888.25,"y":103.17,"terrain":"hills","gold":7,"manpower":9,"supply":11},{"id":316,"name":"Ironmarch","x":906.67,"y":109.52,"terrain":"plains","gold":8,"manpower":13,"supply":8},{"id":317,"name":"Bluevale","x":127.3,"y":121.59,"terrain":"forest","gold":4,"manpower":12,"supply":11},{"id":318,"name":"Eastdale","x":243.49,"y":122.54,"terrain":"mountain","gold":5,"manpower":9,"supply":14},{"id":319,"name":"Wildhaven","x":280.0,"y":118.73,"terrain":"forest","gold":6,"manpower":10,"supply":10},{"id":320,"name":"Thunderfen","x":329.52,"y":114.29,"terrain":"forest","gold":4,"manpower":9,"supply":10},{"id":321,"name":"Brightbluff","x":514.6,"y":126.03,"terrain":"hills","gold":6,"manpower":8,"supply":13},{"id":322,"name":"Crystalbasin","x":623.49,"y":113.65,"terrain":"coast","gold":14,"manpower":7,"supply":5},{"id":323,"name":"Bluebasin","x":683.81,"y":113.02,"terrain":"coast","gold":12,"manpower":11,"supply":6},{"id":324,"name":"Wildbasin","x":901.27,"y":126.98,"terrain":"mountain","gold":7,"manpower":4,"supply":16},{"id":325,"name":"Sacredgrove","x":102.54,"y":140.63,"terrain":"plains","gold":10,"manpower":12,"supply":7},{"id":326,"name":"Uppergate","x":144.76,"y":137.46,"terrain":"hills","gold":3,"manpower":6,"supply":9},{"id":327,"name":"Bluehaven","x":164.13,"y":140.95,"terrain":"plains","gold":11,"manpower":15,"supply":6},{"id":328,"name":"Upperbridge","x":372.7,"y":131.43,"terrain":"hills","gold":5,"manpower":6,"supply":11},{"id":329,"name":"Outerbluff","x":469.84,"y":127.62,"terrain":"forest","gold":2,"manpower":13,"supply":9},{"id":330,"name":"Newwood","x":531.43,"y":141.9,"terrain":"hills","gold":3,"manpower":7,"supply":12},{"id":331,"name":"Oldfen","x":599.05,"y":130.16,"terrain":"plains","gold":11,"manpower":15,"supply":4},{"id":332,"name":"Frozenfen","x":642.86,"y":138.73,"terrain":"plains","gold":7,"manpower":12,"supply":4},{"id":334,"name":"Westmoor","x":774.6,"y":129.21,"terrain":"forest","gold":3,"manpower":12,"supply":6},{"id":335,"name":"Goldenshore","x":858.41,"y":129.21,"terrain":"plains","gold":11,"manpower":14,"supply":4},{"id":336,"name":"Southgrove","x":298.41,"y":151.11,"terrain":"coast","gold":10,"manpower":8,"supply":4},{"id":337,"name":"Ancientheath","x":322.22,"y":149.52,"terrain":"coast","gold":13,"manpower":9,"supply":3},{"id":338,"name":"Sacredbasin","x":366.98,"y":149.21,"terrain":"hills","gold":4,"manpower":10,"supply":8},{"id":339,"name":"Stoneshore","x":436.83,"y":150.16,"terrain":"plains","gold":9,"manpower":13,"supply":8},{"id":340,"name":"Hiddenfield","x":492.06,"y":147.62,"terrain":"hills","gold":3,"manpower":7,"supply":11},{"id":341,"name":"Ironreach","x":612.06,"y":156.51,"terrain":"coast","gold":13,"manpower":8,"supply":7},{"id":342,"name":"Greatridge","x":664.76,"y":151.75,"terrain":"forest","gold":4,"manpower":9,"supply":8},{"id":343,"name":"Innerbridge","x":688.57,"y":148.25,"terrain":"plains","gold":9,"manpower":15,"supply":4},{"id":345,"name":"Burningbluff","x":865.71,"y":153.02,"terrain":"plains","gold":10,"manpower":12,"supply":4},{"id":346,"name":"Newpeak","x":45.4,"y":160.63,"terrain":"forest","gold":7,"manpower":13,"supply":9},{"id":347,"name":"Ancientwood","x":198.73,"y":169.21,"terrain":"hills","gold":5,"manpower":8,"supply":12},{"id":348,"name":"Redport","x":265.71,"y":167.94,"terrain":"forest","gold":2,"manpower":10,"supply":8},{"id":349,"name":"Irondale","x":366.98,"y":166.03,"terrain":"plains","gold":7,"manpower":15,"supply":8},{"id":350,"name":"Brightbay","x":420.63,"y":166.35,"terrain":"forest","gold":7,"manpower":8,"supply":9},{"id":351,"name":"Newcrossing","x":441.59,"y":170.16,"terrain":"forest","gold":2,"manpower":8,"supply":9},{"id":352,"name":"Eastkeep","x":547.3,"y":165.08,"terrain":"plains","gold":9,"manpower":14,"supply":5},{"id":353,"name":"Darkfen","x":591.11,"y":173.65,"terrain":"hills","gold":8,"manpower":7,"supply":13},{"id":354,"name":"Innercliff","x":708.89,"y":169.21,"terrain":"plains","gold":10,"manpower":10,"supply":6},{"id":355,"name":"Greatshore","x":888.89,"y":174.6,"terrain":"coast","gold":13,"manpower":9,"supply":5},{"id":356,"name":"Longgrove","x":93.33,"y":180.63,"terrain":"plains","gold":8,"manpower":12,"supply":5},{"id":357,"name":"Sacredgate","x":139.68,"y":178.73,"terrain":"coast","gold":15,"manpower":6,"supply":3},{"id":358,"name":"Outerford","x":155.87,"y":185.4,"terrain":"coast","gold":13,"manpower":6,"supply":4},{"id":359,"name":"Highridge","x":175.56,"y":177.46,"terrain":"coast","gold":10,"manpower":8,"supply":6},{"id":360,"name":"Outerkeep","x":316.19,"y":187.62,"terrain":"plains","gold":6,"manpower":15,"supply":8},{"id":361,"name":"Frozengate","x":336.51,"y":175.24,"terrain":"forest","gold":4,"manpower":12,"supply":8},{"id":362,"name":"Lostshore","x":389.21,"y":189.52,"terrain":"mountain","gold":6,"manpower":8,"supply":12},{"id":363,"name":"Southhollow","x":490.16,"y":186.98,"terrain":"forest","gold":4,"manpower":8,"supply":7},{"id":364,"name":"Brightridge","x":541.59,"y":187.3,"terrain":"plains","gold":7,"manpower":11,"supply":8},{"id":365,"name":"Brightkeep","x":662.54,"y":185.08,"terrain":"hills","gold":6,"manpower":9,"supply":12},{"id":366,"name":"Wildgate","x":724.13,"y":184.44,"terrain":"forest","gold":7,"manpower":12,"supply":7},{"id":367,"name":"Westcliff","x":815.56,"y":178.1,"terrain":"forest","gold":7,"manpower":8,"supply":7},{"id":368,"name":"Hiddenvale","x":913.33,"y":177.78,"terrain":"plains","gold":11,"manpower":10,"supply":4},{"id":369,"name":"Highdale","x":226.67,"y":205.4,"terrain":"hills","gold":8,"manpower":9,"supply":9},{"id":370,"name":"Innerhollow","x":266.03,"y":195.24,"terrain":"hills","gold":7,"manpower":10,"supply":8},{"id":371,"name":"Northshore","x":357.78,"y":199.05,"terrain":"coast","gold":11,"manpower":7,"supply":8},{"id":372,"name":"Outerridge","x":412.38,"y":204.76,"terrain":"coast","gold":11,"manpower":10,"supply":4},{"id":373,"name":"Bluefen","x":454.6,"y":193.02,"terrain":"plains","gold":6,"manpower":13,"supply":9},{"id":374,"name":"Lowerfalls","x":474.6,"y":197.14,"terrain":"coast","gold":13,"manpower":9,"supply":5},{"id":375,"name":"Eastvale","x":496.19,"y":206.67,"terrain":"plains","gold":11,"manpower":14,"supply":6},{"id":376,"name":"Eaststrand","x":545.4,"y":204.13,"terrain":"mountain","gold":9,"manpower":8,"supply":16},{"id":377,"name":"Darkfalls","x":794.29,"y":198.41,"terrain":"forest","gold":7,"manpower":8,"supply":8},{"id":378,"name":"Brokenford","x":188.57,"y":207.94,"terrain":"mountain","gold":6,"manpower":8,"supply":14},{"id":379,"name":"Highmarch","x":230.16,"y":221.9,"terrain":"forest","gold":7,"manpower":8,"supply":7},{"id":380,"name":"Ancientmarch","x":280.63,"y":212.38,"terrain":"mountain","gold":9,"manpower":9,"supply":15},{"id":381,"name":"Whitebluff","x":391.75,"y":218.41,"terrain":"plains","gold":9,"manpower":15,"supply":7},{"id":382,"name":"Thunderstrand","x":428.57,"y":207.3,"terrain":"forest","gold":7,"manpower":12,"supply":9},{"id":383,"name":"Brighthaven","x":467.3,"y":220.95,"terrain":"coast","gold":12,"manpower":10,"supply":5},{"id":384,"name":"Blackgate","x":518.73,"y":218.1,"terrain":"forest","gold":3,"manpower":12,"supply":7},{"id":385,"name":"Stormshore","x":574.92,"y":214.6,"terrain":"plains","gold":11,"manpower":11,"supply":9},{"id":386,"name":"Darkheath","x":612.7,"y":215.24,"terrain":"plains","gold":10,"manpower":13,"supply":9},{"id":387,"name":"Goldenmarsh","x":682.86,"y":218.41,"terrain":"plains","gold":8,"manpower":12,"supply":8},{"id":388,"name":"Innergate","x":711.11,"y":212.06,"terrain":"coast","gold":11,"manpower":10,"supply":5},{"id":389,"name":"Wildmarch","x":728.57,"y":216.51,"terrain":"mountain","gold":6,"manpower":4,"supply":16},{"id":390,"name":"Wildmoor","x":754.29,"y":212.7,"terrain":"forest","gold":7,"manpower":8,"supply":6},{"id":391,"name":"Shadowpeak","x":791.11,"y":216.51,"terrain":"plains","gold":10,"manpower":14,"supply":6},{"id":392,"name":"Oldbridge","x":851.75,"y":219.05,"terrain":"plains","gold":10,"manpower":11,"supply":6},{"id":393,"name":"Redhold","x":868.25,"y":217.46,"terrain":"forest","gold":2,"manpower":8,"supply":9},{"id":394,"name":"Bluebridge","x":147.3,"y":230.79,"terrain":"plains","gold":10,"manpower":13,"supply":8},{"id":395,"name":"Darkbluff","x":162.86,"y":224.13,"terrain":"hills","gold":5,"manpower":6,"supply":13},{"id":396,"name":"Cursedpeak","x":187.3,"y":232.7,"terrain":"hills","gold":5,"manpower":11,"supply":9},{"id":397,"name":"Innerhaven","x":292.06,"y":238.1,"terrain":"coast","gold":12,"manpower":8,"supply":7},{"id":398,"name":"Stoneford","x":322.22,"y":237.14,"terrain":"forest","gold":2,"manpower":9,"supply":9},{"id":399,"name":"Innerkeep","x":346.03,"y":226.35,"terrain":"plains","gold":6,"manpower":14,"supply":7},{"id":401,"name":"Upperdale","x":640.0,"y":226.35,"terrain":"coast","gold":12,"manpower":8,"supply":6},{"id":402,"name":"Thundercliff","x":683.49,"y":236.19,"terrain":"mountain","gold":5,"manpower":7,"supply":17},{"id":403,"name":"Brokenpeak","x":345.71,"y":251.11,"terrain":"mountain","gold":4,"manpower":9,"supply":15},{"id":404,"name":"Farmoor","x":430.16,"y":245.71,"terrain":"mountain","gold":9,"manpower":8,"supply":15},{"id":405,"name":"Greenstrand","x":473.97,"y":244.76,"terrain":"plains","gold":9,"manpower":14,"supply":8},{"id":406,"name":"Whitekeep","x":490.48,"y":250.48,"terrain":"mountain","gold":8,"manpower":4,"supply":14},{"id":407,"name":"Thundergate","x":515.87,"y":239.37,"terrain":"plains","gold":6,"manpower":10,"supply":9},{"id":408,"name":"Crystalmarsh","x":577.46,"y":253.97,"terrain":"plains","gold":7,"manpower":14,"supply":8},{"id":409,"name":"Longcliff","x":702.54,"y":249.21,"terrain":"mountain","gold":9,"manpower":4,"supply":15},{"id":410,"name":"Outerheath","x":800.63,"y":253.02,"terrain":"plains","gold":8,"manpower":13,"supply":5},{"id":411,"name":"Eastcliff","x":154.29,"y":267.3,"terrain":"forest","gold":7,"manpower":9,"supply":11},{"id":412,"name":"Northgate","x":270.79,"y":269.84,"terrain":"plains","gold":7,"manpower":12,"supply":4},{"id":413,"name":"Lowerreach","x":321.27,"y":257.78,"terrain":"hills","gold":8,"manpower":10,"supply":10},{"id":414,"name":"Fallencrossing","x":647.94,"y":268.57,"terrain":"coast","gold":13,"manpower":7,"supply":3},{"id":415,"name":"Stonereach","x":705.71,"y":265.08,"terrain":"hills","gold":7,"manpower":7,"supply":10},{"id":416,"name":"Uppermoor","x":721.9,"y":261.9,"terrain":"plains","gold":9,"manpower":13,"supply":9},{"id":417,"name":"Deeppeak","x":748.89,"y":259.68,"terrain":"hills","gold":5,"manpower":9,"supply":12},{"id":418,"name":"Longbasin","x":207.62,"y":285.08,"terrain":"mountain","gold":5,"manpower":7,"supply":14},{"id":419,"name":"Darkport","x":230.79,"y":275.87,"terrain":"plains","gold":9,"manpower":12,"supply":9},{"id":420,"name":"Silverridge","x":558.73,"y":286.35,"terrain":"coast","gold":11,"manpower":7,"supply":3},{"id":421,"name":"Sacredmarsh","x":612.7,"y":283.49,"terrain":"plains","gold":7,"manpower":14,"supply":5},{"id":422,"name":"Oldfield","x":629.84,"y":277.14,"terrain":"forest","gold":6,"manpower":9,"supply":9},{"id":423,"name":"Brightgate","x":789.84,"y":275.56,"terrain":"mountain","gold":6,"manpower":5,"supply":15},{"id":424,"name":"Brightfield","x":241.59,"y":298.73,"terrain":"coast","gold":15,"manpower":6,"supply":5},{"id":425,"name":"Burningmarsh","x":260.63,"y":297.78,"terrain":"hills","gold":7,"manpower":10,"supply":9},{"id":426,"name":"Westbay","x":546.67,"y":301.9,"terrain":"plains","gold":7,"manpower":11,"supply":9},{"id":427,"name":"Redmarch","x":626.67,"y":299.05,"terrain":"coast","gold":14,"manpower":10,"supply":6},{"id":428,"name":"Highfalls","x":665.71,"y":297.14,"terrain":"hills","gold":7,"manpower":6,"supply":13},{"id":429,"name":"Ironport","x":698.1,"y":298.73,"terrain":"plains","gold":9,"manpower":12,"supply":9},{"id":430,"name":"Goldenhaven","x":715.24,"y":297.78,"terrain":"hills","gold":6,"manpower":6,"supply":12},{"id":431,"name":"Shadowpass","x":267.3,"y":318.1,"terrain":"plains","gold":7,"manpower":12,"supply":4},{"id":432,"name":"Outerpeak","x":283.17,"y":316.19,"terrain":"mountain","gold":9,"manpower":8,"supply":16},{"id":433,"name":"Ironbay","x":303.49,"y":310.48,"terrain":"hills","gold":8,"manpower":11,"supply":11},{"id":434,"name":"Stormbasin","x":330.79,"y":314.29,"terrain":"plains","gold":10,"manpower":15,"supply":4},{"id":435,"name":"Longheath","x":500.32,"y":313.33,"terrain":"coast","gold":13,"manpower":9,"supply":5},{"id":436,"name":"Ancienthold","x":645.08,"y":314.29,"terrain":"hills","gold":4,"manpower":10,"supply":13},{"id":437,"name":"Frozenbasin","x":663.49,"y":312.7,"terrain":"forest","gold":5,"manpower":13,"supply":7},{"id":438,"name":"Deepford","x":679.05,"y":313.33,"terrain":"hills","gold":8,"manpower":6,"supply":8},{"id":439,"name":"Darkwood","x":751.43,"y":309.52,"terrain":"plains","gold":6,"manpower":13,"supply":6},{"id":440,"name":"Stormmarch","x":176.83,"y":320.95,"terrain":"plains","gold":10,"manpower":10,"supply":9},{"id":441,"name":"Newfalls","x":198.41,"y":341.27,"terrain":"forest","gold":7,"manpower":9,"supply":9},{"id":442,"name":"Westport","x":217.46,"y":343.49,"terrain":"coast","gold":12,"manpower":6,"supply":8},{"id":443,"name":"Highhaven","x":256.51,"y":343.81,"terrain":"plains","gold":9,"manpower":11,"supply":6},{"id":444,"name":"Highhold","x":292.06,"y":341.59,"terrain":"forest","gold":4,"manpower":9,"supply":10},{"id":445,"name":"Longpass","x":526.98,"y":345.4,"terrain":"coast","gold":14,"manpower":10,"supply":6},{"id":446,"name":"Frozenheath","x":671.43,"y":339.37,"terrain":"plains","gold":11,"manpower":14,"supply":6},{"id":447,"name":"Northford","x":700.32,"y":339.68,"terrain":"forest","gold":7,"manpower":13,"supply":10},{"id":448,"name":"Farreach","x":217.46,"y":360.0,"terrain":"hills","gold":6,"manpower":8,"supply":9},{"id":449,"name":"Darkbridge","x":267.62,"y":360.0,"terrain":"hills","gold":8,"manpower":7,"supply":12},{"id":450,"name":"Southmarsh","x":302.22,"y":360.0,"terrain":"mountain","gold":4,"manpower":9,"supply":13},{"id":451,"name":"Innermarch","x":334.92,"y":364.44,"terrain":"hills","gold":7,"manpower":8,"supply":11},{"id":452,"name":"Frozenvale","x":424.13,"y":360.32,"terrain":"plains","gold":7,"manpower":13,"supply":9},{"id":453,"name":"Whitestrand","x":602.86,"y":362.22,"terrain":"plains","gold":7,"manpower":11,"supply":5},{"id":454,"name":"Thunderport","x":624.13,"y":362.54,"terrain":"hills","gold":4,"manpower":10,"supply":8},{"id":455,"name":"Stonevale","x":649.52,"y":353.97,"terrain":"plains","gold":7,"manpower":13,"supply":9},{"id":456,"name":"Outershore","x":882.54,"y":359.37,"terrain":"hills","gold":3,"manpower":7,"supply":10},{"id":457,"name":"Oldheath","x":180.32,"y":382.54,"terrain":"hills","gold":6,"manpower":9,"supply":11},{"id":458,"name":"Redpass","x":234.29,"y":372.06,"terrain":"forest","gold":6,"manpower":11,"supply":6},{"id":459,"name":"Whitepass","x":293.97,"y":376.19,"terrain":"plains","gold":9,"manpower":11,"supply":5},{"id":460,"name":"Deepreach","x":526.67,"y":367.62,"terrain":"coast","gold":11,"manpower":9,"supply":7},{"id":461,"name":"Stonehaven","x":730.16,"y":368.57,"terrain":"plains","gold":6,"manpower":14,"supply":6},{"id":462,"name":"Hiddenreach","x":896.19,"y":378.73,"terrain":"hills","gold":5,"manpower":8,"supply":9},{"id":463,"name":"Outerhollow","x":198.1,"y":385.4,"terrain":"coast","gold":15,"manpower":8,"supply":6},{"id":464,"name":"Longpeak","x":271.43,"y":397.46,"terrain":"coast","gold":10,"manpower":6,"supply":6},{"id":465,"name":"Highcliff","x":286.67,"y":391.43,"terrain":"plains","gold":10,"manpower":13,"supply":7},{"id":466,"name":"Uppercrossing","x":323.49,"y":393.02,"terrain":"plains","gold":9,"manpower":10,"supply":5},{"id":467,"name":"Oldmoor","x":679.05,"y":391.11,"terrain":"coast","gold":15,"manpower":9,"supply":4},{"id":468,"name":"Burningpass","x":770.48,"y":386.98,"terrain":"coast","gold":14,"manpower":11,"supply":6},{"id":469,"name":"Longmoor","x":803.17,"y":395.56,"terrain":"hills","gold":5,"manpower":11,"supply":9},{"id":470,"name":"Lostwood","x":247.94,"y":400.95,"terrain":"hills","gold":7,"manpower":10,"supply":13},{"id":471,"name":"Newreach","x":836.51,"y":414.29,"terrain":"hills","gold":4,"manpower":7,"supply":8},{"id":472,"name":"Uppervale","x":866.03,"y":406.35,"terrain":"mountain","gold":9,"manpower":5,"supply":16},{"id":473,"name":"Longshore","x":881.27,"y":406.35,"terrain":"mountain","gold":5,"manpower":8,"supply":15},{"id":474,"name":"Westvale","x":142.86,"y":426.35,"terrain":"plains","gold":6,"manpower":12,"supply":6},{"id":475,"name":"Bluemoor","x":190.48,"y":417.14,"terrain":"plains","gold":11,"manpower":15,"supply":5},{"id":476,"name":"Sacredvale","x":298.73,"y":425.4,"terrain":"coast","gold":12,"manpower":7,"supply":7},{"id":477,"name":"Deepcrossing","x":337.46,"y":420.0,"terrain":"forest","gold":4,"manpower":10,"supply":11},{"id":478,"name":"Blackwood","x":562.86,"y":425.4,"terrain":"coast","gold":14,"manpower":10,"supply":4},{"id":479,"name":"Greenmoor","x":686.98,"y":416.51,"terrain":"forest","gold":4,"manpower":8,"supply":11},{"id":480,"name":"Longkeep","x":781.9,"y":426.98,"terrain":"hills","gold":5,"manpower":8,"supply":13},{"id":481,"name":"Frozenfield","x":852.7,"y":428.57,"terrain":"plains","gold":11,"manpower":10,"supply":4},{"id":482,"name":"Burningbasin","x":192.06,"y":439.05,"terrain":"plains","gold":11,"manpower":10,"supply":9},{"id":483,"name":"Sacredwood","x":242.86,"y":434.92,"terrain":"forest","gold":2,"manpower":12,"supply":7},{"id":485,"name":"Stonedale","x":111.75,"y":456.51,"terrain":"mountain","gold":9,"manpower":5,"supply":16},{"id":486,"name":"Stonecrossing","x":150.48,"y":447.94,"terrain":"plains","gold":11,"manpower":13,"supply":7},{"id":487,"name":"Bluedale","x":178.1,"y":462.22,"terrain":"plains","gold":7,"manpower":13,"supply":4},{"id":489,"name":"Lowerwood","x":218.1,"y":471.75,"terrain":"forest","gold":4,"manpower":11,"supply":6},{"id":490,"name":"Goldenstrand","x":260.0,"y":466.03,"terrain":"coast","gold":13,"manpower":7,"supply":4},{"id":491,"name":"Redpeak","x":181.9,"y":483.81,"terrain":"coast","gold":15,"manpower":6,"supply":3},{"id":492,"name":"Greenpeak","x":303.17,"y":494.29,"terrain":"forest","gold":5,"manpower":11,"supply":10},{"id":493,"name":"Darkbasin","x":110.48,"y":509.84,"terrain":"mountain","gold":6,"manpower":7,"supply":13},{"id":494,"name":"Blackford","x":256.51,"y":495.56,"terrain":"hills","gold":3,"manpower":6,"supply":8},{"id":495,"name":"Darkdale","x":277.14,"y":497.46,"terrain":"plains","gold":9,"manpower":13,"supply":6},{"id":496,"name":"Lostmarsh","x":909.52,"y":511.43,"terrain":"forest","gold":4,"manpower":11,"supply":11},{"id":497,"name":"Blackgrove","x":951.11,"y":520.95,"terrain":"hills","gold":3,"manpower":10,"supply":9},{"id":498,"name":"Deepbasin","x":972.38,"y":524.44,"terrain":"coast","gold":11,"manpower":7,"supply":7},{"id":500,"name":"Crystalridge","x":899.37,"y":538.73,"terrain":"hills","gold":3,"manpower":6,"supply":13},{"id":501,"name":"Ironheath","x":834.6,"y":557.14,"terrain":"coast","gold":14,"manpower":10,"supply":8},{"id":502,"name":"Brokencrossing","x":59.05,"y":572.7,"terrain":"plains","gold":10,"manpower":14,"supply":7},{"id":503,"name":"Lowervale","x":764.76,"y":566.98,"terrain":"forest","gold":7,"manpower":9,"supply":9},{"id":504,"name":"Westwood","x":793.65,"y":569.84,"terrain":"forest","gold":2,"manpower":10,"supply":6},{"id":505,"name":"Lostmoor","x":346.35,"y":583.17,"terrain":"plains","gold":9,"manpower":12,"supply":4},{"id":506,"name":"Highbasin","x":371.75,"y":588.89,"terrain":"mountain","gold":6,"manpower":9,"supply":15},{"id":507,"name":"Northkeep","x":773.02,"y":586.67,"terrain":"mountain","gold":6,"manpower":7,"supply":16},{"id":508,"name":"Upperstrand","x":820.95,"y":574.6,"terrain":"plains","gold":11,"manpower":15,"supply":9},{"id":509,"name":"Oldfalls","x":894.6,"y":580.0,"terrain":"plains","gold":6,"manpower":11,"supply":6},{"id":510,"name":"Lowerkeep","x":124.13,"y":602.86,"terrain":"forest","gold":3,"manpower":9,"supply":9},{"id":511,"name":"Ancientport","x":168.25,"y":604.44,"terrain":"plains","gold":9,"manpower":11,"supply":7},{"id":512,"name":"Whitefen","x":252.7,"y":599.68,"terrain":"plains","gold":10,"manpower":10,"supply":7},{"id":515,"name":"Greengrove","x":810.79,"y":598.41,"terrain":"hills","gold":7,"manpower":8,"supply":8},{"id":516,"name":"Oldbluff","x":896.83,"y":605.4,"terrain":"coast","gold":14,"manpower":11,"supply":5},{"id":2001,"name":"Northern Expanse","x":502.8,"y":37.9,"terrain":"sea","gold":8,"manpower":0,"supply":7},{"id":2002,"name":"Western Deep","x":71.7,"y":310.6,"terrain":"sea","gold":8,"manpower":0,"supply":7},{"id":2003,"name":"Northwestern Passage","x":278.0,"y":87.6,"terrain":"sea","gold":3,"manpower":0,"supply":3},{"id":2004,"name":"Western Channel","x":295.6,"y":393.9,"terrain":"sea","gold":7,"manpower":0,"supply":5},{"id":2005,"name":"Central Ocean","x":484.4,"y":446.4,"terrain":"sea","gold":8,"manpower":0,"supply":7},{"id":2006,"name":"Southern Basin","x":473.4,"y":563.0,"terrain":"sea","gold":8,"manpower":0,"supply":6},{"id":2007,"name":"Eastern Waters","x":885.2,"y":232.4,"terrain":"sea","gold":8,"manpower":0,"supply":7},{"id":2008,"name":"Southeastern Sea","x":821.4,"y":478.0,"terrain":"sea","gold":8,"manpower":0,"supply":7},{"id":2009,"name":"Inland Sea of Miral","x":215.0,"y":201.3,"terrain":"sea","gold":3,"manpower":0,"supply":4},{"id":2010,"name":"Straits of Vorn","x":210.0,"y":298.5,"terrain":"sea","gold":3,"manpower":0,"supply":4},{"id":2011,"name":"Gulf of Erath","x":275.7,"y":383.8,"terrain":"sea","gold":3,"manpower":0,"supply":4},{"id":2012,"name":"Kethian Narrows","x":276.7,"y":454.4,"terrain":"sea","gold":3,"manpower":0,"supply":4},{"id":2013,"name":"Cavern Reach","x":307.5,"y":244.6,"terrain":"sea","gold":3,"manpower":0,"supply":4},{"id":2014,"name":"Sea of Delven","x":560.1,"y":226.2,"terrain":"sea","gold":3,"manpower":0,"supply":4},{"id":2015,"name":"Passage of Silorn","x":592.9,"y":280.0,"terrain":"sea","gold":3,"manpower":0,"supply":4},{"id":2016,"name":"Bay of Rethka","x":620.0,"y":338.3,"terrain":"sea","gold":3,"manpower":0,"supply":4},{"id":2017,"name":"Shallows of Orvane","x":700.0,"y":154.2,"terrain":"sea","gold":3,"manpower":0,"supply":4},{"id":1010,"name":"Eastwater Expanse","x":982.0,"y":300.0,"terrain":"sea","gold":4,"manpower":0,"supply":4},{"id":1011,"name":"Midchannel Waters","x":455.0,"y":445.0,"terrain":"sea","gold":6,"manpower":0,"supply":6},{"id":1012,"name":"Innerdeep Passage","x":650.0,"y":460.0,"terrain":"sea","gold":5,"manpower":0,"supply":5}];
const LOOKUP    = {"21,6":295,"22,6":295,"23,6":2,"31,6":4,"32,6":4,"33,6":4,"20,7":295,"21,7":295,"22,7":301,"23,7":2,"24,7":3,"25,7":3,"47,7":298,"48,7":7,"49,7":7,"50,7":8,"51,7":299,"52,7":299,"53,7":300,"54,7":300,"55,7":300,"68,7":10,"69,7":10,"70,7":10,"22,8":301,"23,8":301,"24,8":302,"25,8":302,"26,8":302,"27,8":186,"28,8":186,"29,8":186,"30,8":186,"38,8":5,"39,8":5,"40,8":5,"42,8":20,"43,8":6,"44,8":303,"50,8":8,"51,8":299,"52,8":299,"53,8":300,"54,8":9,"55,8":9,"67,8":190,"68,8":190,"20,9":16,"21,9":301,"22,9":301,"23,9":301,"24,9":302,"25,9":302,"26,9":302,"27,9":305,"28,9":305,"29,9":305,"30,9":187,"31,9":187,"32,9":187,"35,9":188,"37,9":307,"38,9":5,"39,9":5,"40,9":309,"41,9":20,"42,9":20,"43,9":20,"44,9":303,"45,9":303,"46,9":189,"47,9":189,"48,9":189,"55,9":9,"56,9":9,"69,9":11,"70,9":11,"71,9":194,"72,9":194,"21,10":16,"22,10":304,"23,10":304,"25,10":17,"26,10":17,"27,10":305,"28,10":305,"29,10":305,"30,10":305,"31,10":187,"32,10":320,"33,10":320,"34,10":306,"35,10":306,"36,10":306,"37,10":307,"38,10":308,"39,10":308,"40,10":309,"41,10":309,"42,10":20,"43,10":20,"44,10":199,"45,10":303,"46,10":310,"47,10":310,"48,10":310,"49,10":191,"57,10":312,"58,10":312,"67,10":323,"68,10":323,"69,10":26,"70,10":26,"71,10":26,"80,10":313,"89,10":315,"90,10":316,"91,10":316,"92,10":30,"10,11":14,"11,11":14,"12,11":317,"20,11":16,"21,11":16,"22,11":304,"23,11":318,"25,11":17,"26,11":17,"27,11":319,"28,11":319,"29,11":319,"30,11":198,"31,11":320,"32,11":320,"33,11":320,"34,11":306,"35,11":306,"36,11":306,"37,11":307,"38,11":308,"39,11":308,"40,11":309,"41,11":309,"42,11":199,"43,11":199,"44,11":199,"45,11":199,"46,11":310,"47,11":310,"48,11":310,"49,11":191,"51,11":311,"57,11":312,"58,11":312,"59,11":192,"60,11":192,"61,11":322,"62,11":322,"63,11":322,"64,11":193,"65,11":193,"66,11":193,"67,11":323,"68,11":323,"69,11":26,"70,11":26,"71,11":26,"79,11":27,"80,11":313,"81,11":313,"82,11":313,"83,11":28,"84,11":28,"85,11":314,"86,11":314,"88,11":29,"90,11":316,"7,12":195,"8,12":13,"9,12":13,"10,12":13,"11,12":317,"12,12":317,"13,12":317,"21,12":202,"22,12":202,"23,12":318,"24,12":318,"26,12":319,"27,12":319,"28,12":319,"29,12":198,"30,12":198,"31,12":198,"32,12":320,"33,12":18,"34,12":18,"35,12":18,"36,12":328,"37,12":328,"38,12":19,"39,12":19,"40,12":309,"41,12":309,"42,12":199,"43,12":199,"44,12":199,"45,12":329,"46,12":329,"47,12":329,"48,12":21,"49,12":21,"50,12":21,"51,12":321,"52,12":321,"53,12":22,"54,12":22,"55,12":23,"56,12":23,"57,12":23,"58,12":331,"59,12":331,"60,12":331,"61,12":24,"62,12":322,"63,12":332,"65,12":193,"66,12":193,"67,12":25,"68,12":25,"69,12":25,"70,12":26,"71,12":200,"72,12":200,"77,12":334,"78,12":27,"79,12":27,"80,12":27,"81,12":313,"82,12":28,"83,12":28,"84,12":28,"85,12":335,"86,12":335,"87,12":29,"88,12":29,"89,12":324,"90,12":324,"6,13":195,"7,13":195,"8,13":13,"9,13":325,"10,13":325,"11,13":196,"12,13":196,"13,13":326,"17,13":327,"18,13":15,"19,13":15,"20,13":202,"21,13":202,"22,13":202,"23,13":318,"24,13":318,"25,13":36,"26,13":197,"27,13":197,"28,13":197,"29,13":197,"30,13":198,"31,13":198,"32,13":337,"33,13":18,"34,13":18,"35,13":18,"36,13":328,"37,13":328,"38,13":19,"39,13":19,"40,13":39,"41,13":39,"42,13":39,"43,13":339,"44,13":339,"45,13":40,"46,13":329,"47,13":329,"48,13":21,"49,13":21,"50,13":21,"51,13":321,"52,13":330,"53,13":330,"54,13":22,"55,13":23,"56,13":23,"57,13":23,"58,13":331,"59,13":331,"60,13":331,"61,13":24,"62,13":24,"64,13":332,"65,13":332,"66,13":342,"67,13":25,"68,13":25,"69,13":25,"70,13":200,"71,13":200,"72,13":200,"78,13":27,"79,13":27,"80,13":47,"81,13":47,"82,13":28,"83,13":28,"84,13":28,"85,13":335,"86,13":335,"87,13":335,"88,13":29,"89,13":324,"90,13":324,"91,13":324,"2,14":31,"3,14":12,"4,14":12,"5,14":195,"6,14":195,"7,14":195,"8,14":325,"9,14":325,"10,14":325,"11,14":196,"12,14":196,"13,14":326,"14,14":326,"15,14":327,"16,14":327,"17,14":327,"18,14":15,"19,14":15,"20,14":202,"21,14":202,"22,14":202,"23,14":202,"24,14":36,"25,14":36,"26,14":36,"27,14":197,"28,14":197,"29,14":336,"30,14":336,"31,14":337,"32,14":337,"33,14":337,"34,14":37,"35,14":37,"36,14":338,"37,14":338,"38,14":19,"39,14":19,"40,14":39,"41,14":39,"42,14":39,"43,14":339,"44,14":339,"45,14":40,"46,14":40,"47,14":40,"48,14":340,"49,14":340,"50,14":340,"51,14":330,"52,14":330,"53,14":330,"54,14":42,"55,14":42,"56,14":23,"58,14":203,"59,14":331,"60,14":341,"61,14":24,"62,14":24,"64,14":332,"65,14":342,"66,14":342,"68,14":343,"69,14":343,"70,14":343,"71,14":200,"79,14":47,"80,14":47,"81,14":47,"82,14":204,"83,14":204,"84,14":28,"85,14":345,"86,14":345,"87,14":345,"88,14":205,"89,14":205,"90,14":205,"91,14":49,"3,15":346,"4,15":346,"5,15":346,"6,15":206,"7,15":206,"8,15":32,"9,15":32,"10,15":32,"11,15":33,"12,15":201,"13,15":201,"14,15":201,"15,15":201,"16,15":34,"17,15":34,"18,15":34,"19,15":347,"20,15":347,"21,15":202,"22,15":202,"23,15":35,"24,15":35,"25,15":36,"26,15":36,"27,15":209,"28,15":209,"29,15":336,"30,15":336,"31,15":337,"32,15":337,"33,15":37,"34,15":37,"35,15":37,"36,15":338,"37,15":338,"38,15":38,"39,15":38,"40,15":39,"41,15":39,"42,15":39,"43,15":339,"44,15":339,"45,15":40,"46,15":40,"47,15":40,"48,15":340,"49,15":340,"50,15":41,"51,15":41,"52,15":41,"53,15":330,"54,15":42,"55,15":42,"56,15":42,"57,15":203,"58,15":203,"59,15":203,"60,15":341,"62,15":43,"63,15":43,"64,15":43,"65,15":342,"66,15":342,"68,15":343,"69,15":343,"79,15":47,"80,15":47,"81,15":204,"82,15":204,"83,15":204,"84,15":204,"85,15":345,"86,15":345,"87,15":345,"90,15":205,"91,15":49,"5,16":206,"6,16":206,"9,16":32,"10,16":33,"11,16":33,"12,16":33,"13,16":201,"14,16":201,"15,16":201,"16,16":34,"17,16":34,"18,16":347,"19,16":347,"20,16":347,"21,16":208,"22,16":208,"23,16":208,"24,16":35,"25,16":35,"26,16":348,"27,16":209,"28,16":209,"29,16":209,"30,16":210,"31,16":210,"32,16":210,"33,16":361,"34,16":37,"35,16":349,"36,16":349,"37,16":349,"38,16":38,"39,16":38,"40,16":38,"41,16":350,"42,16":350,"43,16":351,"44,16":351,"45,16":351,"46,16":213,"47,16":213,"48,16":213,"49,16":340,"50,16":41,"51,16":41,"52,16":41,"53,16":352,"54,16":352,"55,16":352,"56,16":352,"57,16":203,"58,16":353,"59,16":353,"68,16":343,"71,16":354,"72,16":45,"73,16":45,"77,16":215,"78,16":46,"80,16":46,"81,16":367,"82,16":204,"83,16":204,"84,16":48,"85,16":48,"86,16":48,"87,16":345,"90,16":368,"91,16":49,"8,17":356,"9,17":356,"10,17":33,"11,17":33,"12,17":357,"13,17":357,"14,17":357,"15,17":358,"16,17":359,"17,17":359,"19,17":347,"20,17":347,"21,17":208,"22,17":208,"24,17":53,"25,17":348,"26,17":348,"27,17":348,"28,17":209,"29,17":209,"30,17":210,"31,17":210,"32,17":361,"33,17":361,"34,17":361,"35,17":211,"36,17":211,"37,17":211,"38,17":38,"39,17":38,"40,17":350,"41,17":350,"42,17":350,"43,17":351,"44,17":351,"45,17":351,"46,17":213,"47,17":213,"48,17":363,"49,17":363,"50,17":41,"51,17":41,"52,17":41,"53,17":364,"56,17":60,"57,17":353,"58,17":353,"59,17":353,"62,17":214,"63,17":214,"65,17":365,"66,17":365,"67,17":44,"69,17":44,"70,17":354,"71,17":354,"72,17":366,"73,17":45,"77,17":215,"79,17":46,"80,17":367,"81,17":367,"82,17":367,"83,17":204,"84,17":48,"85,17":48,"86,17":48,"88,17":355,"91,17":368,"8,18":356,"11,18":51,"12,18":51,"13,18":357,"14,18":357,"15,18":358,"16,18":358,"19,18":207,"20,18":207,"21,18":208,"23,18":53,"24,18":53,"25,18":53,"26,18":370,"27,18":216,"28,18":216,"29,18":216,"30,18":360,"31,18":360,"32,18":360,"33,18":361,"34,18":361,"35,18":211,"36,18":211,"37,18":211,"38,18":362,"39,18":362,"40,18":362,"41,18":212,"42,18":212,"43,18":212,"44,18":373,"45,18":373,"46,18":213,"47,18":213,"48,18":363,"49,18":363,"50,18":217,"51,18":217,"52,18":217,"58,18":353,"61,18":61,"62,18":214,"63,18":214,"64,18":214,"65,18":365,"66,18":365,"68,18":44,"69,18":62,"70,18":62,"71,18":366,"72,18":366,"73,18":366,"76,18":215,"77,18":215,"78,18":46,"79,18":377,"80,18":367,"81,18":367,"82,18":367,"83,18":367,"84,18":66,"85,18":66,"86,18":66,"88,18":355,"11,19":51,"12,19":51,"13,19":357,"14,19":52,"15,19":358,"16,19":358,"17,19":359,"26,19":370,"27,19":370,"28,19":216,"29,19":216,"30,19":360,"31,19":360,"32,19":360,"34,19":55,"35,19":371,"36,19":371,"37,19":211,"38,19":362,"39,19":362,"40,19":372,"41,19":372,"42,19":212,"43,19":382,"44,19":373,"45,19":373,"46,19":374,"47,19":374,"48,19":363,"49,19":363,"50,19":217,"51,19":217,"52,19":217,"53,19":364,"54,19":364,"60,19":61,"61,19":61,"62,19":218,"63,19":218,"64,19":214,"65,19":365,"66,19":365,"67,19":365,"68,19":62,"70,19":62,"71,19":366,"72,19":219,"73,19":219,"76,19":64,"77,19":64,"78,19":377,"79,19":377,"80,19":377,"81,19":65,"82,19":65,"83,19":65,"84,19":66,"85,19":66,"13,20":52,"14,20":52,"15,20":52,"18,20":378,"19,20":378,"20,20":378,"22,20":369,"23,20":369,"24,20":53,"25,20":54,"29,20":380,"30,20":223,"31,20":223,"32,20":55,"33,20":55,"34,20":55,"35,20":371,"36,20":371,"37,20":371,"38,20":381,"39,20":381,"40,20":372,"41,20":372,"42,20":382,"43,20":382,"44,20":58,"45,20":58,"46,20":374,"47,20":374,"48,20":375,"49,20":375,"50,20":375,"51,20":217,"52,20":217,"53,20":376,"54,20":376,"60,20":386,"61,20":386,"62,20":218,"63,20":218,"64,20":218,"65,20":225,"66,20":225,"67,20":225,"68,20":387,"69,20":62,"70,20":388,"71,20":388,"72,20":219,"73,20":219,"74,20":390,"76,20":64,"77,20":64,"78,20":377,"79,20":377,"80,20":377,"81,20":65,"82,20":65,"83,20":65,"84,20":66,"85,20":66,"7,21":50,"13,21":394,"14,21":52,"15,21":52,"16,21":395,"17,21":395,"27,21":380,"28,21":380,"29,21":380,"30,21":223,"31,21":223,"32,21":223,"33,21":55,"34,21":55,"35,21":399,"36,21":56,"37,21":56,"38,21":381,"39,21":381,"40,21":372,"41,21":372,"42,21":382,"43,21":382,"44,21":58,"45,21":58,"46,21":383,"47,21":383,"48,21":375,"49,21":375,"50,21":375,"51,21":384,"52,21":384,"53,21":376,"54,21":376,"57,21":385,"61,21":386,"62,21":386,"63,21":218,"64,21":401,"65,21":225,"66,21":225,"67,21":387,"68,21":387,"69,21":387,"70,21":388,"71,21":388,"72,21":389,"73,21":389,"74,21":390,"75,21":390,"76,21":64,"77,21":64,"78,21":391,"79,21":391,"80,21":391,"81,21":65,"82,21":65,"83,21":226,"84,21":392,"85,21":392,"86,21":393,"6,22":69,"7,22":50,"9,22":221,"10,22":221,"14,22":394,"15,22":395,"16,22":395,"17,22":395,"23,22":379,"24,22":379,"25,22":54,"26,22":54,"27,22":380,"28,22":380,"33,22":399,"34,22":399,"35,22":399,"36,22":56,"37,22":56,"38,22":381,"39,22":381,"40,22":57,"41,22":57,"42,22":57,"43,22":229,"44,22":229,"45,22":229,"46,22":383,"47,22":383,"48,22":224,"49,22":224,"50,22":224,"51,22":384,"52,22":384,"53,22":59,"57,22":385,"61,22":386,"62,22":401,"63,22":401,"64,22":401,"65,22":225,"66,22":225,"67,22":387,"68,22":387,"69,22":387,"70,22":63,"71,22":63,"72,22":389,"73,22":389,"74,22":390,"75,22":390,"76,22":233,"77,22":233,"78,22":391,"79,22":391,"80,22":84,"82,22":226,"83,22":226,"84,22":392,"7,23":69,"8,23":50,"9,23":221,"15,23":394,"16,23":395,"18,23":396,"19,23":396,"21,23":222,"22,23":379,"23,23":379,"24,23":379,"25,23":228,"26,23":228,"27,23":397,"28,23":397,"29,23":397,"32,23":398,"33,23":398,"34,23":399,"35,23":399,"36,23":56,"37,23":56,"38,23":381,"40,23":76,"41,23":76,"43,23":404,"44,23":229,"45,23":229,"46,23":405,"47,23":405,"48,23":224,"49,23":224,"50,23":224,"51,23":407,"52,23":78,"53,23":59,"61,23":80,"62,23":401,"63,23":401,"64,23":401,"65,23":230,"66,23":230,"67,23":402,"68,23":402,"69,23":402,"70,23":63,"71,23":63,"72,23":63,"73,23":232,"74,23":232,"75,23":233,"76,23":233,"77,23":233,"78,23":233,"79,23":84,"80,23":84,"82,23":226,"83,23":226,"84,23":85,"85,23":392,"16,24":70,"18,24":396,"19,24":396,"20,24":222,"21,24":222,"22,24":227,"23,24":227,"24,24":227,"25,24":228,"26,24":228,"27,24":397,"28,24":397,"29,24":397,"31,24":398,"33,24":403,"34,24":403,"35,24":403,"36,24":75,"37,24":75,"38,24":75,"43,24":404,"44,24":229,"45,24":229,"48,24":406,"49,24":406,"50,24":407,"51,24":407,"60,24":80,"61,24":80,"62,24":80,"63,24":230,"64,24":230,"65,24":230,"66,24":230,"67,24":231,"68,24":231,"69,24":409,"70,24":409,"71,24":63,"72,24":232,"73,24":232,"74,24":232,"75,24":417,"76,24":233,"77,24":233,"78,24":233,"79,24":410,"81,24":84,"82,24":226,"83,24":85,"84,24":85,"15,25":70,"17,25":71,"18,25":71,"19,25":72,"20,25":72,"21,25":72,"22,25":227,"23,25":227,"24,25":227,"25,25":228,"26,25":228,"27,25":234,"28,25":234,"29,25":234,"33,25":403,"34,25":403,"35,25":403,"37,25":75,"43,25":404,"44,25":237,"47,25":77,"48,25":406,"49,25":406,"50,25":238,"58,25":408,"59,25":79,"60,25":79,"61,25":80,"62,25":80,"63,25":414,"64,25":230,"65,25":230,"66,25":230,"67,25":231,"68,25":231,"69,25":409,"70,25":409,"71,25":416,"72,25":416,"73,25":417,"74,25":417,"75,25":417,"76,25":417,"77,25":233,"78,25":410,"79,25":410,"82,25":240,"83,25":85,"84,25":85,"15,26":411,"16,26":411,"17,26":71,"18,26":71,"19,26":72,"20,26":72,"21,26":72,"22,26":419,"23,26":419,"24,26":73,"25,26":73,"26,26":412,"27,26":412,"28,26":234,"29,26":234,"32,26":413,"33,26":235,"34,26":235,"35,26":235,"44,26":237,"46,26":77,"47,26":77,"48,26":77,"49,26":238,"50,26":238,"59,26":79,"60,26":79,"61,26":80,"62,26":422,"63,26":422,"64,26":414,"65,26":414,"66,26":414,"67,26":81,"68,26":231,"69,26":415,"70,26":415,"71,26":416,"72,26":416,"73,26":82,"74,26":417,"75,26":417,"76,26":83,"77,26":83,"78,26":423,"79,26":423,"17,27":71,"18,27":87,"19,27":87,"20,27":418,"21,27":418,"22,27":419,"23,27":419,"24,27":73,"25,27":73,"26,27":412,"27,27":412,"28,27":234,"29,27":74,"32,27":74,"48,27":77,"49,27":238,"57,27":239,"58,27":239,"61,27":421,"62,27":422,"63,27":422,"64,27":414,"65,27":414,"66,27":81,"67,27":81,"68,27":81,"69,27":415,"70,27":415,"71,27":415,"72,27":82,"73,27":82,"74,27":82,"75,27":99,"76,27":83,"77,27":83,"78,27":423,"79,27":423,"81,27":240,"18,28":87,"19,28":87,"20,28":418,"21,28":418,"22,28":419,"23,28":419,"24,28":73,"25,28":73,"26,28":425,"27,28":412,"28,28":89,"29,28":89,"30,28":74,"31,28":74,"47,28":93,"48,28":93,"55,28":420,"56,28":420,"57,28":239,"58,28":239,"61,28":421,"62,28":422,"63,28":422,"64,28":96,"65,28":96,"66,28":428,"67,28":81,"68,28":81,"69,28":429,"70,28":429,"71,28":430,"72,28":82,"73,28":82,"74,28":99,"75,28":99,"77,28":83,"78,28":423,"92,28":102,"19,29":87,"20,29":418,"21,29":418,"22,29":424,"23,29":424,"24,29":424,"25,29":425,"26,29":425,"27,29":89,"28,29":89,"29,29":89,"30,29":433,"31,29":90,"32,29":90,"46,29":93,"49,29":243,"55,29":420,"56,29":420,"57,29":244,"61,29":421,"62,29":427,"63,29":427,"64,29":96,"65,29":96,"66,29":428,"67,29":428,"68,29":429,"69,29":429,"70,29":429,"71,29":430,"72,29":430,"73,29":98,"74,29":98,"75,29":99,"76,29":99,"19,30":245,"24,30":424,"25,30":425,"26,30":425,"27,30":432,"28,30":89,"29,30":433,"30,30":433,"31,30":433,"32,30":434,"44,30":92,"49,30":435,"50,30":243,"53,30":426,"54,30":426,"55,30":426,"56,30":244,"57,30":244,"58,30":244,"59,30":244,"60,30":247,"61,30":427,"63,30":427,"64,30":96,"65,30":96,"66,30":437,"67,30":438,"68,30":438,"69,30":429,"70,30":429,"71,30":430,"72,30":98,"73,30":98,"74,30":439,"75,30":439,"76,30":248,"18,31":440,"19,31":245,"20,31":245,"23,31":88,"24,31":88,"25,31":431,"26,31":431,"27,31":432,"28,31":432,"29,31":433,"30,31":433,"31,31":433,"32,31":434,"33,31":434,"34,31":91,"35,31":91,"47,31":246,"48,31":246,"53,31":94,"54,31":94,"55,31":95,"56,31":95,"57,31":244,"58,31":244,"59,31":247,"60,31":247,"61,31":247,"62,31":247,"63,31":436,"64,31":436,"65,31":437,"66,31":437,"67,31":438,"68,31":438,"69,31":97,"70,31":97,"71,31":430,"72,31":98,"73,31":98,"74,31":439,"75,31":439,"76,31":248,"84,31":100,"17,32":440,"19,32":245,"20,32":245,"21,32":245,"22,32":88,"23,32":88,"24,32":88,"25,32":431,"26,32":431,"27,32":431,"28,32":432,"29,32":432,"30,32":433,"31,32":106,"32,32":106,"53,32":94,"54,32":94,"55,32":95,"56,32":95,"57,32":251,"58,32":251,"59,32":251,"60,32":247,"61,32":247,"62,32":247,"63,32":252,"64,32":252,"65,32":252,"66,32":437,"67,32":438,"68,32":438,"69,32":97,"70,32":97,"71,32":97,"72,32":114,"73,32":114,"74,32":114,"84,32":101,"19,33":441,"20,33":441,"21,33":442,"22,33":442,"23,33":88,"24,33":88,"25,33":443,"26,33":443,"27,33":105,"28,33":444,"29,33":444,"30,33":444,"31,33":106,"41,33":249,"52,33":445,"53,33":94,"54,33":250,"55,33":95,"56,33":95,"57,33":251,"58,33":251,"59,33":251,"60,33":112,"61,33":112,"64,33":252,"65,33":252,"66,33":446,"67,33":446,"68,33":446,"69,33":447,"70,33":447,"73,33":114,"19,34":441,"20,34":441,"21,34":442,"22,34":442,"23,34":104,"24,34":443,"25,34":443,"26,34":443,"27,34":105,"28,34":444,"29,34":444,"30,34":444,"31,34":106,"32,34":106,"42,34":249,"50,34":110,"51,34":110,"52,34":445,"53,34":445,"54,34":250,"55,34":250,"56,34":250,"57,34":111,"58,34":251,"59,34":251,"60,34":112,"61,34":112,"63,34":455,"64,34":455,"65,34":455,"66,34":446,"67,34":446,"68,34":446,"69,34":447,"84,34":116,"98,34":119,"18,35":103,"19,35":103,"20,35":448,"21,35":448,"22,35":448,"23,35":104,"24,35":104,"25,35":443,"26,35":449,"27,35":449,"28,35":105,"29,35":450,"30,35":450,"31,35":450,"36,35":107,"47,35":254,"48,35":109,"49,35":109,"50,35":110,"51,35":110,"52,35":445,"53,35":445,"54,35":250,"55,35":250,"56,35":111,"57,35":111,"58,35":111,"59,35":453,"60,35":453,"63,35":454,"64,35":455,"65,35":455,"66,35":455,"67,35":255,"68,35":113,"69,35":113,"72,35":256,"81,35":257,"82,35":257,"83,35":116,"84,35":116,"85,35":117,"88,35":456,"97,35":119,"19,36":103,"20,36":448,"21,36":448,"22,36":448,"23,36":458,"24,36":458,"26,36":449,"27,36":449,"28,36":459,"29,36":450,"30,36":450,"31,36":253,"33,36":451,"34,36":451,"35,36":107,"36,36":107,"40,36":108,"41,36":452,"42,36":452,"43,36":452,"47,36":254,"50,36":109,"51,36":460,"52,36":460,"53,36":460,"54,36":250,"55,36":250,"56,36":111,"57,36":111,"60,36":453,"61,36":454,"62,36":454,"66,36":255,"67,36":255,"68,36":255,"69,36":113,"72,36":461,"73,36":461,"81,36":257,"82,36":257,"83,36":116,"84,36":117,"85,36":117,"86,36":117,"87,36":456,"88,36":456,"89,36":456,"18,37":457,"19,37":463,"20,37":463,"21,37":448,"22,37":458,"23,37":458,"25,37":259,"26,37":259,"27,37":259,"28,37":459,"29,37":459,"30,37":459,"31,37":253,"32,37":253,"41,37":260,"42,37":260,"50,37":109,"53,37":127,"54,37":127,"55,37":127,"56,37":111,"65,37":129,"66,37":255,"67,37":255,"68,37":255,"69,37":113,"72,37":461,"73,37":461,"74,37":131,"75,37":131,"76,37":115,"77,37":115,"78,37":132,"79,37":132,"80,37":132,"81,37":262,"82,37":262,"83,37":133,"84,37":133,"85,37":133,"86,37":134,"87,37":134,"88,37":462,"89,37":462,"17,38":457,"18,38":457,"19,38":463,"20,38":463,"21,38":258,"22,38":258,"23,38":258,"24,38":470,"25,38":259,"27,38":259,"32,38":466,"33,38":466,"34,38":125,"35,38":125,"36,38":125,"41,38":260,"42,38":260,"55,38":127,"56,38":128,"65,38":129,"66,38":467,"67,38":467,"68,38":467,"73,38":261,"74,38":131,"75,38":131,"76,38":468,"77,38":468,"78,38":132,"79,38":132,"80,38":469,"81,38":262,"82,38":262,"83,38":133,"84,38":133,"85,38":133,"86,38":134,"87,38":134,"88,38":134,"17,39":457,"18,39":457,"19,39":463,"21,39":258,"22,39":258,"23,39":258,"25,39":470,"30,39":466,"31,39":466,"32,39":466,"33,39":466,"34,39":124,"35,39":124,"36,39":125,"55,39":128,"56,39":128,"67,39":467,"68,39":467,"73,39":261,"74,39":266,"75,39":266,"76,39":468,"77,39":468,"78,39":267,"79,39":469,"80,39":469,"81,39":262,"82,39":262,"83,39":133,"84,39":133,"85,39":472,"86,39":472,"87,39":134,"88,39":473,"14,40":120,"17,40":121,"18,40":121,"20,40":122,"21,40":122,"22,40":122,"24,40":470,"25,40":470,"26,40":464,"27,40":123,"29,40":465,"30,40":265,"31,40":265,"32,40":265,"33,40":124,"34,40":124,"35,40":124,"55,40":128,"56,40":128,"57,40":128,"68,40":479,"74,40":266,"75,40":266,"76,40":266,"77,40":267,"78,40":267,"79,40":469,"80,40":469,"81,40":469,"82,40":471,"83,40":471,"84,40":471,"85,40":472,"86,40":472,"87,40":473,"88,40":473,"14,41":120,"15,41":120,"17,41":121,"19,41":475,"20,41":122,"21,41":122,"22,41":122,"23,41":264,"24,41":264,"25,41":264,"26,41":123,"27,41":123,"28,41":123,"29,41":476,"30,41":476,"31,41":265,"32,41":265,"33,41":477,"34,41":477,"57,41":128,"65,41":143,"66,41":130,"67,41":130,"68,41":479,"77,41":267,"78,41":267,"79,41":480,"80,41":145,"81,41":145,"82,41":145,"83,41":471,"84,41":471,"85,41":481,"86,41":472,"9,42":135,"10,42":135,"11,42":263,"12,42":263,"13,42":474,"14,42":474,"15,42":474,"16,42":268,"19,42":475,"20,42":138,"21,42":138,"22,42":138,"23,42":264,"24,42":264,"25,42":483,"26,42":123,"27,42":123,"28,42":476,"29,42":476,"30,42":476,"31,42":265,"32,42":265,"33,42":477,"56,42":478,"57,42":142,"65,42":143,"78,42":480,"79,42":144,"80,42":144,"81,42":145,"82,42":145,"83,42":471,"84,42":481,"85,42":481,"86,42":146,"87,42":146,"93,42":147,"9,43":135,"10,43":135,"11,43":263,"12,43":136,"13,43":474,"14,43":474,"15,43":486,"16,43":268,"17,43":268,"18,43":482,"19,43":482,"20,43":482,"21,43":138,"22,43":138,"23,43":483,"24,43":483,"25,43":483,"26,43":139,"27,43":139,"28,43":476,"29,43":476,"30,43":140,"79,43":144,"80,43":144,"81,43":145,"82,43":270,"83,43":481,"84,43":481,"85,43":481,"86,43":146,"10,44":135,"11,44":485,"12,44":136,"13,44":136,"14,44":486,"15,44":486,"16,44":268,"17,44":268,"18,44":482,"19,44":482,"20,44":482,"21,44":138,"22,44":269,"23,44":269,"24,44":483,"25,44":139,"26,44":139,"27,44":139,"28,44":139,"29,44":140,"30,44":140,"31,44":140,"81,44":270,"82,44":270,"83,44":270,"84,44":481,"85,44":481,"86,44":146,"12,45":136,"13,45":136,"14,45":486,"15,45":486,"16,45":487,"17,45":487,"18,45":487,"19,45":137,"20,45":137,"21,45":489,"22,45":269,"23,45":269,"24,45":269,"25,45":490,"26,45":139,"27,45":139,"29,45":140,"81,45":270,"82,45":270,"83,45":270,"84,45":156,"86,45":271,"11,46":485,"12,46":485,"13,46":149,"14,46":149,"15,46":486,"16,46":487,"17,46":487,"18,46":487,"19,46":137,"20,46":137,"21,46":489,"22,46":489,"23,46":269,"24,46":269,"25,46":490,"29,46":153,"30,46":153,"31,46":153,"79,46":155,"80,46":155,"82,46":270,"85,46":156,"86,46":271,"14,47":149,"15,47":149,"16,47":487,"17,47":491,"19,47":137,"20,47":489,"21,47":489,"22,47":489,"23,47":151,"24,47":490,"25,47":490,"26,47":490,"27,47":152,"28,47":152,"29,47":153,"30,47":153,"31,47":153,"40,47":141,"84,47":156,"85,47":156,"86,47":271,"14,48":149,"15,48":150,"16,48":150,"17,48":491,"19,48":273,"20,48":273,"21,48":489,"22,48":151,"23,48":151,"24,48":151,"25,48":494,"26,48":494,"27,48":152,"28,48":152,"29,48":492,"30,48":492,"84,48":156,"85,48":274,"90,48":158,"91,48":158,"92,48":272,"15,49":150,"16,49":150,"17,49":491,"18,49":491,"24,49":494,"25,49":494,"27,49":495,"28,49":495,"29,49":492,"30,49":492,"85,49":274,"89,49":157,"90,49":157,"91,49":496,"92,49":272,"16,50":163,"17,50":163,"29,50":492,"30,50":492,"86,50":274,"87,50":274,"92,50":276,"95,50":159,"9,51":148,"10,51":493,"11,51":493,"12,51":493,"16,51":163,"88,51":275,"89,51":275,"95,51":497,"11,52":493,"95,52":497,"96,52":498,"97,52":498,"89,53":500,"90,53":500,"91,53":166,"97,53":498,"87,54":165,"88,54":165,"89,54":500,"90,54":500,"3,55":160,"4,55":277,"5,55":277,"12,55":162,"13,55":162,"81,55":164,"82,55":164,"83,55":501,"88,55":165,"89,55":165,"2,56":160,"3,56":160,"4,56":277,"5,56":502,"7,56":278,"8,56":278,"9,56":278,"10,56":279,"11,56":279,"12,56":162,"13,56":162,"76,56":503,"77,56":503,"80,56":504,"81,56":164,"82,56":508,"83,56":501,"84,56":501,"85,56":182,"86,56":182,"87,56":182,"90,56":183,"91,56":183,"2,57":160,"3,57":160,"4,57":502,"5,57":502,"6,57":502,"7,57":502,"8,57":286,"9,57":286,"10,57":286,"11,57":280,"12,57":280,"13,57":280,"14,57":170,"15,57":170,"16,57":171,"22,57":172,"23,57":281,"24,57":281,"26,57":282,"27,57":282,"28,57":173,"29,57":173,"30,57":173,"73,57":283,"74,57":283,"75,57":503,"76,57":503,"77,57":507,"78,57":504,"79,57":504,"80,57":504,"81,57":508,"82,57":508,"83,57":508,"84,57":181,"85,57":182,"86,57":182,"87,57":182,"88,57":509,"89,57":509,"90,57":183,"91,57":183,"92,57":183,"0,58":285,"1,58":285,"2,58":285,"3,58":168,"4,58":168,"5,58":502,"6,58":502,"7,58":169,"8,58":286,"9,58":286,"10,58":286,"11,58":280,"12,58":280,"13,58":280,"14,58":170,"15,58":170,"16,58":171,"19,58":288,"21,58":172,"22,58":172,"23,58":281,"24,58":281,"25,58":281,"26,58":282,"27,58":282,"28,58":173,"29,58":173,"30,58":173,"31,58":173,"32,58":174,"34,58":505,"71,58":179,"72,58":179,"73,58":283,"74,58":283,"75,58":507,"76,58":507,"77,58":507,"78,58":180,"79,58":180,"80,58":515,"81,58":508,"82,58":508,"83,58":181,"84,58":181,"85,58":292,"86,58":292,"87,58":292,"88,58":509,"89,58":509,"90,58":509,"91,58":183,"92,58":284,"93,58":284,"94,58":284,"95,58":284,"0,59":285,"1,59":285,"2,59":168,"3,59":168,"4,59":168,"5,59":169,"6,59":169,"7,59":169,"8,59":169,"9,59":286,"10,59":286,"11,59":510,"12,59":510,"13,59":287,"14,59":287,"15,59":511,"16,59":511,"17,59":511,"18,59":288,"19,59":288,"20,59":288,"21,59":172,"22,59":172,"23,59":172,"24,59":512,"25,59":512,"26,59":512,"27,59":282,"28,59":289,"29,59":289,"30,59":289,"31,59":289,"32,59":174,"33,59":174,"34,59":174,"35,59":175,"36,59":506,"37,59":506,"38,59":506,"39,59":176,"42,59":290,"69,59":178,"70,59":178,"71,59":179,"72,59":179,"73,59":179,"74,59":291,"75,59":291,"76,59":507,"77,59":507,"78,59":180,"79,59":180,"80,59":515,"81,59":515,"82,59":181,"83,59":181,"84,59":181,"85,59":292,"86,59":292,"87,59":292,"88,59":292,"89,59":516,"90,59":293,"91,59":293,"92,59":293,"93,59":284,"94,59":284,"95,59":294,"96,59":294,"97,59":294,"97,29":1010,"97,30":1010,"97,31":1010,"45,43":1011,"45,44":1011,"45,45":1011,"64,44":1012,"64,45":1012,"64,46":1012,"0,0":2001,"0,1":2001,"0,2":2001,"0,3":2001,"0,4":2001,"0,5":2001,"0,6":2001,"0,7":2001,"1,7":2001,"1,6":2001,"1,5":2001,"1,4":2001,"1,3":2001,"1,2":2001,"1,1":2001,"1,0":2001,"2,0":2001,"2,1":2001,"2,2":2001,"2,3":2001,"2,4":2001,"2,5":2001,"2,6":2001,"2,7":2001,"3,7":2001,"3,6":2001,"3,5":2001,"3,4":2001,"3,3":2001,"3,2":2001,"3,1":2001,"3,0":2001,"4,0":2001,"4,1":2001,"4,2":2001,"4,3":2001,"4,4":2001,"4,5":2001,"4,6":2001,"4,7":2001,"5,7":2001,"5,6":2001,"5,5":2001,"5,4":2001,"5,3":2001,"5,2":2001,"5,1":2001,"5,0":2001,"6,0":2001,"6,1":2001,"6,2":2001,"6,3":2001,"6,4":2001,"6,5":2001,"6,6":2001,"6,7":2001,"7,7":2001,"7,6":2001,"7,5":2001,"7,4":2001,"7,3":2001,"7,2":2001,"7,1":2001,"7,0":2001,"8,0":2001,"8,1":2001,"8,2":2001,"8,3":2001,"8,4":2001,"8,5":2001,"8,6":2001,"8,7":2001,"9,7":2001,"9,6":2001,"9,5":2001,"9,4":2001,"9,3":2001,"9,2":2001,"9,1":2001,"9,0":2001,"10,0":2001,"10,1":2001,"10,2":2001,"10,3":2001,"10,4":2001,"10,5":2001,"10,6":2001,"10,7":2001,"11,7":2001,"11,6":2001,"11,5":2001,"11,4":2001,"11,3":2001,"11,2":2001,"11,1":2001,"11,0":2001,"12,0":2001,"12,1":2001,"12,2":2001,"12,3":2001,"12,4":2001,"12,5":2001,"12,6":2001,"12,7":2001,"13,7":2001,"13,6":2001,"13,5":2001,"13,4":2001,"13,3":2001,"13,2":2001,"13,1":2001,"13,0":2001,"14,0":2001,"14,1":2001,"15,1":2001,"15,0":2001,"16,0":2001,"16,1":2001,"16,2":2001,"16,3":2001,"16,4":2001,"16,5":2001,"16,6":2001,"16,7":2001,"15,7":2001,"15,6":2001,"15,5":2001,"15,4":2001,"15,3":2001,"15,2":2001,"14,5":2001,"14,6":2001,"14,7":2001,"17,7":2001,"17,6":2001,"17,5":2001,"17,4":2001,"17,3":2001,"17,2":2001,"17,1":2001,"17,0":2001,"18,0":2001,"18,1":2001,"18,2":2001,"18,3":2001,"18,4":2001,"18,5":2001,"18,6":2001,"18,7":2001,"19,7":2001,"19,6":2001,"19,5":2001,"19,4":2001,"19,3":2001,"19,2":2001,"19,1":2001,"19,0":2001,"20,0":2001,"20,1":2001,"20,2":2001,"20,3":2001,"20,4":2001,"20,5":2001,"20,6":2001,"21,5":2001,"21,4":2001,"21,3":2001,"21,2":2001,"21,1":2001,"21,0":2001,"22,0":2001,"22,1":2001,"22,2":2001,"22,3":2001,"22,4":2001,"22,5":2001,"23,5":2001,"23,4":2001,"23,3":2001,"23,2":2001,"23,1":2001,"23,0":2001,"24,0":2001,"24,1":2001,"24,2":2001,"24,3":2001,"24,4":2001,"24,5":2001,"24,6":2001,"25,6":2001,"25,5":2001,"25,4":2001,"25,3":2001,"25,2":2001,"25,1":2001,"25,0":2001,"26,0":2001,"26,1":2001,"26,2":2001,"26,3":2001,"26,4":2001,"26,5":2001,"26,6":2001,"26,7":2001,"27,7":2001,"27,6":2001,"27,5":2001,"27,4":2001,"27,3":2001,"27,2":2001,"27,1":2001,"27,0":2001,"28,0":2001,"28,1":2001,"28,2":2001,"28,3":2001,"28,4":2001,"28,5":2001,"28,6":2001,"28,7":2001,"29,7":2001,"29,6":2001,"29,5":2001,"29,4":2001,"29,3":2001,"29,2":2001,"29,1":2001,"29,0":2001,"30,0":2001,"30,1":2001,"30,2":2001,"30,3":2001,"30,4":2001,"30,5":2001,"30,6":2001,"30,7":2001,"31,7":2001,"32,7":2001,"33,7":2001,"34,7":2001,"34,6":2001,"35,6":2001,"35,5":2001,"35,4":2001,"35,3":2001,"35,2":2001,"35,1":2001,"35,0":2001,"34,0":2001,"34,1":2001,"34,2":2001,"33,2":2001,"33,1":2001,"33,0":2001,"32,0":2001,"32,1":2001,"32,2":2001,"32,3":2001,"32,4":2001,"32,5":2001,"31,5":2001,"31,4":2001,"31,3":2001,"31,2":2001,"31,1":2001,"31,0":2001,"33,5":2001,"33,4":2001,"33,3":2001,"36,0":2001,"36,1":2001,"36,2":2001,"36,3":2001,"36,4":2001,"36,5":2001,"36,6":2001,"36,7":2001,"35,7":2001,"37,7":2001,"37,6":2001,"37,5":2001,"37,4":2001,"37,3":2001,"37,2":2001,"37,1":2001,"37,0":2001,"38,0":2001,"38,1":2001,"38,2":2001,"38,3":2001,"38,4":2001,"38,5":2001,"38,6":2001,"38,7":2001,"39,7":2001,"39,6":2001,"39,5":2001,"39,4":2001,"39,3":2001,"39,2":2001,"39,1":2001,"39,0":2001,"40,0":2001,"40,1":2001,"40,2":2001,"40,3":2001,"40,4":2001,"40,5":2001,"40,6":2001,"40,7":2001,"41,7":2001,"41,6":2001,"41,5":2001,"41,4":2001,"41,3":2001,"41,2":2001,"41,1":2001,"41,0":2001,"42,0":2001,"42,1":2001,"42,2":2001,"42,3":2001,"42,4":2001,"42,5":2001,"42,6":2001,"42,7":2001,"43,7":2001,"43,6":2001,"43,5":2001,"43,4":2001,"43,3":2001,"43,2":2001,"43,1":2001,"43,0":2001,"44,0":2001,"44,1":2001,"44,2":2001,"44,3":2001,"44,4":2001,"44,5":2001,"44,6":2001,"44,7":2001,"45,7":2001,"45,6":2001,"45,5":2001,"45,4":2001,"45,3":2001,"45,2":2001,"45,1":2001,"45,0":2001,"46,0":2001,"46,1":2001,"46,2":2001,"46,3":2001,"46,4":2001,"46,5":2001,"46,6":2001,"46,7":2001,"47,6":2001,"47,5":2001,"47,4":2001,"47,3":2001,"47,2":2001,"47,1":2001,"47,0":2001,"48,0":2001,"48,1":2001,"48,2":2001,"48,3":2001,"48,4":2001,"48,5":2001,"48,6":2001,"49,6":2001,"49,5":2001,"49,4":2001,"49,3":2001,"49,2":2001,"49,1":2001,"49,0":2001,"50,0":2001,"50,1":2001,"50,2":2001,"50,3":2001,"50,4":2001,"50,5":2001,"50,6":2001,"51,6":2001,"51,5":2001,"51,4":2001,"51,3":2001,"51,2":2001,"51,1":2001,"51,0":2001,"52,0":2001,"52,1":2001,"52,2":2001,"52,3":2001,"52,4":2001,"52,5":2001,"52,6":2001,"53,6":2001,"53,5":2001,"53,4":2001,"53,3":2001,"53,2":2001,"53,1":2001,"53,0":2001,"54,0":2001,"54,1":2001,"54,2":2001,"54,3":2001,"54,4":2001,"54,5":2001,"54,6":2001,"55,6":2001,"55,5":2001,"55,4":2001,"55,3":2001,"55,2":2001,"55,1":2001,"55,0":2001,"56,0":2001,"56,1":2001,"56,2":2001,"56,3":2001,"56,4":2001,"56,5":2001,"56,6":2001,"56,7":2001,"57,7":2001,"57,6":2001,"58,6":2001,"58,5":2001,"58,4":2001,"58,3":2001,"58,2":2001,"58,1":2001,"58,0":2001,"57,0":2001,"57,1":2001,"57,2":2001,"59,0":2001,"59,1":2001,"59,2":2001,"59,3":2001,"59,4":2001,"59,5":2001,"59,6":2001,"59,7":2001,"60,7":2001,"60,6":2001,"60,5":2001,"60,4":2001,"60,3":2001,"60,2":2001,"60,1":2001,"60,0":2001,"61,0":2001,"61,1":2001,"61,2":2001,"61,3":2001,"61,4":2001,"61,5":2001,"61,6":2001,"61,7":2001,"62,7":2001,"62,6":2001,"62,5":2001,"62,4":2001,"62,3":2001,"62,2":2001,"62,1":2001,"62,0":2001,"63,0":2001,"63,1":2001,"63,2":2001,"63,3":2001,"63,4":2001,"63,5":2001,"63,6":2001,"63,7":2001,"64,7":2001,"64,6":2001,"64,5":2001,"64,4":2001,"64,3":2001,"64,2":2001,"64,1":2001,"64,0":2001,"65,0":2001,"65,1":2001,"65,2":2001,"65,3":2001,"65,4":2001,"65,5":2001,"65,6":2001,"65,7":2001,"66,7":2001,"66,6":2001,"66,5":2001,"66,4":2001,"66,3":2001,"66,2":2001,"66,1":2001,"66,0":2001,"67,0":2001,"67,1":2001,"67,2":2001,"67,3":2001,"67,4":2001,"67,5":2001,"67,6":2001,"67,7":2001,"68,6":2001,"68,5":2001,"68,4":2001,"68,3":2001,"68,2":2001,"68,1":2001,"68,0":2001,"69,0":2001,"69,1":2001,"69,2":2001,"69,3":2001,"69,4":2001,"69,5":2001,"69,6":2001,"70,6":2001,"70,5":2001,"70,4":2001,"70,3":2001,"70,2":2001,"70,1":2001,"70,0":2001,"71,0":2001,"71,1":2001,"71,2":2001,"71,3":2001,"71,4":2001,"71,5":2001,"71,6":2001,"71,7":2001,"72,7":2001,"73,7":2001,"73,6":2001,"73,5":2001,"73,4":2001,"73,3":2001,"73,2":2001,"73,1":2001,"73,0":2001,"72,0":2001,"72,1":2001,"72,2":2001,"72,3":2001,"72,4":2001,"72,5":2001,"74,0":2001,"74,1":2001,"74,2":2001,"74,3":2001,"74,4":2001,"74,5":2001,"74,6":2001,"74,7":2001,"76,7":2001,"76,6":2001,"76,5":2001,"76,4":2001,"76,3":2001,"76,2":2001,"76,1":2001,"76,0":2001,"75,0":2001,"75,1":2001,"75,2":2001,"75,3":2001,"75,4":2001,"75,5":2001,"75,6":2001,"75,7":2001,"77,0":2001,"77,1":2001,"77,2":2001,"77,3":2001,"77,4":2001,"77,5":2001,"77,6":2001,"77,7":2001,"78,7":2001,"78,6":2001,"78,5":2001,"78,4":2001,"78,3":2001,"78,2":2001,"78,1":2001,"78,0":2001,"79,0":2001,"79,1":2001,"79,2":2001,"80,2":2001,"80,1":2001,"80,0":2001,"81,0":2001,"81,1":2001,"81,2":2001,"81,3":2001,"81,4":2001,"81,5":2001,"81,6":2001,"81,7":2001,"82,7":2001,"82,6":2001,"82,5":2001,"82,4":2001,"82,3":2001,"82,2":2001,"82,1":2001,"82,0":2001,"83,0":2001,"83,1":2001,"83,2":2001,"83,3":2001,"83,4":2001,"83,5":2001,"83,6":2001,"83,7":2001,"84,7":2001,"84,6":2001,"84,5":2001,"84,4":2001,"84,3":2001,"84,2":2001,"84,1":2001,"84,0":2001,"85,0":2001,"85,1":2001,"85,2":2001,"85,3":2001,"85,4":2001,"85,5":2001,"85,6":2001,"85,7":2001,"86,7":2001,"86,6":2001,"86,5":2001,"86,4":2001,"86,3":2001,"86,2":2001,"86,1":2001,"86,0":2001,"87,0":2001,"87,1":2001,"87,2":2001,"87,3":2001,"87,4":2001,"87,5":2001,"87,6":2001,"87,7":2001,"88,7":2001,"88,6":2001,"88,5":2001,"88,4":2001,"88,3":2001,"88,2":2001,"88,1":2001,"88,0":2001,"89,0":2001,"89,1":2001,"89,2":2001,"89,3":2001,"89,4":2001,"89,5":2001,"89,6":2001,"89,7":2001,"90,7":2001,"90,6":2001,"90,5":2001,"90,4":2001,"90,3":2001,"90,2":2001,"90,1":2001,"90,0":2001,"91,0":2001,"91,1":2001,"91,2":2001,"91,3":2001,"91,4":2001,"91,5":2001,"91,6":2001,"91,7":2001,"92,7":2001,"92,6":2001,"92,5":2001,"92,4":2001,"92,3":2001,"92,2":2001,"92,1":2001,"92,0":2001,"93,0":2001,"93,1":2001,"93,2":2001,"93,3":2001,"93,4":2001,"93,5":2001,"93,6":2001,"93,7":2001,"99,7":2001,"99,6":2001,"99,5":2001,"99,4":2001,"99,3":2001,"99,2":2001,"99,1":2001,"99,0":2001,"98,0":2001,"98,1":2001,"98,2":2001,"98,3":2001,"98,4":2001,"98,5":2001,"98,6":2001,"98,7":2001,"96,7":2001,"96,6":2001,"96,5":2001,"96,4":2001,"96,3":2001,"96,2":2001,"96,1":2001,"96,0":2001,"95,0":2001,"95,1":2001,"95,2":2001,"95,3":2001,"95,4":2001,"95,5":2001,"95,6":2001,"95,7":2001,"94,7":2001,"94,6":2001,"94,5":2001,"94,4":2001,"94,3":2001,"94,2":2001,"94,1":2001,"94,0":2001,"97,0":2001,"97,1":2001,"97,2":2001,"97,3":2001,"97,4":2001,"97,5":2001,"97,6":2001,"97,7":2001,"80,7":2001,"80,6":2001,"80,5":2001,"80,4":2001,"80,3":2001,"79,6":2001,"79,7":2001,"58,7":2001,"36,8":2001,"36,9":2001,"35,8":2001,"37,8":2001,"46,8":2001,"45,8":2001,"47,8":2001,"48,8":2001,"49,8":2001,"49,9":2001,"50,9":2001,"50,10":2001,"50,11":2001,"51,10":2001,"51,9":2001,"52,9":2001,"52,10":2001,"52,11":2001,"53,11":2001,"53,10":2001,"53,9":2001,"54,9":2001,"54,10":2001,"54,11":2001,"55,11":2001,"55,10":2001,"56,10":2001,"56,11":2001,"56,8":2001,"57,8":2001,"59,8":2001,"59,9":2001,"59,10":2001,"60,10":2001,"60,9":2001,"60,8":2001,"61,8":2001,"61,9":2001,"61,10":2001,"62,10":2001,"62,9":2001,"62,8":2001,"63,8":2001,"63,9":2001,"63,10":2001,"64,10":2001,"64,9":2001,"64,8":2001,"65,8":2001,"65,9":2001,"65,10":2001,"66,10":2001,"66,9":2001,"66,8":2001,"71,8":2001,"70,8":2001,"69,8":2001,"58,9":2001,"58,8":2001,"57,9":2001,"41,8":2001,"0,8":2002,"0,9":2002,"0,10":2002,"0,11":2002,"0,12":2002,"0,13":2002,"0,14":2002,"0,15":2002,"0,16":2002,"0,17":2002,"0,18":2002,"0,19":2002,"0,20":2002,"0,21":2002,"0,22":2002,"0,23":2002,"0,24":2002,"0,25":2002,"0,26":2002,"0,27":2002,"0,28":2002,"0,29":2002,"0,30":2002,"0,31":2002,"0,32":2002,"0,33":2002,"0,34":2002,"2,34":2002,"2,33":2002,"2,32":2002,"2,31":2002,"2,30":2002,"2,29":2002,"2,28":2002,"2,27":2002,"2,26":2002,"2,25":2002,"2,24":2002,"2,23":2002,"2,22":2002,"2,21":2002,"2,20":2002,"2,19":2002,"2,18":2002,"2,17":2002,"2,16":2002,"2,15":2002,"1,15":2002,"1,14":2002,"1,13":2002,"1,12":2002,"1,11":2002,"1,10":2002,"1,9":2002,"1,8":2002,"2,8":2002,"2,9":2002,"2,10":2002,"2,11":2002,"2,12":2002,"2,13":2002,"3,13":2002,"3,12":2002,"3,11":2002,"3,10":2002,"3,9":2002,"3,8":2002,"4,8":2002,"4,9":2002,"4,10":2002,"4,11":2002,"4,12":2002,"4,13":2002,"5,13":2002,"5,12":2002,"5,11":2002,"5,10":2002,"5,9":2002,"5,8":2002,"6,8":2002,"6,9":2002,"6,10":2002,"6,11":2002,"6,12":2002,"7,11":2002,"7,10":2002,"7,9":2002,"7,8":2002,"8,8":2002,"8,9":2002,"8,10":2002,"8,11":2002,"9,11":2002,"9,10":2002,"9,9":2002,"9,8":2002,"10,8":2002,"10,9":2002,"10,10":2002,"11,10":2002,"11,9":2002,"11,8":2002,"12,8":2002,"12,9":2002,"12,10":2002,"13,10":2002,"13,9":2002,"13,8":2002,"16,8":2002,"16,9":2002,"16,10":2002,"16,11":2002,"16,12":2002,"16,13":2002,"15,13":2002,"15,12":2002,"15,11":2002,"15,10":2002,"15,9":2002,"15,8":2002,"14,8":2002,"14,9":2002,"14,10":2002,"14,11":2002,"14,12":2002,"14,13":2002,"13,11":2002,"17,12":2002,"17,11":2002,"17,10":2002,"17,9":2002,"17,8":2002,"18,8":2002,"18,9":2002,"18,10":2002,"18,11":2002,"18,12":2002,"19,12":2002,"19,11":2002,"19,10":2002,"19,9":2002,"19,8":2002,"7,34":2002,"7,33":2002,"7,32":2002,"7,31":2002,"7,30":2002,"7,29":2002,"7,28":2002,"7,27":2002,"7,26":2002,"7,25":2002,"7,24":2002,"6,24":2002,"6,23":2002,"5,23":2002,"5,22":2002,"5,21":2002,"5,20":2002,"5,19":2002,"5,18":2002,"5,17":2002,"4,17":2002,"4,16":2002,"3,16":2002,"3,17":2002,"3,18":2002,"3,19":2002,"3,20":2002,"3,21":2002,"3,22":2002,"3,23":2002,"3,24":2002,"3,25":2002,"3,26":2002,"3,27":2002,"3,28":2002,"3,29":2002,"3,30":2002,"3,31":2002,"3,32":2002,"3,33":2002,"3,34":2002,"4,34":2002,"4,33":2002,"4,32":2002,"4,31":2002,"4,30":2002,"4,29":2002,"4,28":2002,"4,27":2002,"4,26":2002,"4,25":2002,"4,24":2002,"4,23":2002,"4,22":2002,"4,21":2002,"4,20":2002,"4,19":2002,"4,18":2002,"5,24":2002,"5,25":2002,"5,26":2002,"5,27":2002,"5,28":2002,"5,29":2002,"5,30":2002,"5,31":2002,"5,32":2002,"5,33":2002,"5,34":2002,"6,34":2002,"6,33":2002,"6,32":2002,"6,31":2002,"6,30":2002,"6,29":2002,"6,28":2002,"6,27":2002,"6,26":2002,"6,25":2002,"6,17":2002,"6,18":2002,"6,19":2002,"6,20":2002,"6,21":2002,"7,20":2002,"7,19":2002,"7,18":2002,"7,17":2002,"7,16":2002,"8,16":2002,"8,19":2002,"8,20":2002,"8,21":2002,"8,22":2002,"9,21":2002,"9,20":2002,"9,19":2002,"10,19":2002,"10,18":2002,"10,20":2002,"10,21":2002,"11,21":2002,"11,20":2002,"12,20":2002,"12,21":2002,"12,22":2002,"12,23":2002,"12,24":2002,"12,25":2002,"12,26":2002,"12,27":2002,"12,28":2002,"12,29":2002,"12,30":2002,"12,31":2002,"12,32":2002,"12,33":2002,"12,34":2002,"11,34":2002,"11,33":2002,"11,32":2002,"11,31":2002,"11,30":2002,"11,29":2002,"11,28":2002,"11,27":2002,"11,26":2002,"11,25":2002,"11,24":2002,"11,23":2002,"11,22":2002,"10,23":2002,"10,24":2002,"10,25":2002,"10,26":2002,"10,27":2002,"10,28":2002,"10,29":2002,"10,30":2002,"10,31":2002,"10,32":2002,"10,33":2002,"10,34":2002,"9,34":2002,"9,33":2002,"9,32":2002,"9,31":2002,"9,30":2002,"9,29":2002,"9,28":2002,"9,27":2002,"9,26":2002,"9,25":2002,"9,24":2002,"8,24":2002,"8,25":2002,"8,26":2002,"8,27":2002,"8,28":2002,"8,29":2002,"8,30":2002,"8,31":2002,"8,32":2002,"8,33":2002,"8,34":2002,"13,34":2002,"13,33":2002,"13,32":2002,"13,31":2002,"13,30":2002,"13,29":2002,"14,29":2002,"14,28":2002,"14,27":2002,"14,26":2002,"14,25":2002,"14,24":2002,"14,23":2002,"13,23":2002,"13,22":2002,"13,24":2002,"13,25":2002,"13,26":2002,"13,27":2002,"15,24":2002,"15,27":2002,"15,28":2002,"15,29":2002,"15,30":2002,"15,31":2002,"15,32":2002,"15,33":2002,"15,34":2002,"16,34":2002,"16,33":2002,"16,32":2002,"16,31":2002,"16,30":2002,"16,29":2002,"16,28":2002,"16,27":2002,"17,29":2002,"17,30":2002,"17,31":2002,"18,30":2002,"18,29":2002,"17,33":2002,"17,34":2002,"18,34":2002,"18,33":2002,"18,32":2002,"14,34":2002,"14,33":2002,"14,32":2002,"14,31":2002,"14,30":2002,"1,16":2002,"1,17":2002,"1,18":2002,"1,22":2002,"1,23":2002,"1,24":2002,"1,25":2002,"1,26":2002,"1,27":2002,"1,28":2002,"1,29":2002,"1,30":2002,"1,31":2002,"1,32":2002,"1,33":2002,"0,35":2002,"0,36":2002,"0,37":2002,"0,38":2002,"0,39":2002,"0,40":2002,"0,41":2002,"0,42":2002,"0,43":2002,"0,44":2002,"0,45":2002,"0,46":2002,"0,47":2002,"0,48":2002,"0,49":2002,"0,50":2002,"0,51":2002,"0,52":2002,"0,53":2002,"0,54":2002,"0,55":2002,"0,56":2002,"0,57":2002,"1,57":2002,"1,56":2002,"1,55":2002,"1,54":2002,"1,53":2002,"1,52":2002,"1,51":2002,"1,50":2002,"1,49":2002,"2,49":2002,"2,48":2002,"2,47":2002,"2,46":2002,"2,45":2002,"2,44":2002,"2,43":2002,"2,42":2002,"2,41":2002,"2,40":2002,"2,39":2002,"2,38":2002,"2,37":2002,"2,36":2002,"2,35":2002,"13,47":2002,"12,47":2002,"12,48":2002,"12,49":2002,"12,50":2002,"11,50":2002,"11,49":2002,"11,48":2002,"11,47":2002,"10,47":2002,"10,46":2002,"10,45":2002,"9,45":2002,"9,44":2002,"8,44":2002,"8,45":2002,"8,46":2002,"8,47":2002,"8,48":2002,"8,49":2002,"8,50":2002,"8,51":2002,"8,52":2002,"7,52":2002,"7,51":2002,"7,50":2002,"7,49":2002,"7,48":2002,"7,47":2002,"7,46":2002,"7,45":2002,"7,44":2002,"7,43":2002,"7,42":2002,"7,41":2002,"7,40":2002,"7,39":2002,"7,38":2002,"7,37":2002,"7,36":2002,"7,35":2002,"3,35":2002,"3,36":2002,"3,37":2002,"3,38":2002,"3,39":2002,"3,40":2002,"3,41":2002,"3,42":2002,"3,43":2002,"3,44":2002,"3,45":2002,"3,46":2002,"3,47":2002,"3,48":2002,"3,49":2002,"3,50":2002,"3,51":2002,"3,52":2002,"3,53":2002,"3,54":2002,"2,54":2002,"2,53":2002,"2,52":2002,"2,51":2002,"2,50":2002,"2,55":2002,"4,54":2002,"4,53":2002,"4,52":2002,"4,51":2002,"4,50":2002,"4,49":2002,"4,48":2002,"4,47":2002,"4,46":2002,"4,45":2002,"4,44":2002,"4,43":2002,"4,42":2002,"4,41":2002,"4,40":2002,"4,39":2002,"4,38":2002,"4,37":2002,"4,36":2002,"4,35":2002,"5,35":2002,"5,36":2002,"5,37":2002,"5,38":2002,"5,39":2002,"5,40":2002,"5,41":2002,"5,42":2002,"5,43":2002,"5,44":2002,"5,45":2002,"5,46":2002,"5,47":2002,"5,48":2002,"5,49":2002,"5,50":2002,"5,51":2002,"5,52":2002,"5,53":2002,"5,54":2002,"6,54":2002,"6,53":2002,"6,52":2002,"6,51":2002,"6,50":2002,"6,49":2002,"6,48":2002,"6,47":2002,"6,46":2002,"6,45":2002,"6,44":2002,"6,43":2002,"6,42":2002,"6,41":2002,"6,40":2002,"6,39":2002,"6,38":2002,"6,37":2002,"6,36":2002,"6,35":2002,"7,53":2002,"7,54":2002,"7,55":2002,"6,55":2002,"8,55":2002,"8,54":2002,"9,54":2002,"9,53":2002,"9,52":2002,"10,52":2002,"10,53":2002,"10,54":2002,"10,55":2002,"9,55":2002,"11,54":2002,"11,53":2002,"12,35":2002,"12,36":2002,"12,37":2002,"12,38":2002,"12,39":2002,"12,40":2002,"12,41":2002,"11,41":2002,"11,40":2002,"11,39":2002,"11,38":2002,"11,37":2002,"11,36":2002,"11,35":2002,"10,35":2002,"10,36":2002,"10,37":2002,"10,38":2002,"10,39":2002,"10,40":2002,"10,41":2002,"9,41":2002,"9,40":2002,"9,39":2002,"9,38":2002,"9,37":2002,"9,36":2002,"9,35":2002,"8,35":2002,"8,36":2002,"8,37":2002,"8,38":2002,"8,39":2002,"8,40":2002,"8,41":2002,"8,42":2002,"13,41":2002,"13,40":2002,"13,39":2002,"13,38":2002,"13,37":2002,"13,36":2002,"13,35":2002,"15,35":2002,"15,36":2002,"15,37":2002,"15,38":2002,"15,39":2002,"15,40":2002,"16,37":2002,"16,36":2002,"16,35":2002,"14,39":2002,"14,38":2002,"14,37":2002,"14,36":2002,"14,35":2002,"9,50":2002,"9,49":2002,"9,48":2002,"9,47":2002,"9,46":2002,"10,48":2002,"10,49":2002,"10,50":2002,"1,37":2002,"1,38":2002,"1,39":2002,"1,40":2002,"1,41":2002,"1,42":2002,"1,43":2002,"1,44":2002,"1,45":2002,"31,8":2003,"32,8":2003,"33,8":2003,"33,9":2003,"34,9":2003,"34,8":2003,"20,8":2003,"21,8":2003,"20,10":2003,"20,12":2003,"39,34":2004,"39,33":2004,"39,32":2004,"39,31":2004,"39,30":2004,"39,29":2004,"39,28":2004,"39,27":2004,"39,26":2004,"39,25":2004,"39,24":2004,"39,23":2004,"38,26":2004,"38,27":2004,"38,28":2004,"38,29":2004,"38,30":2004,"38,31":2004,"38,32":2004,"38,33":2004,"38,34":2004,"37,34":2004,"37,33":2004,"37,32":2004,"37,31":2004,"37,30":2004,"37,29":2004,"37,28":2004,"37,27":2004,"37,26":2004,"36,26":2004,"36,27":2004,"36,28":2004,"35,28":2004,"35,27":2004,"35,29":2004,"35,30":2004,"34,30":2004,"34,29":2004,"34,28":2004,"33,28":2004,"33,29":2004,"33,30":2004,"32,28":2004,"36,30":2004,"36,31":2004,"36,32":2004,"36,33":2004,"36,34":2004,"35,34":2004,"35,33":2004,"35,32":2004,"34,32":2004,"34,33":2004,"34,34":2004,"33,34":2004,"33,33":2004,"33,32":2004,"44,31":2004,"43,31":2004,"43,30":2004,"43,29":2004,"43,28":2004,"43,27":2004,"42,27":2004,"42,28":2004,"42,29":2004,"42,30":2004,"42,31":2004,"42,32":2004,"41,32":2004,"41,31":2004,"41,30":2004,"41,29":2004,"41,28":2004,"41,27":2004,"41,26":2004,"41,25":2004,"41,24":2004,"40,24":2004,"40,25":2004,"40,26":2004,"40,27":2004,"40,28":2004,"40,29":2004,"40,30":2004,"40,31":2004,"40,32":2004,"40,33":2004,"40,34":2004,"34,42":2004,"34,43":2004,"33,44":2004,"33,43":2004,"32,43":2004,"32,44":2004,"32,45":2004,"27,51":2004,"27,50":2004,"26,50":2004,"26,51":2004,"25,52":2004,"25,51":2004,"25,50":2004,"24,50":2004,"24,51":2004,"24,52":2004,"24,53":2004,"23,53":2004,"23,52":2004,"23,51":2004,"23,50":2004,"23,49":2004,"22,49":2004,"22,50":2004,"22,51":2004,"22,52":2004,"22,53":2004,"22,54":2004,"21,55":2004,"21,54":2004,"21,53":2004,"21,52":2004,"21,51":2004,"21,50":2004,"20,50":2004,"20,51":2004,"20,52":2004,"20,53":2004,"20,54":2004,"20,55":2004,"19,56":2004,"19,55":2004,"19,54":2004,"19,53":2004,"19,52":2004,"19,51":2004,"19,50":2004,"18,50":2004,"18,51":2004,"18,52":2004,"18,53":2004,"18,54":2004,"18,55":2004,"18,56":2004,"18,57":2004,"17,57":2004,"17,56":2004,"17,55":2004,"17,54":2004,"17,53":2004,"17,52":2004,"17,51":2004,"16,52":2004,"16,53":2004,"16,54":2004,"16,55":2004,"16,56":2004,"15,56":2004,"15,55":2004,"15,54":2004,"15,53":2004,"15,52":2004,"15,51":2004,"14,51":2004,"14,50":2004,"14,49":2004,"13,49":2004,"13,48":2004,"11,55":2004,"12,53":2004,"12,52":2004,"13,52":2004,"13,51":2004,"13,50":2004,"13,53":2004,"13,54":2004,"12,54":2004,"14,54":2004,"14,53":2004,"14,52":2004,"14,55":2004,"14,56":2004,"16,40":2004,"16,39":2004,"16,38":2004,"17,35":2004,"17,36":2004,"17,37":2004,"18,36":2004,"16,41":2004,"31,45":2004,"34,35":2004,"33,35":2004,"32,35":2004,"32,36":2004,"41,34":2004,"43,32":2004,"42,24":2004,"42,25":2004,"44,27":2004,"44,28":2004,"44,29":2004,"45,29":2004,"45,28":2004,"45,27":2004,"45,26":2004,"45,25":2004,"46,25":2004,"46,24":2004,"46,27":2004,"46,28":2004,"47,27":2004,"64,54":2005,"64,53":2005,"64,52":2005,"64,51":2005,"64,50":2005,"64,49":2005,"64,48":2005,"64,47":2005,"63,47":2005,"63,46":2005,"63,45":2005,"63,44":2005,"63,43":2005,"63,42":2005,"63,41":2005,"63,40":2005,"63,39":2005,"63,38":2005,"63,37":2005,"63,36":2005,"64,36":2005,"64,37":2005,"62,37":2005,"62,38":2005,"62,39":2005,"62,40":2005,"62,41":2005,"62,42":2005,"62,43":2005,"62,44":2005,"62,45":2005,"62,46":2005,"62,47":2005,"62,48":2005,"62,49":2005,"62,50":2005,"62,51":2005,"62,52":2005,"62,53":2005,"62,54":2005,"61,54":2005,"61,53":2005,"61,52":2005,"61,51":2005,"61,50":2005,"61,49":2005,"61,48":2005,"61,47":2005,"61,46":2005,"61,45":2005,"61,44":2005,"61,43":2005,"61,42":2005,"61,41":2005,"61,40":2005,"61,39":2005,"61,38":2005,"61,37":2005,"60,37":2005,"60,38":2005,"60,39":2005,"60,40":2005,"60,41":2005,"60,42":2005,"60,43":2005,"60,44":2005,"60,45":2005,"60,46":2005,"60,47":2005,"60,48":2005,"60,49":2005,"60,50":2005,"60,51":2005,"60,52":2005,"60,53":2005,"60,54":2005,"58,54":2005,"58,53":2005,"58,52":2005,"58,51":2005,"58,50":2005,"58,49":2005,"58,48":2005,"58,47":2005,"58,46":2005,"58,45":2005,"58,44":2005,"58,43":2005,"58,42":2005,"59,42":2005,"59,41":2005,"59,40":2005,"59,39":2005,"59,38":2005,"59,37":2005,"58,37":2005,"58,38":2005,"58,39":2005,"58,40":2005,"57,39":2005,"57,38":2005,"57,37":2005,"59,43":2005,"59,44":2005,"59,45":2005,"59,46":2005,"59,47":2005,"59,48":2005,"59,49":2005,"59,50":2005,"59,51":2005,"59,52":2005,"59,53":2005,"57,43":2005,"57,44":2005,"57,45":2005,"57,46":2005,"57,47":2005,"57,48":2005,"57,49":2005,"57,50":2005,"57,51":2005,"57,52":2005,"57,53":2005,"57,54":2005,"56,54":2005,"56,53":2005,"56,52":2005,"56,51":2005,"56,50":2005,"56,49":2005,"56,48":2005,"56,47":2005,"56,46":2005,"56,45":2005,"56,44":2005,"56,43":2005,"55,43":2005,"55,42":2005,"55,41":2005,"54,41":2005,"54,40":2005,"54,39":2005,"53,39":2005,"53,38":2005,"52,38":2005,"52,37":2005,"51,37":2005,"51,38":2005,"51,39":2005,"51,40":2005,"51,41":2005,"51,42":2005,"51,43":2005,"51,44":2005,"51,45":2005,"51,46":2005,"51,47":2005,"51,48":2005,"51,49":2005,"51,50":2005,"51,51":2005,"51,52":2005,"51,53":2005,"51,54":2005,"50,54":2005,"50,53":2005,"50,52":2005,"50,51":2005,"50,50":2005,"50,49":2005,"50,48":2005,"50,47":2005,"50,46":2005,"50,45":2005,"50,44":2005,"50,43":2005,"50,42":2005,"50,41":2005,"50,40":2005,"50,39":2005,"50,38":2005,"49,38":2005,"49,37":2005,"49,36":2005,"48,37":2005,"48,38":2005,"48,39":2005,"48,40":2005,"48,41":2005,"48,42":2005,"48,43":2005,"48,44":2005,"48,45":2005,"48,46":2005,"48,47":2005,"48,48":2005,"48,49":2005,"48,50":2005,"48,51":2005,"48,52":2005,"48,53":2005,"48,54":2005,"47,54":2005,"47,53":2005,"47,52":2005,"47,51":2005,"47,50":2005,"47,49":2005,"47,48":2005,"47,47":2005,"47,46":2005,"47,45":2005,"47,44":2005,"47,43":2005,"47,42":2005,"47,41":2005,"47,40":2005,"47,39":2005,"47,38":2005,"47,37":2005,"46,37":2005,"46,38":2005,"46,39":2005,"46,40":2005,"46,41":2005,"46,42":2005,"46,43":2005,"46,44":2005,"46,45":2005,"46,46":2005,"46,47":2005,"46,48":2005,"46,49":2005,"46,50":2005,"46,51":2005,"46,52":2005,"46,53":2005,"46,54":2005,"45,54":2005,"45,53":2005,"45,52":2005,"45,51":2005,"45,50":2005,"45,49":2005,"45,48":2005,"45,47":2005,"45,46":2005,"44,46":2005,"44,45":2005,"44,44":2005,"44,43":2005,"44,42":2005,"44,41":2005,"44,40":2005,"44,39":2005,"44,38":2005,"44,37":2005,"44,36":2005,"44,35":2005,"40,35":2005,"39,35":2005,"38,35":2005,"38,36":2005,"38,37":2005,"38,38":2005,"38,39":2005,"38,40":2005,"38,41":2005,"38,42":2005,"38,43":2005,"38,44":2005,"38,45":2005,"38,46":2005,"38,47":2005,"38,48":2005,"38,49":2005,"38,50":2005,"38,51":2005,"38,52":2005,"38,53":2005,"38,54":2005,"37,54":2005,"37,53":2005,"37,52":2005,"37,51":2005,"37,50":2005,"37,49":2005,"37,48":2005,"37,47":2005,"37,46":2005,"37,45":2005,"37,44":2005,"37,43":2005,"37,42":2005,"37,41":2005,"37,40":2005,"37,39":2005,"36,40":2005,"36,41":2005,"36,42":2005,"36,43":2005,"36,44":2005,"36,45":2005,"36,46":2005,"36,47":2005,"36,48":2005,"36,49":2005,"36,50":2005,"36,51":2005,"36,52":2005,"36,53":2005,"36,54":2005,"35,54":2005,"35,53":2005,"35,52":2005,"35,51":2005,"35,50":2005,"35,49":2005,"35,48":2005,"35,47":2005,"35,46":2005,"35,45":2005,"35,44":2005,"35,43":2005,"35,42":2005,"35,41":2005,"39,54":2005,"39,53":2005,"39,52":2005,"39,51":2005,"39,50":2005,"39,49":2005,"39,48":2005,"39,47":2005,"39,46":2005,"39,45":2005,"39,44":2005,"39,43":2005,"39,42":2005,"39,41":2005,"39,40":2005,"39,39":2005,"39,38":2005,"39,37":2005,"39,36":2005,"40,38":2005,"40,39":2005,"40,40":2005,"40,41":2005,"40,42":2005,"40,43":2005,"40,44":2005,"40,45":2005,"40,46":2005,"41,46":2005,"41,45":2005,"41,44":2005,"41,43":2005,"41,42":2005,"41,41":2005,"41,40":2005,"41,39":2005,"42,40":2005,"42,41":2005,"42,42":2005,"42,43":2005,"42,44":2005,"42,45":2005,"42,46":2005,"42,47":2005,"42,48":2005,"42,49":2005,"42,50":2005,"42,51":2005,"42,52":2005,"42,53":2005,"42,54":2005,"41,54":2005,"41,53":2005,"41,52":2005,"41,51":2005,"41,50":2005,"41,49":2005,"41,48":2005,"41,47":2005,"40,48":2005,"40,49":2005,"40,50":2005,"40,51":2005,"40,52":2005,"40,53":2005,"40,54":2005,"43,54":2005,"43,53":2005,"43,52":2005,"43,51":2005,"43,50":2005,"43,49":2005,"43,48":2005,"43,47":2005,"43,46":2005,"43,45":2005,"43,44":2005,"43,43":2005,"43,42":2005,"43,41":2005,"43,40":2005,"43,39":2005,"43,38":2005,"43,37":2005,"44,47":2005,"44,48":2005,"44,49":2005,"44,50":2005,"44,51":2005,"37,37":2005,"37,36":2005,"37,35":2005,"35,35":2005,"36,37":2005,"41,35":2005,"42,35":2005,"43,35":2005,"45,35":2005,"45,36":2005,"45,37":2005,"45,38":2005,"45,39":2005,"45,40":2005,"45,41":2005,"45,42":2005,"46,35":2005,"49,54":2005,"49,53":2005,"49,52":2005,"49,51":2005,"49,50":2005,"49,49":2005,"49,48":2005,"49,47":2005,"49,46":2005,"49,45":2005,"49,44":2005,"49,43":2005,"49,42":2005,"49,41":2005,"49,40":2005,"49,39":2005,"52,54":2005,"52,53":2005,"52,52":2005,"52,51":2005,"52,50":2005,"52,49":2005,"52,48":2005,"52,47":2005,"52,46":2005,"52,45":2005,"52,44":2005,"52,43":2005,"52,42":2005,"52,41":2005,"52,40":2005,"52,39":2005,"53,40":2005,"53,41":2005,"53,42":2005,"53,43":2005,"53,44":2005,"53,45":2005,"53,46":2005,"53,47":2005,"53,48":2005,"53,49":2005,"53,50":2005,"53,51":2005,"53,52":2005,"53,53":2005,"53,54":2005,"54,54":2005,"54,53":2005,"54,52":2005,"54,51":2005,"54,50":2005,"54,49":2005,"54,48":2005,"54,47":2005,"54,46":2005,"54,45":2005,"54,44":2005,"54,43":2005,"54,42":2005,"55,44":2005,"55,45":2005,"55,46":2005,"55,47":2005,"55,48":2005,"55,49":2005,"55,50":2005,"55,51":2005,"55,52":2005,"55,53":2005,"55,54":2005,"56,41":2005,"63,54":2005,"63,53":2005,"63,52":2005,"63,51":2005,"63,50":2005,"63,49":2005,"63,48":2005,"64,39":2005,"64,40":2005,"64,41":2005,"64,42":2005,"64,43":2005,"65,36":2005,"44,34":2005,"44,33":2005,"44,32":2005,"34,44":2005,"34,45":2005,"34,46":2005,"34,47":2005,"34,48":2005,"34,49":2005,"34,50":2005,"34,51":2005,"33,51":2005,"33,50":2005,"33,49":2005,"33,48":2005,"33,47":2005,"33,46":2005,"33,45":2005,"32,46":2005,"32,47":2005,"32,48":2005,"32,49":2005,"32,50":2005,"32,51":2005,"31,51":2005,"31,50":2005,"31,49":2005,"30,51":2005,"29,51":2005,"28,51":2005,"43,34":2005,"43,33":2005,"45,31":2005,"45,32":2005,"45,33":2005,"45,34":2005,"46,34":2005,"46,33":2005,"46,32":2005,"46,31":2005,"46,30":2005,"47,30":2005,"48,30":2005,"48,29":2005,"47,32":2005,"47,33":2005,"47,34":2005,"48,34":2005,"48,33":2005,"48,32":2005,"49,32":2005,"49,31":2005,"50,31":2005,"50,32":2005,"50,33":2005,"49,33":2005,"49,34":2005,"51,33":2005,"51,32":2005,"52,32":2005,"71,55":2006,"71,56":2006,"71,57":2006,"70,57":2006,"70,56":2006,"70,55":2006,"67,55":2006,"67,56":2006,"67,57":2006,"67,58":2006,"67,59":2006,"67,60":2006,"66,60":2006,"66,59":2006,"66,58":2006,"66,57":2006,"66,56":2006,"66,55":2006,"65,55":2006,"65,56":2006,"65,57":2006,"65,58":2006,"65,59":2006,"65,60":2006,"64,60":2006,"64,59":2006,"64,58":2006,"64,57":2006,"64,56":2006,"64,55":2006,"62,55":2006,"62,56":2006,"62,57":2006,"62,58":2006,"62,59":2006,"62,60":2006,"61,60":2006,"61,59":2006,"61,58":2006,"61,57":2006,"61,56":2006,"61,55":2006,"60,55":2006,"60,56":2006,"60,57":2006,"60,58":2006,"60,59":2006,"60,60":2006,"59,60":2006,"59,59":2006,"59,58":2006,"59,57":2006,"58,57":2006,"58,56":2006,"58,55":2006,"57,55":2006,"57,56":2006,"57,57":2006,"57,58":2006,"57,59":2006,"57,60":2006,"56,60":2006,"56,59":2006,"56,58":2006,"56,57":2006,"56,56":2006,"56,55":2006,"51,55":2006,"51,56":2006,"51,57":2006,"51,58":2006,"51,59":2006,"51,60":2006,"50,60":2006,"50,59":2006,"50,58":2006,"50,57":2006,"50,56":2006,"50,55":2006,"48,55":2006,"48,56":2006,"48,57":2006,"48,58":2006,"48,59":2006,"48,60":2006,"47,60":2006,"47,59":2006,"47,58":2006,"47,57":2006,"47,56":2006,"47,55":2006,"46,55":2006,"46,56":2006,"46,57":2006,"46,58":2006,"46,59":2006,"46,60":2006,"45,60":2006,"45,59":2006,"45,58":2006,"45,57":2006,"45,56":2006,"45,55":2006,"38,55":2006,"38,56":2006,"38,57":2006,"38,58":2006,"37,58":2006,"37,57":2006,"37,56":2006,"37,55":2006,"36,55":2006,"36,56":2006,"36,57":2006,"36,58":2006,"35,58":2006,"35,57":2006,"35,56":2006,"35,55":2006,"34,55":2006,"34,56":2006,"34,57":2006,"33,57":2006,"33,56":2006,"33,55":2006,"32,55":2006,"32,56":2006,"32,57":2006,"31,57":2006,"31,56":2006,"31,55":2006,"30,55":2006,"30,56":2006,"29,56":2006,"29,55":2006,"28,55":2006,"28,56":2006,"27,56":2006,"27,55":2006,"26,55":2006,"26,56":2006,"25,56":2006,"25,55":2006,"25,57":2006,"39,58":2006,"39,57":2006,"39,56":2006,"39,55":2006,"42,55":2006,"42,56":2006,"42,57":2006,"42,58":2006,"41,58":2006,"41,57":2006,"41,56":2006,"41,55":2006,"40,55":2006,"40,56":2006,"40,57":2006,"40,58":2006,"40,59":2006,"41,59":2006,"43,58":2006,"43,57":2006,"43,56":2006,"43,55":2006,"44,55":2006,"44,56":2006,"44,57":2006,"44,58":2006,"44,59":2006,"43,59":2006,"49,60":2006,"49,59":2006,"49,58":2006,"49,57":2006,"49,56":2006,"49,55":2006,"52,60":2006,"52,59":2006,"52,58":2006,"52,57":2006,"52,56":2006,"52,55":2006,"53,55":2006,"53,56":2006,"53,57":2006,"53,58":2006,"53,59":2006,"53,60":2006,"54,60":2006,"54,59":2006,"54,58":2006,"54,57":2006,"54,56":2006,"54,55":2006,"55,55":2006,"55,56":2006,"55,57":2006,"55,58":2006,"55,59":2006,"55,60":2006,"58,60":2006,"58,59":2006,"58,58":2006,"63,60":2006,"63,59":2006,"63,58":2006,"63,57":2006,"63,56":2006,"63,55":2006,"68,59":2006,"68,58":2006,"68,57":2006,"68,56":2006,"68,55":2006,"69,55":2006,"69,56":2006,"69,57":2006,"69,58":2006,"70,58":2006,"72,57":2006,"72,56":2006,"72,55":2006,"73,55":2006,"73,56":2006,"74,56":2006,"74,55":2006,"34,52":2006,"34,53":2006,"34,54":2006,"33,54":2006,"33,53":2006,"33,52":2006,"32,52":2006,"32,53":2006,"32,54":2006,"31,54":2006,"31,53":2006,"31,52":2006,"30,52":2006,"30,53":2006,"30,54":2006,"29,54":2006,"29,53":2006,"29,52":2006,"28,52":2006,"28,53":2006,"28,54":2006,"27,54":2006,"27,53":2006,"27,52":2006,"26,52":2006,"26,53":2006,"26,54":2006,"25,54":2006,"25,53":2006,"24,54":2006,"24,55":2006,"24,56":2006,"23,56":2006,"23,55":2006,"23,54":2006,"22,55":2006,"22,56":2006,"21,56":2006,"20,56":2006,"20,57":2006,"20,58":2006,"19,57":2006,"18,58":2006,"17,58":2006,"21,57":2006,"75,19":2007,"75,18":2007,"75,17":2007,"75,16":2007,"75,15":2007,"75,14":2007,"76,14":2007,"76,13":2007,"76,12":2007,"76,11":2007,"76,10":2007,"76,9":2007,"76,8":2007,"75,8":2007,"75,9":2007,"75,10":2007,"75,11":2007,"75,12":2007,"77,8":2007,"77,9":2007,"77,10":2007,"77,11":2007,"78,11":2007,"78,10":2007,"78,9":2007,"78,8":2007,"81,8":2007,"81,9":2007,"81,10":2007,"82,10":2007,"82,9":2007,"82,8":2007,"83,8":2007,"83,9":2007,"83,10":2007,"84,10":2007,"84,9":2007,"84,8":2007,"85,8":2007,"85,9":2007,"85,10":2007,"86,10":2007,"86,9":2007,"86,8":2007,"87,8":2007,"87,9":2007,"87,10":2007,"87,11":2007,"88,10":2007,"88,9":2007,"88,8":2007,"89,8":2007,"89,9":2007,"90,9":2007,"90,8":2007,"91,8":2007,"91,9":2007,"92,9":2007,"92,8":2007,"93,8":2007,"93,9":2007,"93,10":2007,"93,11":2007,"93,12":2007,"93,13":2007,"93,14":2007,"93,15":2007,"93,16":2007,"93,17":2007,"93,18":2007,"93,19":2007,"93,20":2007,"93,21":2007,"93,22":2007,"93,23":2007,"93,24":2007,"93,25":2007,"93,26":2007,"93,27":2007,"93,28":2007,"93,29":2007,"93,30":2007,"93,31":2007,"93,32":2007,"93,33":2007,"93,34":2007,"93,35":2007,"93,36":2007,"93,37":2007,"93,38":2007,"93,39":2007,"92,39":2007,"92,38":2007,"92,37":2007,"92,36":2007,"92,35":2007,"92,34":2007,"92,33":2007,"92,32":2007,"92,31":2007,"92,30":2007,"92,29":2007,"91,29":2007,"91,28":2007,"91,27":2007,"91,26":2007,"91,25":2007,"91,24":2007,"91,23":2007,"91,22":2007,"91,21":2007,"91,20":2007,"91,19":2007,"91,18":2007,"90,18":2007,"90,17":2007,"89,17":2007,"89,16":2007,"88,16":2007,"89,18":2007,"89,19":2007,"89,20":2007,"89,21":2007,"89,22":2007,"89,23":2007,"89,24":2007,"89,25":2007,"89,26":2007,"89,27":2007,"89,28":2007,"89,29":2007,"89,30":2007,"89,31":2007,"89,32":2007,"89,33":2007,"88,33":2007,"88,32":2007,"88,31":2007,"88,30":2007,"88,29":2007,"88,28":2007,"88,27":2007,"88,26":2007,"88,25":2007,"88,24":2007,"88,23":2007,"88,22":2007,"88,21":2007,"88,20":2007,"88,19":2007,"87,19":2007,"87,18":2007,"87,17":2007,"87,20":2007,"87,21":2007,"87,22":2007,"87,23":2007,"87,24":2007,"87,25":2007,"87,26":2007,"87,27":2007,"87,28":2007,"87,29":2007,"87,30":2007,"87,31":2007,"87,32":2007,"87,33":2007,"87,34":2007,"87,35":2007,"86,35":2007,"86,34":2007,"86,33":2007,"86,32":2007,"86,31":2007,"86,30":2007,"86,29":2007,"86,28":2007,"86,27":2007,"86,26":2007,"86,25":2007,"86,24":2007,"86,23":2007,"85,25":2007,"85,26":2007,"85,27":2007,"85,28":2007,"85,29":2007,"85,30":2007,"85,31":2007,"84,30":2007,"84,29":2007,"84,28":2007,"84,27":2007,"84,26":2007,"83,26":2007,"83,27":2007,"83,28":2007,"83,29":2007,"83,30":2007,"83,31":2007,"83,32":2007,"83,33":2007,"83,34":2007,"82,34":2007,"82,33":2007,"82,32":2007,"82,31":2007,"82,30":2007,"82,29":2007,"82,28":2007,"82,27":2007,"82,26":2007,"81,26":2007,"81,25":2007,"80,25":2007,"80,24":2007,"80,26":2007,"80,27":2007,"80,28":2007,"80,29":2007,"80,30":2007,"80,31":2007,"80,32":2007,"80,33":2007,"80,34":2007,"80,35":2007,"80,36":2007,"79,36":2007,"79,35":2007,"79,34":2007,"79,33":2007,"79,32":2007,"79,31":2007,"78,31":2007,"78,32":2007,"78,33":2007,"78,34":2007,"78,35":2007,"78,36":2007,"77,36":2007,"77,35":2007,"77,34":2007,"77,33":2007,"77,32":2007,"77,31":2007,"77,30":2007,"77,29":2007,"78,29":2007,"79,29":2007,"76,32":2007,"76,33":2007,"76,34":2007,"76,35":2007,"76,36":2007,"75,36":2007,"75,35":2007,"75,34":2007,"75,33":2007,"75,32":2007,"98,39":2007,"98,38":2007,"98,37":2007,"98,36":2007,"98,35":2007,"99,35":2007,"99,34":2007,"99,33":2007,"99,32":2007,"99,31":2007,"99,30":2007,"99,29":2007,"99,28":2007,"99,27":2007,"99,26":2007,"99,25":2007,"99,24":2007,"99,23":2007,"99,22":2007,"99,21":2007,"99,20":2007,"99,19":2007,"99,18":2007,"99,17":2007,"99,16":2007,"99,15":2007,"99,14":2007,"99,13":2007,"99,12":2007,"99,11":2007,"99,10":2007,"99,9":2007,"99,8":2007,"98,8":2007,"98,9":2007,"98,10":2007,"98,11":2007,"98,12":2007,"98,13":2007,"98,14":2007,"98,15":2007,"98,16":2007,"98,17":2007,"98,18":2007,"98,19":2007,"98,20":2007,"98,21":2007,"98,22":2007,"98,23":2007,"98,24":2007,"98,25":2007,"98,26":2007,"98,27":2007,"98,28":2007,"98,29":2007,"98,30":2007,"98,31":2007,"98,32":2007,"98,33":2007,"97,33":2007,"97,32":2007,"96,32":2007,"96,31":2007,"96,30":2007,"96,29":2007,"96,28":2007,"96,27":2007,"96,26":2007,"96,25":2007,"96,24":2007,"96,23":2007,"96,22":2007,"96,21":2007,"96,20":2007,"96,19":2007,"96,18":2007,"96,17":2007,"96,16":2007,"96,15":2007,"96,14":2007,"96,13":2007,"96,12":2007,"96,11":2007,"96,10":2007,"96,9":2007,"96,8":2007,"95,8":2007,"95,9":2007,"95,10":2007,"95,11":2007,"95,12":2007,"95,13":2007,"95,14":2007,"95,15":2007,"95,16":2007,"95,17":2007,"95,18":2007,"95,19":2007,"95,20":2007,"95,21":2007,"95,22":2007,"94,22":2007,"94,21":2007,"94,20":2007,"94,19":2007,"94,18":2007,"94,17":2007,"94,16":2007,"94,15":2007,"94,14":2007,"94,13":2007,"94,12":2007,"94,11":2007,"94,10":2007,"94,9":2007,"94,8":2007,"94,23":2007,"94,24":2007,"94,25":2007,"94,26":2007,"94,27":2007,"94,28":2007,"94,29":2007,"94,30":2007,"94,31":2007,"94,32":2007,"94,33":2007,"94,34":2007,"94,35":2007,"94,36":2007,"94,37":2007,"94,38":2007,"94,39":2007,"91,39":2007,"91,38":2007,"91,37":2007,"91,36":2007,"91,35":2007,"91,34":2007,"91,33":2007,"91,32":2007,"91,31":2007,"91,30":2007,"90,30":2007,"90,29":2007,"90,28":2007,"90,27":2007,"90,26":2007,"90,25":2007,"90,24":2007,"90,23":2007,"90,22":2007,"90,21":2007,"90,20":2007,"90,19":2007,"90,31":2007,"90,32":2007,"90,33":2007,"90,34":2007,"90,35":2007,"90,36":2007,"90,37":2007,"90,38":2007,"90,39":2007,"89,39":2007,"95,39":2007,"95,38":2007,"95,37":2007,"95,36":2007,"95,35":2007,"95,34":2007,"95,33":2007,"95,32":2007,"95,31":2007,"95,30":2007,"95,29":2007,"95,28":2007,"95,27":2007,"95,26":2007,"95,25":2007,"95,24":2007,"96,33":2007,"96,34":2007,"96,35":2007,"96,36":2007,"96,37":2007,"96,38":2007,"96,39":2007,"97,39":2007,"97,38":2007,"97,37":2007,"97,36":2007,"97,34":2007,"97,8":2007,"97,9":2007,"97,10":2007,"97,11":2007,"97,12":2007,"97,13":2007,"97,14":2007,"97,15":2007,"97,16":2007,"97,17":2007,"97,18":2007,"97,19":2007,"97,20":2007,"97,21":2007,"97,22":2007,"97,23":2007,"97,24":2007,"97,25":2007,"97,26":2007,"97,27":2007,"97,28":2007,"99,36":2007,"99,37":2007,"99,38":2007,"99,39":2007,"81,34":2007,"81,33":2007,"81,32":2007,"81,31":2007,"81,30":2007,"81,29":2007,"81,28":2007,"85,33":2007,"85,34":2007,"88,34":2007,"86,20":2007,"86,19":2007,"92,18":2007,"92,17":2007,"92,16":2007,"92,15":2007,"92,14":2007,"92,13":2007,"92,12":2007,"92,11":2007,"91,11":2007,"91,12":2007,"92,19":2007,"92,20":2007,"92,21":2007,"92,22":2007,"92,23":2007,"92,24":2007,"92,25":2007,"92,26":2007,"92,27":2007,"80,9":2007,"80,8":2007,"79,8":2007,"79,9":2007,"79,10":2007,"76,15":2007,"76,16":2007,"76,17":2007,"77,15":2007,"77,14":2007,"78,15":2007,"75,20":2007,"72,8":2007,"74,8":2007,"74,9":2007,"74,10":2007,"74,11":2007,"74,12":2007,"74,13":2007,"74,14":2007,"74,15":2007,"74,16":2007,"74,17":2007,"74,18":2007,"74,19":2007,"74,33":2007,"74,34":2007,"74,35":2007,"73,34":2007,"72,34":2007,"72,33":2007,"71,33":2007,"71,34":2007,"70,34":2007,"73,15":2007,"73,14":2007,"73,13":2007,"73,12":2007,"73,11":2007,"73,10":2007,"73,9":2007,"73,8":2007,"72,10":2007,"72,11":2007,"72,14":2007,"93,40":2008,"93,41":2008,"92,41":2008,"92,40":2008,"71,40":2008,"71,41":2008,"71,42":2008,"71,43":2008,"71,44":2008,"71,45":2008,"71,46":2008,"71,47":2008,"71,48":2008,"71,49":2008,"71,50":2008,"71,51":2008,"71,52":2008,"71,53":2008,"71,54":2008,"70,54":2008,"70,53":2008,"70,52":2008,"70,51":2008,"70,50":2008,"70,49":2008,"70,48":2008,"70,47":2008,"70,46":2008,"70,45":2008,"70,44":2008,"70,43":2008,"70,42":2008,"70,41":2008,"70,40":2008,"69,40":2008,"69,41":2008,"69,42":2008,"68,42":2008,"67,42":2008,"67,43":2008,"67,44":2008,"67,45":2008,"67,46":2008,"67,47":2008,"67,48":2008,"67,49":2008,"67,50":2008,"67,51":2008,"67,52":2008,"67,53":2008,"67,54":2008,"66,54":2008,"66,53":2008,"66,52":2008,"66,51":2008,"66,50":2008,"66,49":2008,"66,48":2008,"66,47":2008,"66,46":2008,"66,45":2008,"66,44":2008,"66,43":2008,"65,43":2008,"65,44":2008,"65,45":2008,"65,46":2008,"65,47":2008,"65,48":2008,"65,49":2008,"65,50":2008,"65,51":2008,"65,52":2008,"65,53":2008,"65,54":2008,"65,40":2008,"66,40":2008,"67,40":2008,"68,54":2008,"68,53":2008,"68,52":2008,"68,51":2008,"68,50":2008,"68,49":2008,"68,48":2008,"68,47":2008,"68,46":2008,"68,45":2008,"68,44":2008,"69,44":2008,"69,45":2008,"69,46":2008,"69,47":2008,"69,48":2008,"69,49":2008,"69,50":2008,"69,51":2008,"69,52":2008,"69,53":2008,"69,54":2008,"72,54":2008,"72,53":2008,"72,52":2008,"72,51":2008,"72,50":2008,"72,49":2008,"72,48":2008,"72,47":2008,"72,46":2008,"72,45":2008,"72,44":2008,"72,43":2008,"72,42":2008,"72,41":2008,"72,40":2008,"73,40":2008,"73,41":2008,"73,42":2008,"73,43":2008,"73,44":2008,"73,45":2008,"73,46":2008,"73,47":2008,"73,48":2008,"73,49":2008,"73,50":2008,"73,51":2008,"73,52":2008,"73,53":2008,"73,54":2008,"74,54":2008,"74,53":2008,"74,52":2008,"74,51":2008,"74,50":2008,"74,49":2008,"74,48":2008,"74,47":2008,"74,46":2008,"74,45":2008,"74,44":2008,"74,43":2008,"74,42":2008,"74,41":2008,"75,41":2008,"75,42":2008,"75,43":2008,"75,44":2008,"75,45":2008,"75,46":2008,"75,47":2008,"75,48":2008,"75,49":2008,"75,50":2008,"75,51":2008,"75,52":2008,"75,53":2008,"75,54":2008,"75,55":2008,"75,56":2008,"76,55":2008,"76,54":2008,"76,53":2008,"76,52":2008,"76,51":2008,"76,50":2008,"76,49":2008,"76,48":2008,"76,47":2008,"76,46":2008,"76,45":2008,"76,44":2008,"76,43":2008,"76,42":2008,"77,42":2008,"77,43":2008,"77,44":2008,"77,45":2008,"77,46":2008,"77,47":2008,"77,48":2008,"77,49":2008,"77,50":2008,"77,51":2008,"77,52":2008,"77,53":2008,"77,54":2008,"77,55":2008,"78,55":2008,"78,54":2008,"78,53":2008,"78,52":2008,"78,51":2008,"78,50":2008,"78,49":2008,"78,48":2008,"78,47":2008,"79,47":2008,"79,48":2008,"79,49":2008,"79,50":2008,"79,51":2008,"79,52":2008,"79,53":2008,"79,54":2008,"79,55":2008,"79,56":2008,"78,56":2008,"80,55":2008,"80,54":2008,"80,53":2008,"80,52":2008,"80,51":2008,"80,50":2008,"80,49":2008,"80,48":2008,"80,47":2008,"81,47":2008,"81,46":2008,"81,48":2008,"81,49":2008,"81,50":2008,"81,51":2008,"81,52":2008,"81,53":2008,"81,54":2008,"82,54":2008,"82,53":2008,"82,52":2008,"82,51":2008,"82,50":2008,"82,49":2008,"82,48":2008,"82,47":2008,"83,47":2008,"83,48":2008,"83,49":2008,"83,50":2008,"83,51":2008,"83,52":2008,"83,53":2008,"83,54":2008,"84,54":2008,"84,53":2008,"84,52":2008,"84,51":2008,"84,50":2008,"84,49":2008,"85,50":2008,"85,51":2008,"85,52":2008,"85,53":2008,"85,54":2008,"85,55":2008,"84,55":2008,"86,55":2008,"86,54":2008,"86,53":2008,"86,52":2008,"87,52":2008,"87,51":2008,"87,53":2008,"88,53":2008,"88,52":2008,"89,52":2008,"90,52":2008,"90,51":2008,"90,50":2008,"91,51":2008,"91,52":2008,"92,52":2008,"92,51":2008,"92,53":2008,"92,54":2008,"92,55":2008,"92,56":2008,"93,56":2008,"93,55":2008,"93,54":2008,"93,53":2008,"93,52":2008,"94,52":2008,"94,53":2008,"94,54":2008,"94,55":2008,"94,56":2008,"94,57":2008,"93,57":2008,"95,57":2008,"95,56":2008,"95,55":2008,"95,54":2008,"95,53":2008,"96,53":2008,"96,54":2008,"96,55":2008,"96,56":2008,"96,57":2008,"96,58":2008,"97,58":2008,"97,57":2008,"97,56":2008,"97,55":2008,"97,54":2008,"98,54":2008,"98,53":2008,"98,52":2008,"98,51":2008,"98,50":2008,"98,49":2008,"98,48":2008,"98,47":2008,"98,46":2008,"98,45":2008,"98,44":2008,"98,43":2008,"98,42":2008,"98,41":2008,"98,40":2008,"94,40":2008,"94,41":2008,"94,42":2008,"94,43":2008,"94,44":2008,"94,45":2008,"94,46":2008,"94,47":2008,"94,48":2008,"94,49":2008,"94,50":2008,"93,50":2008,"93,49":2008,"93,48":2008,"93,47":2008,"93,46":2008,"93,45":2008,"93,44":2008,"93,43":2008,"92,43":2008,"92,42":2008,"91,42":2008,"91,41":2008,"91,40":2008,"90,40":2008,"90,41":2008,"90,42":2008,"90,43":2008,"90,44":2008,"90,45":2008,"90,46":2008,"90,47":2008,"89,47":2008,"89,46":2008,"89,45":2008,"89,44":2008,"89,43":2008,"89,42":2008,"89,41":2008,"89,40":2008,"88,41":2008,"88,42":2008,"88,43":2008,"88,44":2008,"88,45":2008,"88,46":2008,"88,47":2008,"88,48":2008,"88,49":2008,"88,50":2008,"87,49":2008,"87,48":2008,"87,47":2008,"87,46":2008,"87,45":2008,"87,44":2008,"86,49":2008,"89,48":2008,"91,47":2008,"91,46":2008,"91,45":2008,"91,44":2008,"91,43":2008,"92,44":2008,"92,45":2008,"92,46":2008,"92,47":2008,"95,49":2008,"95,48":2008,"95,47":2008,"95,46":2008,"95,45":2008,"95,44":2008,"95,43":2008,"95,42":2008,"95,41":2008,"95,40":2008,"96,40":2008,"96,41":2008,"96,42":2008,"96,43":2008,"96,44":2008,"96,45":2008,"96,46":2008,"96,47":2008,"96,48":2008,"96,49":2008,"96,50":2008,"96,51":2008,"97,51":2008,"97,50":2008,"97,49":2008,"97,48":2008,"97,47":2008,"97,46":2008,"97,45":2008,"97,44":2008,"97,43":2008,"97,42":2008,"97,41":2008,"97,40":2008,"99,40":2008,"99,41":2008,"99,42":2008,"99,43":2008,"99,44":2008,"99,45":2008,"99,46":2008,"99,47":2008,"99,48":2008,"99,49":2008,"99,50":2008,"99,51":2008,"99,52":2008,"99,53":2008,"99,54":2008,"99,55":2008,"99,56":2008,"99,57":2008,"99,58":2008,"99,59":2008,"98,59":2008,"98,58":2008,"98,57":2008,"98,56":2008,"91,55":2008,"91,54":2008,"90,55":2008,"87,55":2008,"78,45":2008,"78,44":2008,"78,43":2008,"79,44":2008,"79,45":2008,"80,45":2008,"80,44":2008,"74,36":2008,"73,35":2008,"71,35":2008,"71,36":2008,"71,37":2008,"71,38":2008,"71,39":2008,"70,39":2008,"70,38":2008,"70,37":2008,"70,36":2008,"70,35":2008,"72,38":2008,"17,18":2009,"18,18":2009,"18,17":2009,"18,19":2009,"19,19":2009,"20,19":2009,"21,19":2009,"21,20":2009,"21,21":2009,"21,22":2009,"20,22":2009,"20,21":2009,"19,21":2009,"19,22":2009,"18,22":2009,"18,21":2009,"20,23":2009,"22,22":2009,"22,21":2009,"23,21":2009,"24,21":2009,"25,21":2009,"26,21":2009,"26,20":2009,"27,20":2009,"28,20":2009,"22,19":2009,"23,19":2009,"24,19":2009,"25,19":2009,"20,30":2010,"21,30":2010,"22,30":2010,"26,38":2011,"26,39":2011,"27,39":2011,"28,39":2011,"28,38":2011,"29,38":2011,"29,39":2011,"27,46":2012,"28,46":2012,"28,45":2012,"30,23":2013,"30,24":2013,"30,25":2013,"30,26":2013,"30,27":2013,"31,27":2013,"31,26":2013,"31,25":2013,"32,25":2013,"31,23":2013,"31,22":2013,"32,22":2013,"49,28":2014,"50,28":2014,"50,27":2014,"51,27":2014,"51,26":2014,"52,26":2014,"52,25":2014,"52,24":2014,"53,24":2014,"53,25":2014,"53,26":2014,"53,27":2014,"53,28":2014,"53,29":2014,"52,29":2014,"52,28":2014,"52,27":2014,"51,28":2014,"51,29":2014,"51,30":2014,"52,30":2014,"50,29":2014,"54,29":2014,"54,28":2014,"54,27":2014,"54,26":2014,"54,25":2014,"54,24":2014,"54,23":2014,"54,22":2014,"55,22":2014,"55,21":2014,"55,20":2014,"55,19":2014,"55,18":2014,"55,17":2014,"54,17":2014,"54,18":2014,"53,18":2014,"56,18":2014,"57,18":2014,"57,19":2014,"57,20":2014,"56,20":2014,"56,21":2014,"56,22":2014,"56,23":2014,"56,24":2014,"56,25":2014,"56,26":2014,"56,27":2014,"55,27":2014,"55,26":2014,"55,25":2014,"55,24":2014,"55,23":2014,"57,26":2014,"57,25":2014,"57,24":2014,"58,24":2014,"58,23":2014,"58,22":2014,"58,21":2014,"58,20":2014,"58,19":2014,"59,19":2014,"59,18":2014,"60,18":2014,"60,17":2014,"60,16":2014,"61,16":2014,"61,15":2014,"61,17":2014,"62,16":2014,"63,16":2014,"64,16":2014,"65,16":2014,"66,16":2014,"67,16":2014,"59,20":2014,"59,21":2014,"59,22":2014,"59,23":2014,"59,24":2014,"60,23":2014,"60,22":2014,"60,21":2014,"58,26":2014,"58,29":2015,"59,29":2015,"59,28":2015,"59,27":2015,"60,27":2015,"60,28":2015,"60,29":2015,"62,33":2016,"62,34":2016,"62,35":2016,"69,16":2017,"70,16":2017,"70,15":2017,"71,15":2017};
const GOVS      = {"Paperist Democracy":{"color":"#5b8cff","axis":"center","bonus":"+15% Gold, +10% Stability","desc":"Rule by elected representatives through consensus and civic institutions.","support_req":40},"Classical Liberalism":{"color":"#c8e87a","axis":"center-right","bonus":"+20% Gold, +5% Trade","desc":"Individual liberty and free markets. Minimal state, maximum enterprise.","support_req":35},"Reformatorist Left":{"color":"#e87a7a","axis":"center-left","bonus":"+15% Manpower, +10% Stability","desc":"Progressive reform through democratic means. Workers rights and social programs.","support_req":35},"Paperolutionary Left":{"color":"#cc3333","axis":"far-left","bonus":"+25% Manpower, -10% Gold","desc":"Total transformation through revolution. Power to the proletariat!","support_req":50},"Aesthetic Democracy":{"color":"#d4a0e0","axis":"center-left","bonus":"+15% Stability, +10% Culture","desc":"Beauty and democracy intertwined. Governance through artistic vision.","support_req":30},"Traditionalist Right":{"color":"#8c7a44","axis":"right","bonus":"+20% Stability, +10% Manpower","desc":"Preserve the old ways. Heritage, order, and traditional values endure.","support_req":35},"Institutionalism":{"color":"#888888","axis":"center","bonus":"+25% Stability, -5% Income","desc":"Strong institutions, weak rulers. The system governs; individuals serve it.","support_req":30},"Third Positionism":{"color":"#8c4a00","axis":"far-right","bonus":"+20% Army, +10% Manpower, -15% Gold","desc":"Neither left nor right. National solidarity and self-sufficiency.","support_req":45},"Superiority Radicalism":{"color":"#6b3300","axis":"radical","bonus":"+30% Army, -20% Stability","desc":"We are superior. The world shall be remade by force.","support_req":55},"Post-Modernism":{"color":"#40d4cc","axis":"alternative","bonus":"+20% Gold, -10% Manpower","desc":"All structures are fictions. Governance itself is questioned.","support_req":30},"Autocracy":{"color":"#4a4a6a","axis":"authoritarian","bonus":"+10% all resources","desc":"One ruler. One will. The state IS the ruler.","support_req":0},"Neo-Authoritarianism":{"color":"#2a2a4a","axis":"authoritarian","bonus":"+15% Army, +15% Stability","desc":"Modern authoritarianism \u2014 efficient, technological, absolute.","support_req":40},"Anarchism":{"color":"#1a1a1a","axis":"anti-state","bonus":"+20% Supply, no tax, free expansion","desc":"No rulers. No borders. No laws \u2014 only free association.","support_req":60},"Eclecticism":{"color":"#a0a060","axis":"unaligned","bonus":"+5% all stats","desc":"Take the best from every ideology. Built on pragmatism.","support_req":20}};
const ADJ_GRAPH={"295":[2,301],"2":[3,301,295],"4":[],"301":[2,295,302,304,16],"3":[2,302],"298":[7],"7":[8,298],"8":[299,7],"299":[8,300],"300":[9,299],"10":[190],"302":[3,301,17,305,186],"186":[305,187,302],"5":[307,308,309],"20":[199,309,6,303],"6":[20,303],"303":[6,199,20,310,189],"9":[300],"190":[10],"16":[304,202,301],"305":[198,302,17,186,187,319],"187":[320,305,186],"188":[306],"307":[328,306,308,5],"309":[5,39,199,19,20,308],"189":[310,303],"11":[194,26],"194":[26,11],"304":[16,202,301,318],"17":[305,302,319],"320":[198,337,18,306,187],"306":[320,328,18,307,188],"308":[19,309,307,5],"199":[39,329,303,339,20,309,310],"310":[199,329,303,21,189,191],"191":[21,310],"312":[192,331,23],"323":[193,26,25],"26":[194,323,200,11,25],"313":[27,28,47],"315":[316],"316":[315,324,30],"30":[316],"14":[317,13],"317":[326,196,13,14],"318":[304,202,36],"319":[305,197,198,17],"198":[320,197,336,305,337,319],"311":[321],"192":[312,322,331],"322":[24,193,332,192],"193":[322,323,332,342,25],"27":[313,334,47],"28":[345,204,47,335,313,314],"314":[28,335],"29":[324,205,335],"195":[325,12,13,206,346],"13":[317,195,325,14],"202":[35,36,15,208,304,16,347,318],"18":[320,37,328,337,306],"328":[18,307,19,306,338],"19":[38,39,328,338,308,309],"329":[40,21,310,199],"21":[321,329,340,310,191],"321":[330,21,22,311],"22":[321,330,42,23],"23":[312,42,331,22],"331":[192,312,203,341,23,24],"24":[43,322,331,341],"332":[193,322,43,342],"25":[193,323,200,342,343,26],"200":[25,26,343],"334":[27],"335":[345,314,28,29],"324":[205,49,316,29],"325":[32,195,196,13],"196":[33,325,326,201,317],"326":[201,196,317,327],"327":[201,34,326,15],"15":[202,34,347,327],"36":[35,197,202,209,348,318],"197":[36,198,336,209,319],"337":[320,37,198,336,210,18],"39":[38,199,19,339,309,350],"339":[40,199,351,39],"40":[329,339,340,213,351],"330":[352,321,41,42,340,22],"342":[25,43,332,193],"47":[204,46,313,27,28],"31":[12],"12":[346,195,31],"336":[197,198,337,209,210],"37":[361,337,338,18,349],"338":[37,38,328,19,349],"340":[40,41,330,363,21,213],"42":[352,330,203,22,23],"203":[352,353,42,331,341],"341":[24,331,203],"343":[200,25],"204":[47,48,367,345,28],"345":[204,205,335,48,28],"205":[324,368,49,345,29],"49":[368,324,205],"346":[195,12,206],"206":[32,346,195],"32":[33,356,325,206],"33":[32,196,357,356,201,51],"201":[33,34,196,357,358,326,327],"34":[359,327,201,15,347],"347":[34,202,15,208,207],"35":[36,202,208,53,348],"209":[36,197,336,210,216,348],"38":[39,362,338,19,211,349,350],"41":[352,330,363,364,340,217],"43":[24,332,342],"208":[35,202,347,207],"348":[35,36,209,370,53,216],"210":[360,361,336,337,209],"361":[37,360,210,211,55],"349":[338,211,37,38],"350":[38,39,362,212,351],"351":[40,339,212,373,213,350],"213":[40,363,340,373,374,351],"352":[41,42,203,364,330,60],"353":[203,60],"354":[62,44,45,366],"45":[354,366],"215":[64,46],"46":[377,215,47,367],"367":[65,66,204,46,377],"48":[345,66,204],"368":[49,205],"356":[32,33],"357":[33,358,201,51,52],"358":[201,52,357,359],"359":[34,358],"53":[35,369,370,54,348],"211":[38,361,362,371,349],"363":[41,340,213,374,375,217],"364":[376,217,352,41],"60":[352,353],"214":[218,61,365],"365":[225,44,214,62],"44":[354,365,62],"366":[354,388,45,219,62],"355":[],"51":[33,357],"207":[208,347],"370":[216,348,53],"216":[360,209,370,380,348],"360":[361,210,55,216,223],"362":[38,211,372,212,381,350],"212":[382,362,372,373,350,351],"373":[212,213,374,58,382,351],"217":[384,41,363,364,375,376],"61":[218,386,214],"62":[354,387,388,44,365,366],"377":[64,65,391,46,367],"66":[48,65,392,367],"52":[394,395,357,358],"55":[360,361,399,371,223],"371":[399,211,55,56,381],"372":[362,212,57,381,382],"382":[229,372,212,373,57,58],"374":[363,213,373,375,58,383],"218":[225,386,401,214,61],"219":[390,388,389,366],"64":[390,391,233,215,377],"65":[226,66,391,367,377],"378":[],"369":[53],"54":[380,379,228,53],"380":[216,397,54,223],"223":[360,380,55],"381":[362,75,371,372,56,57],"58":[229,373,374,382,383],"375":[224,384,363,374,217,383],"376":[384,217,59,364],"386":[80,401,218,61],"225":[387,230,365,401,218],"387":[225,388,402,62,63],"388":[387,389,366,219,62,63],"390":[64,389,232,233,219],"50":[221,69],"394":[395,52],"395":[394,52,70],"399":[398,371,403,55,56],"56":[75,371,381,399],"383":[224,229,405,374,375,58],"384":[224,78,407,376,217,59,375],"385":[],"401":[225,386,230,80,218],"389":[388,390,232,219,63],"391":[64,65,233,84,377],"226":[65,392,240,84,85],"392":[393,226,85,66],"393":[392],"69":[50],"221":[50],"379":[54,227,228,222],"57":[229,76,372,381,382],"229":[237,404,405,57,58,382,383],"224":[384,383,405,406,407,375],"59":[384,376,78],"63":[416,387,388,389,232,402,409],"233":[64,417,390,391,232,83,84,410],"84":[233,410,226,391],"396":[72,222,71],"222":[72,379,227,396],"228":[227,73,234,397,54,379,412],"397":[380,234,228],"398":[403,399],"76":[57],"404":[237,229],"405":[224,229,383],"407":[224,384,78,238,406],"78":[384,59,407],"80":[386,421,422,230,79,401,414],"230":[225,231,80,401,402,414],"402":[387,230,231,409,63],"232":[416,417,389,390,233,63],"85":[392,240,226],"70":[411,395],"227":[419,228,72,73,379,222],"403":[75,235,398,399],"75":[56,403,381],"406":[224,77,238,407],"231":[230,81,402,409,415],"409":[416,231,402,63,415],"417":[416,99,232,233,82,83],"410":[233,84,423],"71":[72,411,396,87],"72":[418,227,419,71,396,87,222],"234":[228,74,397,89,412],"237":[404,229],"77":[93,406,238],"238":[77,406,407],"408":[79],"79":[408,80],"414":[96,422,230,80,81],"416":[417,232,415,82,409,63],"240":[226,85],"411":[70,71],"419":[418,227,424,73,72],"73":[419,228,227,424,425,412],"412":[228,425,234,73,89],"413":[74,235],"235":[403,413],"422":[96,421,427,80,414],"81":[231,428,429,414,415],"415":[416,231,429,430,81,82,409],"82":[416,417,98,99,430,415],"83":[99,233,417,423],"423":[410,83],"87":[72,418,245,71],"418":[72,419,424,87],"74":[234,433,89,90,413],"239":[420,244],"421":[80,427,422],"99":[417,98,82,83,439,248],"425":[424,73,431,432,89,412],"89":[425,74,234,432,433,412],"93":[77],"420":[426,244,239],"96":[422,427,428,436,437,414],"428":[96,429,81,437,438],"429":[97,428,430,81,438,415],"430":[97,98,429,82,415],"102":[],"424":[418,419,425,73,88],"433":[74,106,432,434,89,90,444],"90":[433,434,74],"243":[435],"244":[420,426,239,247,251,95],"427":[96,421,422,436,247],"98":[99,430,114,82,439],"245":[440,87,88,441,442],"432":[425,431,433,89,444],"434":[433,90,91,106],"92":[],"435":[243],"426":[420,244,94,95],"247":[427,112,436,244,251,252],"437":[96,428,436,438,252,446],"438":[97,428,429,437,446],"439":[248,98,99,114],"248":[99,439],"440":[245],"88":[424,104,431,245,442,443],"431":[425,105,432,88,443],"91":[434],"246":[],"94":[426,250,445,95],"95":[426,244,250,251,94],"436":[96,427,437,247,252],"97":[429,430,114,438,447],"100":[101],"106":[433,434,444,450],"251":[453,111,112,244,247,95],"252":[455,436,437,247,446],"114":[97,98,439],"101":[100],"441":[448,442,245,103],"442":[448,104,245,88,441],"443":[449,104,105,431,88],"105":[449,450,459,431,443,444],"444":[450,105,106,432,433],"249":[],"445":[94,250,460,110],"250":[460,111,95,445,94,127],"112":[251,453,247],"446":[255,455,113,437,438,252,447],"447":[97,446,113],"104":[448,458,88,442,443],"110":[109,460,445],"111":[128,453,250,251,127],"455":[446,252,454,255],"116":[257,117,133],"119":[],"103":[448,441,463],"448":[258,103,104,458,463,441,442],"449":[105,259,443,459],"450":[105,106,459,444,253],"107":[451],"254":[109],"109":[460,110,254],"453":[112,251,454,111],"454":[453,455],"255":[129,455,113,467,446],"113":[447,446,255],"256":[461],"257":[116,262],"117":[456,116,133,134],"456":[134,117,462],"458":[448,258,104],"459":[449,450,259,105,253],"253":[466,450,459],"451":[107],"108":[452],"452":[108,260],"460":[109,110,250,445,127],"461":[256,131,261],"457":[121,463],"463":[448,457,258,103],"259":[449,459,470],"260":[452],"127":[128,250,460,111],"129":[467,255],"131":[261,266,461,115,468],"115":[468,132,131],"132":[262,267,115,468,469],"262":[257,132,133,469,471],"133":[134,262,116,117,471,472],"134":[133,456,462,117,472,473],"462":[456,134],"258":[448,458,463,470,122],"470":[264,258,259,464],"466":[265,124,125,253],"125":[466,124],"128":[111,142,127],"467":[129,479,255],"261":[266,131,461],"468":[131,132,266,267,115],"469":[480,132,262,267,145,471],"124":[477,265,466,125],"266":[267,131,468,261],"267":[480,132,266,468,469],"472":[481,133,134,146,471,473],"473":[472,134],"120":[474],"121":[457],"122":[258,264,138,475],"464":[123,470],"123":[483,264,139,464,476],"465":[265,476],"265":[465,466,476,124,477],"479":[130,467],"471":[481,133,262,145,469,472],"475":[138,482,122],"264":[483,138,470,122,123],"476":[265,139,140,465,123],"477":[265,124],"143":[130],"130":[479,143],"480":[144,145,267,469],"145":[480,270,144,469,471],"481":[270,146,471,472,156],"135":[485,263],"263":[136,474,485,135],"474":[486,263,136,268,120],"268":[474,482,486,487],"138":[482,483,264,489,269,122,475],"483":[264,138,139,269,123],"478":[142],"142":[128,478],"144":[480,145],"146":[472,481,271],"147":[],"136":[485,486,263,149,474],"486":[487,136,268,149,474],"482":[487,137,138,268,475],"139":[483,490,140,123,476],"140":[153,139,476],"270":[145,156,481],"485":[136,263,149,135],"269":[483,489,490,138,151],"487":[482,486,137,491,268,149,150],"137":[489,482,273,487],"489":[137,138,269,273,151],"490":[139,269,494,151,152],"156":[481,274,270,271],"271":[146,156],"149":[485,486,487,136,150],"153":[152,140,492],"155":[],"491":[163,150,487],"151":[489,490,269,494],"152":[490,492,494,495,153],"141":[],"150":[163,491,149,487],"273":[137,489],"494":[152,490,151],"492":[152,153,495],"274":[156],"158":[272,496,157],"272":[496,276,158],"495":[152,492],"157":[496,158],"496":[272,157,158],"163":[491,150],"276":[272],"159":[497],"148":[493],"493":[148],"275":[],"497":[498,159],"498":[497],"500":[165,166],"166":[500],"165":[500],"160":[168,277,285,502],"277":[160,502],"162":[280,279],"164":[504,508,501],"501":[164,508,181,182],"502":[160,168,169,277,278,286],"278":[502,286,279],"279":[280,162,278,286],"503":[283,507],"504":[515,164,180,507,508],"508":[515,164,501,181,504],"182":[509,292,181,501],"183":[293,284,509],"286":[169,502,278,280,279,510],"280":[162,510,170,279,286,287],"170":[280,511,171,287],"171":[170,511],"172":[288,281,512],"281":[512,282,172],"282":[512,289,173,281],"173":[289,282,174],"283":[291,507,179,503],"507":[291,180,503,504,283],"181":[515,292,501,182,508],"509":[516,293,292,182,183],"285":[168,160],"168":[160,169,285,502],"169":[168,502,286],"288":[172,511],"174":[289,505,173,175],"505":[174],"179":[283,178,291],"180":[515,504,507],"515":[504,180,508,181],"292":[509,516,181,182],"284":[293,294,183],"510":[280,286,287],"287":[280,170,510,511],"511":[288,170,171,287],"512":[281,282,172],"289":[282,173,174],"175":[506,174],"506":[176,175],"176":[506],"290":[],"178":[179],"291":[283,507,179],"516":[509,292,293],"293":[509,284,516,183],"294":[284]};
const CELL=10, MAP_W=1000, MAP_H=607;

// ── onGC: gov select bonus preview (called on init + gov change) ──
// IMPORTANT: keep here near constants, not near INIT block
window.onGC=function(){
  const el=document.getElementById('sG');
  const gb=document.getElementById('gB');
  if(!el||!gb) return;
  const g=el.value;
  gb.textContent=(GOVS[g]?.bonus)||'';
  const col=GOVS[g]?.color||'#888';
  gb.style.borderColor=col+'44';
  gb.style.color=col;
};
const byId={};
PROVINCES.forEach(p=>byId[p.id]=p);
// Owner is determined by is_admin flag in profiles table

// ══ PEOPLE & ETHNIC SYSTEM ═══════════════════════════════════════════════════
// Province peoples are cosmetic/lore only — no mechanical buffs.
// Nation ethnic groups are defined by players themselves.

const PROV_PEOPLE_POOL = [
  'Valdren','Keth','Orindar','Tharune','Sylvani','Morkai','Draelen','Essen',
  'Bravari','Lorken','Nythian','Queldar','Roneth','Sudari','Ulvorn','Velkai',
  'Warmith','Xendri','Yochar','Zelkarn','Amdrel','Biroth','Corvael','Delsin',
  'Etrova','Felnur','Gorthek','Halven','Irenkai','Jarven',
];
const PROV_PEOPLE_COLORS = [
  '#5b8cff','#e87a7a','#40d4cc','#f0c040','#40ff80','#9b6dff',
  '#ff9540','#ff6bff','#a0c860','#60c8ff','#ff8070','#80ffcc',
  '#ffcc40','#cc80ff','#80ffd4','#ff6040','#40aaff','#ff80a0',
  '#c0ff60','#60c0e0','#ffa060','#a060ff','#60e0a0','#e060c0',
  '#80c0ff','#ffd080','#80ffc0','#e08080','#80e0ff','#d0c0ff',
];

// Get province native people (deterministic, cosmetic only)
function getProvPeople(pid){
  const idx=Math.abs(Math.floor(Math.sin(pid*137+1)*99997))%PROV_PEOPLE_POOL.length;
  return{name:PROV_PEOPLE_POOL[idx],color:PROV_PEOPLE_COLORS[idx%PROV_PEOPLE_COLORS.length]};
}

// Estimate province population in thousands
function getProvPopEst(pid){
  const p=byId[pid];if(!p)return 0;
  const base={plains:180,coast:140,hills:90,forest:70,mountain:50}[p.terrain]||80;
  return Math.max(10,base+((pid*83)%60)-30);
}

// Province resources (cosmetic flavor, 1-2 per province)
const PROV_RES_POOL={
  plains: [['🌾','Wheat'],['🐄','Livestock'],['🐎','Horses'],['🍃','Herbs']],
  coast:  [['🐟','Fish'],['⚓','Trade'],['🍇','Wine'],['🧂','Salt']],
  hills:  [['⚙','Iron'],['🪨','Coal'],['🍇','Wine'],['🌿','Herbs']],
  forest: [['🌲','Timber'],['🌿','Herbs'],['🌶','Spices'],['🍄','Fungi']],
  mountain:[['💎','Gems'],['⚙','Iron'],['🪨','Coal'],['🪙','Silver']],
};
function getProvResources(pid){
  const p=byId[pid];if(!p)return[];
  const pool=PROV_RES_POOL[p.terrain]||PROV_RES_POOL.plains;
  const a=pool[(pid*251+17)%pool.length];
  const b=pool[(pid*83+11)%pool.length];
  return a[1]===b[1]?[a]:[a,b];
}

// ── ETHNIC GROUP SYSTEM (player-defined) ─────────────────────────────────
// ethnic_group: string stored in wc_nations, nullable
// ethnic_group_set_at: ISO timestamp of last change (cooldown 30 days)

const ETHNIC_COOLDOWN_DAYS=30;

function canChangeEthnic(nat){
  if(!nat.ethnic_group_set_at)return true;
  const last=new Date(nat.ethnic_group_set_at).getTime();
  return(Date.now()-last)>ETHNIC_COOLDOWN_DAYS*86400000;
}
function ethnicCooldownRemaining(nat){
  if(!nat.ethnic_group_set_at)return 0;
  const last=new Date(nat.ethnic_group_set_at).getTime();
  const ms=ETHNIC_COOLDOWN_DAYS*86400000-(Date.now()-last);
  return Math.max(0,Math.ceil(ms/86400000));
}

// Show ethnic edit modal
window.openEthnicModal=function(){
  if(!mn)return;
  // Remove old modal if exists (refresh state)
  const old=document.getElementById('ethnicModal');
  if(old)old.remove();

  const can=canChangeEthnic(mn);
  const rem=ethnicCooldownRemaining(mn);
  // ethnic_groups is now an array stored as JSON in DB, or fallback to string
  let cur=[];
  if(Array.isArray(mn.ethnic_groups))cur=mn.ethnic_groups;
  else if(mn.ethnic_group)cur=[mn.ethnic_group];

  const infoHtml=can
    ?'<div style="font-size:8px;color:rgba(200,232,255,.35);margin-bottom:8px;line-height:1.6">Define the ethnic groups/peoples of your nation.<br>You can list multiple groups (one per line), like in Victoria 3.<br>Cooldown: '+ETHNIC_COOLDOWN_DAYS+' days after saving.</div>'
    :'<div style="font-size:8px;color:#ff6b6b;margin-bottom:8px;line-height:1.6">'+rem+' days remaining before you can change ethnic groups.</div>';

  const disabledAttr=can?'':'disabled style="opacity:.4;cursor:not-allowed"';
  const saveBtn=can?'<button onclick="saveEthnic()" style="font-family:var(--mono);font-size:10px;flex:1;padding:9px;border:1px solid #00d4ff;background:rgba(0,212,255,.1);color:#00d4ff;cursor:pointer;letter-spacing:.08em">[ SAVE ]</button>':'';

  const m=document.createElement('div');
  m.id='ethnicModal';
  m.style.cssText='position:fixed;inset:0;background:rgba(0,0,0,.8);z-index:9500;display:flex;align-items:center;justify-content:center;padding:16px';
  m.innerHTML='<div style="background:#0d1117;border:1px solid rgba(0,212,255,.35);box-shadow:0 0 40px rgba(0,212,255,.1);padding:24px 22px;min-width:340px;max-width:95vw;font-family:var(--mono)">'
    +'<div style="font-size:11px;color:#00d4ff;letter-spacing:.1em;margin-bottom:12px">👥 DEFINE YOUR PEOPLE</div>'
    +infoHtml
    +'<div style="font-size:8px;color:rgba(200,232,255,.3);letter-spacing:.1em;margin-bottom:5px">ETHNIC GROUPS <span style="color:rgba(200,232,255,.2)">(one per line, max 5)</span></div>'
    +'<textarea id="ethnicInp" '+disabledAttr+' style="font-family:var(--mono);font-size:11px;width:100%;box-sizing:border-box;background:rgba(0,212,255,.04);border:1px solid rgba(0,212,255,.25);color:#c8e8ff;padding:8px;margin-bottom:6px;outline:none;resize:vertical;min-height:90px;line-height:1.6" placeholder="e.g. Valdren&#10;Iron Folk&#10;Sea Kin...">'+cur.join('\n')+'</textarea>'
    +'<div style="font-size:7px;color:rgba(200,232,255,.2);margin-bottom:12px">Examples: Humans, Mountain Dwarves, Sylvan Elves, River Goblins...</div>'
    +'<div style="display:flex;gap:8px">'
    +saveBtn
    +'<button onclick="document.getElementById(&quot;ethnicModal&quot;).remove()" style="font-family:var(--mono);font-size:10px;flex:1;padding:9px;border:1px solid rgba(200,232,255,.2);background:transparent;color:rgba(200,232,255,.5);cursor:pointer;letter-spacing:.08em">[ CLOSE ]</button>'
    +'</div>'
    +'</div>';
  document.body.appendChild(m);
};
window.saveEthnic=async function(){
  const raw=document.getElementById('ethnicInp')?.value||'';
  const groups=raw.split('\n').map(s=>s.trim()).filter(Boolean).slice(0,5);
  if(!groups.length){toast('Enter at least one ethnic group');return;}
  if(!canChangeEthnic(mn)){toast('Cooldown active');return;}
  const now=new Date().toISOString();
  // Save as array in ethnic_groups, keep ethnic_group as primary (first) for backwards compat
  const{error}=await sb.from('wc_nations').update({
    ethnic_groups:groups,
    ethnic_group:groups[0],
    ethnic_group_set_at:now
  }).eq('id',mn.id);
  if(error){toast('Error: '+error.message);return;}
  mn.ethnic_groups=groups;mn.ethnic_group=groups[0];mn.ethnic_group_set_at=now;
  nations[mn.id]=mn;
  document.getElementById('ethnicModal')?.remove();
  toast('\u2713 Peoples set: '+groups.join(', '));
  updateNatUI();
};


// ── MIGRATION SYSTEM ──────────────────────────────────────────────────────
// Each week, some pop migrates between nations based on laws + stability.
// Migration is cosmetic (tracked per-nation as 'migrant_pop' number in DB).
// Laws that affect migration:
//   open_border / migration_wave → receive migrants
//   censorship / martial_law / emergency_law → block outflow
//   multiculturalism → receive more
//   assimilation → may trigger outflow from unhappy minorities

function calcMigrationFlow(nat){
  const laws=nat.active_laws||[];
  const stability=nat.stability||50;
  // Outflow: if stability low or repressive laws
  const repressive=laws.some(l=>['censorship','martial_law','emergency_law','secret_police','ethnic_cleanse'].includes(l));
  const attractive=laws.some(l=>['open_border','migration_wave','multiculturalism','free_press','free_assembly'].includes(l));
  const baseOut=Math.max(0,Math.round((60-stability)/10)); // 0-6 per week
  const baseIn=attractive?Math.round((stability-40)/8):0;  // 0-6 per week
  const outflow=repressive?Math.max(0,baseOut-2):baseOut;
  const inflow=attractive?baseIn:0;
  return{inflow,outflow,net:inflow-outflow};
}

async function processMigration(){
  if(!mn)return;
  const flow=calcMigrationFlow(mn);
  if(flow.net===0)return;
  const newPop=Math.max(0,(mn.migrant_pop||0)+flow.net);
  if(newPop!==(mn.migrant_pop||0)){
    await sb.from('wc_nations').update({migrant_pop:newPop}).eq('id',mn.id);
    mn.migrant_pop=newPop;
    nations[mn.id]=mn;
  }
}

const TICK_HOURS=1; // resources tick every 1 hour (offline)

// ── STATE ───────────────────────────────────────────────────
let cu=null,cp=null,mn=null;
let nations={},ownership={},natColors={};
let selProv=null,picking=false,pendCap=null;
let isOwner=false;

// ── CANVAS + ZOOM/PAN ────────────────────────────────────────
const canvas=document.getElementById('mc');
const ctx=canvas.getContext('2d');
const mapImg=document.getElementById('mi');
const ma=document.getElementById('ma');
let zoom=1,panX=0,panY=0;
let dragging=false,lastX=0,lastY=0;
let dragMoved=false,dragStartX=0,dragStartY=0,dragPanX=0,dragPanY=0,pendClick=null,dragStartedOnCanvas=false;
let pinchDist=0;

function mapH(){return ma.clientHeight-32;}
function mapW(){return ma.clientWidth;}

function resize(){
  const mw=mapW(),mh=mapH();
  canvas.style.width=mw+'px';
  canvas.style.height=mh+'px';
  canvas.width=Math.round(mw*devicePixelRatio);
  canvas.height=Math.round(mh*devicePixelRatio);
  clampPan();
  draw();
}

function clampPan(){
  const mw=mapW(),mh=mapH();
  const minZoom=Math.max(mw/MAP_W,mh/MAP_H);
  if(zoom<minZoom){zoom=minZoom;}
  const imgW=mw*zoom;
  // X: wrap infinitely like a globe
  panX=((panX%imgW)+imgW)%imgW;
  // Y: clamp (no vertical wrap)
  const sh=mh*zoom;
  panY=Math.min(0,Math.max(mh-sh, panY));
}

function zoomAt(cx,cy,factor){
  const newZoom=Math.max(0.5,Math.min(8,zoom*factor));
  const ratio=newZoom/zoom;
  panX=cx-(cx-panX)*ratio;
  panY=cy-(cy-panY)*ratio;
  zoom=newZoom;
  clampPan();
  draw();
}
window.zoomBy=function(f){zoomAt(mapW()/2,mapH()/2,f);};
window.resetZoom=function(){zoom=1;panX=0;panY=0;draw();};

function screenToMap(sx,sy){
  const mw=mapW(),imgW=mw*zoom;
  const rawX=sx-panX;
  // wrap into [0,imgW) range
  const wx=((rawX%imgW)+imgW)%imgW;
  return {x:wx/zoom*(MAP_W/mw), y:(sy-panY)/zoom*(MAP_H/mapH())};
}

// Wheel zoom
ma.addEventListener('wheel',e=>{
  e.preventDefault();
  const r=canvas.getBoundingClientRect();
  zoomAt(e.clientX-r.left,e.clientY-r.top,e.deltaY<0?1.15:1/1.15);
},{passive:false});

// Mouse drag
canvas.addEventListener('mousedown',e=>{
  if(e.button===1||e.button===2){dragging=true;lastX=e.clientX;lastY=e.clientY;canvas.classList.add('grabbing');return;}
  if(e.button===0){dragMoved=false;dragStartedOnCanvas=true;dragStartX=e.clientX;dragStartY=e.clientY;dragPanX=panX;dragPanY=panY;}
});
window.addEventListener('mousemove',e=>{
  if(dragging){panX+=e.clientX-lastX;panY+=e.clientY-lastY;lastX=e.clientX;lastY=e.clientY;clampPan();draw();return;}
  if(e.buttons===1){
    const dx=e.clientX-dragStartX,dy=e.clientY-dragStartY;
    if(!dragMoved&&Math.abs(dx)+Math.abs(dy)>5){dragMoved=true;canvas.classList.add('grabbing');}
    if(dragMoved){panX=dragPanX+dx;panY=dragPanY+dy;clampPan();draw();return;}
  }
  // Hide tooltip if cursor is over any UI element (not the canvas itself)
  const topEl=document.elementFromPoint(e.clientX,e.clientY);
  if(!topEl||topEl!==canvas){
    document.getElementById('tip').style.display='none';
    return;
  }
  const r=canvas.getBoundingClientRect();
  const mp=screenToMap(e.clientX-r.left,e.clientY-r.top);
  showTip(e.clientX,e.clientY,mp.x,mp.y);
});
window.addEventListener('mouseup',e=>{
  if(e.button===1||e.button===2){dragging=false;canvas.classList.remove('grabbing');return;}
  if(e.button===0){
    canvas.classList.remove('grabbing');
    // Only handle as map click if drag started ON the canvas (not inside a modal/overlay)
    if(!dragMoved && dragStartedOnCanvas){
      const r=canvas.getBoundingClientRect();
      handleClick(dragStartX-r.left,dragStartY-r.top);
    }
    dragMoved=false;
    dragStartedOnCanvas=false;
  }
});
canvas.addEventListener('contextmenu',e=>e.preventDefault());
canvas.addEventListener('mouseleave',()=>{document.getElementById('tip').style.display='none';});

// Touch events
let touchStart=null,touchType=null;
canvas.addEventListener('touchstart',e=>{
  e.preventDefault();
  if(e.touches.length===1){
    touchType='tap';
    touchStart={x:e.touches[0].clientX,y:e.touches[0].clientY,t:Date.now()};
    lastX=e.touches[0].clientX;lastY=e.touches[0].clientY;
  }else if(e.touches.length===2){
    touchType='pinch';
    pinchDist=Math.hypot(e.touches[0].clientX-e.touches[1].clientX,e.touches[0].clientY-e.touches[1].clientY);
    const mx=(e.touches[0].clientX+e.touches[1].clientX)/2;
    const my=(e.touches[0].clientY+e.touches[1].clientY)/2;
    const r=canvas.getBoundingClientRect();
    lastX=mx-r.left;lastY=my-r.top;
  }
},{passive:false});
canvas.addEventListener('touchmove',e=>{
  e.preventDefault();
  if(e.touches.length===1&&touchType==='tap'){
    const dx=e.touches[0].clientX-touchStart.x,dy=e.touches[0].clientY-touchStart.y;
    if(Math.abs(dx)+Math.abs(dy)>8)touchType='drag';
  }
  if(e.touches.length===1&&touchType==='drag'){
    panX+=e.touches[0].clientX-lastX;panY+=e.touches[0].clientY-lastY;
    lastX=e.touches[0].clientX;lastY=e.touches[0].clientY;
    clampPan();draw();
  }else if(e.touches.length===2){
    const d=Math.hypot(e.touches[0].clientX-e.touches[1].clientX,e.touches[0].clientY-e.touches[1].clientY);
    const r=canvas.getBoundingClientRect();
    const cx=(e.touches[0].clientX+e.touches[1].clientX)/2-r.left;
    const cy=(e.touches[0].clientY+e.touches[1].clientY)/2-r.top;
    if(pinchDist>0)zoomAt(cx,cy,d/pinchDist);
    pinchDist=d;
  }
},{passive:false});
canvas.addEventListener('touchend',e=>{
  if(touchType==='tap'&&e.changedTouches.length===1){
    const dt=Date.now()-touchStart.t;
    if(dt<400){
      const r=canvas.getBoundingClientRect();
      handleClick(touchStart.x-r.left,touchStart.y-r.top);
    }
  }
  if(e.touches.length===0)touchType=null;
},{passive:false});

function getProv(sx,sy){
  const mp=screenToMap(sx,sy);
  const col=Math.floor(mp.x/CELL),row=Math.floor(mp.y/CELL);
  const pid=LOOKUP[col+','+row];
  return pid?byId[pid]:null;
}

function handleClick(sx,sy){
  const p=getProv(sx,sy);
  if(!p)return;
  if(picking){
    if(ownership[p.id]){toast('Already claimed!');return;}
    pendCap=p;
    document.getElementById('capD').textContent=p.name+' ('+p.terrain+')';
    document.getElementById('capOK').style.display='';
    document.getElementById('setup').style.display='flex';
    picking=false;canvas.classList.remove('grabbing');return;
  }
  selProv=p;draw();showPanel(p);refreshSb();
}

function showTip(cx,cy,mx,my){
  const col=Math.floor(mx/CELL),row=Math.floor(my/CELL);
  const pid=LOOKUP[col+','+row];
  const tip=document.getElementById('tip');
  if(pid&&byId[pid]){
    const p=byId[pid];
    const oid=ownership[pid];
    const isSea=p.terrain==='sea';
    const _ownerNat=oid?nations[oid]:null;

    if(isSea){
      const navPow=mn?navalPower():0;
      tip.innerHTML=
        '<div style="color:#5ab4ff;font-size:10px;font-weight:bold;margin-bottom:2px">\u{1F30A} '+p.name+'</div>'
        +'<div style="font-size:8px;color:rgba(90,180,255,.5)">Sea Province</div>'
        +'<div style="font-size:8px;color:rgba(200,232,255,.4);margin-top:1px">\u{1F4B0} +'+p.gold+' \u00B7 \u2699 +'+p.supply+'/tick</div>'
        +(mn?'<div style="font-size:7.5px;color:#5ab4ff;margin-top:2px">Your Naval Power: '+navPow+'</div>':'');
      tip.style.cssText='display:block;left:'+(cx+14)+'px;top:'+(cy-38)+'px;position:fixed;background:rgba(8,12,28,.95);border:1px solid rgba(90,180,255,.35);padding:6px 10px;pointer-events:none;z-index:600;min-width:130px;font-family:var(--mono);';
    } else {
      const _ppl=getProvPeople(pid);
      const _pop=getProvPopEst(pid);
      const _res=getProvResources(pid);
      const _resStr=_res.map(r=>r[0]+' '+r[1]).join(' \u00B7 ');
      tip.innerHTML=
        '<div style="color:#00d4ff;font-size:10px;font-weight:bold;margin-bottom:2px">'+p.name+'</div>'
        +'<div style="font-size:8px;color:'+(oid?'#40ff80':'rgba(200,232,255,.4)')+'">'+(oid?('\u{1F451} '+(_ownerNat?.name||'???')):'Unclaimed')+'</div>'
        +'<div style="font-size:8px;color:rgba(200,232,255,.45);margin-top:1px">'+p.terrain[0].toUpperCase()+p.terrain.slice(1)+' \u00B7 \u{1F465} '+_pop+'k</div>'
        +'<div style="font-size:8px;color:'+_ppl.color+';margin-top:1px">'+_ppl.name+' peoples</div>'
        +(_resStr?'<div style="font-size:8px;color:#f0c040;margin-top:2px">'+_resStr+'</div>':'')
        +((_ownerNat?.ethnic_groups||(_ownerNat?.ethnic_group?[_ownerNat.ethnic_group]:[])).length?'<div style="font-size:7px;color:#9b6dff;margin-top:1px">'+(_ownerNat.ethnic_groups||[_ownerNat.ethnic_group]).join(', ')+'</div>':'');
      tip.style.cssText='display:block;left:'+(cx+14)+'px;top:'+(cy-38)+'px;position:fixed;background:rgba(10,12,24,.95);border:1px solid rgba(0,212,255,.3);padding:6px 10px;pointer-events:none;z-index:600;min-width:130px;font-family:var(--mono);';
    }
  }else tip.style.display='none';
}

// ── DRAW ────────────────────────────────────────────────────
function hexRgb(h){return[parseInt(h.slice(1,3),16),parseInt(h.slice(3,5),16),parseInt(h.slice(5,7),16)];}

// Ocean mask — declared here so draw() can reference them safely
let oceanMask=null;
let oceanCanvas=null, oceanCtx=null;

function draw(){
  const W=canvas.width,H=canvas.height,dpr=devicePixelRatio;
  ctx.clearRect(0,0,W,H);
  if(!mapImg.complete||!mapImg.naturalWidth)return;

  const mw=mapW(),mh=mapH();
  const sw=mw*zoom*dpr, sh=mh*zoom*dpr;
  const imgW=sw; // one map tile width in canvas px
  const dy=panY*dpr;

  // Tile range to cover canvas (infinite horizontal)
  const startT=Math.floor(-panX*dpr/imgW)-1;
  const endT  =Math.ceil((W-panX*dpr)/imgW)+1;

  // Draw map tiles
  for(let t=startT;t<=endT;t++){
    ctx.drawImage(mapImg, panX*dpr+t*imgW, dy, sw, sh);
  }

  // Ocean overlay — draw blue tint over water areas
  if(oceanCanvas){
    ctx.save();
    ctx.globalCompositeOperation='source-over';
    for(let t=startT;t<=endT;t++){
      ctx.drawImage(oceanCanvas, panX*dpr+t*imgW, dy, sw, sh);
    }
    ctx.restore();
  }

  const cellW=sw/100, cellH=sh/60;

  // Province overlays — repeated per tile
  for(let t=startT;t<=endT;t++){
    const ox=panX*dpr+t*imgW;
    for(const [key,pid] of Object.entries(LOOKUP)){
      if(!pid)continue;
      const[col,row]=key.split(',').map(Number);
      const x=ox+col*cellW, y=dy+row*cellH;
      if(x+cellW<0||x>W) continue;
      const oid=ownership[pid];
      let fill=null;
      if(selProv&&pid===selProv.id){
        fill='rgba(0,212,255,.4)';
        ctx.strokeStyle='rgba(0,212,255,.95)';ctx.lineWidth=1;
        ctx.strokeRect(x+.5,y+.5,cellW-1,cellH-1);
      } else if(byId[pid]?.terrain==='sea'){
        fill=null; // Sea provinces invisible on canvas (click still works via LOOKUP)
      } else if(mn&&oid===mn.id){
        const c=natColors[mn.id]||[240,192,64];
        fill=`rgba(${c[0]},${c[1]},${c[2]},.28)`;
      } else if(oid){
        const c=natColors[oid]||[200,100,100];
        fill=`rgba(${c[0]},${c[1]},${c[2]},.28)`;
      }
      if(!fill)continue;
      ctx.fillStyle=fill;
      ctx.fillRect(x,y,cellW+.5,cellH+.5);
    }
  }

  // Province name labels at high zoom
  if(zoom>=1.5){
    const fs=Math.max(8,Math.min(13,cellW*2.2));
    ctx.textAlign='center'; ctx.font=`bold ${fs}px monospace`;
    for(let t=startT;t<=endT;t++){
      const ox=panX*dpr+t*imgW;
      PROVINCES.forEach(p=>{
        if(!ownership[p.id])return;
        const sx=ox+(p.x/MAP_W)*sw, sy=dy+(p.y/MAP_H)*sh;
        if(sx<-fs*6||sx>W+fs*6||sy<0||sy>H)return;
        const isOwn=mn&&ownership[p.id]===mn.id;
        ctx.shadowColor='rgba(0,0,0,.85)'; ctx.shadowBlur=3;
        ctx.fillStyle=isOwn?'rgba(240,192,64,.98)':'rgba(255,255,255,.85)';
        ctx.fillText(p.name.slice(0,10),sx,sy);
        ctx.shadowBlur=0;
      });
    }
  }

  // Capital markers (★ on capital province of every nation)
  Object.values(nations).forEach(n=>{
    if(!n.capital_id)return;
    const cp=byId[n.capital_id];if(!cp)return;
    for(let t=startT;t<=endT;t++){
      const ox=panX*dpr+t*imgW;
      const cx=ox+(cp.x/MAP_W)*sw, cy=dy+(cp.y/MAP_H)*sh;
      if(cx<-20||cx>W+20)continue;
      const nc=natColors[n.id]||[240,192,64];
      ctx.font=`bold ${Math.max(9,Math.round(10*zoom))}px monospace`;
      ctx.textAlign='center';ctx.textBaseline='middle';
      ctx.strokeStyle='rgba(0,0,0,.8)';ctx.lineWidth=3;
      ctx.strokeText('★',cx,cy);
      ctx.fillStyle=`rgba(${nc[0]},${nc[1]},${nc[2]},1)`;
      ctx.fillText('★',cx,cy);
    }
  });

  // Selected province dot
  if(selProv){
    for(let t=startT;t<=endT;t++){
      const ox=panX*dpr+t*imgW;
      const sx=ox+(selProv.x/MAP_W)*sw, sy=dy+(selProv.y/MAP_H)*sh;
      if(sx<-20||sx>W+20)continue;
      ctx.beginPath(); ctx.arc(sx,sy,5*dpr,0,Math.PI*2);
      ctx.fillStyle='#00d4ff'; ctx.fill();
      ctx.strokeStyle='#fff'; ctx.lineWidth=1.5*dpr; ctx.stroke();
    }
  }
}

window.addEventListener('resize',resize);
mapImg.addEventListener('load',resize);
if(mapImg.complete&&mapImg.naturalWidth)resize();
else mapImg.onload=resize;

// ── OCEAN MASK ─────────────────────────────────────────

function buildOceanMask(){
  if(oceanMask) return;
  if(!mapImg.complete||!mapImg.naturalWidth) return;

  // Sample at reduced resolution for performance
  const SAMPLE_W=500, SAMPLE_H=304;
  const tmp=document.createElement('canvas');
  tmp.width=SAMPLE_W; tmp.height=SAMPLE_H;
  const tc=tmp.getContext('2d');
  tc.drawImage(mapImg,0,0,SAMPLE_W,SAMPLE_H);
  const imgData=tc.getImageData(0,0,SAMPLE_W,SAMPLE_H);
  const px=imgData.data;

  // Build offscreen ocean mask canvas (same resolution)
  oceanCanvas=document.createElement('canvas');
  oceanCanvas.width=SAMPLE_W; oceanCanvas.height=SAMPLE_H;
  oceanCtx=oceanCanvas.getContext('2d');
  const maskData=oceanCtx.createImageData(SAMPLE_W,SAMPLE_H);
  const mp=maskData.data;

  // FPE_Map ocean color: dark purple ~(56, 46, 68)
  // Land: light beige ~(220+, 215+, 210+)
  for(let i=0;i<px.length;i+=4){
    const r=px[i],g=px[i+1],b=px[i+2];
    // Ocean: dark and slightly purple/blue-ish
    const isDark=r<100&&g<90&&b<110;
    const isLand=r>160&&g>155&&b>145;
    if(isDark&&!isLand){
      // Blue ocean tint
      mp[i]=30; mp[i+1]=80; mp[i+2]=180; mp[i+3]=55;
    } else {
      mp[i]=0; mp[i+1]=0; mp[i+2]=0; mp[i+3]=0;
    }
  }
  oceanCtx.putImageData(maskData,0,0);
  oceanMask=true;
  draw();
}

// Build mask after image loads
if(mapImg.complete&&mapImg.naturalWidth) buildOceanMask();
else mapImg.addEventListener('load',buildOceanMask);

// ── AUTH ───────────────────────────────────────────────────
function clockTick(){const n=new Date();const e=document.getElementById('ac');if(e)e.textContent=String(n.getHours()).padStart(2,'0')+':'+String(n.getMinutes()).padStart(2,'0');}
setInterval(clockTick,1000);clockTick();

window.aSw=function(t){
  document.getElementById('fL').style.display=t==='l'?'':'none';
  document.getElementById('fR').style.display=t==='r'?'':'none';
  document.getElementById('tabL').className='atab'+(t==='l'?' active':'');
  document.getElementById('tabR').className='atab'+(t==='r'?' active':'');
  clrMsg();
};
function clrMsg(){['ae','ao'].forEach(id=>{const e=document.getElementById(id);e.className=e.className.replace(' show','');e.textContent='';})};
function aErr(m){const e=document.getElementById('ae');e.textContent='// ERROR: '+m;e.className='aerr show';};
function aOk(m){const e=document.getElementById('ao');e.textContent=m;e.className='aok show';};

window.doLogin=async function(){
  clrMsg();
  const em=document.getElementById('lE').value.trim(),pw=document.getElementById('lP').value;
  const btn=document.getElementById('lBtn');
  if(!em||!pw){aErr('Fill all fields');return;}
  btn.disabled=true;btn.textContent='[ LOGGING IN... ]';
  const{data,error}=await sb.auth.signInWithPassword({email:em,password:pw});
  if(error){aErr(error.message==='Invalid login credentials'?'Email or password incorrect':error.message);btn.disabled=false;btn.textContent='[ LOGIN → ]';return;}
  cu=data.user;await afterLogin();
};

window.doRegister=async function(){
  clrMsg();
  const un=document.getElementById('rU').value.trim(),em=document.getElementById('rE').value.trim(),pw=document.getElementById('rP').value;
  const btn=document.getElementById('rBtn');
  if(!un||!em||!pw){aErr('Fill all fields');return;}
  if(!/^[a-zA-Z0-9_]{3,20}$/.test(un)){aErr('Username: letters/numbers/underscores, 3-20 chars');return;}
  if(pw.length<8){aErr('Password min 8 chars');return;}
  const{data:ex}=await sb.from('profiles').select('id').eq('username',un).maybeSingle();
  if(ex){aErr('Username already taken');return;}
  btn.disabled=true;btn.textContent='[ CREATING... ]';
  const{error}=await sb.auth.signUp({email:em,password:pw,options:{data:{username:un}}});
  if(error){aErr(error.message);btn.disabled=false;btn.textContent='[ CREATE ACCOUNT → ]';return;}
  aOk('Account created! Check email to verify, then login.');
  btn.disabled=false;btn.textContent='[ CREATE ACCOUNT → ]';
};

window.doLogout=async function(){
  await sb.auth.signOut();cu=null;cp=null;mn=null;
  document.getElementById('auth').style.display='flex';
  document.getElementById('tbPl').textContent='—';
};

async function hashStr(s){const buf=await crypto.subtle.digest('SHA-256',new TextEncoder().encode(s));return Array.from(new Uint8Array(buf)).map(b=>b.toString(16).padStart(2,'0')).join('');}

async function afterLogin(){
  const{data:prof}=await sb.from('profiles').select('*').eq('id',cu.id).single();
  cp=prof;
  document.getElementById('auth').style.display='none';
  document.getElementById('tbPl').textContent=prof?.username||cu.email;
  // Owner check
  // Owner = admin flag from community profiles
  // Owner check: is_admin must be TRUE in profiles table
  // Run in Supabase SQL: UPDATE profiles SET is_admin=true WHERE id='YOUR_USER_ID';
  if(cp?.is_admin===true){
    isOwner=true;
    document.getElementById('ownerBadge').style.display='';
    document.getElementById('ownerBtn').style.display='';
    console.info('[WC] Owner mode active');
  }
  await loadWorld();
  subscribeRealtime();
  checkMyNation();
  // Auto-clear any expired cabinet members
  setTimeout(()=>clearExpiredCabinet(),2000);
  startTickTimer();
};

// ── WORLD ──────────────────────────────────────────────────
async function loadWorld(){
  try{
    const[{data:nd},{data:od}]=await Promise.all([sb.from('wc_nations').select('*'),sb.from('wc_ownership').select('*')]);
    if(nd)nd.forEach(n=>{nations[n.id]=n;natColors[n.id]=hexRgb(n.color||'#ff6b6b');});
    if(od)od.forEach(o=>{ownership[o.province_id]=o.nation_id;});
    document.getElementById('tbN').textContent=Object.keys(nations).length;
    draw();
  }catch(e){
    console.warn('World load:',e.message);
    if(e.message?.includes('relation') || e.message?.includes('does not exist')){
      toast('DB tables not created yet — run wc_schema.sql in Supabase!');
    }
  }
}

let _rtChannel=null;
function subscribeRealtime(){
  // Remove existing channel if any (prevent duplicate WebSocket connections)
  if(_rtChannel){try{sb.removeChannel(_rtChannel);}catch(e){} _rtChannel=null;}

  // Single unified channel for all realtime events
  _rtChannel=sb.channel('wc-realtime-v2')
    .on('postgres_changes',{event:'INSERT',schema:'public',table:'wc_ownership'},payload=>{
      const{province_id,nation_id}=payload.new;
      ownership[province_id]=nation_id;
      draw();
      if(nation_id!==mn?.id){
        const n=nations[nation_id];
        toast((n?.name||'Someone')+' claimed '+(byId[province_id]?.name||'a province')+'!');
      }
    })
    .on('postgres_changes',{event:'DELETE',schema:'public',table:'wc_ownership'},payload=>{
      const pid=payload.old?.province_id;
      if(pid)delete ownership[pid];
      draw();
    })
    .on('postgres_changes',{event:'INSERT',schema:'public',table:'wc_nations'},payload=>{
      const n=payload.new;nations[n.id]=n;natColors[n.id]=hexRgb(n.color||'#ff6b6b');
      document.getElementById('tbN').textContent=Object.keys(nations).length;
      draw();
    })
    .on('postgres_changes',{event:'UPDATE',schema:'public',table:'wc_nations'},payload=>{
      const n=payload.new;nations[n.id]=n;natColors[n.id]=hexRgb(n.color||'#ff6b6b');
      if(mn&&n.id===mn.id){mn={...mn,...n};updateNatUI();}
      draw();
    })
    .on('postgres_changes',{event:'DELETE',schema:'public',table:'wc_nations'},payload=>{
      const nid=payload.old?.id;if(!nid)return;
      delete nations[nid];delete natColors[nid];
      Object.keys(ownership).forEach(pid=>{if(ownership[pid]===nid)delete ownership[pid];});
      document.getElementById('tbN').textContent=Object.keys(nations).length;
      draw();
    })
    .subscribe(status=>{
      const dot=document.querySelector('.tbd');
      if(dot){
        const ok=status==='SUBSCRIBED';
        dot.style.background=ok?'#40ff80':'#ff6b6b';
        dot.style.boxShadow='0 0 4px '+(ok?'#40ff80':'#ff6b6b');
      }
    });

  // Poll fallback every 30s for environments that block WebSockets
  setInterval(async()=>{
    const{data:od}=await sb.from('wc_ownership').select('*').limit(2000);
    if(!od)return;
    const newOwn={};od.forEach(o=>{newOwn[o.province_id]=o.nation_id;});
    let changed=false;
    Object.keys(newOwn).forEach(pid=>{if(ownership[pid]!==newOwn[pid]){ownership[pid]=newOwn[pid];changed=true;}});
    Object.keys(ownership).forEach(pid=>{if(!newOwn[pid]){delete ownership[pid];changed=true;}});
    if(changed)draw();
  },30000);
}

// ── OFFLINE RESOURCE TICK ───────────────────────────────────
// Resources accumulate while offline! On login, calc how many ticks passed.
async function applyOfflineTick(nation){
  const now=Date.now();
  const last=new Date(nation.last_tick_at||nation.created_at||now).getTime();
  const ticks=Math.floor((now-last)/(TICK_HOURS*3600000));
  if(ticks<=0)return nation;
  const inc=calcIncome(nation.id);
  const maxTicks=72; // cap at 72 hours offline
  const t=Math.min(ticks,maxTicks);
  const updates={
    gold:Math.round(nation.gold+inc.gold*t),
    manpower:Math.round(nation.manpower+inc.mp*t),
    supply:Math.round(nation.supply+inc.sup*t),
    last_tick_at:new Date().toISOString(),
  };
  // Weekly politician influence
  const withPol=applyPoliticianInfluence({...nation,...updates});
  Object.assign(updates,{party_support:withPol.party_support,last_pol_week:withPol.last_pol_week});
  // Only save cabinet/active_laws if columns exist (ignore error if not)
  try{await sb.from('wc_nations').update(updates).eq('id',nation.id);}catch(e){}
  await sb.from('wc_nations').update(updates).eq('id',nation.id);
  if(ticks>0)toast('Offline: collected '+t+' ticks of resources!');
  return{...nation,...updates};
}

function calcIncome(nid){
  const nation=nations[nid]||mn;
  let gold=0,mp=0,sup=0;
  Object.entries(ownership).forEach(([pid,n])=>{
    if(n!==nid)return;
    const p=byId[pid];if(!p)return;
    const isCapProv=nation?.capital_id&&parseInt(pid)===nation.capital_id;
    const mult=isCapProv?1.5:1;
    gold+=p.gold*mult; mp+=p.manpower*mult; sup+=p.supply*mult;
  });
  const mod=GOVS[nation?.gov]?.bonus||'';
  if(mod.includes('+20% Gold'))gold*=1.20;
  else if(mod.includes('+15% Gold'))gold*=1.15;
  if(mod.includes('+25% Manpower'))mp*=1.25;
  else if(mod.includes('+15% Manpower'))mp*=1.15;
  else if(mod.includes('+10% Manpower'))mp*=1.10;
  // Cabinet bonus (uses trait-adjusted computePosBonus)
  if(nid===mn?.id){
    const cab=cabinetBonus();
    gold*=(1+Math.max(-50,cab.gold)/100);
    mp*=(1+Math.max(-50,cab.manpower)/100);
    sup*=(1+Math.max(-50,cab.supply)/100);
    // Active laws income modifiers
    const active=(nation?.active_laws||[]);
    active.forEach(key=>{
      const law=LAWS[key];if(!law)return;
      Object.entries(law.buffs||{}).forEach(([k,v])=>{
        if(k==='gold')gold*=(1+v/100);
        else if(k==='manpower'||k==='mp')mp*=(1+v/100);
        else if(k==='supply')sup*=(1+v/100);
      });
      Object.entries(law.debuffs||{}).forEach(([k,v])=>{
        if(k==='gold')gold*=(1+v/100);
        else if(k==='manpower'||k==='mp')mp*=(1+v/100);
        else if(k==='supply')sup*=(1+v/100);
      });
    });
  }
  return{gold:Math.max(1,Math.round(gold)),mp:Math.max(1,Math.round(mp)),sup:Math.max(1,Math.round(sup))};
}

// Local tick timer — updates every minute, applies full tick every TICK_HOURS
let tickInterval=null;
function startTickTimer(){
  if(tickInterval)clearInterval(tickInterval);
  tickInterval=setInterval(async()=>{
    if(!mn)return;
    const now=Date.now();
    const last=new Date(mn.last_tick_at||mn.created_at||now).getTime();
    const ticks=Math.floor((now-last)/(TICK_HOURS*3600000));
    if(ticks>0){
      mn=await applyOfflineTick(mn);
      nations[mn.id]=mn;
      updateNatUI();
    }
    await processPendingLaws();
    await processMigration();
    updateTickDisplay();
  },60000);
  updateTickDisplay();
}

function updateTickDisplay(){
  if(!mn)return;
  const now=Date.now();
  const last=new Date(mn.last_tick_at||mn.created_at||now).getTime();
  const nextTick=last+TICK_HOURS*3600000;
  const rem=Math.max(0,Math.ceil((nextTick-now)/60000));
  const el=document.getElementById('rTick');
  if(el)el.textContent=rem+'m';
}

// ── NATION SETUP ───────────────────────────────────────────
function checkMyNation(){
  const mine=Object.values(nations).find(n=>n.owner_id===cu?.id);
  if(mine){
    mn=mine;natColors[mine.id]=hexRgb(mine.color||'#f0c040');
    applyOfflineTick(mine).then(updated=>{
      mn={...mn,...updated};nations[mn.id]=mn;updateNatUI();
    });
    updateNatUI();draw();
  }
  else{
    // No nation — show noNat panel, hide pol panel
    const _noNat=document.getElementById('noNat');
    const _pol=document.getElementById('sbPolPanel');
    const _diplo=document.getElementById('sbDiploPanel');
    if(_noNat) _noNat.style.display='';
    if(_pol) _pol.style.display='none';
    if(_diplo) _diplo.style.display='none';
    document.getElementById('sbN').textContent='No Nation';
    document.getElementById('sbG').textContent='';
  }
}

window.openSetup=function(){if(!cu){toast('Login first');return;}document.getElementById('setup').style.display='flex';};

// ── FLAG / LEADER HELPERS ───────────────────────────────────
window.prevFlag=function(e){previewFile(e.target,'sFlagPrev');};
window.prevLead=function(e){previewFile(e.target,'sLeadPrev');};

// Preview file before upload (replaces inline URL.createObjectURL)
window.previewFile=function(input,imgId){
  const f=input.files[0]; if(!f)return;
  const img=document.getElementById(imgId);
  const reader=new FileReader();
  reader.onload=e=>{img.src=e.target.result;img.style.display='block';};
  reader.readAsDataURL(f);
};

function fileToDataUrl(file){
  return new Promise(resolve=>{
    const r=new FileReader();
    r.onload=e=>resolve(e.target.result);
    r.onerror=()=>resolve(null);
    r.readAsDataURL(file);
  });
}

async function uploadAsset(file,path){
  if(!file)return null;
  // First try Supabase Storage
  try{
    const{data:up,error}=await sb.storage.from('game-assets').upload(path,file,{upsert:true,contentType:file.type});
    if(!error){
      const{data}=sb.storage.from('game-assets').getPublicUrl(path);
      return data.publicUrl+'?v='+Date.now();
    }
    console.warn('Storage error:',error.message,'→ using base64 fallback');
  }catch(e){
    console.warn('Storage exception:',e.message,'→ using base64 fallback');
  }
  // Fallback: store as base64 data URL directly in DB column
  return await fileToDataUrl(file);
}

// ── HOI4 SIDEBAR UPDATE ──────────────────────────────────

// ── MAIN SIDEBAR UPDATE ──────────────────────────────────
function updateNatUI(){
  if(!mn) return;
  const g=id=>document.getElementById(id);
  // Ghost IDs for legacy compatibility
  if(g('sbN')) g('sbN').textContent=mn.name;
  if(g('sbG')) g('sbG').textContent=mn.gov||'';
  const inc=calcIncome(mn.id);
  if(g('rG'))   g('rG').textContent=Math.round(mn.gold);
  if(g('rM'))   g('rM').textContent=Math.round(mn.manpower);
  if(g('rS'))   g('rS').textContent=Math.round(mn.supply);
  if(g('rSt'))  g('rSt').textContent=mn.stability+'%';
  if(g('iG'))   g('iG').textContent='+'+inc.gold+'/hr';
  if(g('iM'))   g('iM').textContent='+'+inc.mp+'/hr';
  if(g('iSup')) g('iSup').textContent='+'+inc.sup+'/hr';

  // Show/hide panels
  const noNat=g('noNat'),polPanel=g('sbPolPanel'),diploPanel=g('sbDiploPanel'),unclPanel=g('sbUnclaimedPanel');
  if(noNat) noNat.style.display='none';
  if(polPanel) polPanel.style.display='';
  if(diploPanel) diploPanel.style.display='none';
  if(unclPanel) unclPanel.style.display='none';

  updateFlagLeader();
  updateSbPolPanel();
  updateTickDisplay();
  refreshSb();
}

function updateFlagLeader(){
  if(!mn) return;
  // Sidebar flag banner
  const fb=document.getElementById('sbFlagBanner'),fi=document.getElementById('sbFlagImg');
  if(fb&&fi){if(mn.flag_url){fi.src=mn.flag_url;fb.style.display='';}else fb.style.display='none';}
  // Leader portrait
  const lf=document.getElementById('sbLeaderFrame');
  if(lf){
    lf.innerHTML=mn.leader_url
      ?'<img src="'+mn.leader_url+'" alt="" style="width:64px;height:80px;object-fit:cover;object-position:top;display:block;">'
      :'👤';
  }
  // Topbar flag (HOI4-style)
  updateTopbarFlag();
  // Party pie + compact list
  updatePartySection();
}

function updateTopbarFlag(){
  const area=document.getElementById('tbFlagArea');
  const img=document.getElementById('tbFlagImg');
  const ph=document.getElementById('tbFlagPh');
  if(!area) return;
  if(mn&&mn.flag_url){
    area.classList.add('vis');
    img.src=mn.flag_url; img.style.display='block';
    if(ph) ph.style.display='none';
  } else if(mn){
    area.classList.add('vis');
    img.style.display='none';
    if(ph){ph.style.display='flex';ph.textContent='🏳';}
  } else {
    area.classList.remove('vis');
  }
}

function updatePartySection(){
  if(!mn) return;
  const ps=mn.party_support||{};
  const psec=document.getElementById('partySection');
  if(!psec||!Object.keys(ps).length) return;
  psec.style.display='';

  const govData=GOVS[mn.gov]||{};
  const govColor=govData.color||'#aaa';

  const nameEl=document.getElementById('sbIdeologyName');
  const axisEl=document.getElementById('sbIdeologyAxis');
  if(nameEl){nameEl.textContent=mn.gov||'';nameEl.style.color=govColor;}
  if(axisEl) axisEl.textContent=(govData.axis||'').toUpperCase();

  // Top 4 parties only (current gov always included if not in top 4)
  const sorted=Object.entries(ps).filter(([,v])=>v>0).sort((a,b)=>b[1]-a[1]);
  let top4=sorted.slice(0,4);
  // Ensure current gov is always shown
  if(mn.gov && !top4.find(([n])=>n===mn.gov)){
    const govEntry=sorted.find(([n])=>n===mn.gov);
    if(govEntry) top4=[govEntry,...top4.slice(0,3)];
  }

  const rowsEl=document.getElementById('sbPartyRows');
  if(rowsEl){
    rowsEl.innerHTML=top4.map(([name,pct])=>{
      const g=GOVS[name];const col=g?g.color:'#888';const isCur=name===mn.gov;
      return '<div class="sb-party-row">'
        +'<div class="sb-party-dot" style="background:'+col+(isCur?';box-shadow:0 0 5px '+col+'80':'')+'"></div>'
        +'<span class="sb-party-name'+(isCur?' cur':'')+'" style="'+(isCur?'color:'+col+';font-weight:bold;':'')+'">'+name+'</span>'
        +'<span class="sb-party-pct" style="color:'+col+'">'+pct+'</span>'
        +'</div>';
    }).join('');
  }

  // Pie chart with tooltip support
  drawPartyPie();
}

// Store slice data for tooltip
let _pieSlices=[];

function drawPartyPie(){
  const canvas=document.getElementById('partyPieCanvas');
  if(!canvas||!mn) return;
  const ps=mn.party_support||{};
  const entries=Object.entries(ps).filter(([,v])=>v>0).sort((a,b)=>b[1]-a[1]);
  if(!entries.length) return;

  const ctx=canvas.getContext('2d');
  const W=canvas.width,H=canvas.height;
  const cx=W/2,cy=H/2,R=Math.min(W,H)/2-2;
  ctx.clearRect(0,0,W,H);

  const total=entries.reduce((s,[,v])=>s+v,0);
  let angle=-Math.PI/2;
  _pieSlices=[];

  entries.forEach(([name,pct])=>{
    const g=GOVS[name];
    const col=g?.color||'#888';
    const isCur=name===mn.gov;
    const sweep=(pct/total)*Math.PI*2;
    const r=isCur?R:R-1.5;

    _pieSlices.push({name,pct,col,startAngle:angle,sweep,cx,cy,r});

    ctx.beginPath();
    ctx.moveTo(cx,cy);
    ctx.arc(cx,cy,r,angle,angle+sweep);
    ctx.closePath();
    ctx.fillStyle=col+(isCur?'ff':'99');
    ctx.fill();
    ctx.strokeStyle='rgba(8,8,20,.7)';
    ctx.lineWidth=1;
    ctx.stroke();

    if(isCur){
      ctx.beginPath();
      ctx.arc(cx,cy,R,angle,angle+sweep);
      ctx.strokeStyle=col;
      ctx.lineWidth=2;
      ctx.stroke();
    }

    angle+=sweep;
  });

  // Center circle
  ctx.beginPath();
  ctx.arc(cx,cy,R*0.18,0,Math.PI*2);
  ctx.fillStyle='#0d0f18';
  ctx.fill();
  ctx.strokeStyle=GOVS[mn.gov]?.color||'#888';
  ctx.lineWidth=1.5;
  ctx.stroke();

  // Register tooltip listener (once)
  if(!canvas._pieTooltipBound){
    canvas._pieTooltipBound=true;
    canvas.addEventListener('mousemove',pieMouseMove);
    canvas.addEventListener('mouseleave',()=>{
      const t=document.getElementById('pieTooltip');
      if(t) t.style.display='none';
    });
  }
}

function pieMouseMove(e){
  const canvas=e.currentTarget;
  const rect=canvas.getBoundingClientRect();
  const mx=e.clientX-rect.left, my=e.clientY-rect.top;
  const tip=document.getElementById('pieTooltip');
  if(!tip) return;

  let hit=null;
  for(const s of _pieSlices){
    const dx=mx-s.cx, dy=my-s.cy;
    const dist=Math.sqrt(dx*dx+dy*dy);
    if(dist>s.r||dist<s.r*0.18) continue;
    let a=Math.atan2(dy,dx);
    // Normalize angle relative to slice start
    let rel=a-s.startAngle;
    if(rel<0) rel+=Math.PI*2;
    if(rel>=0&&rel<=s.sweep){hit=s;break;}
  }

  if(hit){
    tip.style.display='block';
    tip.style.left=(e.clientX+10)+'px';
    tip.style.top=(e.clientY-10)+'px';
    tip.innerHTML='<span style="color:'+hit.col+'">'+hit.name+'</span> <span style="color:rgba(200,232,255,.6)">'+hit.pct+'%</span>';
    tip.style.borderColor=hit.col+'55';
  } else {
    tip.style.display='none';
  }
}



function updateSbPolPanel(){
  if(!mn) return;
  const g=id=>document.getElementById(id);
  const govData=GOVS[mn.gov]||{};
  const govColor=govData.color||'#aaa';
  const inc=calcIncome(mn.id);

  // Nation name + gov
  if(g('sbPolName')){g('sbPolName').textContent=mn.name;}
  if(g('sbPolGov')){g('sbPolGov').textContent=mn.gov||'';g('sbPolGov').style.color=govColor;}
  if(g('sbRulerName')){g('sbRulerName').textContent=mn.ruler||'';}

  // Resources
  if(g('sbResGold'))  g('sbResGold').textContent=Math.round(mn.gold);
  if(g('sbResMP'))    g('sbResMP').textContent=Math.round(mn.manpower);
  if(g('sbResSup'))   g('sbResSup').textContent=Math.round(mn.supply);
  if(g('sbResStab'))  g('sbResStab').textContent=mn.stability+'%';
  if(g('sbResGoldInc')) g('sbResGoldInc').textContent='+'+inc.gold+'/hr';
  if(g('sbResMPInc'))   g('sbResMPInc').textContent='+'+inc.mp+'/hr';
  if(g('sbResSupInc'))  g('sbResSupInc').textContent='+'+inc.sup+'/hr';

  // Stability bar
  const stab=mn.stability||0;
  const stabCol=stab>60?'#40ff80':stab>30?'#f0c040':'#ff6b6b';
  const sf=g('sbStabFill');
  if(sf){sf.style.width=stab+'%';sf.style.background=stabCol;}
  const sv=g('sbResStab');
  if(sv) sv.style.color=stabCol;

  // National Spirits
  const activeLaws=mn.active_laws||[];
  const catIcon={Government:'🏛','Public Health':'🏥',Freedom:'🕊',Taxation:'💰',Economy:'⚙',Military:'⚔',Culture:'🎭',Trade:'🚢',Science:'🔬',Social:'👥',Environment:'🌿'};
  const catColor={Government:'#9b6dff','Public Health':'#40ff80',Freedom:'#5bc4ff',Taxation:'#f0c040',Economy:'#ff9540',Military:'#ff6b6b',Culture:'#ff6bff',Trade:'#40d4cc',Science:'#c0e0ff',Social:'#ffb347',Environment:'#7fff7f'};
  const spiritWrap=g('sbSpiritIcons');
  if(spiritWrap){
    spiritWrap.innerHTML='';
    activeLaws.slice(0,4).forEach(k=>{
      const l=LAWS[k]; if(!l) return;
      const icon=catIcon[l.cat]||'📜';
      const col=catColor[l.cat]||'#aaa';
      const d=document.createElement('div');
      d.className='sb-spirit-icon';
      d.dataset.tip=l.name;
      d.textContent=icon;
      d.style.borderColor=col+'50';
      d.style.background=col+'12';
      spiritWrap.appendChild(d);
    });
  }
  const spiritEmpty=g('sbSpiritEmpty');
  if(spiritEmpty){
    spiritEmpty.innerHTML='';
    const remaining=Math.max(0,4-activeLaws.length);
    for(let i=0;i<remaining;i++){
      const d=document.createElement('div');
      d.className='sb-spirit-empty';
      spiritEmpty.appendChild(d);
    }
  }

  // Party support — delegated to updatePartySection()
  updatePartySection();

  // Laws tab
  updateSbLawsTab();

  // Stats tab
  const sg=g('sbStatsGrid');
  if(sg){
    const tick=g('rTick')?.textContent||'—';
    sg.innerHTML='<div class="sb-stats-cell"><div class="sb-stats-val" style="color:'+stabCol+'">'+stab+'%</div><div class="sb-stats-lbl">STABILITY</div></div>'
      +'<div class="sb-stats-cell"><div class="sb-stats-val" style="color:#f0c040">'+Math.round(mn.gold)+'</div><div class="sb-stats-lbl">GOLD</div></div>'
      +'<div class="sb-stats-cell"><div class="sb-stats-val" style="color:#5bc4ff">'+Math.round(mn.manpower)+'</div><div class="sb-stats-lbl">MANPOWER</div></div>'
      +'<div class="sb-stats-cell"><div class="sb-stats-val" style="color:#40d4cc">'+Math.round(mn.supply)+'</div><div class="sb-stats-lbl">SUPPLY</div></div>'
      +'<div class="sb-stats-cell"><div class="sb-stats-val" style="color:rgba(200,185,140,.6)">'+inc.gold+'/hr</div><div class="sb-stats-lbl">+GOLD/HR</div></div>'
      +'<div class="sb-stats-cell"><div class="sb-stats-val" style="color:rgba(200,185,140,.6)">'+inc.mp+'/hr</div><div class="sb-stats-lbl">+MP/HR</div></div>'
      +'<div class="sb-stats-cell" style="grid-column:span 2"><div class="sb-stats-val" style="font-size:9px;color:rgba(200,185,140,.5)">⏱ NEXT TICK: '+tick+'</div><div class="sb-stats-lbl">'+Object.values(ownership).filter(v=>v===mn.id).length+' TERRITORIES</div></div>';
  }
}

function updateSbLawsTab(){
  if(!mn) return;
  const el=document.getElementById('sbLawsContent');
  if(!el) return;
  const activeLaws=mn.active_laws||[];
  const catColor={Government:'#9b6dff','Public Health':'#40ff80',Freedom:'#5bc4ff',Taxation:'#f0c040',Economy:'#ff9540',Military:'#ff6b6b',Culture:'#ff6bff',Trade:'#40d4cc',Science:'#c0e0ff',Social:'#ffb347',Environment:'#7fff7f'};
  let html='';
  if(activeLaws.length){
    const cats=[...new Set(activeLaws.map(k=>LAWS[k]?.cat).filter(Boolean))];
    cats.forEach(cat=>{
      const col=catColor[cat]||'#aaa';
      html+='<div class="sb-law-sec-hdr" style="border-color:'+col+'55;color:'+col+'80">'+cat.toUpperCase()+'</div>';
      html+='<div class="sb-law-chips">';
      activeLaws.filter(k=>LAWS[k]?.cat===cat).forEach(k=>{
        const l=LAWS[k];
        html+='<span class="sb-law-chip" style="border-color:'+col+'40;color:'+col+'">'+l.name+'</span>';
      });
      html+='</div>';
    });
  } else {
    html='<div style="padding:8px;font-size:8px;color:rgba(200,185,140,.25)">No laws enacted</div>';
  }
  html+='<button class="sb-law-add-btn" onclick="openPolModal()">[ ⚖ MANAGE LAWS & GOVERNMENT ]</button>';
  el.innerHTML=html;
}

window.sbSwitchTab=function(idx){
  for(let i=0;i<4;i++){
    const t=document.getElementById('sbTab'+i);
    const p=document.getElementById('sbPanel'+i);
    if(t) t.classList.toggle('active',i===idx);
    if(p) p.classList.toggle('active',i===idx);
  }
  if(idx===3) renderNavalTab();
};

function refreshSb(){
  if(!mn) return;
  const el=document.getElementById('sbProvList');
  if(!el) return;
  const mine=Object.entries(ownership).filter(([_,n])=>n===mn.id).map(([pid])=>byId[pid]).filter(Boolean);
  el.innerHTML=mine.map(p=>{
    const act=selProv?.id===p.id?' active':'';
    const coastTag=p.terrain==='coast'?' ⚓':'';
    return '<div class="sb-pi'+act+'" style="display:flex;align-items:center;justify-content:space-between;padding-right:4px">'
      +'<div onclick="selProvById('+p.id+')" style="flex:1;cursor:pointer;padding:4px 0 4px 10px">'+p.name+coastTag
      +'<br><span class="sb-pi-sub">'+p.terrain+' · '+p.gold+'g · '+p.manpower+'mp</span></div>'
      +'<button onclick="openProvModal('+p.id+')" style="background:none;border:1px solid rgba(180,160,100,.2);color:rgba(180,160,100,.4);font-size:9px;padding:2px 5px;cursor:pointer;font-family:var(--mono);flex-shrink:0" title="Province Details">⊞</button>'
      +'</div>';
  }).join('');
}

// ── SHOW PANEL — decides which sidebar state to show ─────
function showPanel(p){
  if(!p) return;
  _pmodProv=p;
  const oid=ownership[p.id], owner=oid?nations[oid]:null;
  const isOwn=mn&&oid===mn.id;
  const isDiplo=!isOwn&&!!oid&&!!mn;

  const g=id=>document.getElementById(id);
  const noNat=g('noNat'), polPanel=g('sbPolPanel'), diploPanel=g('sbDiploPanel'), unclPanel=g('sbUnclaimedPanel');

  // Hide all panels first
  if(noNat) noNat.style.display='none';
  if(polPanel) polPanel.style.display='none';
  if(diploPanel) diploPanel.style.display='none';
  if(unclPanel) unclPanel.style.display='none';

  if(isOwn){
    if(polPanel) polPanel.style.display='';
    updateSbPolPanel();
    sbSwitchTab(1);
    refreshSb();
    // Open province detail modal
    openProvModal(p.id);
  } else if(isDiplo && owner){
    if(diploPanel) diploPanel.style.display='';
    showSbDiplo(p, owner, oid);
    // Open province detail modal for foreign province
    openProvModal(p.id);
  } else if(mn){
    // Unclaimed — show own political, open modal
    if(polPanel) polPanel.style.display='';
    updateSbPolPanel();
    sbSwitchTab(1);
    refreshSb();
    showSbUnclaimedInline(p);
    openProvModal(p.id);
  } else {
    if(unclPanel) unclPanel.style.display='';
    showSbUnclaimed(p);
    openProvModal(p.id);
  }
}

function showSbDiplo(p, owner, oid){
  const g=id=>document.getElementById(id);
  const govColor=(GOVS[owner.gov]?.color)||'#aaa';
  const stab=owner.stability||0;
  const stabCol=stab>60?'#40ff80':stab>30?'#f0c040':'#ff6b6b';

  // Flag
  const fi=g('sbDiploFlagImg'), fp=g('sbDiploFlagPh');
  if(owner.flag_url){if(fi){fi.src=owner.flag_url;fi.style.display='block';}if(fp)fp.style.display='none';}
  else{if(fi)fi.style.display='none';if(fp){fp.style.display='';fp.textContent='🏳';}}

  // Portrait
  const pi=g('sbDiploPortrait'), pp=g('sbDiploPortraitPh');
  if(owner.leader_url){if(pi){pi.src=owner.leader_url;pi.style.display='block';}if(pp)pp.style.display='none';}
  else{if(pi)pi.style.display='none';if(pp){pp.style.display='';pp.textContent='👤';}}

  // Info
  if(g('sbDiploName'))  g('sbDiploName').textContent=owner.name;
  if(g('sbDiploGov'))   {g('sbDiploGov').textContent=owner.gov||'';g('sbDiploGov').style.color=govColor;}
  if(g('sbDiploRuler')) g('sbDiploRuler').textContent=owner.ruler||'';

  // Stats
  const territories=Object.values(ownership).filter(v=>v===oid).length;
  if(g('sbDiploStab'))    {g('sbDiploStab').textContent=stab+'%';g('sbDiploStab').style.color=stabCol;}
  if(g('sbDiploTerr'))    g('sbDiploTerr').textContent=territories;
  if(g('sbDiploProv'))    g('sbDiploProv').textContent=p.name.slice(0,8);
  if(g('sbDiploTerrain')) g('sbDiploTerrain').textContent=p.terrain[0].toUpperCase()+p.terrain.slice(1);

  // Province card inside diplo
  const pc=g('sbDiploProvCard');
  if(pc){
    pc.style.display='';
    if(g('sbDiploProvName')) g('sbDiploProvName').textContent=p.name;
    if(g('sbDiploProvSub'))  g('sbDiploProvSub').textContent=p.terrain+' · ~'+getProvPopEst(p.id)+'k pop';
    if(g('sbDiploProvYields')) g('sbDiploProvYields').innerHTML='💰 '+p.gold+' &nbsp;⚔ '+p.manpower+' &nbsp;⚙ '+p.supply;
  }
}

function showSbUnclaimed(p){
  const g=id=>document.getElementById(id);
  const _pp=getProvPeople(p.id);
  const _pop=getProvPopEst(p.id);
  if(g('sbUnclName')) g('sbUnclName').textContent=p.name;
  if(g('sbUnclSub'))  g('sbUnclSub').textContent=p.terrain[0].toUpperCase()+p.terrain.slice(1)+' · ~'+_pop+'k pop · '+_pp.name+' peoples';
  const yields=g('sbUnclYields');
  if(yields){
    yields.innerHTML='<div class="sb-uncl-yield"><div class="sb-uncl-yval">'+p.gold+'</div><div class="sb-uncl-ylbl">💰 GOLD</div></div>'
      +'<div class="sb-uncl-yield"><div class="sb-uncl-yval">'+p.manpower+'</div><div class="sb-uncl-ylbl">⚔ MANPOWER</div></div>'
      +'<div class="sb-uncl-yield"><div class="sb-uncl-yval">'+p.supply+'</div><div class="sb-uncl-ylbl">⚙ SUPPLY</div></div>';
  }
  const acts=g('sbUnclActions');
  if(acts){
    if(!mn){
      acts.innerHTML=btn('⚑ Found Nation Here','prim','openSetup()');
    } else {
      const adj=isAdj(p.id);
      acts.innerHTML=btn('▶ Claim Province (30 Gold)','prim','claimP('+p.id+')',!adj,adj?'':'Not adjacent');
    }
  }
}

// Show unclaimed province info inline at bottom of own province list
function showSbUnclaimedInline(p){
  const _pp=getProvPeople(p.id);
  const _pop=getProvPopEst(p.id);
  const adj=isAdj(p.id);
  const el=document.getElementById('sbProvList');
  if(!el) return;
  // Append unclaimed card below province list
  const existing=el.querySelector('.sb-uncl-inline');
  if(existing) existing.remove();
  const div=document.createElement('div');
  div.className='sb-uncl-inline';
  div.innerHTML='<div class="sb-uncl-inline-hdr">UNCLAIMED PROVINCE</div>'
    +'<div class="sb-uncl-inline-name">🗺 '+p.name+'</div>'
    +'<div class="sb-uncl-inline-sub">'+p.terrain[0].toUpperCase()+p.terrain.slice(1)+' · ~'+_pop+'k pop · '+_pp.name+' peoples</div>'
    +'<div class="sb-uncl-inline-yields">'
    +'<span>💰 '+p.gold+'</span><span>⚔ '+p.manpower+'</span><span>⚙ '+p.supply+'</span>'
    +'</div>'
    +(adj
      ? '<button class="sb-uncl-inline-btn" onclick="claimP('+p.id+')">▶ Claim (30 Gold)</button>'
      : '<div class="sb-uncl-inline-na">Not adjacent to your territory</div>');
  el.appendChild(div);
}

window.selProvById=function(pid){closeDiploPanel&&closeDiploPanel();selProv=byId[pid];draw();showPanel(selProv);refreshSb();};

// ── PROVINCE PANEL ─────────────────────────────────────────
function isAdj(pid){
  if(!mn)return false;
  // Use pre-built grid adjacency — accurate, no distance heuristics
  const neighbors=ADJ_GRAPH[pid]||[];
  return neighbors.some(nid=>ownership[nid]===mn.id);
}

// ── Current tab state ────────────────────────────────────
let _ipTab='prov', _ipProv=null;

// ── CLOSE PANEL ──────────────────────────────────────────
window.closeInfoPanel=window.closeProvCard=window.closeDiploPanel=window.closeProvPanel=function(){
  // sidebar never "closes" — just reset to own nation if available
  if(mn) showPanel(null); // no-op, panel stays
  selProv=null; draw();
};

window.openInfoFromCard=function(){ /* no-op */ };

// ── SIDEBAR OPEN/CLOSE ────────────────────────────────────
function setSbVisible(visible){
  const sb=document.getElementById('sb');
  const btn=document.getElementById('sbEdgeBtn');
  if(visible){
    sb.classList.remove('sb-hidden');
    if(btn){btn.textContent='◀';btn.style.display='';}
  } else {
    sb.classList.add('sb-hidden');
    if(btn){btn.textContent='▶';btn.style.display='';}
  }
}

window.toggleSbDesktop=function(){
  const sb=document.getElementById('sb');
  setSbVisible(sb.classList.contains('sb-hidden'));
};

// Q = scroll to party support, S = toggle sidebar
window.toggleNatPanel=function(){
  const sb=document.getElementById('sb');
  if(sb.classList.contains('sb-hidden')){
    setSbVisible(true);
  } else {
    const psec=document.getElementById('partySection');
    if(psec) sb.scrollTo({top:psec.offsetTop-40,behavior:'smooth'});
  }
};

window.addEventListener('keydown',e=>{
  if(['INPUT','TEXTAREA','SELECT'].includes(document.activeElement?.tagName)) return;
  if(e.key==='s'||e.key==='S') toggleSbDesktop();
  if((e.key==='q'||e.key==='Q')&&mn) toggleNatPanel();
});

// Show edge button on desktop
function updateEdgeBtn(){
  const btn=document.getElementById('sbEdgeBtn');
  if(!btn) return;
  if(window.innerWidth>768){
    btn.style.display='';
  } else {
    btn.style.display='none';
  }
}


// ══ NAVAL SYSTEM ═══════════════════════════════════════════

// Get coast provinces owned by player
function getCoastProvs(){
  if(!mn) return [];
  return Object.entries(ownership)
    .filter(([pid,oid])=>oid===mn.id)
    .map(([pid])=>byId[pid])
    .filter(p=>p&&p.terrain==='coast');
}

// All sea provinces (not claimable, always visible)
function getAllSeaProvs(){
  return PROVINCES.filter(p=>p.terrain==='sea');
}

function getNaval(){
  return mn.naval||{fleets:0,frigates:0,galleons:0,patrol_boats:0,blockades:[]};
}

// Naval fleet compositions
const FLEET_TYPES={
  patrol_boat: {name:'Patrol Boat',   icon:'🚤', cost:{gold:40,supply:10},  power:1,  upkeep:2,  desc:'Fast, cheap. Good for coastline patrol.'},
  frigate:     {name:'Frigate',       icon:'⛵', cost:{gold:120,supply:30}, power:4,  upkeep:6,  desc:'Balanced warship. Core of any fleet.'},
  galleon:     {name:'Galleon',       icon:'🚢', cost:{gold:300,supply:80}, power:10, upkeep:15, desc:'Heavy warship. Dominates open seas.'},
};

function navalPower(){
  const n=getNaval();
  return (n.patrol_boats||0)*1+(n.frigates||0)*4+(n.galleons||0)*10;
}

function navalUpkeep(){
  const n=getNaval();
  return (n.patrol_boats||0)*2+(n.frigates||0)*6+(n.galleons||0)*15;
}

function renderNavalTab(){
  const el=document.getElementById('sbNavalContent');
  if(!el||!mn) return;
  const n=getNaval();
  const coasts=getCoastProvs();

  const power=navalPower();
  const upkeep=navalUpkeep();

  // Stats row
  const statsRow='<div class="naval-stat-row">'
    +'<div class="naval-stat"><div class="naval-stat-val">'+coasts.length+'</div><div class="naval-stat-lbl">⚓ PORTS</div></div>'
    +'<div class="naval-stat"><div class="naval-stat-val">'+power+'</div><div class="naval-stat-lbl">⚔ POWER</div></div>'
    +'<div class="naval-stat"><div class="naval-stat-val">-'+upkeep+'</div><div class="naval-stat-lbl">💰 UPKEEP</div></div>'
    +'</div>';

  // Fleet
  const fleetDefs=[
    {key:'patrol_boats',label:'Patrol Boats',icon:'\u{1F6A4}'},
    {key:'frigates',label:'Frigates',icon:'\u26F5'},
    {key:'galleons',label:'Galleons',icon:'\u{1F6A2}'},
  ];
  let fleetHtml='';
  fleetDefs.forEach(({key,label,icon})=>{
    const cnt=n[key]||0;
    if(cnt>0) fleetHtml+='<div class="naval-fleet-row"><span style="font-size:14px">'+icon+'</span><span style="font-size:8px;color:rgba(200,232,255,.6);flex:1">'+label+'</span><span style="font-size:8.5px;color:#5ab4ff">\u00D7'+cnt+'</span></div>';
  });
  if(!fleetHtml) fleetHtml='<div style="font-size:8px;color:rgba(90,180,255,.3);padding:4px 0">No ships built yet.</div>';

  // Build buttons (only if has coast)
  let buildHtml='';
  if(coasts.length){
    buildHtml='<div style="font-size:7px;color:rgba(90,180,255,.3);letter-spacing:.1em;margin:6px 0 3px">BUILD SHIPS</div>'
      +'<div class="naval-action-grid">';
    Object.entries(FLEET_TYPES).forEach(([key,ft])=>{
      const can=(mn.gold||0)>=ft.cost.gold&&(mn.supply||0)>=ft.cost.supply;
      const onclick='buildShip(\'' + key + '\')';
      buildHtml+='<button class="naval-act-btn" '+(can?'':'style="opacity:.4" ')
        +'onclick="'+onclick+'" title="'+ft.desc+'">'
        +'<span>'+ft.icon+'</span>'
        +'<span style="flex:1">'+ft.name+'<br><span style="font-size:6.5px;color:rgba(90,180,255,.4)">'+ft.cost.gold+'g '+ft.cost.supply+'sup</span></span>'
        +'</button>';
    });;
    buildHtml+='</div>';
  } else {
    buildHtml='<div class="naval-no-coast">No coastal ports.<br>Claim coast terrain to build ships.</div>';
  }

  // Ports list
  const portsHtml=coasts.length
    ? coasts.map(p=>'<div style="font-size:8px;color:rgba(90,180,255,.5);padding:2px 0">\u2693 '+p.name+'</div>').join('')
    : '';

  const seaList=""; // Sea provinces accessible via map click

  el.innerHTML='<div class="naval-panel">'
    +'<div class="naval-hdr">\u2693 NAVAL COMMAND</div>'
    +'<div class="naval-body">'
    +statsRow
    +'<div style="font-size:7px;color:rgba(90,180,255,.3);letter-spacing:.1em;margin-bottom:3px">FLEET</div>'
    +fleetHtml
    +buildHtml
    +(portsHtml?'<div style="font-size:7px;color:rgba(90,180,255,.3);letter-spacing:.1em;margin:8px 0 3px">PORTS</div>'+portsHtml:'')
    +'</div></div>';
}


window.buildShip=async function(type){
  if(!mn) return;
  const ft=FLEET_TYPES[type];
  if(!ft){toast('Unknown ship type');return;}
  if((mn.gold||0)<ft.cost.gold){toast('Not enough Gold (need '+ft.cost.gold+')');return;}
  if((mn.supply||0)<ft.cost.supply){toast('Not enough Supply (need '+ft.cost.supply+')');return;}
  if(getCoastProvs().length===0){toast('No coastal ports!');return;}

  const n={...getNaval()};
  const key=type+'s'; // patrol_boats, frigates, galleons
  n[key]=(n[key]||0)+1;

  const newGold=Math.round(mn.gold-ft.cost.gold);
  const newSup=Math.round(mn.supply-ft.cost.supply);
  const{error}=await sb.from('wc_nations').update({naval:n,gold:newGold,supply:newSup}).eq('id',mn.id);
  if(error){toast('Error: '+error.message);return;}
  mn.naval=n; mn.gold=newGold; mn.supply=newSup;
  nations[mn.id]=mn;
  updateNatUI();
  renderNavalTab();
  toast('⚓ Built: '+ft.name+' (Naval Power: '+navalPower()+')');
};

// ══ PROVINCE DETAIL MODAL — bottom-left card ═══════════════
let _pmodProv=null;

const TERRAIN_ICON={plains:'🌾',hills:'⛰',mountains:'🏔',forest:'🌲',coast:'⚓',sea:'🌊'};
const TERRAIN_COLOR={plains:'rgba(180,160,100,.35)',hills:'rgba(150,130,80,.35)',mountains:'rgba(120,110,90,.35)',forest:'rgba(60,140,80,.35)',coast:'rgba(90,180,255,.35)',sea:'rgba(40,140,220,.35)'};
const TERRAIN_DESC={plains:'Fertile flatland. Ideal for farming and settlement.',hills:'Rolling terrain. Good for mining and fortification.',mountains:'Harsh peaks. Rich minerals, difficult to traverse.',forest:'Dense woodland. Rich in timber and wildlife.',coast:'Coastal access. Enables naval trade and fleet building.',sea:'Open waters. Navigable by naval vessels.'};

// ── SEA PROVINCE ADJACENCY ─────────────────────────────────
// Maps sea province ID -> adjacent sea IDs and adjacent coast province IDs
const SEA_ADJ = {
  2001: { seas:[2002,2003,2007], coasts:[] },
  2002: { seas:[2001,2003,2004], coasts:[] },
  2003: { seas:[2001,2002], coasts:[] },
  2004: { seas:[2002,2005,2006], coasts:[] },
  2005: { seas:[2004,2006,2008], coasts:[] },
  2006: { seas:[2004,2005,2008], coasts:[] },
  2007: { seas:[2001,2008], coasts:[] },
  2008: { seas:[2005,2006,2007], coasts:[] },
  2009: { seas:[], coasts:[] },
  2010: { seas:[], coasts:[] },
  2011: { seas:[], coasts:[] },
  2012: { seas:[], coasts:[] },
  2013: { seas:[], coasts:[] },
  2014: { seas:[], coasts:[] },
  2015: { seas:[], coasts:[] },
  2016: { seas:[], coasts:[] },
  2017: { seas:[], coasts:[] },
};

// Compute coastal provinces adjacent to each sea province (by proximity)
function getSeaAdjacentCoasts(seaId){
  const sp=byId[seaId]; if(!sp) return [];
  // Find land provinces owned by any nation within ~180px of sea province
  return PROVINCES.filter(p=>{
    if(p.terrain==='sea') return false;
    if(!p.terrain) return false;
    const dx=p.x-sp.x, dy=p.y-sp.y;
    return Math.sqrt(dx*dx+dy*dy)<180;
  });
}

function getSeaAdjacentSeas(seaId){
  const adj=SEA_ADJ[seaId];
  if(!adj) return [];
  return adj.seas.map(id=>byId[id]).filter(Boolean);
}

// ── SEA WAVE ANIMATION ──────────────────────────────────────
let _seaWaveAnim=null;
function startSeaWave(){
  const canvas=document.getElementById('seaWaveCanvas');
  if(!canvas)return;
  canvas.width=330;canvas.height=96;
  const ctx=canvas.getContext('2d');
  let t=0;
  function frame(){
    ctx.clearRect(0,0,330,96);
    const grad=ctx.createLinearGradient(0,0,0,96);
    grad.addColorStop(0,'#060f1e');
    grad.addColorStop(1,'#071828');
    ctx.fillStyle=grad;
    ctx.fillRect(0,0,330,96);
    const waves=[
      {amp:7,freq:.022,speed:.018,y:60,col:'rgba(30,90,180,.22)'},
      {amp:5,freq:.034,speed:.025,y:68,col:'rgba(50,130,220,.18)'},
      {amp:4,freq:.018,speed:.012,y:52,col:'rgba(20,70,160,.16)'},
      {amp:3,freq:.048,speed:.03, y:75,col:'rgba(80,160,255,.12)'},
    ];
    waves.forEach(w=>{
      ctx.beginPath();
      ctx.moveTo(0,96);
      for(let x=0;x<=330;x+=2){
        const y=w.y+Math.sin(x*w.freq+t*w.speed*60)*w.amp;
        ctx.lineTo(x,y);
      }
      ctx.lineTo(330,96);ctx.closePath();
      ctx.fillStyle=w.col;ctx.fill();
    });
    for(let i=0;i<3;i++){
      const sx=((t*40+i*120)%330);
      const sy=45+Math.sin(t*0.8+i)*10;
      const rg=ctx.createRadialGradient(sx,sy,0,sx,sy,35);
      rg.addColorStop(0,'rgba(140,210,255,.07)');
      rg.addColorStop(1,'transparent');
      ctx.fillStyle=rg;
      ctx.fillRect(0,0,330,96);
    }
    t++;
    _seaWaveAnim=requestAnimationFrame(frame);
  }
  if(_seaWaveAnim)cancelAnimationFrame(_seaWaveAnim);
  frame();
}
function stopSeaWave(){
  if(_seaWaveAnim){cancelAnimationFrame(_seaWaveAnim);_seaWaveAnim=null;}
}

// ── SEA PROVINCE MODAL ─────────────────────────────────────
window.openSeaModal=function(pid){
  const p=byId[pid];
  if(!p||p.terrain!=='sea') return;
  _pmodProv=p;

  const modal=document.getElementById('seaModal');
  if(!modal) return;

  document.getElementById('seaModalName').textContent=p.name;

  // Naval stats
  const n=getNaval();
  const power=navalPower();
  const upkeep=navalUpkeep();
  document.getElementById('seaNavPower').textContent=power;
  document.getElementById('seaNavUpkeep').textContent=upkeep;

  // Power ring arc
  const arc=document.getElementById('seaPowerArc');
  if(arc){
    const pct=Math.min(1,power/30);
    arc.style.strokeDashoffset=(150.8*(1-pct)).toFixed(1);
    arc.style.stroke=power>15?'#40ff80':power>5?'#5ab4ff':'rgba(90,180,255,.3)';
  }

  // Fleet total
  const totalShips=Object.values(n).reduce((s,v)=>s+(typeof v==='number'?v:0),0);
  const ftEl=document.getElementById('seaFleetTotal');
  if(ftEl) ftEl.textContent=totalShips?totalShips+' ships total':'No fleet';

  // Fleet composition
  const fleetDefs=[
    {key:'patrol_boats',icon:'🚤',label:'PATROL'},
    {key:'frigates',   icon:'⛵',label:'FRIGATE'},
    {key:'galleons',   icon:'🚢',label:'GALLEON'},
  ];
  const fleetEl=document.getElementById('seaFleetSlots');
  if(fleetEl){
    fleetEl.innerHTML=fleetDefs.map(({key,icon,label})=>{
      const cnt=n[key]||0;
      return '<div class="sea-fleet-slot'+(cnt?' has-ships':'')+'">'        +'<div class="sea-fleet-icon">'+icon+'</div>'        +'<div class="sea-fleet-count" style="color:'+(cnt?'#7ec8ff':'rgba(90,180,255,.2)')+'">'+cnt+'</div>'        +'<div class="sea-fleet-label">'+label+'</div>'        +'</div>';
    }).join('');
  }

  // Stats bars
  const statEl=document.getElementById('seaStatBars');
  if(statEl){
    const stats=[
      {label:'CONTROL', val:mn?(Math.min(100,power*5)):0,   col:'#5ab4ff'},
      {label:'TRADE',   val:mn?Math.min(100,p.gold*6):0,    col:'#40ff80'},
      {label:'BLOCKADE',val:0,                               col:'#ff6b6b'},
      {label:'SAFETY',  val:mn?(Math.min(100,power*3+50)):40,col:'#f0c040'},
    ];
    statEl.innerHTML=stats.map(s=>'<div class="sea-stat-row">'      +'<span class="sea-stat-lbl">'+s.label+'</span>'      +'<div class="sea-stat-bar"><div class="sea-stat-fill" style="width:'+s.val+'%;background:'+s.col+';color:'+s.col+'"></div></div>'      +'<span class="sea-stat-val" style="color:'+s.col+'">'+s.val+'%</span>'      +'</div>').join('');
  }

  // Yields
  const yEl=document.getElementById('seaYields');
  if(yEl) yEl.textContent='💰 +'+p.gold+' · ⚙ +'+p.supply+' per tick';

  // Adjacency
  const adjSeas=getSeaAdjacentSeas(pid);
  const adjCoasts=getSeaAdjacentCoasts(pid);
  const adjEl=document.getElementById('seaAdjacency');
  if(adjEl){
    let html='';
    if(adjSeas.length){
      html+='<div class="sea-adj-hdr">🌊 ADJACENT SEAS</div>';
      html+=adjSeas.map(s=>'<div class="sea-adj-item sea" onclick="openSeaModal('+s.id+')">🌊 '+s.name+'</div>').join('');
    }
    const adjCoastOwned=adjCoasts.filter(c=>ownership[c.id]);
    if(adjCoastOwned.length){
      html+='<div class="sea-adj-hdr" style="margin-top:6px">🏝 COASTAL ACCESS</div>';
      html+=adjCoastOwned.map(c=>{
        const own=nations[ownership[c.id]];
        return '<div class="sea-adj-item coast" onclick="openProvModal('+c.id+')">'
          +'⚓ '+c.name+(own?' <span style="color:rgba(200,185,140,.35);font-size:7px">('+own.name+')</span>':'')
          +'</div>';
      }).join('');
    }
    const uncl=adjCoasts.filter(c=>!ownership[c.id]);
    if(uncl.length){
      html+='<div class="sea-adj-hdr" style="margin-top:6px">🏖 UNCLAIMED COASTS</div>';
      html+=uncl.map(c=>'<div class="sea-adj-item coast uncl" onclick="openProvModal('+c.id+')">⚓ '+c.name+'</div>').join('');
    }
    if(!html) html='<div style="color:rgba(90,180,255,.2);font-size:8px;padding:4px 0">No known adjacent waters</div>';
    adjEl.innerHTML=html;
  }

  // Nations with coastline on this sea
  const npEl=document.getElementById('seaNationsPresent');
  if(npEl){
    const natSet=new Set(adjCoasts.map(c=>ownership[c.id]).filter(Boolean));
    if(natSet.size){
      let html='<div class="sea-section-hdr" style="display:block;padding:8px 12px 4px">NATIONS WITH COASTLINE</div>';
      [...natSet].forEach(nid=>{
        const nat=nations[nid];if(!nat)return;
        const col=nat.color||'#888';
        html+='<div class="sea-nat-row">'
          +(nat.flag_url?'<img class="sea-nat-flag" src="'+nat.flag_url+'" alt="">':'<div style="width:20px;height:14px;background:'+col+';opacity:.4;border:1px solid '+col+'50"></div>')
          +'<div class="sea-nat-name" style="color:'+col+'">'+nat.name+'</div>'
          +'<div class="sea-nat-ships" style="color:'+col+'80">'+nat.gov+'</div>'
          +'</div>';
      });
      npEl.innerHTML=html;
    } else npEl.innerHTML='';
  }

  modal.classList.add('open');
  startSeaWave();
};

window.closeSeaModal=function(){
  const m=document.getElementById('seaModal');
  if(m) m.classList.remove('open');
  stopSeaWave();
};


window.openProvModal=function(pid){
  const p=byId[pid];
  if(!p) return;
  // Route sea provinces to sea modal
  if(p.terrain==='sea'){ openSeaModal(pid); return; }
  _pmodProv=p;

  const oid=ownership[p.id], owner=oid?nations[oid]:null;
  const isOwn=mn&&oid===mn.id;
  const isDiplo=!isOwn&&!!oid&&!!mn;
  const isSea=p.terrain==='sea';

  // ── Title bar ───────────────────────────────────────────
  const terrainIcon=TERRAIN_ICON[p.terrain]||'🗺';
  const terrainCol=TERRAIN_COLOR[p.terrain]||'rgba(180,160,100,.3)';
  document.getElementById('pmodTerrainIcon').textContent=terrainIcon;
  document.getElementById('pmodProvName').textContent=p.name;

  const nname=document.getElementById('pmodNationName');
  if(nname){
    if(isSea){nname.textContent='Sea Province';nname.style.color='rgba(90,180,255,.5)';}
    else if(owner){nname.textContent=owner.name;nname.style.color=isOwn?'#dcc87c':isDiplo?'#c8b0ff':'rgba(200,185,140,.4)';}
    else{nname.textContent='Unclaimed Territory';nname.style.color='rgba(200,185,140,.3)';}
  }
  const popBadge=document.getElementById('pmodPopBadge');
  if(popBadge){
    if(isSea) popBadge.textContent='NAVIGABLE';
    else popBadge.textContent='~'+getProvPopEst(p.id)+'k pop';
  }

  // Titlebar accent color
  const tb=document.querySelector('.pmod-titlebar');
  if(tb) tb.style.background='linear-gradient(90deg,'+terrainCol+' 0%,rgba(10,10,18,.95) 100%)';

  // ── Stats strip ─────────────────────────────────────────
  if(isSea){
    document.getElementById('pmodGold').textContent='+'+p.gold;
    document.getElementById('pmodMP').textContent='—';
    document.getElementById('pmodSup').textContent='+'+p.supply;
    document.getElementById('pmodPop').textContent='—';
  } else {
    document.getElementById('pmodGold').textContent='+'+p.gold;
    document.getElementById('pmodMP').textContent='+'+p.manpower;
    document.getElementById('pmodSup').textContent='+'+p.supply;
    document.getElementById('pmodPop').textContent='~'+getProvPopEst(p.id)+'k';
  }

  // ── Tab content ─────────────────────────────────────────
  pmodRenderOverview(p,owner,isOwn,isDiplo,oid);
  pmodRenderPeople(p,owner,isSea);
  pmodRenderNaval(p,owner,isOwn,isSea);
  pmodRenderActions(p,owner,isOwn,isDiplo,oid,isSea);

  pmodSwitchTab(0);
  document.getElementById('provModal').classList.add('open');
};

window.closeProvModal=function(){
  document.getElementById('provModal').classList.remove('open');
};

window.pmodSwitchTab=function(idx){
  for(let i=0;i<4;i++){
    const t=document.getElementById('pmodTab'+i);
    const p=document.getElementById('pmodPanel'+i);
    if(t) t.classList.toggle('active',i===idx);
    if(p) p.classList.toggle('active',i===idx);
  }
};

function pmodRenderOverview(p,owner,isOwn,isDiplo,oid){
  const el=document.getElementById('pmodOverviewContent');
  if(!el) return;
  const isSea=p.terrain==='sea';

  // Ownership
  let html='<div class="pmod-section"><div class="pmod-sec-hdr">TERRITORY</div>';
  if(isSea){
    html+='<div class="pmod-row"><span class="pmod-row-lbl">TYPE</span><span class="pmod-row-val blue">Sea Province</span></div>';
    const navPow=navalPower();
    html+='<div class="pmod-row"><span class="pmod-row-lbl">YOUR NAVAL POWER</span><span class="pmod-row-val blue">'+(mn?navPow:'—')+'</span></div>';
  } else {
    html+='<div class="pmod-row"><span class="pmod-row-lbl">OWNER</span><span class="pmod-row-val '+(isOwn?'gold':oid?'purple':'')+'">'+( owner?owner.name:'Unclaimed')+'</span></div>';
    html+='<div class="pmod-row"><span class="pmod-row-lbl">STATUS</span><span class="pmod-row-val '+(isOwn?'green':oid?'purple':'')+'">'+( isOwn?'★ YOUR TERRITORY':oid?'Foreign Territory':'Unclaimed Land')+'</span></div>';
    if(owner?.gov) html+='<div class="pmod-row"><span class="pmod-row-lbl">GOVERNMENT</span><span class="pmod-row-val" style="color:'+( GOVS[owner.gov]?.color||'#aaa')+'">'+owner.gov+'</span></div>';
    if(owner?.stability!=null) html+='<div class="pmod-row"><span class="pmod-row-lbl">STABILITY</span><span class="pmod-row-val '+(owner.stability>60?'green':owner.stability>30?'gold':'')+'">'+owner.stability+'%</span></div>';
  }
  html+='</div>';

  // Geography
  html+='<div class="pmod-section"><div class="pmod-sec-hdr">GEOGRAPHY</div>'
    +'<div class="pmod-row"><span class="pmod-row-lbl">TERRAIN</span><span class="pmod-row-val">'+(p.terrain[0].toUpperCase()+p.terrain.slice(1))+'</span></div>';
  if(!isSea){
    const _pp=getProvPeople(p.id);
    html+='<div class="pmod-row"><span class="pmod-row-lbl">PEOPLES</span><span class="pmod-row-val" style="color:'+_pp.color+'">'+_pp.name+'</span></div>';
  }
  html+='<div style="padding:4px 10px 6px;font-size:7.5px;color:rgba(200,185,140,.3)">'+( TERRAIN_DESC[p.terrain]||'')+'</div>';
  html+='</div>';

  // Yields
  html+='<div class="pmod-section"><div class="pmod-sec-hdr">YIELDS PER TICK</div>'
    +'<div class="pmod-row"><span class="pmod-row-lbl">💰 GOLD</span><span class="pmod-row-val gold">+'+p.gold+'</span></div>';
  if(!isSea) html+='<div class="pmod-row"><span class="pmod-row-lbl">⚔ MANPOWER</span><span class="pmod-row-val green">+'+p.manpower+'</span></div>';
  html+='<div class="pmod-row"><span class="pmod-row-lbl">⚙ SUPPLY</span><span class="pmod-row-val blue">+'+p.supply+'</span></div>';
  html+='</div>';

  el.innerHTML=html;
}

function pmodRenderPeople(p,owner,isSea){
  const el=document.getElementById('pmodPeopleContent');
  if(!el) return;
  if(isSea){
    const navPow=navalPower();
    const n=getNaval();
    let html='<div class="pmod-sea-banner"><div class="pmod-sea-icon">🌊</div><div class="pmod-sea-name">'+p.name+'</div><div class="pmod-sea-sub">Open sea — navigable by naval fleets</div></div>';
    html+='<div class="pmod-section"><div class="pmod-sec-hdr">SEA CONDITIONS</div>'
      +'<div class="pmod-row"><span class="pmod-row-lbl">NAVIGATION</span><span class="pmod-row-val blue">Open Waters</span></div>'
      +'<div class="pmod-row"><span class="pmod-row-lbl">TRADE WIND</span><span class="pmod-row-val green">Favorable</span></div>'
      +'<div class="pmod-row"><span class="pmod-row-lbl">HAZARD</span><span class="pmod-row-val gold">Moderate</span></div>'
      +'</div>';
    html+='<div class="pmod-section"><div class="pmod-sec-hdr">YOUR NAVAL PRESENCE</div>'
      +'<div class="pmod-row"><span class="pmod-row-lbl">NAVAL POWER</span><span class="pmod-row-val blue">'+(mn?navPow:'—')+'</span></div>'
      +'<div class="pmod-row"><span class="pmod-row-lbl">PATROL BOATS</span><span class="pmod-row-val">'+( n.patrol_boats||0)+'</span></div>'
      +'<div class="pmod-row"><span class="pmod-row-lbl">FRIGATES</span><span class="pmod-row-val">'+( n.frigates||0)+'</span></div>'
      +'<div class="pmod-row"><span class="pmod-row-lbl">GALLEONS</span><span class="pmod-row-val">'+( n.galleons||0)+'</span></div>'
      +'</div>';
    el.innerHTML=html;
    return;
  }
  const _pp=getProvPeople(p.id);
  const popEst=getProvPopEst(p.id);
  const groups=owner?(owner.ethnic_groups||(owner.ethnic_group?[owner.ethnic_group]:[])):[];
  let html='<div class="pmod-people-hero"><div class="pmod-people-color" style="background:'+_pp.color+'"></div><div><div class="pmod-people-name">'+_pp.name+' Peoples</div><div class="pmod-people-sub">Est. ~'+popEst+'k population</div></div></div>';
  if(groups.length){
    html+='<div class="pmod-section"><div class="pmod-sec-hdr">ETHNIC GROUPS</div>';
    groups.forEach(g=>{html+='<div class="pmod-row"><span class="pmod-row-lbl">GROUP</span><span class="pmod-row-val purple">'+g+'</span></div>';});
    html+='</div>';
  }
  const resMap={plains:['🌾 Wheat','🐄 Livestock'],hills:['⛏ Iron','🪨 Stone'],mountains:['💎 Gems','🥇 Gold Ore'],forest:['🪵 Timber','🐺 Game'],coast:['🐟 Fish','🧂 Salt']};
  const res=resMap[p.terrain]||[];
  if(res.length) html+='<div class="pmod-section"><div class="pmod-sec-hdr">LOCAL RESOURCES</div><div class="pmod-res-grid">'+res.map(r=>'<div class="pmod-res-chip">'+r+'</div>').join('')+'</div></div>';
  el.innerHTML=html;
}

function pmodRenderNaval(p,owner,isOwn,isSea){
  const el=document.getElementById('pmodNavalContent');
  if(!el) return;
  const n=getNaval();
  const fleetDefs=[{key:'patrol_boats',label:'Patrol Boats',icon:'🚤',power:1},{key:'frigates',label:'Frigates',icon:'⛵',power:4},{key:'galleons',label:'Galleons',icon:'🚢',power:10}];

  if(isSea){
    // Sea province: show naval strategic info
    const navPow=navalPower();
    const upkeep=navalUpkeep();
    let html='<div class="pmod-section"><div class="pmod-sec-hdr">SEA CONTROL</div>'
      +'<div class="pmod-row"><span class="pmod-row-lbl">YOUR NAVAL POWER</span><span class="pmod-row-val blue">'+(mn?navPow:'—')+'</span></div>'
      +'<div class="pmod-row"><span class="pmod-row-lbl">FLEET UPKEEP</span><span class="pmod-row-val gold">'+(mn?'-'+upkeep+'/tick':'—')+'</span></div>'
      +'<div class="pmod-row"><span class="pmod-row-lbl">TRADE ROUTE</span><span class="pmod-row-val">Phase 3</span></div>'
      +'<div class="pmod-row"><span class="pmod-row-lbl">BLOCKADE</span><span class="pmod-row-val">Phase 4</span></div>'
      +'</div>';
    html+='<div class="pmod-section"><div class="pmod-sec-hdr">FLEET COMPOSITION</div>';
    let hasFleet=false;
    fleetDefs.forEach(({key,label,icon,power})=>{const cnt=n[key]||0;if(cnt>0){hasFleet=true;html+='<div class="pmod-fleet-row"><div class="pmod-fleet-icon">'+icon+'</div><div class="pmod-fleet-name">'+label+'</div><div class="pmod-fleet-cnt">×'+cnt+' (⚔'+cnt*power+')</div></div>';}});
    if(!hasFleet) html+='<div style="padding:6px 10px;font-size:8px;color:rgba(90,180,255,.25)">No ships built. Claim a coast province to build.</div>';
    html+='</div>';
    el.innerHTML=html;
    return;
  }

  if(p.terrain!=='coast'){
    el.innerHTML='<div class="pmod-naval-no-coast">⛰ No coastal access.<br>Only coast terrain provinces<br>can host naval forces.</div>';
    return;
  }

  // Coast province
  const totalPow=navalPower(), totalUp=navalUpkeep();
  let html='<div class="pmod-naval-coast-hdr"><span style="font-size:16px">⚓</span><div><div class="pmod-naval-coast-lbl">COASTAL PORT</div><div class="pmod-naval-coast-sub">Power: '+totalPow+' · Upkeep: -'+totalUp+'/tick</div></div></div>';
  let hasFleet=false;
  fleetDefs.forEach(({key,label,icon,power})=>{const cnt=n[key]||0;if(cnt>0){hasFleet=true;html+='<div class="pmod-fleet-row"><div class="pmod-fleet-icon">'+icon+'</div><div class="pmod-fleet-name">'+label+'</div><div class="pmod-fleet-cnt">×'+cnt+'</div></div>';}});
  if(!hasFleet) html+='<div style="padding:5px 10px;font-size:8px;color:rgba(90,180,255,.25)">No ships built yet.</div>';

  if(isOwn){
    html+='<div class="pmod-naval-build-hdr">BUILD SHIPS</div><div class="pmod-build-grid">';
    Object.entries(FLEET_TYPES).forEach(([key,ft])=>{
      const can=(mn.gold||0)>=ft.cost.gold&&(mn.supply||0)>=ft.cost.supply;
      html+='<button class="pmod-build-btn" '+(can?'':'disabled ')+'onclick="buildShip(\''+key+'\');openProvModal('+p.id+')">'
        +'<span class="icon">'+ft.icon+'</span>'+ft.name+'<span class="cost">'+ft.cost.gold+'g '+ft.cost.supply+'sup</span></button>';
    });
    html+='</div>';
  }
  el.innerHTML=html;
}

function pmodRenderActions(p,owner,isOwn,isDiplo,oid,isSea){
  const el=document.getElementById('pmodActionsContent');
  if(!el) return;
  const adj=isAdj(p.id);
  let html='<div class="pmod-action-grid">';

  if(isSea){
    html+='<button class="pmod-action-btn" disabled><span class="abtn-icon">🚢</span>Naval Patrol<br><span style="font-size:6.5px;color:rgba(200,185,140,.25)">Phase 4</span></button>'
      +'<button class="pmod-action-btn" disabled><span class="abtn-icon">🚫</span>Blockade<br><span style="font-size:6.5px;color:rgba(200,185,140,.25)">Phase 4</span></button>'
      +'<button class="pmod-action-btn" disabled><span class="abtn-icon">🤝</span>Sea Trade<br><span style="font-size:6.5px;color:rgba(200,185,140,.25)">Phase 3</span></button>'
      +'<button class="pmod-action-btn" disabled><span class="abtn-icon">⚔</span>Naval Battle<br><span style="font-size:6.5px;color:rgba(200,185,140,.25)">Phase 4</span></button>';
  } else if(!mn){
    html+='<button class="pmod-action-btn" style="grid-column:span 2" onclick="openSetup();closeProvModal()"><span class="abtn-icon">⚑</span>Found Nation Here</button>';
  } else if(!oid){
    html+='<button class="pmod-action-btn" '+(adj?'':'disabled ')+'onclick="claimP('+p.id+');closeProvModal()"><span class="abtn-icon">▶</span>Claim Province<br><span style="font-size:6.5px;color:rgba(200,185,140,.25)">30 Gold'+(adj?'':' · Not adjacent')+'</span></button>'
      +'<button class="pmod-action-btn" disabled><span class="abtn-icon">⚒</span>Build<br><span style="font-size:6.5px;color:rgba(200,185,140,.25)">Phase 3</span></button>';
  } else if(isOwn){
    html+='<button class="pmod-action-btn" disabled><span class="abtn-icon">⚔</span>Recruit Army<br><span style="font-size:6.5px;color:rgba(200,185,140,.25)">Phase 4</span></button>'
      +'<button class="pmod-action-btn" disabled><span class="abtn-icon">⚒</span>Build<br><span style="font-size:6.5px;color:rgba(200,185,140,.25)">Phase 3</span></button>'
      +'<button class="pmod-action-btn" disabled><span class="abtn-icon">🛡</span>Fortify<br><span style="font-size:6.5px;color:rgba(200,185,140,.25)">Phase 4</span></button>'
      +'<button class="pmod-action-btn" disabled><span class="abtn-icon">🚢</span>Trade Route<br><span style="font-size:6.5px;color:rgba(200,185,140,.25)">Phase 3</span></button>';
  } else {
    html+='<button class="pmod-action-btn" disabled><span class="abtn-icon">💬</span>Send Envoy<br><span style="font-size:6.5px;color:rgba(200,185,140,.25)">Phase 3</span></button>'
      +'<button class="pmod-action-btn" disabled><span class="abtn-icon">🤝</span>Trade<br><span style="font-size:6.5px;color:rgba(200,185,140,.25)">Phase 3</span></button>'
      +'<button class="pmod-action-btn dng" disabled><span class="abtn-icon">⚔</span>Declare War<br><span style="font-size:6.5px;color:rgba(255,107,107,.25)">Phase 4</span></button>'
      +'<button class="pmod-action-btn" disabled><span class="abtn-icon">🕵</span>Send Spy<br><span style="font-size:6.5px;color:rgba(200,185,140,.25)">Phase 4</span></button>';
  }
  html+='</div>';
  el.innerHTML=html;
}


// ── GOV MODAL ──────────────────────────────────────────────
window.openGovModal=function(){
  if(!mn)return;
  const cur=mn.gov,sup=mn.party_support||{};
  document.getElementById('govList').innerHTML=Object.entries(GOVS).map(([name,g])=>{
    const isCur=name===cur,pct=sup[name]||0,can=pct>=g.support_req,locked=!isCur&&!can;
    const cls='gcard'+(isCur?' current':locked?' locked':'');
    const oc=isCur?'':locked?`toast('Need ${g.support_req}% — have ${pct}%')`:`changeGov('${name}')`;
    return `<div class="${cls}" onclick="${oc}">
      <div class="gcname" style="color:${g.color}">${name}</div>
      <div style="font-size:7px;color:rgba(200,232,255,.3);letter-spacing:.1em;margin-bottom:3px">${g.axis.toUpperCase()}</div>
      <div class="gcdesc">${g.desc}</div>
      <div style="margin-top:4px;font-size:8px;color:rgba(200,232,255,.3)">Bonus: ${g.bonus}</div>
      ${!isCur?`<div class="gcreq" style="color:${pct>=g.support_req?'#40ff80':'#ff6b6b'}">Support: ${pct}% / ${g.support_req}% required</div>`:''}`+
      `${!isCur&&locked?`<button onclick="event.stopPropagation();civilWar('${name}')" style="margin-top:5px;font-family:inherit;font-size:7px;padding:2px 6px;border:1px solid rgba(255,107,107,.35);background:transparent;color:#ff6b6b;cursor:pointer">⚔ CIVIL WAR (force)</button>`:''}
      ${isCur?'<div class="gcbadge" style="color:#00d4ff;border-color:rgba(0,212,255,.4)">CURRENT</div>':''}
    </div>`;
  }).join('');
  document.getElementById('govModal').classList.add('open');
};
window.closeGovModal=function(){document.getElementById('govModal').classList.remove('open');};
window.changeGov=async function(ng){
  if(!mn)return;
  if(!confirm(`Reform to "${ng}"?`))return;
  const{error}=await sb.from('wc_nations').update({gov:ng}).eq('id',mn.id);
  if(error){toast('Error: '+error.message);return;}
  mn.gov=ng;nations[mn.id].gov=ng;updateNatUI();closeGovModal();toast('✓ Reformed to '+ng);
};
window.civilWar=async function(tg){
  if(!mn)return;
  if(!confirm(`⚔ CIVIL WAR for "${tg}"?
-50% Stability, -40% Manpower`))return;
  const ns=Math.max(5,Math.floor(mn.stability*.5)),nm=Math.floor(mn.manpower*.6);
  const{error}=await sb.from('wc_nations').update({gov:tg,stability:ns,manpower:nm}).eq('id',mn.id);
  if(error){toast('Error: '+error.message);return;}
  mn.gov=tg;mn.stability=ns;mn.manpower=nm;nations[mn.id]=mn;updateNatUI();closeGovModal();toast('⚔ Civil war — '+tg+' established');
};


// ── FLAG / LEADER CHANGE (with cooldown) ───────────────────
const FLAG_COOLDOWN_MS = 24*60*60*1000; // 24 hours

window.openFlagLeaderEditor=function(){
  if(!mn){toast('No nation');return;}
  document.getElementById('fleModal').classList.add('open');
  // Check cooldown
  const lastChange=mn.flag_changed_at ? new Date(mn.flag_changed_at).getTime() : 0;
  const remaining=FLAG_COOLDOWN_MS-(Date.now()-lastChange);
  const cdEl=document.getElementById('fleCooldown');
  if(remaining>0 && !isOwner){
    const hrs=Math.ceil(remaining/3600000);
    cdEl.textContent='Cooldown: '+hrs+'h remaining';
    cdEl.style.color='#ff6b6b';
    document.getElementById('fleSubmit').disabled=true;
  } else {
    cdEl.textContent=isOwner?'(Owner — no cooldown)':'Ready to change';
    cdEl.style.color='#40ff80';
    document.getElementById('fleSubmit').disabled=false;
  }
  // Pre-fill ruler name
  document.getElementById('fleRuler').value=mn.ruler||'';
  // Show current flag/leader
  const cf=document.getElementById('fleCurrentFlag'),cl=document.getElementById('fleCurrentLeader');
  if(mn.flag_url){cf.src=mn.flag_url;cf.style.display='block';}else{cf.style.display='none';}
  if(mn.leader_url){cl.src=mn.leader_url;cl.style.display='block';}else{cl.style.display='none';}
};
window.closeFleModal=function(){document.getElementById('fleModal').classList.remove('open');};

window.fleSubmit=async function(){
  if(!mn||!cu)return;
  const lastChange=mn.flag_changed_at?new Date(mn.flag_changed_at).getTime():0;
  if(!isOwner && Date.now()-lastChange<FLAG_COOLDOWN_MS){toast('Cooldown active — wait 24h');return;}
  const btn=document.getElementById('fleSubmit');
  btn.disabled=true;btn.textContent='[ UPLOADING... ]';

  const flagFile=document.getElementById('fleFlag').files[0];
  const leadFile=document.getElementById('fleLeader').files[0];
  const newRuler=document.getElementById('fleRuler').value.trim();

  let updates={ruler:newRuler||mn.ruler, flag_changed_at:new Date().toISOString()};

  if(flagFile){
    const fu=await uploadAsset(flagFile, cu.id+'/flag_'+Date.now()+'.'+flagFile.name.split('.').pop());
    if(fu)updates.flag_url=fu;
  }
  if(leadFile){
    const lu=await uploadAsset(leadFile, cu.id+'/lead_'+Date.now()+'.'+leadFile.name.split('.').pop());
    if(lu)updates.leader_url=lu;
  }

  const{error}=await sb.from('wc_nations').update(updates).eq('id',mn.id);
  if(error){toast('Error: '+error.message);}
  else{
    Object.assign(mn,updates);nations[mn.id]=mn;
    updateNatUI();updateFlagLeader();
    toast('✓ Nation identity updated!');
    closeFleModal();
  }
  btn.disabled=false;btn.textContent='[ SAVE CHANGES ]';
};

// ── OWNER PANEL ────────────────────────────────────────────
window.openOwner=function(){
  if(!isOwner){toast('Access denied');return;}
  const nl=Object.values(nations),opts=nl.map(n=>`<option value="${n.id}">${n.name}</option>`).join('');
  ['odN','ocN','orN','ogN'].forEach(id=>document.getElementById(id).innerHTML=opts);
  document.getElementById('ogT').innerHTML=Object.keys(GOVS).map(g=>`<option>${g}</option>`).join('');
  document.getElementById('ownerPanel').classList.add('open');
};
window.closeOwner=function(){document.getElementById('ownerPanel').classList.remove('open');};
window.ownerDel=async function(){
  const nid=document.getElementById('odN').value,n=nations[nid];
  if(!n||!confirm(`DELETE "${n.name}"?`))return;
  await sb.from('wc_ownership').delete().eq('nation_id',nid);
  await sb.from('wc_nations').delete().eq('id',nid);
  delete nations[nid];Object.keys(ownership).forEach(p=>{if(ownership[p]===nid)delete ownership[p];});
  draw();document.getElementById('odMsg').textContent='✓ Deleted';await loadWorld();
};
window.ownerClaim=async function(){
  const nid=document.getElementById('ocN').value,q=document.getElementById('ocP').value.trim().toLowerCase();
  const p=PROVINCES.find(x=>x.id.toString()===q||x.name.toLowerCase().includes(q));
  if(!p){document.getElementById('ocMsg').textContent='Not found';return;}
  if(ownership[p.id])await sb.from('wc_ownership').delete().eq('province_id',p.id);
  await sb.from('wc_ownership').insert({province_id:p.id,nation_id:nid});
  ownership[p.id]=nid;draw();document.getElementById('ocMsg').textContent='✓ '+p.name+' assigned';
};
window.ownerGive=async function(){
  const nid=document.getElementById('orN').value,n=nations[nid];
  if(!n)return;
  const g=parseInt(document.getElementById('orG').value)||0,m=parseInt(document.getElementById('orM').value)||0,s=parseInt(document.getElementById('orSt').value)||0;
  const u={};if(g)u.gold=(n.gold||0)+g;if(m)u.manpower=(n.manpower||0)+m;if(s)u.stability=Math.min(100,(n.stability||0)+s);
  await sb.from('wc_nations').update(u).eq('id',nid);Object.assign(nations[nid],u);
  if(nid===mn?.id){Object.assign(mn,u);updateNatUI();}
  document.getElementById('orMsg').textContent='✓ Resources given';
};
window.ownerGov=async function(){
  const nid=document.getElementById('ogN').value,gov=document.getElementById('ogT').value;
  await sb.from('wc_nations').update({gov}).eq('id',nid);nations[nid].gov=gov;
  if(nid===mn?.id){mn.gov=gov;updateNatUI();}
  document.getElementById('ogMsg').textContent='✓ '+nations[nid]?.name+' → '+gov;
};

// ── MOBILE SIDEBAR ─────────────────────────────────────────

window.toggleSb=function(){
  const sb=document.getElementById('sb'),ov=document.getElementById('sbOverlay');
  const wasOpen=sb.classList.contains('open');
  closePanels();
  if(!wasOpen){sb.classList.add('open');ov.style.display='block';}
};
window.toggleRp=function(){/* right panel removed */};
function closePanels(){
  document.getElementById('sb').classList.remove('open');
  document.getElementById('sbOverlay').style.display='none';
};
function setupMobile(){
  const mb=document.getElementById('mobSbBtn');
  const mrb=document.getElementById('mobRpBtn');
  if(window.innerWidth<=768){
    if(mb)mb.style.display='block';
    if(mrb)mrb.style.display='block';
  } else {
    if(mb)mb.style.display='none';
    if(mrb)mrb.style.display='none';
    document.getElementById('sb').classList.remove('open');
    const rp=document.getElementById('rp');if(rp)rp.classList.remove('open');
    document.getElementById('sbOverlay').style.display='none';
  }
  updateEdgeBtn();
}
window.addEventListener('resize',()=>{setupMobile();resize();});
setupMobile();

// ── TOAST ──────────────────────────────────────────────────
window.toast=function(m){const t=document.getElementById('toast');t.textContent=m;t.className='show';clearTimeout(t._t);t._t=setTimeout(()=>t.className='',3000);};

// ── SQL SCHEMA HINT ────────────────────────────────────────
// Run ALL of these in Supabase SQL Editor to enable all features:
// ALTER TABLE wc_nations ADD COLUMN IF NOT EXISTS last_tick_at TIMESTAMPTZ DEFAULT NOW();
// ALTER TABLE wc_nations ADD COLUMN IF NOT EXISTS active_laws JSONB DEFAULT '[]'::jsonb;
// ALTER TABLE wc_nations ADD COLUMN IF NOT EXISTS pending_laws JSONB DEFAULT '{}'::jsonb;
// ALTER TABLE wc_nations ADD COLUMN IF NOT EXISTS cabinet JSONB DEFAULT '{}'::jsonb;
// ALTER TABLE wc_nations ADD COLUMN IF NOT EXISTS ethnic_group TEXT DEFAULT NULL;
// ALTER TABLE wc_nations ADD COLUMN IF NOT EXISTS ethnic_group_set_at TIMESTAMPTZ DEFAULT NULL;
// ALTER TABLE wc_nations ADD COLUMN IF NOT EXISTS ethnic_groups JSONB DEFAULT '[]'::jsonb;
// ALTER TABLE wc_nations ADD COLUMN IF NOT EXISTS migrant_pop INTEGER DEFAULT 0;

// ── INIT ───────────────────────────────────────────────────
(async function(){
  const{data:{session}}=await sb.auth.getSession();
  if(session){cu=session.user;await afterLogin();}
  document.getElementById('lP').addEventListener('keydown',e=>{if(e.key==='Enter')doLogin();});
  onGC();resize();
})();
// ══ POLITICS SYSTEM v3 — ENHANCED POLITICIANS + CATEGORIZED LAWS ══════════════

const POLITICIAN_NAMES = [
  'Ada Morrow','Ben Holloway','Celeste Vrayne','Dax Orlen','Elena Prast',
  'Felix Carn','Greer Tallis','Hana Voss','Idris Kelm','Juno Ardell',
  'Kae Solvan','Lyra Penn','Mico Thane','Nara Osten','Oz Falcone',
  'Petra Drex','Quin Alvare','Rosa Nett','Sven Cael','Tia Morvan',
  'Uwe Strand','Vera Loch','Ward Eskin','Xara Dune','Yael Brisk',
  'Zeno Falk','Asha Kiran','Bram Soleil','Cira Weiss','Demi Foret',
  'Emil Strand','Fara Cael','Goro Penn','Hira Drex','Ivan Falcone',
  'Jana Osten','Kira Thane','Luca Voss','Maya Kelm','Niko Ardell',
  'Oren Wexler','Pia Crest','Rael Dorn','Sera Vane','Tomas Hale',
  'Una Korr','Vance Eld','Wren Sable','Xio Drel','Yara Finn',
  'Aldo Vex','Bela Korr','Cade Mourne','Dita Selm','Elan Foss',
  'Finn Breck','Gina Thael','Hugo Darr','Iris Weld','Jace Orn',
  'Kita Vel','Lorn Mael','Mira Coss','Noel Vrant','Osca Drel',
  'Pira Knell','Qara Seld','Rove Thane','Sira Dex','Tane Vorn',
  'Ula Crast','Vera Sorn','Wex Dalm','Xita Fren','Yorn Bael'
];

// ── TRAITS: each gives specific stat bonuses/penalties ──────────────────────
const TRAIT_EFFECTS = {
  Ambitious:   {label:'Ambitious',   buffs:['gold+5'],               debuffs:['stability-3'],  desc:'+5% Gold, -3% Stability'},
  Pragmatic:   {label:'Pragmatic',   buffs:['gold+3','supply+3'],    debuffs:[],               desc:'+3% Gold, +3% Supply'},
  Idealist:    {label:'Idealist',    buffs:['support+10','stability+4'],debuffs:['gold-4'],     desc:'+10 Support, +4% Stability, -4% Gold'},
  Corrupt:     {label:'Corrupt',     buffs:['gold+8'],               debuffs:['stability-8','support-5'], desc:'+8% Gold, -8% Stability, -5 Support'},
  Patriot:     {label:'Patriot',     buffs:['manpower+6','stability+4'],debuffs:[],             desc:'+6% Manpower, +4% Stability'},
  Scholar:     {label:'Scholar',     buffs:['gold+4','supply+5'],    debuffs:['manpower-3'],   desc:'+4% Gold, +5% Supply, -3% Manpower'},
  Veteran:     {label:'Veteran',     buffs:['manpower+8','supply+4'],debuffs:['gold-3'],       desc:'+8% Manpower, +4% Supply, -3% Gold'},
  Populist:    {label:'Populist',    buffs:['support+15','manpower+4'],debuffs:['gold-5'],     desc:'+15 Support, +4% Manpower, -5% Gold'},
  Reformer:    {label:'Reformer',    buffs:['stability+8','supply+4'],debuffs:['gold-2'],      desc:'+8% Stability, +4% Supply, -2% Gold'},
  Hardliner:   {label:'Hardliner',   buffs:['manpower+10'],          debuffs:['stability-6','support-8'],desc:'+10% Manpower, -6% Stability, -8 Support'},
  Economist:   {label:'Economist',   buffs:['gold+12'],              debuffs:['stability-4'],  desc:'+12% Gold, -4% Stability'},
  Nationalist: {label:'Nationalist', buffs:['manpower+8','stability+4'],debuffs:['support-6'], desc:'+8% Manpower, +4% Stability, -6 Support'},
  Pacifist:    {label:'Pacifist',    buffs:['stability+10','supply+6'],debuffs:['manpower-8'], desc:'+10% Stability, +6% Supply, -8% Manpower'},
  Warmonger:   {label:'Warmonger',   buffs:['manpower+12'],          debuffs:['stability-8','gold-4'],  desc:'+12% Manpower, -8% Stability, -4% Gold'},
  Technocrat:  {label:'Technocrat',  buffs:['gold+6','supply+8'],    debuffs:['support-4'],   desc:'+6% Gold, +8% Supply, -4 Support'},
  Fanatic:     {label:'Fanatic',     buffs:['stability+12','manpower+6'],debuffs:['gold-8','supply-4'],     desc:'+12% Stability, +6% Manpower, -8% Gold, -4% Supply'},
  Merchant:    {label:'Merchant',    buffs:['gold+10','supply+4'],   debuffs:['manpower-5'],          desc:'+10% Gold, +4% Supply, -5% Manpower'},
  Demagogue:   {label:'Demagogue',   buffs:['support+18'],           debuffs:['stability-8','gold-4'],desc:'+18 Support, -8% Stability, -4% Gold'},
  Ascetic:     {label:'Ascetic',     buffs:['stability+6','support+6'],debuffs:['gold-6','supply-3'],  desc:'+6% Stability, +6 Support, -6% Gold, -3% Supply'},
  Warlord:     {label:'Warlord',     buffs:['manpower+14','supply+4'],debuffs:['gold-10','stability-5'],desc:'+14% Manpower, +4% Supply, -10% Gold, -5% Stability'},
  Diplomat:    {label:'Diplomat',    buffs:['gold+5','stability+6','support+5'],debuffs:[],            desc:'+5% Gold, +6% Stability, +5 Support'},
  Inquisitor:  {label:'Inquisitor',  buffs:['stability+10'],         debuffs:['support-12','gold-3'],desc:'+10% Stability, -12 Support, -3% Gold'},
};

// ── CABINET POSITIONS ───────────────────────────────────────────────────────
// Each position has a base effect + receives trait modifiers on top
const POSITIONS = {
  chancellor:   {title:'Chancellor',        icon:'👑', desc:'Head of state. Amplifies all income.', baseEffect:{gold:6,manpower:4,supply:4},   lifespan:[3,6]},
  finance_min:  {title:'Finance Minister',  icon:'💰', desc:'Controls national economy.',           baseEffect:{gold:14},                        lifespan:[2,4]},
  war_min:      {title:'War Minister',      icon:'⚔', desc:'Commands the military machine.',       baseEffect:{manpower:12},                    lifespan:[2,4]},
  supply_min:   {title:'Supply Minister',   icon:'📦', desc:'Manages logistics and supply chains.', baseEffect:{supply:12},                      lifespan:[1,3]},
  interior_min: {title:'Interior Minister', icon:'🏛', desc:'Maintains order and stability.',       baseEffect:{stability:8},                    lifespan:[2,5]},
  propagandist: {title:'Propagandist',      icon:'📢', desc:'Shapes ideology and party support.',   baseEffect:{support:10},                     lifespan:[1,3]},
  foreign_min:  {title:'Foreign Minister',  icon:'🌐', desc:'Diplomatic income and stability.',     baseEffect:{gold:8,stability:5},             lifespan:[2,4]},
  spy_chief:    {title:'Spymaster',         icon:'🕵', desc:'Covert ops. Reduces others\' income.', baseEffect:{gold:5,supply:5},               lifespan:[1,3]},
  court_mage:   {title:'Court Scholar',     icon:'📜', desc:'Advances science and arts.',           baseEffect:{gold:4,supply:4,stability:4},     lifespan:[2,4]},
  treasury_min: {title:'Treasury Master',   icon:'🏦', desc:'Maximises tax collection.',            baseEffect:{gold:18},                         lifespan:[1,3]},
  high_priest:  {title:'High Priest',       icon:'⛪', desc:'Spiritual authority and order.',       baseEffect:{stability:12,support:6},          lifespan:[2,5]},
  grand_admiral:{title:'Grand Admiral',     icon:'⚓', desc:'Naval power and coastal trade.',      baseEffect:{gold:8,manpower:6,supply:6},      lifespan:[2,4]},
};

// ── LAWS — CATEGORIZED ──────────────────────────────────────────────────────
// category, name, effects (buffs/debuffs), govs (required ideologies), req_ideology (min support%), enact_weeks (time to pass)
const LAWS = {
  // ── GOVERNMENT STRUCTURE ──
  strong_exec:    {cat:'Government',  name:'Strong Executive',   buffs:{stability:12},          debuffs:{gold:-3},              govs:['Autocracy','Neo-Authoritarianism','Institutionalism'],              req_ideology:30, enact_weeks:1},
  fed_system:     {cat:'Government',  name:'Federal System',     buffs:{gold:5,manpower:5,supply:5},debuffs:{stability:-4},     govs:['Paperist Democracy','Classical Liberalism','Reformatorist Left'],  req_ideology:40, enact_weeks:1},
  emergency_law:  {cat:'Government',  name:'Emergency Powers',   buffs:{manpower:15,stability:8},debuffs:{gold:-10,support:-10},govs:['Autocracy','Neo-Authoritarianism','Third Positionism'],            req_ideology:50, enact_weeks:1},
  civil_service:  {cat:'Government',  name:'Civil Service Reform',buffs:{gold:4,stability:6},   debuffs:{},                    govs:['Institutionalism','Paperist Democracy','Classical Liberalism'],     req_ideology:25, enact_weeks:2},

  // ── PUBLIC HEALTH ──
  natl_health:    {cat:'Public Health',name:'National Healthcare',buffs:{manpower:8,stability:6},debuffs:{gold:-8},            govs:['Reformatorist Left','Paperolutionary Left','Aesthetic Democracy','Paperist Democracy'],req_ideology:35,enact_weeks:2},
  quarantine:     {cat:'Public Health',name:'Quarantine Act',     buffs:{stability:5},           debuffs:{manpower:-5,gold:-3},govs:['Institutionalism','Neo-Authoritarianism','Autocracy'],             req_ideology:20, enact_weeks:1},
  labor_protect:  {cat:'Public Health',name:'Labor Protections',  buffs:{manpower:10,stability:5},debuffs:{gold:-6},           govs:['Reformatorist Left','Paperolutionary Left','Institutionalism'],    req_ideology:30, enact_weeks:1},
  state_housing:  {cat:'Public Health',name:'State Housing',      buffs:{manpower:12},           debuffs:{gold:-10,supply:-4}, govs:['Paperolutionary Left','Reformatorist Left','Institutionalism'],   req_ideology:40, enact_weeks:3},

  // ── FREEDOM ──
  free_press:     {cat:'Freedom',     name:'Free Press',          buffs:{stability:5,support:8}, debuffs:{gold:-3},            govs:['Paperist Democracy','Classical Liberalism','Aesthetic Democracy'], req_ideology:25, enact_weeks:1},
  open_border:    {cat:'Freedom',     name:'Open Borders',        buffs:{manpower:10,stability:5},debuffs:{},                  govs:['Anarchism','Post-Modernism','Aesthetic Democracy'],                req_ideology:20, enact_weeks:1},
  free_assembly:  {cat:'Freedom',     name:'Right of Assembly',   buffs:{support:12,stability:6},debuffs:{gold:-2},            govs:['Paperist Democracy','Anarchism','Reformatorist Left','Aesthetic Democracy'],req_ideology:30,enact_weeks:1},
  censorship:     {cat:'Freedom',     name:'State Censorship',    buffs:{stability:10},          debuffs:{support:-15,gold:-4},govs:['Autocracy','Neo-Authoritarianism','Superiority Radicalism'],      req_ideology:45, enact_weeks:1},

  // ── TAXATION ──
  flat_tax:       {cat:'Taxation',    name:'Flat Tax',            buffs:{gold:10},               debuffs:{stability:-4},       govs:['Classical Liberalism','Eclecticism','Post-Modernism'],            req_ideology:30, enact_weeks:1},
  progressive_tax:{cat:'Taxation',   name:'Progressive Taxation',buffs:{gold:6,stability:5},    debuffs:{},                   govs:['Reformatorist Left','Paperist Democracy','Institutionalism'],     req_ideology:35, enact_weeks:1},
  zero_tax:       {cat:'Taxation',    name:'No Taxation',         buffs:{support:20},            debuffs:{gold:-20,stability:-6},govs:['Anarchism','Classical Liberalism'],                             req_ideology:55, enact_weeks:1},
  war_levy:       {cat:'Taxation',    name:'War Levy',            buffs:{gold:14,manpower:8},    debuffs:{stability:-8,support:-10},govs:['Third Positionism','Superiority Radicalism','Neo-Authoritarianism'],req_ideology:45,enact_weeks:1},

  // ── ECONOMY ──
  open_market:    {cat:'Economy',     name:'Open Markets',        buffs:{gold:15},               debuffs:{manpower:-5},        govs:['Classical Liberalism','Eclecticism','Post-Modernism'],            req_ideology:30, enact_weeks:1},
  nationalize:    {cat:'Economy',     name:'Nationalization',     buffs:{supply:14,manpower:8},  debuffs:{gold:-10},           govs:['Paperolutionary Left','Reformatorist Left','Institutionalism'],   req_ideology:40, enact_weeks:3},
  war_economy:    {cat:'Economy',     name:'War Economy',         buffs:{manpower:18,supply:10}, debuffs:{gold:-14,stability:-5},govs:['Third Positionism','Superiority Radicalism','Neo-Authoritarianism'],req_ideology:45,enact_weeks:1},
  land_reform:    {cat:'Economy',     name:'Land Reform',         buffs:{supply:10,stability:5}, debuffs:{gold:-4},            govs:['Reformatorist Left','Paperolutionary Left','Institutionalism'],   req_ideology:35, enact_weeks:2},

  // ── MILITARY ──
  conscript:      {cat:'Military',    name:'Conscription',        buffs:{manpower:20},           debuffs:{gold:-10,stability:-4},govs:['Third Positionism','Superiority Radicalism','Paperolutionary Left'],req_ideology:40,enact_weeks:1},
  professional:   {cat:'Military',    name:'Professional Army',   buffs:{manpower:10,stability:4},debuffs:{gold:-8,supply:-4}, govs:['Institutionalism','Neo-Authoritarianism','Autocracy','Classical Liberalism'],req_ideology:35,enact_weeks:2},
  total_war:      {cat:'Military',    name:'Total War Doctrine',  buffs:{manpower:25,supply:10}, debuffs:{gold:-18,stability:-12,support:-12},govs:['Superiority Radicalism','Third Positionism'],    req_ideology:60, enact_weeks:1},

  // ── CULTURE & RELIGION ──
  theocratic:     {cat:'Culture', name:'Sacred Law',            buffs:{stability:15},           debuffs:{gold:-3,support:-5},           govs:['Traditionalist Right','Institutionalism'],                             req_ideology:35,enact_weeks:1},
  state_media:    {cat:'Culture', name:'State Media',           buffs:{stability:10,support:6}, debuffs:{gold:-2},                      govs:['Autocracy','Neo-Authoritarianism','Superiority Radicalism'],           req_ideology:35,enact_weeks:1},
  cultural_rev:   {cat:'Culture', name:'Cultural Revolution',   buffs:{support:15,stability:5}, debuffs:{gold:-5,manpower:-5},          govs:['Paperolutionary Left','Aesthetic Democracy','Post-Modernism'],        req_ideology:50,enact_weeks:2},
  heritage_prot:  {cat:'Culture', name:'Heritage Protection',   buffs:{stability:8,support:5},  debuffs:{},                             govs:['Traditionalist Right','Institutionalism','Paperist Democracy'],        req_ideology:25,enact_weeks:1},
  art_patronage:  {cat:'Culture', name:'State Art Patronage',   buffs:{support:10,stability:5}, debuffs:{gold:-4},                      govs:['Aesthetic Democracy','Post-Modernism','Paperist Democracy'],           req_ideology:30,enact_weeks:1},
  religious_tol:  {cat:'Culture', name:'Religious Tolerance',   buffs:{stability:6,support:8},  debuffs:{},                             govs:['Paperist Democracy','Classical Liberalism','Anarchism','Eclecticism'], req_ideology:25,enact_weeks:1},
  cult_of_state:  {cat:'Culture', name:'Cult of the State',     buffs:{stability:14,support:8}, debuffs:{gold:-4,manpower:-4},          govs:['Autocracy','Superiority Radicalism','Third Positionism'],             req_ideology:50,enact_weeks:1},

  // ── TRADE & DIPLOMACY ──
  trade_routes:   {cat:'Trade',   name:'Trade Route Network',   buffs:{gold:18},                debuffs:{manpower:-3},                  govs:['Classical Liberalism','Paperist Democracy','Eclecticism'],             req_ideology:30,enact_weeks:2},
  guild_system:   {cat:'Trade',   name:'Merchant Guilds',       buffs:{gold:10,supply:6},       debuffs:{stability:-3},                 govs:['Classical Liberalism','Eclecticism','Post-Modernism'],                 req_ideology:25,enact_weeks:1},
  port_law:       {cat:'Trade',   name:'Free Port Charter',     buffs:{gold:14,supply:5},       debuffs:{},                             govs:['Anarchism','Classical Liberalism','Aesthetic Democracy'],              req_ideology:35,enact_weeks:1},
  embargo:        {cat:'Trade',   name:'Trade Embargo',         buffs:{manpower:6,stability:5}, debuffs:{gold:-14},                     govs:['Superiority Radicalism','Third Positionism','Autocracy'],              req_ideology:40,enact_weeks:1},
  silk_roads:     {cat:'Trade',   name:'Silk Road Access',      buffs:{gold:20,supply:8},       debuffs:{manpower:-5},                  govs:['Eclecticism','Classical Liberalism','Post-Modernism','Institutionalism'],req_ideology:35,enact_weeks:3},
  monopoly_law:   {cat:'Trade',   name:'State Monopoly',        buffs:{gold:12,supply:8},       debuffs:{stability:-4},                 govs:['Autocracy','Neo-Authoritarianism','Institutionalism'],                 req_ideology:35,enact_weeks:1},
  tariff_wall:    {cat:'Trade',   name:'Protective Tariffs',    buffs:{gold:8,supply:6},        debuffs:{manpower:-3},                  govs:['Institutionalism','Third Positionism','Traditionalist Right'],         req_ideology:30,enact_weeks:1},

  // ── SCIENCE & TECHNOLOGY ──
  state_academia: {cat:'Science', name:'State Academies',       buffs:{gold:6,stability:5,supply:4},debuffs:{manpower:-3},             govs:['Institutionalism','Paperist Democracy','Classical Liberalism'],        req_ideology:30,enact_weeks:2},
  industrialize:  {cat:'Science', name:'Industrialization',     buffs:{gold:14,supply:12},      debuffs:{stability:-6,manpower:-4},     govs:['Classical Liberalism','Neo-Authoritarianism','Post-Modernism'],       req_ideology:40,enact_weeks:4},
  weapon_research:{cat:'Science', name:'Weapons Research',      buffs:{manpower:14,supply:6},   debuffs:{gold:-10},                    govs:['Third Positionism','Superiority Radicalism','Neo-Authoritarianism'],   req_ideology:40,enact_weeks:3},
  agri_reform:    {cat:'Science', name:'Agricultural Reform',   buffs:{supply:16,manpower:6},   debuffs:{gold:-4},                     govs:['Reformatorist Left','Institutionalism','Paperist Democracy'],          req_ideology:30,enact_weeks:2},
  printing_press: {cat:'Science', name:'Printing Press',        buffs:{support:12,stability:4}, debuffs:{},                            govs:['Paperist Democracy','Aesthetic Democracy','Classical Liberalism'],      req_ideology:25,enact_weeks:1},
  cartography:    {cat:'Science', name:'Royal Cartography',     buffs:{gold:5,supply:5,stability:4},debuffs:{},                        govs:['Institutionalism','Classical Liberalism','Neo-Authoritarianism'],      req_ideology:20,enact_weeks:1},
  alchemy_prog:   {cat:'Science', name:'Alchemy Programme',     buffs:{supply:10,gold:8},       debuffs:{stability:-3},                govs:['Post-Modernism','Aesthetic Democracy','Eclecticism'],                  req_ideology:30,enact_weeks:2},

  // ── POPULATION & MIGRATION ──
  assimilation:   {cat:'Population',name:'Assimilation Policy', buffs:{stability:8,support:6},  debuffs:{manpower:-4},                 govs:['Autocracy','Neo-Authoritarianism','Institutionalism','Third Positionism'],req_ideology:35,enact_weeks:2,blocks_migration:true},
  multiculturalism:{cat:'Population',name:'Multiculturalism',   buffs:{gold:6,manpower:8,supply:5},debuffs:{stability:-4},             govs:['Paperist Democracy','Anarchism','Aesthetic Democracy','Post-Modernism'],req_ideology:30,enact_weeks:1,boosts_migration:true},
  population_boom:{cat:'Population',name:'Population Incentive',buffs:{manpower:16,supply:8},  debuffs:{gold:-8},                     govs:['Reformatorist Left','Paperolutionary Left','Institutionalism'],        req_ideology:35,enact_weeks:2},
  ethnic_cleanse: {cat:'Population',name:'Ethnic Purge',        buffs:{stability:12,manpower:8},debuffs:{support:-20,gold:-8},         govs:['Superiority Radicalism','Third Positionism'],                         req_ideology:65,enact_weeks:1,blocks_migration:true},
  migration_wave: {cat:'Population',name:'Open Migration',      buffs:{manpower:12,gold:5},     debuffs:{stability:-6},                govs:['Anarchism','Post-Modernism','Aesthetic Democracy'],                    req_ideology:25,enact_weeks:1,boosts_migration:true},
  settle_frontier:{cat:'Population',name:'Frontier Settlement', buffs:{manpower:10,supply:8},   debuffs:{gold:-5},                     govs:['Institutionalism','Traditionalist Right','Neo-Authoritarianism'],      req_ideology:30,enact_weeks:2},
  diaspora_return:{cat:'Population',name:'Diaspora Return Act', buffs:{manpower:14,gold:4},     debuffs:{},                            govs:['Traditionalist Right','Institutionalism','Paperist Democracy'],        req_ideology:35,enact_weeks:1,boosts_migration:true},

  // ── JUSTICE & ORDER ──
  rule_of_law:    {cat:'Justice',  name:'Rule of Law',          buffs:{stability:10,gold:4},    debuffs:{},                            govs:['Paperist Democracy','Classical Liberalism','Institutionalism'],        req_ideology:25,enact_weeks:1},
  martial_law:    {cat:'Justice',  name:'Martial Law',          buffs:{stability:15,manpower:8},debuffs:{support:-12,gold:-5},         govs:['Autocracy','Neo-Authoritarianism','Third Positionism'],               req_ideology:45,enact_weeks:1,blocks_migration:true},
  prison_reform:  {cat:'Justice',  name:'Prison Reform',        buffs:{stability:5,support:8},  debuffs:{gold:-3},                     govs:['Reformatorist Left','Paperist Democracy','Aesthetic Democracy'],       req_ideology:25,enact_weeks:1},
  secret_police:  {cat:'Justice',  name:'Secret Police',        buffs:{stability:12},           debuffs:{support:-10,gold:-3},         govs:['Autocracy','Neo-Authoritarianism','Superiority Radicalism'],          req_ideology:45,enact_weeks:1,blocks_migration:true},
  civilian_arms:  {cat:'Justice',  name:'Right to Bear Arms',   buffs:{manpower:10,support:8},  debuffs:{stability:-8},                govs:['Anarchism','Classical Liberalism'],                                    req_ideology:40,enact_weeks:1},
  judicial_indep: {cat:'Justice',  name:'Judicial Independence',buffs:{stability:8,support:6},  debuffs:{gold:-2},                     govs:['Paperist Democracy','Classical Liberalism','Institutionalism'],        req_ideology:30,enact_weeks:2},
  inquisition:    {cat:'Justice',  name:'Inquisition',          buffs:{stability:10,manpower:5},debuffs:{support:-8,gold:-4},          govs:['Traditionalist Right','Autocracy'],                                    req_ideology:40,enact_weeks:1},

  // ── ENVIRONMENT & LAND ──
  deforest:       {cat:'Environment',name:'Mass Deforestation', buffs:{supply:14,gold:6},       debuffs:{stability:-4,manpower:-3},    govs:['Third Positionism','Autocracy','Neo-Authoritarianism'],               req_ideology:30,enact_weeks:1},
  conservation:   {cat:'Environment',name:'Conservation Edict', buffs:{supply:8,stability:6},   debuffs:{gold:-5},                     govs:['Aesthetic Democracy','Anarchism','Post-Modernism'],                   req_ideology:25,enact_weeks:1},
  irrigation:     {cat:'Environment',name:'Irrigation Projects',buffs:{supply:14,manpower:5},   debuffs:{gold:-6},                     govs:['Institutionalism','Reformatorist Left','Paperist Democracy'],         req_ideology:30,enact_weeks:3},
  mining_rights:  {cat:'Environment',name:'State Mining Rights',buffs:{gold:12,supply:6},       debuffs:{stability:-3},                govs:['Autocracy','Neo-Authoritarianism','Institutionalism'],                req_ideology:30,enact_weeks:1},
  coastal_dev:    {cat:'Environment',name:'Coastal Development',buffs:{gold:10,supply:8},       debuffs:{manpower:-4},                 govs:['Classical Liberalism','Paperist Democracy','Institutionalism'],       req_ideology:30,enact_weeks:2},
  game_reserve:   {cat:'Environment',name:'Royal Game Reserve', buffs:{stability:5,supply:6},   debuffs:{gold:-3},                     govs:['Traditionalist Right','Institutionalism'],                             req_ideology:20,enact_weeks:1},
};

// Pseudo-random number generator (deterministic from seed)
function mkRng(seed){let s=seed;return()=>{s=Math.sin(s+1)*43758.5453;return s-(s|0);};}

// Generate 3 candidates for a position in a given week
function genCandidates(posKey, week, ns){
  const rng=mkRng(week*997+ns+posKey.split('').reduce((a,c)=>a+c.charCodeAt(0),0));
  const govKeys=Object.keys(GOVS);
  const traitKeys=Object.keys(TRAIT_EFFECTS);
  const nameLen=POLITICIAN_NAMES.length;
  const usedIdx=new Set();

  return Array.from({length:3},(_,i)=>{
    // Draw all random values FIRST before any conditional logic
    const r1=rng(), r2=rng(), r3=rng(), r4=rng(), r5=rng();

    // Name: find unused index
    let ni=Math.floor(r1*nameLen);
    if(usedIdx.has(ni)){
      // Pick next available slot
      for(let d=1;d<nameLen;d++){
        const try_=(ni+d)%nameLen;
        if(!usedIdx.has(try_)){ni=try_;break;}
      }
    }
    usedIdx.add(ni);

    const gi=Math.floor(r2*govKeys.length);
    const ti=Math.floor(r3*traitKeys.length);
    const ideo=govKeys[gi]||govKeys[0];
    const traitKey=traitKeys[ti]||traitKeys[0];
    const g=GOVS[ideo]||{color:'#888'};
    const pos=POSITIONS[posKey];
    const span=Math.max(pos.lifespan[1]-pos.lifespan[0],0);
    const lifeWeeks=Math.max(1,pos.lifespan[0]+Math.floor(r4*(span+1)));
    const age=Math.floor(28+r5*42);
    const name=POLITICIAN_NAMES[ni];

    return{
      name: (name&&name.length>0) ? name : POLITICIAN_NAMES[i % nameLen],
      ideology:ideo, color:g.color,
      age, lifeWeeks, trait:traitKey,
    };
  });
}

function pickTrait(rng){const k=Object.keys(TRAIT_EFFECTS);return k[Math.floor(rng()*k.length)];}

// Compute effective bonus for a position+politician combo
function computePosBonus(posKey, entry){
  const pos=POSITIONS[posKey];
  if(!pos||!entry)return{gold:0,manpower:0,supply:0,stability:0,support:0};
  const base={...pos.baseEffect};
  const trait=TRAIT_EFFECTS[entry.trait]||{};
  const result={gold:0,manpower:0,supply:0,stability:0,support:0};
  Object.entries(base).forEach(([k,v])=>{if(k in result)result[k]+=v;});
  const parseStat=(s)=>{const m=s.match(/^(\w+)([+-]\d+)$/);return m?{key:m[1],val:parseInt(m[2])}:null;};
  (trait.buffs||[]).forEach(b=>{const p=parseStat(b);if(p&&p.key in result)result[p.key]+=p.val;});
  (trait.debuffs||[]).forEach(d=>{const p=parseStat(d);if(p&&p.key in result)result[p.key]+=p.val;});
  return result;
}

// Format bonus object to readable HTML
function bonusToStr(bonus){
  const parts=[];
  const fmtK={gold:'Gold',manpower:'Manpower',supply:'Supply',stability:'Stability',support:'Support'};
  Object.entries(bonus).forEach(([k,v])=>{
    if(v===0)return;
    const suffix=(k==='support')?'':'%';
    parts.push((v>0?'<span style="color:#40ff80">+'+v+suffix+'</span>':'<span style="color:#ff6b6b">'+v+suffix+'</span>')+' '+fmtK[k]);
  });
  return parts.join(', ')||'No bonus';
}

// Law effect to display HTML string
function lawEffectStr(law){
  const parts=[];
  const fmtK={gold:'Gold',manpower:'Manpower',supply:'Supply',stability:'Stability'};
  Object.entries(law.buffs||{}).forEach(([k,v])=>{
    const suffix=(k==='support')?'':'%';
    parts.push('<span style="color:#40ff80">+'+v+suffix+'</span> '+(fmtK[k]||k));
  });
  Object.entries(law.debuffs||{}).forEach(([k,v])=>{
    const suffix=(k==='support')?'':'%';
    parts.push('<span style="color:#ff6b6b">'+v+suffix+'</span> '+(fmtK[k]||k));
  });
  return parts.join(', ')||'No effect';
}

// Get current week number
function currentWeek(){return Math.floor(Date.now()/(7*24*3600000));}

// Get nation seed from nation ID
function nationSeed(natId){return parseInt((natId||'').replace(/-/g,'').slice(0,8),16)||42;}

// Get the current cabinet (selected politicians per position)
// Stored in mn.cabinet = {posKey: {candidateIdx, week_selected, ...candidate}}
function getCabinet(){return mn.cabinet||{};}

// Check if a position's politician has expired
function isPosExpired(posKey){
  const cab=getCabinet();
  const entry=cab[posKey];
  if(!entry)return true; // vacant
  const ws=entry.week_selected;
  const lw=entry.lifeWeeks;
  // Must have valid week_selected (>0) and lifeWeeks (>=1)
  if(!ws||ws<=0||!lw||lw<1) return true;
  const expiresWeek=ws+lw;
  return currentWeek()>=expiresWeek;
}

// Auto-clear expired politicians from cabinet (call after loading nation)
async function clearExpiredCabinet(){
  if(!mn) return;
  const cab={...getCabinet()};
  let changed=false;
  Object.keys(POSITIONS).forEach(posKey=>{
    const entry=cab[posKey];
    if(!entry) return;
    const ws=entry.week_selected;
    const lw=entry.lifeWeeks;
    const badName=!entry.name||entry.name==='Unknown'||entry.name.trim()==='';
    const badTrait=!entry.trait||entry.trait==='undefined';
    // Clear if: expired, bad week_selected, bad lifeWeeks, corrupt name/trait
    if(!ws||ws<=0||!lw||lw<1||currentWeek()>=ws+lw||badName||badTrait){
      delete cab[posKey];
      changed=true;
    }
  });
  if(changed){
    await updateLaws({cabinet:cab});
    mn.cabinet=cab;nations[mn.id]=mn;
    renderPolTab&&renderPolTab();
  }
  if(changed){
    await updateLaws({cabinet:cab});
    mn.cabinet=cab;nations[mn.id]=mn;
  }
}

// Render politicians tab — enhanced with trait buffs/debuffs display
function renderPoliticians(){
  const week=currentWeek();
  const ns=nationSeed(mn.id);
  const cab=getCabinet();
  const nextDate=new Date((week+1)*7*24*3600000);
  const MONTHS=['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
  let html='<div style="font-size:8px;color:rgba(200,232,255,.3);margin-bottom:10px;letter-spacing:.08em">'
    +'New candidates every 7 days · Next reshuffle: '
    +String(nextDate.getDate()).padStart(2,'0')+' '+MONTHS[nextDate.getMonth()]+' '+nextDate.getFullYear()
    +'</div>';
  Object.entries(POSITIONS).forEach(([posKey,pos])=>{
    const current=cab[posKey];
    const expired=isPosExpired(posKey);
    const expiresIn=current?((current.week_selected||0)+(current.lifeWeeks||2)-week):0;
    const candidates=genCandidates(posKey,week,ns);
    const g=GOVS[current?.ideology]||{color:'#888'};
    const curBonus=current?computePosBonus(posKey,current):{};
    const baseStr=Object.entries(pos.baseEffect).map(([k,v])=>'<span style="color:#40ff80">+'+v+(k==='support'?'':'%')+'</span> '+k).join(', ');
    html+='<div style="border:1px solid rgba(0,212,255,.15);padding:10px;margin-bottom:10px;background:rgba(0,212,255,.02)">';
    html+='<div style="display:flex;align-items:center;gap:8px;margin-bottom:8px">'
      +'<span style="font-size:16px">'+pos.icon+'</span>'
      +'<div><div style="font-size:11px;color:#c8e8ff;letter-spacing:.04em">'+pos.title+'</div>'
      +'<div style="font-size:8px;color:rgba(200,232,255,.3)">'+pos.desc+'</div>'
      +'<div style="font-size:8px;margin-top:2px">Base: '+baseStr+'</div>'
      +'</div></div>';
    if(current&&!expired){
      html+='<div style="border:1px solid rgba(64,255,128,.25);background:rgba(64,255,128,.04);padding:6px 8px;margin-bottom:8px">'
        +'<div style="font-size:8px;color:#40ff80;letter-spacing:.1em;margin-bottom:3px">CURRENT HOLDER · '+expiresIn+' week'+(expiresIn!==1?'s':'')+' remaining</div>'
        +'<div style="font-size:11px;color:#c8e8ff">'+current.name+' <span style="font-size:8px;color:rgba(200,232,255,.4)">('+current.age+'y)</span></div>'
        +'<div style="font-size:9px;color:'+g.color+'">'+current.ideology+'</div>'
        +'<div style="font-size:8px;color:rgba(200,232,255,.5);margin-top:2px">Trait: <span style="color:#f0c040">'+current.trait+'</span>'
        +' — '+(TRAIT_EFFECTS[current.trait]?.desc||'')+'</div>'
        +'<div style="font-size:8px;margin-top:3px">Net effect: '+bonusToStr(curBonus)+'</div>'
        +'</div>';
    } else if(expired&&current){
      html+='<div style="font-size:8px;color:#ff6b6b;margin-bottom:8px;padding:4px 6px;border:1px solid rgba(255,107,107,.2)">⚠ '+current.name+' has left office — select a new holder</div>';
    } else {
      html+='<div style="font-size:8px;color:rgba(200,232,255,.25);margin-bottom:8px;padding:4px 6px;border:1px dashed rgba(200,232,255,.1)">Vacant — select a candidate</div>';
    }
    html+='<div style="font-size:8px;color:rgba(200,232,255,.3);letter-spacing:.1em;margin-bottom:5px">CANDIDATES</div>';
    html+='<div style="display:flex;flex-direction:column;gap:5px">';
    candidates.forEach((c,ci)=>{
      const cg=GOVS[c.ideology]||{color:'#888'};
      const isCur=current&&!expired&&current.name===c.name;
      const cBonus=computePosBonus(posKey,c);
      const trDef=TRAIT_EFFECTS[c.trait]||{desc:'',buffs:[],debuffs:[]};
      const hasDebuff=trDef.debuffs&&trDef.debuffs.length>0;
      html+='<div class="pol-card'+(isCur?' active':'')+'" data-poskey="'+posKey+'" data-cidx="'+ci
        +'" style="cursor:pointer;'+(isCur?'border-color:rgba(64,255,128,.4);background:rgba(64,255,128,.05);':hasDebuff?'border-color:rgba(255,107,107,.15);':'')+'">'
        +'<div style="display:flex;justify-content:space-between;align-items:center">'
        +'<span style="font-size:10px;color:#c8e8ff">'+c.name+(isCur?' ✓':'')+'</span>'
        +'<span style="font-size:8px;color:rgba(200,232,255,.35)">'+c.age+'y · '+c.lifeWeeks+'w tenure</span>'
        +'</div>'
        +'<div style="font-size:8px;color:'+cg.color+';margin-top:1px">'+c.ideology+'</div>'
        +'<div style="font-size:8px;margin-top:2px">Trait: <span style="color:'+(hasDebuff?'#ffaa55':'#f0c040')+'">'+c.trait+'</span>'
        +' <span style="color:rgba(200,232,255,.35)">— '+trDef.desc+'</span></div>'
        +'<div style="font-size:8px;margin-top:3px;padding-top:3px;border-top:1px solid rgba(0,212,255,.08)">'+bonusToStr(cBonus)+'</div>'
        +'</div>';
    });
    html+='</div></div>';
  });
  return html;
}

function renderLaws(){
  const active=mn.active_laws||[];
  const pending=mn.pending_laws||{};
  const now=currentWeek();
  const sup=mn.party_support||{};
  const cats={};
  Object.entries(LAWS).forEach(([key,law])=>{
    if(!cats[law.cat])cats[law.cat]=[];
    cats[law.cat].push({key,...law});
  });
  const catOrder=['Government','Public Health','Freedom','Taxation','Economy','Military','Culture','Trade','Science','Population','Justice','Environment'];
  let html='<div style="font-size:8px;color:rgba(200,232,255,.3);margin-bottom:8px">Active: <span style="color:#f0c040">'+active.length+'/4</span> · Enacting: <span style="color:#00d4ff">'+Object.keys(pending).length+'</span></div>';
  catOrder.forEach(cat=>{
    if(!cats[cat])return;
    const catColor={Government:'#9b6dff','Public Health':'#40ff80',Freedom:'#5bc4ff',Taxation:'#f0c040',Economy:'#ff9540',Military:'#ff6b6b',Culture:'#ff6bff',Trade:'#ffd700',Science:'#00d4ff',Population:'#e87a7a',Justice:'#c8a0ff',Environment:'#60d464'}[cat]||'#aaa';
    html+='<div style="font-size:8px;color:'+catColor+';letter-spacing:.14em;padding:5px 0 4px;border-bottom:1px solid rgba(255,255,255,.06);margin-bottom:6px">◈ '+cat.toUpperCase()+'</div>';
    cats[cat].forEach(({key,name,buffs,debuffs,govs,req_ideology,enact_weeks})=>{
      const isActive=active.includes(key);
      const isPending=key in pending;
      const available=govs.includes(mn.gov);
      const ideoSupport=sup[mn.gov]||0;
      const hasIdeoReq=ideoSupport>=req_ideology;
      const canEnact=available&&hasIdeoReq&&!isActive&&!isPending&&active.length<4;
      const enactWeeksLeft=isPending?Math.max(0,(pending[key].enact_week||now)-now):0;
      const borderCol=isActive?'rgba(64,255,128,.4)':isPending?'rgba(0,212,255,.4)':available&&hasIdeoReq?'rgba(240,192,64,.2)':'rgba(255,255,255,.07)';
      const bg=isActive?'rgba(64,255,128,.04)':isPending?'rgba(0,212,255,.04)':'transparent';
      const attrs=(canEnact||isActive||isPending)?'data-lawkey="'+key+'"':'';
      html+='<div class="law-card'+(isActive?' active':'')+'" '+attrs+' style="border-color:'+borderCol+';background:'+bg+';'
        +(!available||!hasIdeoReq?'opacity:.45;pointer-events:none;':canEnact?'cursor:pointer;':'')
        +'">'
        +'<div style="display:flex;justify-content:space-between;align-items:center">'
        +'<div class="law-name" style="color:'+(isActive?'#40ff80':isPending?'#00d4ff':'#f0c040')+'">'+name+(isActive?' ✓':isPending?' ⟳':enact_weeks>1?' ['+enact_weeks+'w]':'')+'</div>'
        +'<div style="font-size:7px;">';
      if(isPending) html+='<span style="color:#00d4ff">Enacting: '+enactWeeksLeft+'w left</span>';
      else if(isActive) html+='<span style="color:#40ff80">Active</span>';
      else if(!available) html+='<span style="color:#ff6b6b">Wrong ideology</span>';
      else if(!hasIdeoReq) html+='<span style="color:#ff8855">Need '+req_ideology+'% sup ('+ideoSupport+'%)</span>';
      else html+='<span style="color:rgba(200,232,255,.3)">'+enact_weeks+'w to enact</span>';
      html+='</div></div>'
        +'<div class="law-effect">'+lawEffectStr({buffs,debuffs})+'</div>'
        +'<div style="font-size:7px;color:rgba(200,232,255,.2);margin-top:2px">Requires: '+govs.slice(0,2).join(' / ')+(govs.length>2?' +more':'')+'</div>'
        +'</div>';
    });
  });
  return html;
}
// Event delegation (no inline onclick = no CSP violation)
document.addEventListener('click',function(e){
  const lc=e.target.closest('[data-lawkey]');
  if(lc&&lc.closest('#polModal'))window.toggleLaw(lc.dataset.lawkey);
  const pc=e.target.closest('[data-poskey]');
  if(pc&&pc.closest('#polModal'))window.selectCandidate(pc.dataset.poskey,parseInt(pc.dataset.cidx));
});

// Select a candidate for a position
window.selectCandidate=async function(posKey,candidateIdx){
  if(!mn)return;
  const week=currentWeek();
  const ns=nationSeed(mn.id);
  const candidates=genCandidates(posKey,week,ns);
  const chosen=candidates[candidateIdx];
  if(!chosen)return;
  const cabinet={...getCabinet()};
  cabinet[posKey]={...chosen,week_selected:week};
  if(!await updateLaws({cabinet}))return;
  mn.cabinet=cabinet;nations[mn.id]=mn;
  renderPolTab();
  toast('✓ '+chosen.name+' appointed as '+POSITIONS[posKey].title);
};

// Apply cabinet bonuses to income calculation — uses computePosBonus (includes traits)
function cabinetBonus(){
  const cab=getCabinet();
  const bonus={gold:0,manpower:0,supply:0,stability:0,support:0};
  Object.entries(cab).forEach(([posKey,entry])=>{
    if(isPosExpired(posKey))return;
    const b=computePosBonus(posKey,entry);
    bonus.gold+=b.gold||0;
    bonus.manpower+=b.manpower||0;
    bonus.supply+=b.supply||0;
    bonus.stability+=b.stability||0;
    bonus.support+=b.support||0;
  });
  return bonus;
}

let polTabActive='politicians';
window.openPolModal=function(){
  if(!mn){toast('No nation');return;}
  document.getElementById('polModal').classList.add('open');
  renderPolTab();
};
window.closePolModal=function(){document.getElementById('polModal').classList.remove('open');};
window.polTab=function(t){
  polTabActive=t;
  document.querySelectorAll('.pol-tab').forEach((el,i)=>{
    el.classList.toggle('active',['politicians','laws','support','population'][i]===t);
  });
  renderPolTab();
};

function renderPolTab(){
  const el=document.getElementById('polBody');
  if(!el)return;
  if(polTabActive==='politicians')  el.innerHTML=renderPoliticians();
  else if(polTabActive==='laws')    el.innerHTML=renderLaws();
  else if(polTabActive==='population') el.innerHTML=renderPeopleTab();
  else                              el.innerHTML=renderSupport();
}

// ── PEOPLE & LAND TAB ──────────────────────────────────────────────────────
function renderPeopleTab(){
  if(!mn)return'';
  const owned=Object.entries(ownership).filter(([,n])=>n===mn.id).map(([pid])=>parseInt(pid));
  const totalPop=owned.reduce((s,pid)=>s+getProvPopEst(pid),0);

  // Aggregate native peoples
  const ppAgg={};
  owned.forEach(pid=>{
    const pp=getProvPeople(pid);
    if(!ppAgg[pp.name])ppAgg[pp.name]={color:pp.color,count:0,pop:0};
    ppAgg[pp.name].count++;
    ppAgg[pp.name].pop+=getProvPopEst(pid);
  });
  const ppSorted=Object.entries(ppAgg).sort((a,b)=>b[1].pop-a[1].pop);
  const ppTotal=ppSorted.reduce((s,[,v])=>s+v.pop,0);

  // Resources
  const resAgg={};
  owned.forEach(pid=>{
    getProvResources(pid).forEach(([icon,name])=>{
      if(!resAgg[name])resAgg[name]={icon,count:0};
      resAgg[name].count++;
    });
  });

  // Migration flow
  const flow=calcMigrationFlow(mn);
  const can=canChangeEthnic(mn);
  const rem=ethnicCooldownRemaining(mn);

  let html='';

  // YOUR PEOPLE block
  html+='<div style="border:1px solid rgba(155,109,255,.25);padding:10px;margin-bottom:10px;background:rgba(155,109,255,.03)">';
  html+='<div style="font-size:9px;color:#9b6dff;letter-spacing:.12em;margin-bottom:8px">◈ YOUR PEOPLE</div>';
  const myGroups=mn.ethnic_groups||(mn.ethnic_group?[mn.ethnic_group]:[]);
  if(myGroups.length){
    html+=myGroups.map(g=>'<div style="font-size:14px;color:#9b6dff;margin-bottom:3px;padding:4px 8px;border:1px solid rgba(155,109,255,.2);display:inline-block;margin-right:6px">'+g+'</div>').join('');
    html+='<div style="font-size:8px;color:rgba(200,232,255,.35)">Primary people of '+mn.name+'</div>';
    html+='<div style="margin-top:6px">';
    if(can){
      html+='<button onclick="openEthnicModal()" style="font-family:var(--mono);font-size:8px;padding:4px 8px;border:1px solid rgba(155,109,255,.4);background:rgba(155,109,255,.08);color:#9b6dff;cursor:pointer">RENAME ('+ETHNIC_COOLDOWN_DAYS+'d cooldown)</button>';
    } else {
      html+='<span style="font-size:8px;color:#ff6b6b">Cooldown: '+rem+' days remaining</span>';
    }
    html+='</div>';
  } else {
    html+='<div style="font-size:9px;color:rgba(200,232,255,.3);margin-bottom:8px">No primary people defined.</div>';
    html+='<button onclick="openEthnicModal()" style="font-family:var(--mono);font-size:8px;padding:4px 8px;border:1px solid rgba(155,109,255,.4);background:rgba(155,109,255,.08);color:#9b6dff;cursor:pointer">DEFINE YOUR PEOPLE</button>';
  }
  html+='</div>';

  // POPULATION block
  html+='<div style="border:1px solid rgba(0,212,255,.15);padding:10px;margin-bottom:10px;background:rgba(0,212,255,.02)">';
  html+='<div style="font-size:9px;color:rgba(200,232,255,.4);letter-spacing:.12em;margin-bottom:6px">◈ POPULATION</div>';
  html+='<div style="font-size:22px;color:#c8e8ff">'+totalPop+'<span style="font-size:10px;color:rgba(200,232,255,.3)">k</span></div>';
  html+='<div style="font-size:8px;color:rgba(200,232,255,.3)">across '+owned.length+' province'+(owned.length!==1?'s':'')+'</div>';
  if(ppSorted.length&&ppTotal>0){
    html+='<div style="margin-top:8px;height:6px;display:flex;border-radius:2px;overflow:hidden">';
    ppSorted.forEach(([name,v])=>{
      html+='<div style="width:'+(v.pop/ppTotal*100).toFixed(1)+'%;background:'+v.color+';opacity:.8" title="'+name+'"></div>';
    });
    html+='</div>';
    html+='<div style="display:flex;flex-wrap:wrap;gap:3px;margin-top:5px">';
    ppSorted.forEach(([name,v])=>{
      const pct=Math.round(v.pop/ppTotal*100);
      html+='<span style="font-size:7px;padding:2px 5px;border:1px solid '+v.color+'50;color:'+v.color+'">'+name+' '+pct+'%</span>';
    });
    html+='</div>';
  }
  html+='</div>';

  // MIGRATION block
  html+='<div style="border:1px solid rgba(0,212,255,.15);padding:10px;margin-bottom:10px;background:rgba(0,212,255,.02)">';
  html+='<div style="font-size:9px;color:rgba(200,232,255,.4);letter-spacing:.12em;margin-bottom:8px">◈ MIGRATION</div>';
  html+='<div style="display:flex;gap:12px;margin-bottom:6px">';
  html+='<div><div style="font-size:8px;color:rgba(200,232,255,.3)">Inflow</div><div style="font-size:14px;color:#40ff80">+'+(flow.inflow||0)+'k</div></div>';
  html+='<div><div style="font-size:8px;color:rgba(200,232,255,.3)">Outflow</div><div style="font-size:14px;color:#ff6b6b">-'+(flow.outflow||0)+'k</div></div>';
  html+='<div><div style="font-size:8px;color:rgba(200,232,255,.3)">Net</div><div style="font-size:14px;color:'+(flow.net>=0?'#40ff80':'#ff6b6b')+'">'+(flow.net>=0?'+':'')+flow.net+'k</div></div>';
  html+='</div>';
  html+='<div style="font-size:8px;color:rgba(200,232,255,.35)">Migrants accumulated: <span style="color:#c8e8ff">'+(mn.migrant_pop||0)+'k</span></div>';
  html+='<div style="font-size:7px;color:rgba(200,232,255,.25);margin-top:4px">Affected by: open_border, migration_wave, multiculturalism, martial_law, censorship</div>';
  html+='</div>';

  // NATIVE PEOPLES
  if(ppSorted.length){
    html+='<div style="border:1px solid rgba(0,212,255,.15);padding:10px;margin-bottom:10px;background:rgba(0,212,255,.02)">';
    html+='<div style="font-size:9px;color:rgba(200,232,255,.4);letter-spacing:.12em;margin-bottom:8px">◈ NATIVE PEOPLES</div>';
    ppSorted.forEach(([name,v])=>{
      html+='<div style="display:flex;justify-content:space-between;align-items:center;padding:4px 6px;border-left:2px solid '+v.color+';margin-bottom:4px">'
        +'<div><span style="color:'+v.color+';font-size:10px">'+name+'</span>'
        +'<div style="font-size:7px;color:rgba(200,232,255,.3)">'+v.count+' province'+(v.count!==1?'s':'')+'</div></div>'
        +'<div style="text-align:right"><div style="color:#c8e8ff">'+v.pop+'k</div></div>'
        +'</div>';
    });
    html+='</div>';
  }

  // RESOURCES
  html+='<div style="border:1px solid rgba(240,192,64,.15);padding:10px;background:rgba(240,192,64,.02)">';
  html+='<div style="font-size:9px;color:rgba(240,192,64,.7);letter-spacing:.12em;margin-bottom:8px">◈ RESOURCES</div>';
  if(Object.keys(resAgg).length){
    html+='<div style="display:flex;flex-wrap:wrap;gap:5px">';
    Object.entries(resAgg).sort((a,b)=>b[1].count-a[1].count).forEach(([name,{icon,count}])=>{
      html+='<div style="border:1px solid rgba(240,192,64,.2);padding:4px 8px;font-size:9px;color:#f0c040">'+icon+' '+name+' <span style="opacity:.6">×'+count+'</span></div>';
    });
    html+='</div>';
  } else {
    html+='<div style="font-size:8px;color:rgba(200,232,255,.25)">No resources found.</div>';
  }
  html+='</div>';

  return html;
}

function renderSupport(){
  const sup=mn.party_support||{};
  const sorted=Object.entries(GOVS).sort((a,b)=>(sup[b[0]]||0)-(sup[a[0]]||0));
  let html='<div style="font-size:8px;color:rgba(200,232,255,.3);margin-bottom:8px;letter-spacing:.1em">Current government: <span style="color:#f0c040">'+mn.gov+'</span></div>';
  sorted.forEach(([name,g])=>{
    const pct=sup[name]||0,isCur=name===mn.gov;
    html+='<div style="margin-bottom:7px">'
      +'<div style="display:flex;justify-content:space-between;font-size:9px;color:'+(isCur?g.color:'rgba(200,232,255,.45)')+';margin-bottom:3px">'
      +'<span>'+(isCur?'★ ':'')+name+'</span><span>'+pct+'%</span></div>'
      +'<div style="height:5px;background:rgba(255,255,255,.06);border-radius:3px;overflow:hidden">'
      +'<div style="height:100%;width:'+pct+'%;background:'+g.color+';border-radius:3px;transition:width .5s"></div>'
      +'</div></div>';
  });
  return html;
}

// Safe law update — catches 400 if column missing and shows a helpful hint
async function updateLaws(updates){
  const{error}=await sb.from('wc_nations').update(updates).eq('id',mn.id);
  if(error){
    if(error.code==='PGRST204'||error.message?.includes('column')||error.message?.includes('400')){
      toast('⚠ Run SQL first: see console for schema');
      console.warn('Missing columns! Run in Supabase SQL Editor:\n'
        +'ALTER TABLE wc_nations ADD COLUMN IF NOT EXISTS active_laws JSONB DEFAULT \'[]\'::\jsonb;\n'
        +'ALTER TABLE wc_nations ADD COLUMN IF NOT EXISTS pending_laws JSONB DEFAULT \'{}\'::\jsonb;\n'
        +'ALTER TABLE wc_nations ADD COLUMN IF NOT EXISTS ethnic_groups JSONB DEFAULT \'[]\'::\jsonb;\n'
        +'ALTER TABLE wc_nations ADD COLUMN IF NOT EXISTS ethnic_group TEXT DEFAULT NULL;\n'
        +'ALTER TABLE wc_nations ADD COLUMN IF NOT EXISTS ethnic_group_set_at TIMESTAMPTZ DEFAULT NULL;\n'
        +'ALTER TABLE wc_nations ADD COLUMN IF NOT EXISTS cabinet JSONB DEFAULT \'{}\'::\jsonb;');
    } else toast('Error: '+error.message);
    return false;
  }
  return true;
}

window.toggleLaw=async function(key){
  if(!mn)return;
  const law=LAWS[key];if(!law)return;
  const active=[...(mn.active_laws||[])];
  const pending={...(mn.pending_laws||{})};
  const isActive=active.includes(key);
  const isPending=key in pending;
  const now=currentWeek();
  if(isActive){
    const idx=active.indexOf(key);active.splice(idx,1);
    if(await updateLaws({active_laws:active})){mn.active_laws=active;nations[mn.id]=mn;renderPolTab();toast('Law repealed: '+law.name);}
  } else if(isPending){
    delete pending[key];
    if(await updateLaws({pending_laws:pending})){mn.pending_laws=pending;nations[mn.id]=mn;renderPolTab();toast('Cancelled: '+law.name);}
  } else {
    const sup=mn.party_support||{};
    const ideoSup=sup[mn.gov]||0;
    if(ideoSup<law.req_ideology){toast('Need '+law.req_ideology+'% '+mn.gov+' support (have '+ideoSup+'%)');return;}
    if(active.length>=4){toast('Max 4 active laws');return;}
    if(law.enact_weeks<=1){
      active.push(key);
      if(await updateLaws({active_laws:active})){mn.active_laws=active;nations[mn.id]=mn;renderPolTab();toast('✓ Law enacted: '+law.name);}
    } else {
      pending[key]={enact_week:now+law.enact_weeks};
      if(await updateLaws({pending_laws:pending})){mn.pending_laws=pending;nations[mn.id]=mn;renderPolTab();toast('Enacting: '+law.name+' ('+law.enact_weeks+' weeks)');}
    }
  }
};

// Check pending laws — call on each tick
async function processPendingLaws(){
  if(!mn)return;
  const pending={...(mn.pending_laws||{})};
  const active=[...(mn.active_laws||[])];
  const now=currentWeek();
  let changed=false;
  for(const [key,entry] of Object.entries(pending)){
    if(now>=(entry.enact_week||0)){
      // Enact this law
      if(!active.includes(key)&&active.length<4)active.push(key);
      delete pending[key];
      changed=true;
      toast('✓ Law enacted: '+(LAWS[key]?.name||key));
    }
  }
  if(changed){
    await sb.from('wc_nations').update({active_laws:active,pending_laws:pending}).eq('id',mn.id);
    mn.active_laws=active;mn.pending_laws=pending;nations[mn.id]=mn;
    updateNatUI();
  }
}

// Weekly politician influence — governing party + propagandist + law effects on support
function applyPoliticianInfluence(nat){
  const week=currentWeek();
  const lastWeek=nat.last_pol_week||0;
  if(week<=lastWeek)return nat;
  const sup={...nat.party_support||{}};
  // Governing party slowly gains support
  sup[nat.gov]=(sup[nat.gov]||10)+3;
  // Propagandist cabinet bonus — now uses computePosBonus
  const cab=nat.cabinet||{};
  const prop=cab.propagandist;
  if(prop&&!isPosExpiredFor(prop,week)){
    const pb=computePosBonus('propagandist',prop);
    sup[prop.ideology]=(sup[prop.ideology]||0)+(pb.support||8);
    // Propagandist's governing ideology gets extra
    sup[nat.gov]=(sup[nat.gov]||10)+2;
  }
  // Active laws can affect support
  const active=nat.active_laws||[];
  active.forEach(key=>{
    const law=LAWS[key];if(!law)return;
    const supBuff=law.buffs?.support||0;
    const supDebuff=law.debuffs?.support||0;
    if(supBuff)sup[nat.gov]=(sup[nat.gov]||0)+Math.round(supBuff/5);
    if(supDebuff){
      Object.keys(GOVS).forEach(k=>{ if(k!==nat.gov) sup[k]=(sup[k]||0)+Math.round(Math.abs(supDebuff)/Object.keys(GOVS).length); });
    }
  });
  // Normalize: cap and slow drain others
  Object.keys(GOVS).forEach(k=>{sup[k]=Math.max(1,Math.min(88,sup[k]||1));});
  Object.keys(GOVS).forEach(k=>{if(k!==nat.gov)sup[k]=Math.max(1,(sup[k]||5)-1);});
  return{...nat,party_support:sup,last_pol_week:week};
}
function isPosExpiredFor(entry,week){
  return week>=(entry.week_selected||0)+(entry.lifeWeeks||2);
}