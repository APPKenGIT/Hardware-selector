// Database met alle koppelingen, verlengstukken en reducties voor de Interflon Hardware Selector
// Geprepareerd voor directe import/export naar Odoo met veld 'default_code'
let COUPLINGS_DATA = [
  {
    "cat": "Montagekits",
    "default_code": "1702",
    "name": "Pulsarlube 2000RC-1 Installatiekit voor montage op afstand",
    "a1": "Montagebeugel G 1/4\" F",
    "a2": "Leiding 8 mm max. 20 cm + insteekkoppeling 8 mm - G 1/8\" M",
    "mat": "Verzinkt staal / RVS / Polyamide",
    "desc": "Complete installatiekit Pulsarlube 2000RC-1 inclusief beugel, max. 20 cm slang 8 mm en rechte insteekkoppeling 8 mm - G 1/8\" M (art. 1702)"
  },
  {
    "cat": "Verloopstukken naar G 1/4\"",
    "default_code": "1099.1000",
    "name": "Verloopstuk M6x1 M x G 1/4\" F (Messing vernikkeld)",
    "a1": "M6x1 M (buitendraad recht)",
    "a2": "G 1/4\" F (binnendraad)",
    "mat": "Messing vernikkeld",
    "desc": "Draadadapter buitendraad M6x1 naar binnendraad G 1/4\" BSPP (Messing vernikkeld)"
  },
  {
    "cat": "Verloopstukken naar G 1/4\"",
    "default_code": "1099.1001",
    "name": "Verloopstuk M8x1 M x G 1/4\" F (Messing vernikkeld)",
    "a1": "M8x1 M (buitendraad recht)",
    "a2": "G 1/4\" F (binnendraad)",
    "mat": "Messing vernikkeld",
    "desc": "Draadadapter buitendraad M8x1 naar binnendraad G 1/4\" BSPP (Messing vernikkeld)"
  },
  {
    "cat": "Verloopstukken naar G 1/4\"",
    "default_code": "1099.1002",
    "name": "Verloopstuk M8x1.25 M x G 1/4\" F (Messing vernikkeld)",
    "a1": "M8x1.25 M (buitendraad recht)",
    "a2": "G 1/4\" F (binnendraad)",
    "mat": "Messing vernikkeld",
    "desc": "Draadadapter buitendraad M8x1.25 naar binnendraad G 1/4\" BSPP (Messing vernikkeld)"
  },
  {
    "cat": "Verloopstukken naar G 1/4\"",
    "default_code": "1099.1003",
    "name": "Verloopstuk M10x1 M x G 1/4\" F (Messing vernikkeld)",
    "a1": "M10x1 M (buitendraad recht)",
    "a2": "G 1/4\" F (binnendraad)",
    "mat": "Messing vernikkeld",
    "desc": "Draadadapter buitendraad M10x1 naar binnendraad G 1/4\" BSPP (Messing vernikkeld)"
  },
  {
    "cat": "Verloopstukken naar G 1/4\"",
    "default_code": "1099.1004",
    "name": "Verloopstuk M10x1.5 M x G 1/4\" F (Messing vernikkeld)",
    "a1": "M10x1.5 M (buitendraad recht)",
    "a2": "G 1/4\" F (binnendraad)",
    "mat": "Messing vernikkeld",
    "desc": "Draadadapter buitendraad M10x1.5 naar binnendraad G 1/4\" BSPP (Messing vernikkeld)"
  },
  {
    "cat": "Verloopstukken naar G 1/4\"",
    "default_code": "1099.1005",
    "name": "Verloopstuk G 1/8 M x G 1/4\" F (Messing vernikkeld)",
    "a1": "G 1/8\" M (buitendraad)",
    "a2": "G 1/4\" F (binnendraad)",
    "mat": "Messing vernikkeld",
    "desc": "Draadadapter buitendraad G 1/8 naar binnendraad G 1/4\" BSPP (Messing vernikkeld)"
  },
  {
    "cat": "Verloopstukken naar G 1/4\"",
    "default_code": "1099.1006",
    "name": "Verloopstuk 1/8 NPT M x G 1/4\" F (Messing vernikkeld)",
    "a1": "1/8\" NPT M (buitendraad conisch)",
    "a2": "G 1/4\" F (binnendraad)",
    "mat": "Messing vernikkeld",
    "desc": "Draadadapter buitendraad 1/8 NPT naar binnendraad G 1/4\" BSPP (Messing vernikkeld)"
  },
  {
    "cat": "Verloopstukken naar G 1/4\"",
    "default_code": "1099.1007",
    "name": "Verloopstuk 1/4 NPT M x G 1/4\" F (Messing vernikkeld)",
    "a1": "1/4\" NPT M (buitendraad conisch)",
    "a2": "G 1/4\" F (binnendraad)",
    "mat": "Messing vernikkeld",
    "desc": "Draadadapter buitendraad 1/4 NPT naar binnendraad G 1/4\" BSPP (Messing vernikkeld)"
  },
  {
    "cat": "Verloopstukken naar G 1/8\"",
    "default_code": "1099.1008",
    "name": "Verloopstuk M6x1 M x G 1/8\" F (Messing vernikkeld)",
    "a1": "M6x1 M (buitendraad recht)",
    "a2": "G 1/8\" F (binnendraad)",
    "mat": "Messing vernikkeld",
    "desc": "Draadadapter buitendraad M6x1 naar binnendraad G 1/8\" BSPP (Messing vernikkeld)"
  },
  {
    "cat": "Verloopstukken naar G 1/8\"",
    "default_code": "1099.1009",
    "name": "Verloopstuk M8x1 M x G 1/8\" F (Messing vernikkeld)",
    "a1": "M8x1 M (buitendraad recht)",
    "a2": "G 1/8\" F (binnendraad)",
    "mat": "Messing vernikkeld",
    "desc": "Draadadapter buitendraad M8x1 naar binnendraad G 1/8\" BSPP (Messing vernikkeld)"
  },
  {
    "cat": "Verloopstukken naar G 1/8\"",
    "default_code": "1099.1010",
    "name": "Verloopstuk M8x1.25 M x G 1/8\" F (Messing vernikkeld)",
    "a1": "M8x1.25 M (buitendraad recht)",
    "a2": "G 1/8\" F (binnendraad)",
    "mat": "Messing vernikkeld",
    "desc": "Draadadapter buitendraad M8x1.25 naar binnendraad G 1/8\" BSPP (Messing vernikkeld)"
  },
  {
    "cat": "Verloopstukken naar G 1/8\"",
    "default_code": "1099.1011",
    "name": "Verloopstuk M10x1 M x G 1/8\" F (Messing vernikkeld)",
    "a1": "M10x1 M (buitendraad recht)",
    "a2": "G 1/8\" F (binnendraad)",
    "mat": "Messing vernikkeld",
    "desc": "Draadadapter buitendraad M10x1 naar binnendraad G 1/8\" BSPP (Messing vernikkeld)"
  },
  {
    "cat": "Verloopstukken naar G 1/8\"",
    "default_code": "1099.1012",
    "name": "Verloopstuk G 1/4 M x G 1/8\" F (Messing vernikkeld)",
    "a1": "G 1/4\" M (buitendraad)",
    "a2": "G 1/8\" F (binnendraad)",
    "mat": "Messing vernikkeld",
    "desc": "Draadadapter buitendraad G 1/4 naar binnendraad G 1/8\" BSPP (Messing vernikkeld)"
  },
  {
    "cat": "Verloopstukken naar G 1/8\"",
    "default_code": "1099.1013",
    "name": "Verloopstuk 1/8 NPT M x G 1/8\" F (Messing vernikkeld)",
    "a1": "1/8\" NPT M (buitendraad conisch)",
    "a2": "G 1/8\" F (binnendraad)",
    "mat": "Messing vernikkeld",
    "desc": "Draadadapter buitendraad 1/8 NPT naar binnendraad G 1/8\" BSPP (Messing vernikkeld)"
  },
  {
    "cat": "Verloopstukken",
    "default_code": "1099.1014",
    "name": "Verloopstuk G 1/8\" M x G 1/4\" F (Messing vernikkeld)",
    "a1": "G 1/8\" M (buitendraad)",
    "a2": "G 1/4\" F (binnendraad)",
    "mat": "Messing vernikkeld",
    "desc": "Verloopadapter van G 1/8\" buitendraad naar G 1/4\" binnendraad voor ISPL (Messing vernikkeld)"
  },
  {
    "cat": "Kniestukken G 1/4\"",
    "default_code": "1099.1015",
    "name": "Kniestuk 90° G 1/4\" M x G 1/4\" F (Messing vernikkeld)",
    "a1": "G 1/4\" M (buitendraad)",
    "a2": "G 1/4\" F (binnendraad 90°)",
    "mat": "Messing vernikkeld",
    "desc": "Haakse koppeling 90° buitendraad G 1/4\" naar binnendraad G 1/4\" (Messing vernikkeld)"
  },
  {
    "cat": "Kniestukken G 1/4\"",
    "default_code": "1099.1016",
    "name": "Kniestuk 45° G 1/4\" M x G 1/4\" F (Messing vernikkeld)",
    "a1": "G 1/4\" M (buitendraad)",
    "a2": "G 1/4\" F (binnendraad 45°)",
    "mat": "Messing vernikkeld",
    "desc": "Kniestuk 45° buitendraad G 1/4\" naar binnendraad G 1/4\" (Messing vernikkeld)"
  },
  {
    "cat": "Kniestukken G 1/8\"",
    "default_code": "1099.1017",
    "name": "Kniestuk 90° G 1/8\" M x G 1/8\" F (Messing vernikkeld)",
    "a1": "G 1/8\" M (buitendraad)",
    "a2": "G 1/8\" F (binnendraad 90°)",
    "mat": "Messing vernikkeld",
    "desc": "Haakse koppeling 90° buitendraad G 1/8\" naar binnendraad G 1/8\" (Messing vernikkeld)"
  },
  {
    "cat": "Kniestukken G 1/8\"",
    "default_code": "1099.1018",
    "name": "Kniestuk 45° G 1/8\" M x G 1/8\" F (Messing vernikkeld)",
    "a1": "G 1/8\" M (buitendraad)",
    "a2": "G 1/8\" F (binnendraad 45°)",
    "mat": "Messing vernikkeld",
    "desc": "Kniestuk 45° buitendraad G 1/8\" naar binnendraad G 1/8\" (Messing vernikkeld)"
  },
  {
    "cat": "Verlengstukken G 1/4\"",
    "default_code": "1099.1019",
    "name": "Verlengstuk G 1/4\" M x G 1/4\" F - L=15mm (Messing vernikkeld)",
    "a1": "G 1/4\" M (buitendraad)",
    "a2": "G 1/4\" F (binnendraad) - L=15mm",
    "mat": "Messing vernikkeld",
    "desc": "Verlengstuk buitendraad G 1/4\" naar binnendraad G 1/4\", effectieve lengte 15 mm (Messing vernikkeld)"
  },
  {
    "cat": "Verlengstukken G 1/8\"",
    "default_code": "1099.1020",
    "name": "Verlengstuk G 1/8\" M x G 1/8\" F - L=15mm (Messing vernikkeld)",
    "a1": "G 1/8\" M (buitendraad)",
    "a2": "G 1/8\" F (binnendraad) - L=15mm",
    "mat": "Messing vernikkeld",
    "desc": "Verlengstuk buitendraad G 1/8\" naar binnendraad G 1/8\", effectieve lengte 15 mm (Messing vernikkeld)"
  },
  {
    "cat": "Verlengstukken G 1/4\"",
    "default_code": "1099.1021",
    "name": "Verlengstuk G 1/4\" M x G 1/4\" F - L=25mm (Messing vernikkeld)",
    "a1": "G 1/4\" M (buitendraad)",
    "a2": "G 1/4\" F (binnendraad) - L=25mm",
    "mat": "Messing vernikkeld",
    "desc": "Verlengstuk buitendraad G 1/4\" naar binnendraad G 1/4\", effectieve lengte 25 mm (Messing vernikkeld)"
  },
  {
    "cat": "Verlengstukken G 1/8\"",
    "default_code": "1099.1022",
    "name": "Verlengstuk G 1/8\" M x G 1/8\" F - L=25mm (Messing vernikkeld)",
    "a1": "G 1/8\" M (buitendraad)",
    "a2": "G 1/8\" F (binnendraad) - L=25mm",
    "mat": "Messing vernikkeld",
    "desc": "Verlengstuk buitendraad G 1/8\" naar binnendraad G 1/8\", effectieve lengte 25 mm (Messing vernikkeld)"
  },
  {
    "cat": "Verlengstukken G 1/4\"",
    "default_code": "1099.1023",
    "name": "Verlengstuk G 1/4\" M x G 1/4\" F - L=35mm (Messing vernikkeld)",
    "a1": "G 1/4\" M (buitendraad)",
    "a2": "G 1/4\" F (binnendraad) - L=35mm",
    "mat": "Messing vernikkeld",
    "desc": "Verlengstuk buitendraad G 1/4\" naar binnendraad G 1/4\", effectieve lengte 35 mm (Messing vernikkeld)"
  },
  {
    "cat": "Verlengstukken G 1/8\"",
    "default_code": "1099.1024",
    "name": "Verlengstuk G 1/8\" M x G 1/8\" F - L=35mm (Messing vernikkeld)",
    "a1": "G 1/8\" M (buitendraad)",
    "a2": "G 1/8\" F (binnendraad) - L=35mm",
    "mat": "Messing vernikkeld",
    "desc": "Verlengstuk buitendraad G 1/8\" naar binnendraad G 1/8\", effectieve lengte 35 mm (Messing vernikkeld)"
  },
  {
    "cat": "Verlengstukken G 1/4\"",
    "default_code": "1099.1025",
    "name": "Verlengstuk G 1/4\" M x G 1/4\" F - L=50mm (Messing vernikkeld)",
    "a1": "G 1/4\" M (buitendraad)",
    "a2": "G 1/4\" F (binnendraad) - L=50mm",
    "mat": "Messing vernikkeld",
    "desc": "Verlengstuk buitendraad G 1/4\" naar binnendraad G 1/4\", effectieve lengte 50 mm (Messing vernikkeld)"
  },
  {
    "cat": "Verlengstukken G 1/8\"",
    "default_code": "1099.1026",
    "name": "Verlengstuk G 1/8\" M x G 1/8\" F - L=50mm (Messing vernikkeld)",
    "a1": "G 1/8\" M (buitendraad)",
    "a2": "G 1/8\" F (binnendraad) - L=50mm",
    "mat": "Messing vernikkeld",
    "desc": "Verlengstuk buitendraad G 1/8\" naar binnendraad G 1/8\", effectieve lengte 50 mm (Messing vernikkeld)"
  },
  {
    "cat": "Insteekkoppelingen 6 mm",
    "default_code": "1099.1027",
    "name": "Rechte insteekkoppeling 6 mm - G 1/8\" M (Messing vernikkeld)",
    "a1": "Push-in 6 mm",
    "a2": "G 1/8\" BSPP M (buitendraad recht)",
    "mat": "Messing vernikkeld",
    "desc": "Rechte steekkoppeling voor 6 mm leiding x G 1/8\" buitendraad (Messing vernikkeld)"
  },
  {
    "cat": "Insteekkoppelingen 6 mm",
    "default_code": "1099.1028",
    "name": "Knie-insteekkoppeling 90° 6 mm - G 1/8\" M (Messing vernikkeld)",
    "a1": "Push-in 6 mm",
    "a2": "G 1/8\" BSPP M (90° knie recht)",
    "mat": "Messing vernikkeld",
    "desc": "90° haakse knie-steekkoppeling voor 6 mm leiding x G 1/8\" buitendraad (Messing vernikkeld)"
  },
  {
    "cat": "Insteekkoppelingen 6 mm",
    "default_code": "1099.1029",
    "name": "Rechte insteekkoppeling 6 mm - G 1/4\" M (Messing vernikkeld)",
    "a1": "Push-in 6 mm",
    "a2": "G 1/4\" BSPP M (buitendraad recht)",
    "mat": "Messing vernikkeld",
    "desc": "Rechte steekkoppeling voor 6 mm leiding x G 1/4\" buitendraad (Messing vernikkeld)"
  },
  {
    "cat": "Insteekkoppelingen 6 mm",
    "default_code": "1099.1030",
    "name": "Knie-insteekkoppeling 90° 6 mm - G 1/4\" M (Messing vernikkeld)",
    "a1": "Push-in 6 mm",
    "a2": "G 1/4\" BSPP M (90° knie recht)",
    "mat": "Messing vernikkeld",
    "desc": "90° haakse knie-steekkoppeling voor 6 mm leiding x G 1/4\" buitendraad (Messing vernikkeld)"
  },
  {
    "cat": "Insteekkoppelingen 8 mm",
    "default_code": "1099.1031",
    "name": "Rechte insteekkoppeling 8 mm - G 1/8\" M (Messing vernikkeld)",
    "a1": "Push-in 8 mm",
    "a2": "G 1/8\" BSPP M (buitendraad recht)",
    "mat": "Messing vernikkeld",
    "desc": "Rechte steekkoppeling voor 8 mm leiding x G 1/8\" buitendraad (Messing vernikkeld)"
  },
  {
    "cat": "Insteekkoppelingen 8 mm",
    "default_code": "1099.1032",
    "name": "Knie-insteekkoppeling 90° 8 mm - G 1/8\" M (Messing vernikkeld)",
    "a1": "Push-in 8 mm",
    "a2": "G 1/8\" BSPP M (90° knie recht)",
    "mat": "Messing vernikkeld",
    "desc": "90° haakse knie-steekkoppeling voor 8 mm leiding x G 1/8\" buitendraad (Messing vernikkeld)"
  },
  {
    "cat": "Insteekkoppelingen 8 mm",
    "default_code": "1099.1033",
    "name": "Rechte insteekkoppeling 8 mm - G 1/4\" M (Messing vernikkeld)",
    "a1": "Push-in 8 mm",
    "a2": "G 1/4\" BSPP M (buitendraad recht)",
    "mat": "Messing vernikkeld",
    "desc": "Rechte steekkoppeling voor 8 mm leiding x G 1/4\" buitendraad (Messing vernikkeld)"
  },
  {
    "cat": "Insteekkoppelingen 8 mm",
    "default_code": "1099.1034",
    "name": "Knie-insteekkoppeling 90° 8 mm - G 1/4\" M (Messing vernikkeld)",
    "a1": "Push-in 8 mm",
    "a2": "G 1/4\" BSPP M (90° knie recht)",
    "mat": "Messing vernikkeld",
    "desc": "90° haakse knie-steekkoppeling voor 8 mm leiding x G 1/4\" buitendraad (Messing vernikkeld)"
  },
  {
    "cat": "Verloopstukken naar G 1/4\"",
    "default_code": "1099.1035",
    "name": "Verloopstuk M6x1 M x G 1/4\" F (RVS)",
    "a1": "M6x1 M (buitendraad recht)",
    "a2": "G 1/4\" F (binnendraad)",
    "mat": "RVS",
    "desc": "Draadadapter buitendraad M6x1 naar binnendraad G 1/4\" BSPP (RVS)"
  },
  {
    "cat": "Verloopstukken naar G 1/4\"",
    "default_code": "1099.1036",
    "name": "Verloopstuk M8x1 M x G 1/4\" F (RVS)",
    "a1": "M8x1 M (buitendraad recht)",
    "a2": "G 1/4\" F (binnendraad)",
    "mat": "RVS",
    "desc": "Draadadapter buitendraad M8x1 naar binnendraad G 1/4\" BSPP (RVS)"
  },
  {
    "cat": "Verloopstukken naar G 1/4\"",
    "default_code": "1099.1037",
    "name": "Verloopstuk M8x1.25 M x G 1/4\" F (RVS)",
    "a1": "M8x1.25 M (buitendraad recht)",
    "a2": "G 1/4\" F (binnendraad)",
    "mat": "RVS",
    "desc": "Draadadapter buitendraad M8x1.25 naar binnendraad G 1/4\" BSPP (RVS)"
  },
  {
    "cat": "Verloopstukken naar G 1/4\"",
    "default_code": "1099.1038",
    "name": "Verloopstuk M10x1 M x G 1/4\" F (RVS)",
    "a1": "M10x1 M (buitendraad recht)",
    "a2": "G 1/4\" F (binnendraad)",
    "mat": "RVS",
    "desc": "Draadadapter buitendraad M10x1 naar binnendraad G 1/4\" BSPP (RVS)"
  },
  {
    "cat": "Verloopstukken naar G 1/4\"",
    "default_code": "1099.1039",
    "name": "Verloopstuk M10x1.5 M x G 1/4\" F (RVS)",
    "a1": "M10x1.5 M (buitendraad recht)",
    "a2": "G 1/4\" F (binnendraad)",
    "mat": "RVS",
    "desc": "Draadadapter buitendraad M10x1.5 naar binnendraad G 1/4\" BSPP (RVS)"
  },
  {
    "cat": "Verloopstukken naar G 1/4\"",
    "default_code": "1099.1040",
    "name": "Verloopstuk G 1/8 M x G 1/4\" F (RVS)",
    "a1": "G 1/8\" M (buitendraad)",
    "a2": "G 1/4\" F (binnendraad)",
    "mat": "RVS",
    "desc": "Draadadapter buitendraad G 1/8 naar binnendraad G 1/4\" BSPP (RVS)"
  },
  {
    "cat": "Verloopstukken naar G 1/4\"",
    "default_code": "1099.1041",
    "name": "Verloopstuk 1/8 NPT M x G 1/4\" F (RVS)",
    "a1": "1/8\" NPT M (buitendraad conisch)",
    "a2": "G 1/4\" F (binnendraad)",
    "mat": "RVS",
    "desc": "Draadadapter buitendraad 1/8 NPT naar binnendraad G 1/4\" BSPP (RVS)"
  },
  {
    "cat": "Verloopstukken naar G 1/4\"",
    "default_code": "1099.1042",
    "name": "Verloopstuk 1/4 NPT M x G 1/4\" F (RVS)",
    "a1": "1/4\" NPT M (buitendraad conisch)",
    "a2": "G 1/4\" F (binnendraad)",
    "mat": "RVS",
    "desc": "Draadadapter buitendraad 1/4 NPT naar binnendraad G 1/4\" BSPP (RVS)"
  },
  {
    "cat": "Verloopstukken naar G 1/8\"",
    "default_code": "1099.1043",
    "name": "Verloopstuk M6x1 M x G 1/8\" F (RVS)",
    "a1": "M6x1 M (buitendraad recht)",
    "a2": "G 1/8\" F (binnendraad)",
    "mat": "RVS",
    "desc": "Draadadapter buitendraad M6x1 naar binnendraad G 1/8\" BSPP (RVS)"
  },
  {
    "cat": "Verloopstukken naar G 1/8\"",
    "default_code": "1099.1044",
    "name": "Verloopstuk M8x1 M x G 1/8\" F (RVS)",
    "a1": "M8x1 M (buitendraad recht)",
    "a2": "G 1/8\" F (binnendraad)",
    "mat": "RVS",
    "desc": "Draadadapter buitendraad M8x1 naar binnendraad G 1/8\" BSPP (RVS)"
  },
  {
    "cat": "Verloopstukken naar G 1/8\"",
    "default_code": "1099.1045",
    "name": "Verloopstuk M8x1.25 M x G 1/8\" F (RVS)",
    "a1": "M8x1.25 M (buitendraad recht)",
    "a2": "G 1/8\" F (binnendraad)",
    "mat": "RVS",
    "desc": "Draadadapter buitendraad M8x1.25 naar binnendraad G 1/8\" BSPP (RVS)"
  },
  {
    "cat": "Verloopstukken naar G 1/8\"",
    "default_code": "1099.1046",
    "name": "Verloopstuk M10x1 M x G 1/8\" F (RVS)",
    "a1": "M10x1 M (buitendraad recht)",
    "a2": "G 1/8\" F (binnendraad)",
    "mat": "RVS",
    "desc": "Draadadapter buitendraad M10x1 naar binnendraad G 1/8\" BSPP (RVS)"
  },
  {
    "cat": "Verloopstukken naar G 1/8\"",
    "default_code": "1099.1047",
    "name": "Verloopstuk G 1/4 M x G 1/8\" F (RVS)",
    "a1": "G 1/4\" M (buitendraad)",
    "a2": "G 1/8\" F (binnendraad)",
    "mat": "RVS",
    "desc": "Draadadapter buitendraad G 1/4 naar binnendraad G 1/8\" BSPP (RVS)"
  },
  {
    "cat": "Verloopstukken naar G 1/8\"",
    "default_code": "1099.1048",
    "name": "Verloopstuk 1/8 NPT M x G 1/8\" F (RVS)",
    "a1": "1/8\" NPT M (buitendraad conisch)",
    "a2": "G 1/8\" F (binnendraad)",
    "mat": "RVS",
    "desc": "Draadadapter buitendraad 1/8 NPT naar binnendraad G 1/8\" BSPP (RVS)"
  },
  {
    "cat": "Verloopstukken",
    "default_code": "1099.1049",
    "name": "Verloopstuk G 1/8\" M x G 1/4\" F (RVS)",
    "a1": "G 1/8\" M (buitendraad)",
    "a2": "G 1/4\" F (binnendraad)",
    "mat": "RVS",
    "desc": "Verloopadapter van G 1/8\" buitendraad naar G 1/4\" binnendraad voor ISPL (RVS)"
  },
  {
    "cat": "Kniestukken G 1/4\"",
    "default_code": "1099.1050",
    "name": "Kniestuk 90° G 1/4\" M x G 1/4\" F (RVS)",
    "a1": "G 1/4\" M (buitendraad)",
    "a2": "G 1/4\" F (binnendraad 90°)",
    "mat": "RVS",
    "desc": "Haakse koppeling 90° buitendraad G 1/4\" naar binnendraad G 1/4\" (RVS)"
  },
  {
    "cat": "Kniestukken G 1/4\"",
    "default_code": "1099.1051",
    "name": "Kniestuk 45° G 1/4\" M x G 1/4\" F (RVS)",
    "a1": "G 1/4\" M (buitendraad)",
    "a2": "G 1/4\" F (binnendraad 45°)",
    "mat": "RVS",
    "desc": "Kniestuk 45° buitendraad G 1/4\" naar binnendraad G 1/4\" (RVS)"
  },
  {
    "cat": "Kniestukken G 1/8\"",
    "default_code": "1099.1052",
    "name": "Kniestuk 90° G 1/8\" M x G 1/8\" F (RVS)",
    "a1": "G 1/8\" M (buitendraad)",
    "a2": "G 1/8\" F (binnendraad 90°)",
    "mat": "RVS",
    "desc": "Haakse koppeling 90° buitendraad G 1/8\" naar binnendraad G 1/8\" (RVS)"
  },
  {
    "cat": "Kniestukken G 1/8\"",
    "default_code": "1099.1053",
    "name": "Kniestuk 45° G 1/8\" M x G 1/8\" F (RVS)",
    "a1": "G 1/8\" M (buitendraad)",
    "a2": "G 1/8\" F (binnendraad 45°)",
    "mat": "RVS",
    "desc": "Kniestuk 45° buitendraad G 1/8\" naar binnendraad G 1/8\" (RVS)"
  },
  {
    "cat": "Verlengstukken G 1/4\"",
    "default_code": "1099.1054",
    "name": "Verlengstuk G 1/4\" M x G 1/4\" F - L=15mm (RVS)",
    "a1": "G 1/4\" M (buitendraad)",
    "a2": "G 1/4\" F (binnendraad) - L=15mm",
    "mat": "RVS",
    "desc": "Verlengstuk buitendraad G 1/4\" naar binnendraad G 1/4\", effectieve lengte 15 mm (RVS)"
  },
  {
    "cat": "Verlengstukken G 1/8\"",
    "default_code": "1099.1055",
    "name": "Verlengstuk G 1/8\" M x G 1/8\" F - L=15mm (RVS)",
    "a1": "G 1/8\" M (buitendraad)",
    "a2": "G 1/8\" F (binnendraad) - L=15mm",
    "mat": "RVS",
    "desc": "Verlengstuk buitendraad G 1/8\" naar binnendraad G 1/8\", effectieve lengte 15 mm (RVS)"
  },
  {
    "cat": "Verlengstukken G 1/4\"",
    "default_code": "1099.1056",
    "name": "Verlengstuk G 1/4\" M x G 1/4\" F - L=25mm (RVS)",
    "a1": "G 1/4\" M (buitendraad)",
    "a2": "G 1/4\" F (binnendraad) - L=25mm",
    "mat": "RVS",
    "desc": "Verlengstuk buitendraad G 1/4\" naar binnendraad G 1/4\", effectieve lengte 25 mm (RVS)"
  },
  {
    "cat": "Verlengstukken G 1/8\"",
    "default_code": "1099.1057",
    "name": "Verlengstuk G 1/8\" M x G 1/8\" F - L=25mm (RVS)",
    "a1": "G 1/8\" M (buitendraad)",
    "a2": "G 1/8\" F (binnendraad) - L=25mm",
    "mat": "RVS",
    "desc": "Verlengstuk buitendraad G 1/8\" naar binnendraad G 1/8\", effectieve lengte 25 mm (RVS)"
  },
  {
    "cat": "Verlengstukken G 1/4\"",
    "default_code": "1099.1058",
    "name": "Verlengstuk G 1/4\" M x G 1/4\" F - L=35mm (RVS)",
    "a1": "G 1/4\" M (buitendraad)",
    "a2": "G 1/4\" F (binnendraad) - L=35mm",
    "mat": "RVS",
    "desc": "Verlengstuk buitendraad G 1/4\" naar binnendraad G 1/4\", effectieve lengte 35 mm (RVS)"
  },
  {
    "cat": "Verlengstukken G 1/8\"",
    "default_code": "1099.1059",
    "name": "Verlengstuk G 1/8\" M x G 1/8\" F - L=35mm (RVS)",
    "a1": "G 1/8\" M (buitendraad)",
    "a2": "G 1/8\" F (binnendraad) - L=35mm",
    "mat": "RVS",
    "desc": "Verlengstuk buitendraad G 1/8\" naar binnendraad G 1/8\", effectieve lengte 35 mm (RVS)"
  },
  {
    "cat": "Verlengstukken G 1/4\"",
    "default_code": "1099.1060",
    "name": "Verlengstuk G 1/4\" M x G 1/4\" F - L=50mm (RVS)",
    "a1": "G 1/4\" M (buitendraad)",
    "a2": "G 1/4\" F (binnendraad) - L=50mm",
    "mat": "RVS",
    "desc": "Verlengstuk buitendraad G 1/4\" naar binnendraad G 1/4\", effectieve lengte 50 mm (RVS)"
  },
  {
    "cat": "Verlengstukken G 1/8\"",
    "default_code": "1099.1061",
    "name": "Verlengstuk G 1/8\" M x G 1/8\" F - L=50mm (RVS)",
    "a1": "G 1/8\" M (buitendraad)",
    "a2": "G 1/8\" F (binnendraad) - L=50mm",
    "mat": "RVS",
    "desc": "Verlengstuk buitendraad G 1/8\" naar binnendraad G 1/8\", effectieve lengte 50 mm (RVS)"
  },
  {
    "cat": "Insteekkoppelingen 6 mm",
    "default_code": "1099.1062",
    "name": "Rechte insteekkoppeling 6 mm - G 1/8\" M (RVS)",
    "a1": "Push-in 6 mm",
    "a2": "G 1/8\" BSPP M (buitendraad recht)",
    "mat": "RVS",
    "desc": "Rechte steekkoppeling voor 6 mm leiding x G 1/8\" buitendraad (RVS)"
  },
  {
    "cat": "Insteekkoppelingen 6 mm",
    "default_code": "1099.1063",
    "name": "Knie-insteekkoppeling 90° 6 mm - G 1/8\" M (RVS)",
    "a1": "Push-in 6 mm",
    "a2": "G 1/8\" BSPP M (90° knie recht)",
    "mat": "RVS",
    "desc": "90° haakse knie-steekkoppeling voor 6 mm leiding x G 1/8\" buitendraad (RVS)"
  },
  {
    "cat": "Insteekkoppelingen 6 mm",
    "default_code": "1099.1064",
    "name": "Rechte insteekkoppeling 6 mm - G 1/4\" M (RVS)",
    "a1": "Push-in 6 mm",
    "a2": "G 1/4\" BSPP M (buitendraad recht)",
    "mat": "RVS",
    "desc": "Rechte steekkoppeling voor 6 mm leiding x G 1/4\" buitendraad (RVS)"
  },
  {
    "cat": "Insteekkoppelingen 6 mm",
    "default_code": "1099.1065",
    "name": "Knie-insteekkoppeling 90° 6 mm - G 1/4\" M (RVS)",
    "a1": "Push-in 6 mm",
    "a2": "G 1/4\" BSPP M (90° knie recht)",
    "mat": "RVS",
    "desc": "90° haakse knie-steekkoppeling voor 6 mm leiding x G 1/4\" buitendraad (RVS)"
  },
  {
    "cat": "Insteekkoppelingen 8 mm",
    "default_code": "1099.1066",
    "name": "Rechte insteekkoppeling 8 mm - G 1/8\" M (RVS)",
    "a1": "Push-in 8 mm",
    "a2": "G 1/8\" BSPP M (buitendraad recht)",
    "mat": "RVS",
    "desc": "Rechte steekkoppeling voor 8 mm leiding x G 1/8\" buitendraad (RVS)"
  },
  {
    "cat": "Insteekkoppelingen 8 mm",
    "default_code": "1099.1067",
    "name": "Knie-insteekkoppeling 90° 8 mm - G 1/8\" M (RVS)",
    "a1": "Push-in 8 mm",
    "a2": "G 1/8\" BSPP M (90° knie recht)",
    "mat": "RVS",
    "desc": "90° haakse knie-steekkoppeling voor 8 mm leiding x G 1/8\" buitendraad (RVS)"
  },
  {
    "cat": "Insteekkoppelingen 8 mm",
    "default_code": "1099.1068",
    "name": "Rechte insteekkoppeling 8 mm - G 1/4\" M (RVS)",
    "a1": "Push-in 8 mm",
    "a2": "G 1/4\" BSPP M (buitendraad recht)",
    "mat": "RVS",
    "desc": "Rechte steekkoppeling voor 8 mm leiding x G 1/4\" buitendraad (RVS)"
  },
  {
    "cat": "Insteekkoppelingen 8 mm",
    "default_code": "1099.1069",
    "name": "Knie-insteekkoppeling 90° 8 mm - G 1/4\" M (RVS)",
    "a1": "Push-in 8 mm",
    "a2": "G 1/4\" BSPP M (90° knie recht)",
    "mat": "RVS",
    "desc": "90° haakse knie-steekkoppeling voor 8 mm leiding x G 1/4\" buitendraad (RVS)"
  }
];

// Aparte artikellijst voor Interflon Single Point Lubricators en Pulsarlube 2000RC-1 installatiekit
let ISPL_CATALOG = [
  {
    "code": "1082",
    "volume": "15ml",
    "vol_ml": 15,
    "grease": "Grease MP2/3",
    "name": "Interflon Single Point Lubricator 15 ml + Grease MP2/3",
    "thread": "G 1/4\" M",
    "mat": "Polycarbonaat / Kunststof",
    "desc": "Automatische smeerunit 15ml gevuld met Interflon Grease MP2/3 (art. 1082)"
  },
  {
    "code": "1096",
    "volume": "15ml",
    "vol_ml": 15,
    "grease": "Grease MP1",
    "name": "Interflon Single Point Lubricator 15 ml + Grease MP1",
    "thread": "G 1/4\" M",
    "mat": "Polycarbonaat / Kunststof",
    "desc": "Automatische smeerunit 15ml gevuld met Interflon Grease MP1 (art. 1096)"
  },
  {
    "code": "1097",
    "volume": "15ml",
    "vol_ml": 15,
    "grease": "Food grease HD2",
    "name": "Interflon Single Point Lubricator 15 ml + Food grease HD2",
    "thread": "G 1/4\" M",
    "mat": "Polycarbonaat / Kunststof",
    "desc": "Automatische smeerunit 15ml gevuld met Interflon Food grease HD2 (art. 1097)"
  },
  {
    "code": "7612",
    "volume": "15ml",
    "vol_ml": 15,
    "grease": "Food grease LT2",
    "name": "Interflon Single Point Lubricator 15 ml + Food grease LT2",
    "thread": "G 1/4\" M",
    "mat": "Polycarbonaat / Kunststof",
    "desc": "Automatische smeerunit 15ml gevuld met Interflon Food grease LT2 (art. 7612)"
  },
  {
    "code": "1051",
    "volume": "30ml",
    "vol_ml": 30,
    "grease": "Grease MP2/3",
    "name": "Interflon Single Point Lubricator 30 ml + Grease MP2/3",
    "thread": "G 1/4\" M",
    "mat": "Polycarbonaat / Kunststof",
    "desc": "Automatische smeerunit 30ml gevuld met Interflon Grease MP2/3 (art. 1051)"
  },
  {
    "code": "1066",
    "volume": "30ml",
    "vol_ml": 30,
    "grease": "Food grease LT2",
    "name": "Interflon Single Point Lubricator 30 ml + Food grease LT2",
    "thread": "G 1/4\" M",
    "mat": "Polycarbonaat / Kunststof",
    "desc": "Automatische smeerunit 30ml gevuld met Interflon Food grease LT2 (art. 1066)"
  },
  {
    "code": "1042",
    "volume": "30ml",
    "vol_ml": 30,
    "grease": "Food lube G150",
    "name": "Interflon Single Point Lubricator 30 ml + Food lube G150",
    "thread": "G 1/4\" M",
    "mat": "Polycarbonaat / Kunststof",
    "desc": "Automatische smeerunit 30ml gevuld met Interflon Food lube G150 (art. 1042)"
  },
  {
    "code": "1053",
    "volume": "30ml",
    "vol_ml": 30,
    "grease": "Food lube G220",
    "name": "Interflon Single Point Lubricator 30 ml + Food lube G220",
    "thread": "G 1/4\" M",
    "mat": "Polycarbonaat / Kunststof",
    "desc": "Automatische smeerunit 30ml gevuld met Interflon Food lube G220 (art. 1053)"
  },
  {
    "code": "1071",
    "volume": "60ml",
    "vol_ml": 60,
    "grease": "Grease MP2/3",
    "name": "Interflon Single Point Lubricator 60 ml + Grease MP2/3",
    "thread": "G 1/4\" M",
    "mat": "Polycarbonaat / Kunststof",
    "desc": "Automatische smeerunit 60ml gevuld met Interflon Grease MP2/3 (art. 1071)"
  },
  {
    "code": "1049",
    "volume": "60ml",
    "vol_ml": 60,
    "grease": "Grease LS1/2",
    "name": "Interflon Single Point Lubricator 60 ml + Grease LS1/2",
    "thread": "G 1/4\" M",
    "mat": "Polycarbonaat / Kunststof",
    "desc": "Automatische smeerunit 60ml gevuld met Interflon Grease LS1/2 (art. 1049)"
  },
  {
    "code": "1079",
    "volume": "60ml",
    "vol_ml": 60,
    "grease": "Grease HD2",
    "name": "Interflon Single Point Lubricator 60 ml + Grease HD2",
    "thread": "G 1/4\" M",
    "mat": "Polycarbonaat / Kunststof",
    "desc": "Automatische smeerunit 60ml gevuld met Interflon Grease HD2 (art. 1079)"
  },
  {
    "code": "1074",
    "volume": "60ml",
    "vol_ml": 60,
    "grease": "Food grease 1",
    "name": "Interflon Single Point Lubricator 60 ml + Food grease 1",
    "thread": "G 1/4\" M",
    "mat": "Polycarbonaat / Kunststof",
    "desc": "Automatische smeerunit 60ml gevuld met Interflon Food grease 1 (art. 1074)"
  },
  {
    "code": "1077",
    "volume": "60ml",
    "vol_ml": 60,
    "grease": "Food grease EP",
    "name": "Interflon Single Point Lubricator 60 ml + Food grease EP",
    "thread": "G 1/4\" M",
    "mat": "Polycarbonaat / Kunststof",
    "desc": "Automatische smeerunit 60ml gevuld met Interflon Food grease EP (art. 1077)"
  },
  {
    "code": "1078",
    "volume": "60ml",
    "vol_ml": 60,
    "grease": "Food grease LT2",
    "name": "Interflon Single Point Lubricator 60 ml + Food grease LT2",
    "thread": "G 1/4\" M",
    "mat": "Polycarbonaat / Kunststof",
    "desc": "Automatische smeerunit 60ml gevuld met Interflon Food grease LT2 (art. 1078)"
  },
  {
    "code": "1075",
    "volume": "60ml",
    "vol_ml": 60,
    "grease": "Food lube G150",
    "name": "Interflon Single Point Lubricator 60 ml + Food lube G150",
    "thread": "G 1/4\" M",
    "mat": "Polycarbonaat / Kunststof",
    "desc": "Automatische smeerunit 60ml gevuld met Interflon Food lube G150 (art. 1075)"
  },
  {
    "code": "1061",
    "volume": "125ml",
    "vol_ml": 125,
    "grease": "Grease MP2/3",
    "name": "Interflon Single Point Lubricator 125 ml + Grease MP2/3",
    "thread": "G 1/4\" M",
    "mat": "Polycarbonaat / Kunststof",
    "desc": "Automatische smeerunit 125ml gevuld met Interflon Grease MP2/3 (art. 1061)"
  },
  {
    "code": "1086",
    "volume": "125ml",
    "vol_ml": 125,
    "grease": "Grease LS1/2",
    "name": "Interflon Single Point Lubricator 125 ml + Grease LS1/2",
    "thread": "G 1/4\" M",
    "mat": "Polycarbonaat / Kunststof",
    "desc": "Automatische smeerunit 125ml gevuld met Interflon Grease LS1/2 (art. 1086)"
  },
  {
    "code": "1081",
    "volume": "125ml",
    "vol_ml": 125,
    "grease": "Grease HD2",
    "name": "Interflon Single Point Lubricator 125 ml + Grease HD2",
    "thread": "G 1/4\" M",
    "mat": "Polycarbonaat / Kunststof",
    "desc": "Automatische smeerunit 125ml gevuld met Interflon Grease HD2 (art. 1081)"
  },
  {
    "code": "1067",
    "volume": "125ml",
    "vol_ml": 125,
    "grease": "Food grease 1",
    "name": "Interflon Single Point Lubricator 125 ml + Food grease 1",
    "thread": "G 1/4\" M",
    "mat": "Polycarbonaat / Kunststof",
    "desc": "Automatische smeerunit 125ml gevuld met Interflon Food grease 1 (art. 1067)"
  },
  {
    "code": "1065",
    "volume": "125ml",
    "vol_ml": 125,
    "grease": "Food grease EP",
    "name": "Interflon Single Point Lubricator 125 ml + Food grease EP",
    "thread": "G 1/4\" M",
    "mat": "Polycarbonaat / Kunststof",
    "desc": "Automatische smeerunit 125ml gevuld met Interflon Food grease EP (art. 1065)"
  },
  {
    "code": "1083",
    "volume": "125ml",
    "vol_ml": 125,
    "grease": "Food grease LT2",
    "name": "Interflon Single Point Lubricator 125 ml + Food grease LT2",
    "thread": "G 1/4\" M",
    "mat": "Polycarbonaat / Kunststof",
    "desc": "Automatische smeerunit 125ml gevuld met Interflon Food grease LT2 (art. 1083)"
  },
  {
    "code": "1068",
    "volume": "125ml",
    "vol_ml": 125,
    "grease": "Lube PN32",
    "name": "Interflon Single Point Lubricator 125 ml + Lube PN32",
    "thread": "G 1/4\" M",
    "mat": "Polycarbonaat / Kunststof",
    "desc": "Automatische smeerunit 125ml gevuld met Interflon Lube PN32 (art. 1068)"
  },
  {
    "code": "1064",
    "volume": "125ml",
    "vol_ml": 125,
    "grease": "Lube PN68",
    "name": "Interflon Single Point Lubricator 125 ml + Lube PN68",
    "thread": "G 1/4\" M",
    "mat": "Polycarbonaat / Kunststof",
    "desc": "Automatische smeerunit 125ml gevuld met Interflon Lube PN68 (art. 1064)"
  },
  {
    "code": "1069",
    "volume": "125ml",
    "vol_ml": 125,
    "grease": "Food lube G150",
    "name": "Interflon Single Point Lubricator 125 ml + Food lube G150",
    "thread": "G 1/4\" M",
    "mat": "Polycarbonaat / Kunststof",
    "desc": "Automatische smeerunit 125ml gevuld met Interflon Food lube G150 (art. 1069)"
  },
  {
    "code": "1041",
    "volume": "250ml",
    "vol_ml": 250,
    "grease": "Grease LS1/2",
    "name": "Interflon Single Point Lubricator 250 ml + Grease LS1/2",
    "thread": "G 1/4\" M",
    "mat": "Polycarbonaat / Kunststof",
    "desc": "Automatische smeerunit 250ml gevuld met Interflon Grease LS1/2 (art. 1041)"
  },
  {
    "code": "1087",
    "volume": "250ml",
    "vol_ml": 250,
    "grease": "Grease MP2/3",
    "name": "Interflon Single Point Lubricator 250 ml + Grease MP2/3",
    "thread": "G 1/4\" M",
    "mat": "Polycarbonaat / Kunststof",
    "desc": "Automatische smeerunit 250ml gevuld met Interflon Grease MP2/3 (art. 1087)"
  },
  {
    "code": "1070",
    "volume": "250ml",
    "vol_ml": 250,
    "grease": "Food grease LT2",
    "name": "Interflon Single Point Lubricator 250 ml + Food grease LT2",
    "thread": "G 1/4\" M",
    "mat": "Polycarbonaat / Kunststof",
    "desc": "Automatische smeerunit 250ml gevuld met Interflon Food grease LT2 (art. 1070)"
  },
  {
    "code": "1060",
    "volume": "250ml",
    "vol_ml": 250,
    "grease": "Lube PN68",
    "name": "Interflon Single Point Lubricator 250 ml + Lube PN68",
    "thread": "G 1/4\" M",
    "mat": "Polycarbonaat / Kunststof",
    "desc": "Automatische smeerunit 250ml gevuld met Interflon Lube PN68 (art. 1060)"
  },
  {
    "code": "1095",
    "volume": "250ml",
    "vol_ml": 250,
    "grease": "Food lube G150",
    "name": "Interflon Single Point Lubricator 250 ml + Food lube G150",
    "thread": "G 1/4\" M",
    "mat": "Polycarbonaat / Kunststof",
    "desc": "Automatische smeerunit 250ml gevuld met Interflon Food lube G150 (art. 1095)"
  },
  {
    "code": "1702",
    "volume": "Kit",
    "vol_ml": 0,
    "grease": "-",
    "thread": "G 1/4\" F naar G 1/8\" M",
    "name": "Pulsarlube 2000RC-1 Installatiekit voor montage op afstand",
    "mat": "Verzinkt staal / RVS / Polyamide",
    "desc": "Complete installatiekit Pulsarlube 2000RC-1 inclusief beugel, max. 20 cm slang 8 mm en rechte insteekkoppeling (art. 1702)"
  }
];
