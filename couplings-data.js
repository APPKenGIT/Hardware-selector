// Interflon Hardware Selector - Dataset van koppelingen
const COUPLINGS_DATA = [
  {
    "cat": "Push-in koppelingen 6mm",
    "name": "Steekkoppeling recht 6mm - M6x1",
    "a1": "Push-in 6 mm",
    "a2": "M6x1 M (buitendraad recht)",
    "mat": "Messing vernikkeld",
    "desc": "Hogedruk steekkoppeling voor 6mm vetslang, buitendraad M6x1 recht"
  },
  {
    "cat": "Push-in koppelingen 6mm",
    "name": "Steekkoppeling recht 6mm - M8x1",
    "a1": "Push-in 6 mm",
    "a2": "M8x1 M (buitendraad recht)",
    "mat": "Messing vernikkeld",
    "desc": "Hogedruk steekkoppeling voor 6mm vetslang, buitendraad M8x1 recht"
  },
  {
    "cat": "Push-in koppelingen 6mm",
    "name": "Steekkoppeling recht 6mm - M8x1.25",
    "a1": "Push-in 6 mm",
    "a2": "M8x1.25 M (buitendraad recht)",
    "mat": "Messing vernikkeld",
    "desc": "Hogedruk steekkoppeling voor 6mm vetslang, buitendraad M8x1.25 standaard metrisch recht"
  },
  {
    "cat": "Push-in koppelingen 6mm",
    "name": "Steekkoppeling recht 6mm - M10x1",
    "a1": "Push-in 6 mm",
    "a2": "M10x1 M (buitendraad recht)",
    "mat": "Messing vernikkeld",
    "desc": "Hogedruk steekkoppeling voor 6mm vetslang, buitendraad M10x1 recht"
  },
  {
    "cat": "Push-in koppelingen 6mm",
    "name": "Steekkoppeling recht 6mm - M10x1.5",
    "a1": "Push-in 6 mm",
    "a2": "M10x1.5 M (buitendraad recht)",
    "mat": "Messing vernikkeld",
    "desc": "Hogedruk steekkoppeling voor 6mm vetslang, buitendraad M10x1.5 standaard metrisch recht"
  },
  {
    "cat": "Push-in koppelingen 6mm",
    "name": "Steekkoppeling recht 6mm - G 1/8\"",
    "a1": "Push-in 6 mm",
    "a2": "G 1/8\" BSPP M (buitendraad)",
    "mat": "Messing vernikkeld",
    "desc": "Hogedruk steekkoppeling voor 6mm vetslang, buitendraad G 1/8\" (BSPP)"
  },
  {
    "cat": "Push-in koppelingen 6mm",
    "name": "Steekkoppeling recht 6mm - G 1/4\"",
    "a1": "Push-in 6 mm",
    "a2": "G 1/4\" BSPP M (buitendraad)",
    "mat": "Messing vernikkeld",
    "desc": "Hogedruk steekkoppeling voor 6mm vetslang, buitendraad G 1/4\" (BSPP)"
  },
  {
    "cat": "Push-in koppelingen 6mm",
    "name": "Steekkoppeling recht 6mm - 1/8\" NPT",
    "a1": "Push-in 6 mm",
    "a2": "1/8\" NPT M (buitendraad conisch)",
    "mat": "Messing vernikkeld",
    "desc": "Hogedruk steekkoppeling voor 6mm vetslang, buitendraad 1/8\" NPT conisch"
  },
  {
    "cat": "Push-in koppelingen 6mm",
    "name": "Steekkoppeling recht 6mm - 1/4\" NPT",
    "a1": "Push-in 6 mm",
    "a2": "1/4\" NPT M (buitendraad conisch)",
    "mat": "Messing vernikkeld",
    "desc": "Hogedruk steekkoppeling voor 6mm vetslang, buitendraad 1/4\" NPT conisch"
  },
  {
    "cat": "Push-in koppelingen 6mm",
    "name": "Steekkoppeling 90° draaibaar 6mm - M6x1",
    "a1": "Push-in 6 mm",
    "a2": "M6x1 M (90° draaibaar recht)",
    "mat": "Messing vernikkeld",
    "desc": "Hogedruk knie-steekkoppeling 90° draaibaar voor 6mm vetslang, buitendraad M6x1 recht"
  },
  {
    "cat": "Push-in koppelingen 6mm",
    "name": "Steekkoppeling 90° draaibaar 6mm - M8x1",
    "a1": "Push-in 6 mm",
    "a2": "M8x1 M (90° draaibaar recht)",
    "mat": "Messing vernikkeld",
    "desc": "Hogedruk knie-steekkoppeling 90° draaibaar voor 6mm vetslang, buitendraad M8x1 recht"
  },
  {
    "cat": "Push-in koppelingen 6mm",
    "name": "Steekkoppeling 90° draaibaar 6mm - M8x1.25",
    "a1": "Push-in 6 mm",
    "a2": "M8x1.25 M (90° draaibaar recht)",
    "mat": "Messing vernikkeld",
    "desc": "Hogedruk knie-steekkoppeling 90° draaibaar voor 6mm vetslang, buitendraad M8x1.25 recht"
  },
  {
    "cat": "Push-in koppelingen 6mm",
    "name": "Steekkoppeling 90° draaibaar 6mm - M10x1",
    "a1": "Push-in 6 mm",
    "a2": "M10x1 M (90° draaibaar recht)",
    "mat": "Messing vernikkeld",
    "desc": "Hogedruk knie-steekkoppeling 90° draaibaar voor 6mm vetslang, buitendraad M10x1 recht"
  },
  {
    "cat": "Push-in koppelingen 6mm",
    "name": "Steekkoppeling 90° draaibaar 6mm - M10x1.5",
    "a1": "Push-in 6 mm",
    "a2": "M10x1.5 M (90° draaibaar recht)",
    "mat": "Messing vernikkeld",
    "desc": "Hogedruk knie-steekkoppeling 90° draaibaar voor 6mm vetslang, buitendraad M10x1.5 recht"
  },
  {
    "cat": "Push-in koppelingen 6mm",
    "name": "Steekkoppeling 90° draaibaar 6mm - G 1/8\"",
    "a1": "Push-in 6 mm",
    "a2": "G 1/8\" BSPP M (90° draaibaar)",
    "mat": "Messing vernikkeld",
    "desc": "Hogedruk knie-steekkoppeling 90° draaibaar voor 6mm vetslang, buitendraad G 1/8\""
  },
  {
    "cat": "Push-in koppelingen 6mm",
    "name": "Steekkoppeling 90° draaibaar 6mm - G 1/4\"",
    "a1": "Push-in 6 mm",
    "a2": "G 1/4\" BSPP M (90° draaibaar)",
    "mat": "Messing vernikkeld",
    "desc": "Hogedruk knie-steekkoppeling 90° draaibaar voor 6mm vetslang, buitendraad G 1/4\""
  },
  {
    "cat": "Push-in koppelingen 6mm",
    "name": "Steekkoppeling 90° draaibaar 6mm - 1/8\" NPT",
    "a1": "Push-in 6 mm",
    "a2": "1/8\" NPT M (90° draaibaar conisch)",
    "mat": "Messing vernikkeld",
    "desc": "Hogedruk knie-steekkoppeling 90° draaibaar voor 6mm vetslang, buitendraad 1/8\" NPT"
  },
  {
    "cat": "Push-in koppelingen 6mm",
    "name": "Steekkoppeling 90° draaibaar 6mm - 1/4\" NPT",
    "a1": "Push-in 6 mm",
    "a2": "1/4\" NPT M (90° draaibaar conisch)",
    "mat": "Messing vernikkeld",
    "desc": "Hogedruk knie-steekkoppeling 90° draaibaar voor 6mm vetslang, buitendraad 1/4\" NPT"
  },
  {
    "cat": "Push-in koppelingen 6mm",
    "name": "Steekkoppeling 45° draaibaar 6mm - M6x1",
    "a1": "Push-in 6 mm",
    "a2": "M6x1 M (45° draaibaar recht)",
    "mat": "Messing vernikkeld",
    "desc": "Hogedruk knie-steekkoppeling 45° draaibaar voor 6mm vetslang, buitendraad M6x1 recht"
  },
  {
    "cat": "Push-in koppelingen 6mm",
    "name": "Steekkoppeling 45° draaibaar 6mm - M8x1",
    "a1": "Push-in 6 mm",
    "a2": "M8x1 M (45° draaibaar recht)",
    "mat": "Messing vernikkeld",
    "desc": "Hogedruk knie-steekkoppeling 45° draaibaar voor 6mm vetslang, buitendraad M8x1 recht"
  },
  {
    "cat": "Push-in koppelingen 6mm",
    "name": "Steekkoppeling 45° draaibaar 6mm - M10x1",
    "a1": "Push-in 6 mm",
    "a2": "M10x1 M (45° draaibaar recht)",
    "mat": "Messing vernikkeld",
    "desc": "Hogedruk knie-steekkoppeling 45° draaibaar voor 6mm vetslang, buitendraad M10x1 recht"
  },
  {
    "cat": "Push-in koppelingen 6mm",
    "name": "Steekkoppeling 45° draaibaar 6mm - G 1/8\"",
    "a1": "Push-in 6 mm",
    "a2": "G 1/8\" BSPP M (45° draaibaar)",
    "mat": "Messing vernikkeld",
    "desc": "Hogedruk knie-steekkoppeling 45° draaibaar voor 6mm vetslang, buitendraad G 1/8\""
  },
  {
    "cat": "Push-in koppelingen 6mm",
    "name": "Steekkoppeling 45° draaibaar 6mm - G 1/4\"",
    "a1": "Push-in 6 mm",
    "a2": "G 1/4\" BSPP M (45° draaibaar)",
    "mat": "Messing vernikkeld",
    "desc": "Hogedruk knie-steekkoppeling 45° draaibaar voor 6mm vetslang, buitendraad G 1/4\""
  },
  {
    "cat": "Push-in koppelingen 6mm",
    "name": "Steekkoppeling 45° draaibaar 6mm - 1/8\" NPT",
    "a1": "Push-in 6 mm",
    "a2": "1/8\" NPT M (45° draaibaar conisch)",
    "mat": "Messing vernikkeld",
    "desc": "Hogedruk knie-steekkoppeling 45° draaibaar voor 6mm vetslang, buitendraad 1/8\" NPT"
  },
  {
    "cat": "Push-in koppelingen 6mm",
    "name": "Steekkoppeling 45° draaibaar 6mm - 1/4\" NPT",
    "a1": "Push-in 6 mm",
    "a2": "1/4\" NPT M (45° draaibaar conisch)",
    "mat": "Messing vernikkeld",
    "desc": "Hogedruk knie-steekkoppeling 45° draaibaar voor 6mm vetslang, buitendraad 1/4\" NPT"
  },
  {
    "cat": "Push-in koppelingen 8mm",
    "name": "Steekkoppeling recht 8mm - M8x1",
    "a1": "Push-in 8 mm",
    "a2": "M8x1 M (buitendraad recht)",
    "mat": "Messing vernikkeld",
    "desc": "Hogedruk steekkoppeling voor 8mm vetslang, buitendraad M8x1 recht"
  },
  {
    "cat": "Push-in koppelingen 8mm",
    "name": "Steekkoppeling recht 8mm - M10x1",
    "a1": "Push-in 8 mm",
    "a2": "M10x1 M (buitendraad recht)",
    "mat": "Messing vernikkeld",
    "desc": "Hogedruk steekkoppeling voor 8mm vetslang, buitendraad M10x1 recht"
  },
  {
    "cat": "Push-in koppelingen 8mm",
    "name": "Steekkoppeling recht 8mm - G 1/8\"",
    "a1": "Push-in 8 mm",
    "a2": "G 1/8\" BSPP M (buitendraad)",
    "mat": "Messing vernikkeld",
    "desc": "Hogedruk steekkoppeling voor 8mm vetslang, buitendraad G 1/8\" (BSPP)"
  },
  {
    "cat": "Push-in koppelingen 8mm",
    "name": "Steekkoppeling recht 8mm - G 1/4\"",
    "a1": "Push-in 8 mm",
    "a2": "G 1/4\" BSPP M (buitendraad)",
    "mat": "Messing vernikkeld",
    "desc": "Hogedruk steekkoppeling voor 8mm vetslang, buitendraad G 1/4\" (BSPP)"
  },
  {
    "cat": "Push-in koppelingen 8mm",
    "name": "Steekkoppeling recht 8mm - G 3/8\"",
    "a1": "Push-in 8 mm",
    "a2": "G 3/8\" BSPP M (buitendraad)",
    "mat": "Messing vernikkeld",
    "desc": "Hogedruk steekkoppeling voor 8mm vetslang, buitendraad G 3/8\" (BSPP)"
  },
  {
    "cat": "Push-in koppelingen 8mm",
    "name": "Steekkoppeling recht 8mm - 1/8\" NPT",
    "a1": "Push-in 8 mm",
    "a2": "1/8\" NPT M (buitendraad conisch)",
    "mat": "Messing vernikkeld",
    "desc": "Hogedruk steekkoppeling voor 8mm vetslang, buitendraad 1/8\" NPT conisch"
  },
  {
    "cat": "Push-in koppelingen 8mm",
    "name": "Steekkoppeling recht 8mm - 1/4\" NPT",
    "a1": "Push-in 8 mm",
    "a2": "1/4\" NPT M (buitendraad conisch)",
    "mat": "Messing vernikkeld",
    "desc": "Hogedruk steekkoppeling voor 8mm vetslang, buitendraad 1/4\" NPT conisch"
  },
  {
    "cat": "Push-in koppelingen 8mm",
    "name": "Steekkoppeling 90° draaibaar 8mm - M8x1",
    "a1": "Push-in 8 mm",
    "a2": "M8x1 M (90° draaibaar recht)",
    "mat": "Messing vernikkeld",
    "desc": "Hogedruk knie-steekkoppeling 90° draaibaar voor 8mm vetslang, buitendraad M8x1 recht"
  },
  {
    "cat": "Push-in koppelingen 8mm",
    "name": "Steekkoppeling 90° draaibaar 8mm - M10x1",
    "a1": "Push-in 8 mm",
    "a2": "M10x1 M (90° draaibaar recht)",
    "mat": "Messing vernikkeld",
    "desc": "Hogedruk knie-steekkoppeling 90° draaibaar voor 8mm vetslang, buitendraad M10x1 recht"
  },
  {
    "cat": "Push-in koppelingen 8mm",
    "name": "Steekkoppeling 90° draaibaar 8mm - G 1/8\"",
    "a1": "Push-in 8 mm",
    "a2": "G 1/8\" BSPP M (90° draaibaar)",
    "mat": "Messing vernikkeld",
    "desc": "Hogedruk knie-steekkoppeling 90° draaibaar voor 8mm vetslang, buitendraad G 1/8\""
  },
  {
    "cat": "Push-in koppelingen 8mm",
    "name": "Steekkoppeling 90° draaibaar 8mm - G 1/4\"",
    "a1": "Push-in 8 mm",
    "a2": "G 1/4\" BSPP M (90° draaibaar)",
    "mat": "Messing vernikkeld",
    "desc": "Hogedruk knie-steekkoppeling 90° draaibaar voor 8mm vetslang, buitendraad G 1/4\""
  },
  {
    "cat": "Push-in koppelingen 8mm",
    "name": "Steekkoppeling 90° draaibaar 8mm - 1/8\" NPT",
    "a1": "Push-in 8 mm",
    "a2": "1/8\" NPT M (90° draaibaar conisch)",
    "mat": "Messing vernikkeld",
    "desc": "Hogedruk knie-steekkoppeling 90° draaibaar voor 8mm vetslang, buitendraad 1/8\" NPT"
  },
  {
    "cat": "Push-in koppelingen 8mm",
    "name": "Steekkoppeling 90° draaibaar 8mm - 1/4\" NPT",
    "a1": "Push-in 8 mm",
    "a2": "1/4\" NPT M (90° draaibaar conisch)",
    "mat": "Messing vernikkeld",
    "desc": "Hogedruk knie-steekkoppeling 90° draaibaar voor 8mm vetslang, buitendraad 1/4\" NPT"
  },
  {
    "cat": "Push-in koppelingen 8mm",
    "name": "Steekkoppeling 45° draaibaar 8mm - M8x1",
    "a1": "Push-in 8 mm",
    "a2": "M8x1 M (45° draaibaar recht)",
    "mat": "Messing vernikkeld",
    "desc": "Hogedruk knie-steekkoppeling 45° draaibaar voor 8mm vetslang, buitendraad M8x1 recht"
  },
  {
    "cat": "Push-in koppelingen 8mm",
    "name": "Steekkoppeling 45° draaibaar 8mm - M10x1",
    "a1": "Push-in 8 mm",
    "a2": "M10x1 M (45° draaibaar recht)",
    "mat": "Messing vernikkeld",
    "desc": "Hogedruk knie-steekkoppeling 45° draaibaar voor 8mm vetslang, buitendraad M10x1 recht"
  },
  {
    "cat": "Push-in koppelingen 8mm",
    "name": "Steekkoppeling 45° draaibaar 8mm - G 1/8\"",
    "a1": "Push-in 8 mm",
    "a2": "G 1/8\" BSPP M (45° draaibaar)",
    "mat": "Messing vernikkeld",
    "desc": "Hogedruk knie-steekkoppeling 45° draaibaar voor 8mm vetslang, buitendraad G 1/8\""
  },
  {
    "cat": "Push-in koppelingen 8mm",
    "name": "Steekkoppeling 45° draaibaar 8mm - G 1/4\"",
    "a1": "Push-in 8 mm",
    "a2": "G 1/4\" BSPP M (45° draaibaar)",
    "mat": "Messing vernikkeld",
    "desc": "Hogedruk knie-steekkoppeling 45° draaibaar voor 8mm vetslang, buitendraad G 1/4\""
  },
  {
    "cat": "Push-in koppelingen 8mm",
    "name": "Steekkoppeling 45° draaibaar 8mm - 1/8\" NPT",
    "a1": "Push-in 8 mm",
    "a2": "1/8\" NPT M (45° draaibaar conisch)",
    "mat": "Messing vernikkeld",
    "desc": "Hogedruk knie-steekkoppeling 45° draaibaar voor 8mm vetslang, buitendraad 1/8\" NPT"
  },
  {
    "cat": "Push-in koppelingen 8mm",
    "name": "Steekkoppeling 45° draaibaar 8mm - 1/4\" NPT",
    "a1": "Push-in 8 mm",
    "a2": "1/4\" NPT M (45° draaibaar conisch)",
    "mat": "Messing vernikkeld",
    "desc": "Hogedruk knie-steekkoppeling 45° draaibaar voor 8mm vetslang, buitendraad 1/4\" NPT"
  },
  {
    "cat": "Schroefdraadadapters",
    "name": "Verloopstuk G 1/4\" M x G 1/8\" F",
    "a1": "G 1/4\" M (buitendraad)",
    "a2": "G 1/8\" F (binnendraad)",
    "mat": "Messing vernikkeld",
    "desc": "Draadadapter buitendraad G 1/4\" naar binnendraad G 1/8\""
  },
  {
    "cat": "Schroefdraadadapters",
    "name": "Verloopstuk G 1/4\" M x M6x1 F",
    "a1": "G 1/4\" M (buitendraad)",
    "a2": "M6x1 F (binnendraad recht)",
    "mat": "Messing vernikkeld",
    "desc": "Draadadapter buitendraad G 1/4\" naar binnendraad M6x1 recht"
  },
  {
    "cat": "Schroefdraadadapters",
    "name": "Verloopstuk G 1/4\" M x M8x1 F",
    "a1": "G 1/4\" M (buitendraad)",
    "a2": "M8x1 F (binnendraad recht)",
    "mat": "Messing vernikkeld",
    "desc": "Draadadapter buitendraad G 1/4\" naar binnendraad M8x1 recht"
  },
  {
    "cat": "Schroefdraadadapters",
    "name": "Verloopstuk G 1/4\" M x M8x1.25 F",
    "a1": "G 1/4\" M (buitendraad)",
    "a2": "M8x1.25 F (binnendraad recht)",
    "mat": "Messing vernikkeld",
    "desc": "Draadadapter buitendraad G 1/4\" naar binnendraad M8x1.25 recht"
  },
  {
    "cat": "Schroefdraadadapters",
    "name": "Verloopstuk G 1/4\" M x M10x1 F",
    "a1": "G 1/4\" M (buitendraad)",
    "a2": "M10x1 F (binnendraad recht)",
    "mat": "Messing vernikkeld",
    "desc": "Draadadapter buitendraad G 1/4\" naar binnendraad M10x1 recht"
  },
  {
    "cat": "Schroefdraadadapters",
    "name": "Verloopstuk G 1/4\" M x M10x1.5 F",
    "a1": "G 1/4\" M (buitendraad)",
    "a2": "M10x1.5 F (binnendraad recht)",
    "mat": "Messing vernikkeld",
    "desc": "Draadadapter buitendraad G 1/4\" naar binnendraad M10x1.5 recht"
  },
  {
    "cat": "Schroefdraadadapters",
    "name": "Verloopstuk G 1/4\" M x M12x1.5 F",
    "a1": "G 1/4\" M (buitendraad)",
    "a2": "M12x1.5 F (binnendraad recht)",
    "mat": "Messing vernikkeld",
    "desc": "Draadadapter buitendraad G 1/4\" naar binnendraad M12x1.5 recht"
  },
  {
    "cat": "Schroefdraadadapters",
    "name": "Verloopstuk G 1/4\" M x 1/8\" NPT F",
    "a1": "G 1/4\" M (buitendraad)",
    "a2": "1/8\" NPT F (binnendraad)",
    "mat": "Messing vernikkeld",
    "desc": "Draadadapter buitendraad G 1/4\" naar binnendraad 1/8\" NPT"
  },
  {
    "cat": "Schroefdraadadapters",
    "name": "Verloopstuk G 1/4\" M x 1/4\" NPT F",
    "a1": "G 1/4\" M (buitendraad)",
    "a2": "1/4\" NPT F (binnendraad)",
    "mat": "Messing vernikkeld",
    "desc": "Draadadapter buitendraad G 1/4\" naar binnendraad 1/4\" NPT"
  },
  {
    "cat": "Schroefdraadadapters",
    "name": "Verloopstuk M6x1 M x G 1/4\" F",
    "a1": "M6x1 M (buitendraad recht)",
    "a2": "G 1/4\" F (binnendraad)",
    "mat": "Messing vernikkeld",
    "desc": "Draadadapter buitendraad M6x1 recht naar binnendraad G 1/4\""
  },
  {
    "cat": "Schroefdraadadapters",
    "name": "Verloopstuk M8x1 M x G 1/4\" F",
    "a1": "M8x1 M (buitendraad recht)",
    "a2": "G 1/4\" F (binnendraad)",
    "mat": "Messing vernikkeld",
    "desc": "Draadadapter buitendraad M8x1 recht naar binnendraad G 1/4\""
  },
  {
    "cat": "Schroefdraadadapters",
    "name": "Verloopstuk M8x1.25 M x G 1/4\" F",
    "a1": "M8x1.25 M (buitendraad recht)",
    "a2": "G 1/4\" F (binnendraad)",
    "mat": "Messing vernikkeld",
    "desc": "Draadadapter buitendraad M8x1.25 recht naar binnendraad G 1/4\""
  },
  {
    "cat": "Schroefdraadadapters",
    "name": "Verloopstuk M10x1 M x G 1/4\" F",
    "a1": "M10x1 M (buitendraad recht)",
    "a2": "G 1/4\" F (binnendraad)",
    "mat": "Messing vernikkeld",
    "desc": "Draadadapter buitendraad M10x1 recht naar binnendraad G 1/4\""
  },
  {
    "cat": "Schroefdraadadapters",
    "name": "Verloopstuk M10x1.5 M x G 1/4\" F",
    "a1": "M10x1.5 M (buitendraad recht)",
    "a2": "G 1/4\" F (binnendraad)",
    "mat": "Messing vernikkeld",
    "desc": "Draadadapter buitendraad M10x1.5 recht naar binnendraad G 1/4\""
  },
  {
    "cat": "Schroefdraadadapters",
    "name": "Verloopstuk M12x1.5 M x G 1/4\" F",
    "a1": "M12x1.5 M (buitendraad recht)",
    "a2": "G 1/4\" F (binnendraad)",
    "mat": "Messing vernikkeld",
    "desc": "Draadadapter buitendraad M12x1.5 recht naar binnendraad G 1/4\""
  },
  {
    "cat": "Schroefdraadadapters",
    "name": "Verloopstuk G 1/8\" M x G 1/4\" F",
    "a1": "G 1/8\" M (buitendraad)",
    "a2": "G 1/4\" F (binnendraad)",
    "mat": "Messing vernikkeld",
    "desc": "Draadadapter buitendraad G 1/8\" naar binnendraad G 1/4\""
  },
  {
    "cat": "Schroefdraadadapters",
    "name": "Verloopstuk G 3/8\" M x G 1/4\" F",
    "a1": "G 3/8\" M (buitendraad)",
    "a2": "G 1/4\" F (binnendraad)",
    "mat": "Messing vernikkeld",
    "desc": "Draadadapter buitendraad G 3/8\" naar binnendraad G 1/4\""
  },
  {
    "cat": "Schroefdraadadapters",
    "name": "Verloopstuk 1/8\" NPT M x G 1/4\" F",
    "a1": "1/8\" NPT M (buitendraad conisch)",
    "a2": "G 1/4\" F (binnendraad)",
    "mat": "Messing vernikkeld",
    "desc": "Draadadapter buitendraad 1/8\" NPT naar binnendraad G 1/4\""
  },
  {
    "cat": "Schroefdraadadapters",
    "name": "Verloopstuk 1/4\" NPT M x G 1/4\" F",
    "a1": "1/4\" NPT M (buitendraad conisch)",
    "a2": "G 1/4\" F (binnendraad)",
    "mat": "Messing vernikkeld",
    "desc": "Draadadapter buitendraad 1/4\" NPT naar binnendraad G 1/4\""
  },
  {
    "cat": "Schroefdraadadapters",
    "name": "Verloopstuk 1/4\"-28 SAE/UNF M x G 1/4\" F",
    "a1": "1/4\"-28 UNF M (buitendraad)",
    "a2": "G 1/4\" F (binnendraad)",
    "mat": "Messing vernikkeld",
    "desc": "Draadadapter buitendraad 1/4\"-28 SAE naar binnendraad G 1/4\""
  },
  {
    "cat": "Schroefdraadadapters",
    "name": "Verloopstuk M6x1 M x G 1/8\" F",
    "a1": "M6x1 M (buitendraad recht)",
    "a2": "G 1/8\" F (binnendraad)",
    "mat": "Messing vernikkeld",
    "desc": "Draadadapter buitendraad M6x1 recht naar binnendraad G 1/8\""
  },
  {
    "cat": "Schroefdraadadapters",
    "name": "Verloopstuk M8x1 M x G 1/8\" F",
    "a1": "M8x1 M (buitendraad recht)",
    "a2": "G 1/8\" F (binnendraad)",
    "mat": "Messing vernikkeld",
    "desc": "Draadadapter buitendraad M8x1 recht naar binnendraad G 1/8\""
  },
  {
    "cat": "Schroefdraadadapters",
    "name": "Verloopstuk M10x1 M x G 1/8\" F",
    "a1": "M10x1 M (buitendraad recht)",
    "a2": "G 1/8\" F (binnendraad)",
    "mat": "Messing vernikkeld",
    "desc": "Draadadapter buitendraad M10x1 recht naar binnendraad G 1/8\""
  },
  {
    "cat": "Schroefdraadadapters",
    "name": "Verloopstuk G 1/8\" M x M6x1 F",
    "a1": "G 1/8\" M (buitendraad)",
    "a2": "M6x1 F (binnendraad recht)",
    "mat": "Messing vernikkeld",
    "desc": "Draadadapter buitendraad G 1/8\" naar binnendraad M6x1 recht"
  },
  {
    "cat": "Schroefdraadadapters",
    "name": "Verloopstuk G 1/8\" M x M8x1 F",
    "a1": "G 1/8\" M (buitendraad)",
    "a2": "M8x1 F (binnendraad recht)",
    "mat": "Messing vernikkeld",
    "desc": "Draadadapter buitendraad G 1/8\" naar binnendraad M8x1 recht"
  },
  {
    "cat": "Schroefdraadadapters",
    "name": "Verloopstuk G 1/8\" M x M10x1 F",
    "a1": "G 1/8\" M (buitendraad)",
    "a2": "M10x1 F (binnendraad recht)",
    "mat": "Messing vernikkeld",
    "desc": "Draadadapter buitendraad G 1/8\" naar binnendraad M10x1 recht"
  },
  {
    "cat": "Schroefdraadadapters",
    "name": "Verloopstuk 1/8\" NPT M x G 1/8\" F",
    "a1": "1/8\" NPT M (buitendraad conisch)",
    "a2": "G 1/8\" F (binnendraad)",
    "mat": "Messing vernikkeld",
    "desc": "Draadadapter buitendraad 1/8\" NPT naar binnendraad G 1/8\""
  },
  {
    "cat": "Schroefdraadadapters",
    "name": "Dubbele nippel G 1/4\" M x G 1/4\" M",
    "a1": "G 1/4\" M (buitendraad)",
    "a2": "G 1/4\" M (buitendraad)",
    "mat": "Messing vernikkeld",
    "desc": "Dubbele nippel buitendraad G 1/4\" x buitendraad G 1/4\""
  },
  {
    "cat": "Schroefdraadadapters",
    "name": "Dubbele nippel G 1/4\" M x G 1/8\" M",
    "a1": "G 1/4\" M (buitendraad)",
    "a2": "G 1/8\" M (buitendraad)",
    "mat": "Messing vernikkeld",
    "desc": "Dubbele nippel buitendraad G 1/4\" x buitendraad G 1/8\""
  },
  {
    "cat": "Schroefdraadadapters",
    "name": "Dubbele nippel G 1/4\" M x M8x1 M",
    "a1": "G 1/4\" M (buitendraad)",
    "a2": "M8x1 M (buitendraad recht)",
    "mat": "Messing vernikkeld",
    "desc": "Dubbele nippel buitendraad G 1/4\" x buitendraad M8x1 recht"
  },
  {
    "cat": "Schroefdraadadapters",
    "name": "Dubbele nippel G 1/4\" M x M10x1 M",
    "a1": "G 1/4\" M (buitendraad)",
    "a2": "M10x1 M (buitendraad recht)",
    "mat": "Messing vernikkeld",
    "desc": "Dubbele nippel buitendraad G 1/4\" x buitendraad M10x1 recht"
  },
  {
    "cat": "Schroefdraadadapters",
    "name": "Dubbele nippel G 1/4\" M x 1/8\" NPT M",
    "a1": "G 1/4\" M (buitendraad)",
    "a2": "1/8\" NPT M (buitendraad conisch)",
    "mat": "Messing vernikkeld",
    "desc": "Dubbele nippel buitendraad G 1/4\" x buitendraad 1/8\" NPT"
  },
  {
    "cat": "Schroefdraadadapters",
    "name": "Dubbele nippel G 1/8\" M x G 1/8\" M",
    "a1": "G 1/8\" M (buitendraad)",
    "a2": "G 1/8\" M (buitendraad)",
    "mat": "Messing vernikkeld",
    "desc": "Dubbele nippel buitendraad G 1/8\" x buitendraad G 1/8\""
  },
  {
    "cat": "Schroefdraadadapters",
    "name": "Dubbele nippel 1/8\" NPT M x 1/8\" NPT M",
    "a1": "1/8\" NPT M (buitendraad conisch)",
    "a2": "1/8\" NPT M (buitendraad conisch)",
    "mat": "Messing vernikkeld",
    "desc": "Dubbele nippel buitendraad 1/8\" NPT x buitendraad 1/8\" NPT"
  },
  {
    "cat": "Schroefdraadadapters",
    "name": "Verbindingsmof G 1/4\" F x G 1/4\" F",
    "a1": "G 1/4\" F (binnendraad)",
    "a2": "G 1/4\" F (binnendraad)",
    "mat": "Messing vernikkeld",
    "desc": "Rechte mof binnendraad G 1/4\" x binnendraad G 1/4\""
  },
  {
    "cat": "Schroefdraadadapters",
    "name": "Verbindingsmof G 1/4\" F x G 1/8\" F",
    "a1": "G 1/4\" F (binnendraad)",
    "a2": "G 1/8\" F (binnendraad)",
    "mat": "Messing vernikkeld",
    "desc": "Verloopmof binnendraad G 1/4\" x binnendraad G 1/8\""
  },
  {
    "cat": "Schroefdraadadapters",
    "name": "Verbindingsmof G 1/8\" F x G 1/8\" F",
    "a1": "G 1/8\" F (binnendraad)",
    "a2": "G 1/8\" F (binnendraad)",
    "mat": "Messing vernikkeld",
    "desc": "Rechte mof binnendraad G 1/8\" x binnendraad G 1/8\""
  },
  {
    "cat": "Kniestukken 90°",
    "name": "Kniestuk 90° G 1/4\" M x G 1/4\" F",
    "a1": "G 1/4\" M (buitendraad)",
    "a2": "G 1/4\" F (binnendraad 90°)",
    "mat": "Messing vernikkeld",
    "desc": "Haakse koppeling 90° buitendraad G 1/4\" naar binnendraad G 1/4\""
  },
  {
    "cat": "Kniestukken 90°",
    "name": "Kniestuk 90° G 1/4\" F x G 1/4\" F",
    "a1": "G 1/4\" F (binnendraad)",
    "a2": "G 1/4\" F (binnendraad 90°)",
    "mat": "Messing vernikkeld",
    "desc": "Haakse koppeling 90° binnendraad G 1/4\" naar binnendraad G 1/4\""
  },
  {
    "cat": "Kniestukken 90°",
    "name": "Kniestuk 90° G 1/4\" M x G 1/4\" M",
    "a1": "G 1/4\" M (buitendraad)",
    "a2": "G 1/4\" M (buitendraad 90°)",
    "mat": "Messing vernikkeld",
    "desc": "Haakse koppeling 90° buitendraad G 1/4\" naar buitendraad G 1/4\""
  },
  {
    "cat": "Kniestukken 90°",
    "name": "Kniestuk 90° G 1/8\" M x G 1/8\" F",
    "a1": "G 1/8\" M (buitendraad)",
    "a2": "G 1/8\" F (binnendraad 90°)",
    "mat": "Messing vernikkeld",
    "desc": "Haakse koppeling 90° buitendraad G 1/8\" naar binnendraad G 1/8\""
  },
  {
    "cat": "Kniestukken 90°",
    "name": "Kniestuk 90° G 1/8\" F x G 1/8\" F",
    "a1": "G 1/8\" F (binnendraad)",
    "a2": "G 1/8\" F (binnendraad 90°)",
    "mat": "Messing vernikkeld",
    "desc": "Haakse koppeling 90° binnendraad G 1/8\" naar binnendraad G 1/8\""
  },
  {
    "cat": "Kniestukken 90°",
    "name": "Kniestuk 90° M6x1 M x M6x1 F",
    "a1": "M6x1 M (buitendraad recht)",
    "a2": "M6x1 F (binnendraad recht 90°)",
    "mat": "Messing vernikkeld",
    "desc": "Haakse koppeling 90° buitendraad M6x1 recht naar binnendraad M6x1 recht"
  },
  {
    "cat": "Kniestukken 90°",
    "name": "Kniestuk 90° M8x1 M x M8x1 F",
    "a1": "M8x1 M (buitendraad recht)",
    "a2": "M8x1 F (binnendraad recht 90°)",
    "mat": "Messing vernikkeld",
    "desc": "Haakse koppeling 90° buitendraad M8x1 recht naar binnendraad M8x1 recht"
  },
  {
    "cat": "Kniestukken 90°",
    "name": "Kniestuk 90° M10x1 M x M10x1 F",
    "a1": "M10x1 M (buitendraad recht)",
    "a2": "M10x1 F (binnendraad recht 90°)",
    "mat": "Messing vernikkeld",
    "desc": "Haakse koppeling 90° buitendraad M10x1 recht naar binnendraad M10x1 recht"
  },
  {
    "cat": "Kniestukken 90°",
    "name": "Kniestuk 90° 1/8\" NPT M x 1/8\" NPT F",
    "a1": "1/8\" NPT M (buitendraad conisch)",
    "a2": "1/8\" NPT F (binnendraad 90°)",
    "mat": "Messing vernikkeld",
    "desc": "Haakse koppeling 90° buitendraad 1/8\" NPT naar binnendraad 1/8\" NPT"
  },
  {
    "cat": "Kniestukken 90°",
    "name": "Kniestuk 90° 1/4\" NPT M x 1/4\" NPT F",
    "a1": "1/4\" NPT M (buitendraad conisch)",
    "a2": "1/4\" NPT F (binnendraad 90°)",
    "mat": "Messing vernikkeld",
    "desc": "Haakse koppeling 90° buitendraad 1/4\" NPT naar binnendraad 1/4\" NPT"
  },
  {
    "cat": "Kniestukken 90°",
    "name": "Kniestuk 90° G 1/4\" M x M8x1 F",
    "a1": "G 1/4\" M (buitendraad)",
    "a2": "M8x1 F (binnendraad recht 90°)",
    "mat": "Messing vernikkeld",
    "desc": "Haakse verloopkoppeling 90° buitendraad G 1/4\" naar binnendraad M8x1 recht"
  },
  {
    "cat": "Kniestukken 90°",
    "name": "Kniestuk 90° G 1/4\" M x M10x1 F",
    "a1": "G 1/4\" M (buitendraad)",
    "a2": "M10x1 F (binnendraad recht 90°)",
    "mat": "Messing vernikkeld",
    "desc": "Haakse verloopkoppeling 90° buitendraad G 1/4\" naar binnendraad M10x1 recht"
  },
  {
    "cat": "Kniestukken 90°",
    "name": "Kniestuk 90° G 1/4\" M x G 1/8\" F",
    "a1": "G 1/4\" M (buitendraad)",
    "a2": "G 1/8\" F (binnendraad 90°)",
    "mat": "Messing vernikkeld",
    "desc": "Haakse verloopkoppeling 90° buitendraad G 1/4\" naar binnendraad G 1/8\""
  },
  {
    "cat": "Kniestukken 45°",
    "name": "Kniestuk 45° G 1/4\" M x G 1/4\" F",
    "a1": "G 1/4\" M (buitendraad)",
    "a2": "G 1/4\" F (binnendraad 45°)",
    "mat": "Messing vernikkeld",
    "desc": "Kniestuk 45° buitendraad G 1/4\" naar binnendraad G 1/4\""
  },
  {
    "cat": "Kniestukken 45°",
    "name": "Kniestuk 45° G 1/4\" F x G 1/4\" F",
    "a1": "G 1/4\" F (binnendraad)",
    "a2": "G 1/4\" F (binnendraad 45°)",
    "mat": "Messing vernikkeld",
    "desc": "Kniestuk 45° binnendraad G 1/4\" naar binnendraad G 1/4\""
  },
  {
    "cat": "Kniestukken 45°",
    "name": "Kniestuk 45° G 1/8\" M x G 1/8\" F",
    "a1": "G 1/8\" M (buitendraad)",
    "a2": "G 1/8\" F (binnendraad 45°)",
    "mat": "Messing vernikkeld",
    "desc": "Kniestuk 45° buitendraad G 1/8\" naar binnendraad G 1/8\""
  },
  {
    "cat": "Kniestukken 45°",
    "name": "Kniestuk 45° M8x1 M x M8x1 F",
    "a1": "M8x1 M (buitendraad recht)",
    "a2": "M8x1 F (binnendraad recht 45°)",
    "mat": "Messing vernikkeld",
    "desc": "Kniestuk 45° buitendraad M8x1 recht naar binnendraad M8x1 recht"
  },
  {
    "cat": "Kniestukken 45°",
    "name": "Kniestuk 45° M10x1 M x M10x1 F",
    "a1": "M10x1 M (buitendraad recht)",
    "a2": "M10x1 F (binnendraad recht 45°)",
    "mat": "Messing vernikkeld",
    "desc": "Kniestuk 45° buitendraad M10x1 recht naar binnendraad M10x1 recht"
  },
  {
    "cat": "Kniestukken 45°",
    "name": "Kniestuk 45° 1/8\" NPT M x 1/8\" NPT F",
    "a1": "1/8\" NPT M (buitendraad conisch)",
    "a2": "1/8\" NPT F (binnendraad 45°)",
    "mat": "Messing vernikkeld",
    "desc": "Kniestuk 45° buitendraad 1/8\" NPT naar binnendraad 1/8\" NPT"
  },
  {
    "cat": "Kniestukken 45°",
    "name": "Kniestuk 45° G 1/4\" M x M8x1 F",
    "a1": "G 1/4\" M (buitendraad)",
    "a2": "M8x1 F (binnendraad recht 45°)",
    "mat": "Messing vernikkeld",
    "desc": "Kniestuk 45° buitendraad G 1/4\" naar binnendraad M8x1 recht"
  },
  {
    "cat": "Kniestukken 45°",
    "name": "Kniestuk 45° G 1/4\" M x M10x1 F",
    "a1": "G 1/4\" M (buitendraad)",
    "a2": "M10x1 F (binnendraad recht 45°)",
    "mat": "Messing vernikkeld",
    "desc": "Kniestuk 45° buitendraad G 1/4\" naar binnendraad M10x1 recht"
  },
  {
    "cat": "Verlengstukken",
    "name": "Verlengstuk G 1/4\" M x G 1/4\" F - L=15mm",
    "a1": "G 1/4\" M (buitendraad)",
    "a2": "G 1/4\" F (binnendraad) - L=15mm",
    "mat": "Messing vernikkeld",
    "desc": "Verlengstuk buitendraad G 1/4\" x binnendraad G 1/4\", effectieve lengte 15mm"
  },
  {
    "cat": "Verlengstukken",
    "name": "Verlengstuk G 1/4\" M x G 1/4\" F - L=25mm",
    "a1": "G 1/4\" M (buitendraad)",
    "a2": "G 1/4\" F (binnendraad) - L=25mm",
    "mat": "Messing vernikkeld",
    "desc": "Verlengstuk buitendraad G 1/4\" x binnendraad G 1/4\", effectieve lengte 25mm"
  },
  {
    "cat": "Verlengstukken",
    "name": "Verlengstuk G 1/4\" M x G 1/4\" F - L=35mm",
    "a1": "G 1/4\" M (buitendraad)",
    "a2": "G 1/4\" F (binnendraad) - L=35mm",
    "mat": "Messing vernikkeld",
    "desc": "Verlengstuk buitendraad G 1/4\" x binnendraad G 1/4\", effectieve lengte 35mm"
  },
  {
    "cat": "Verlengstukken",
    "name": "Verlengstuk G 1/4\" M x G 1/4\" F - L=50mm",
    "a1": "G 1/4\" M (buitendraad)",
    "a2": "G 1/4\" F (binnendraad) - L=50mm",
    "mat": "Messing vernikkeld",
    "desc": "Verlengstuk buitendraad G 1/4\" x binnendraad G 1/4\", effectieve lengte 50mm"
  },
  {
    "cat": "Verlengstukken",
    "name": "Verlengstuk G 1/4\" M x G 1/4\" F - L=75mm",
    "a1": "G 1/4\" M (buitendraad)",
    "a2": "G 1/4\" F (binnendraad) - L=75mm",
    "mat": "Messing vernikkeld",
    "desc": "Verlengstuk buitendraad G 1/4\" x binnendraad G 1/4\", effectieve lengte 75mm"
  },
  {
    "cat": "Verlengstukken",
    "name": "Verlengstuk G 1/4\" M x G 1/4\" F - L=100mm",
    "a1": "G 1/4\" M (buitendraad)",
    "a2": "G 1/4\" F (binnendraad) - L=100mm",
    "mat": "Messing vernikkeld",
    "desc": "Verlengstuk buitendraad G 1/4\" x binnendraad G 1/4\", effectieve lengte 100mm"
  },
  {
    "cat": "Verlengstukken",
    "name": "Verlengstuk G 1/8\" M x G 1/8\" F - L=15mm",
    "a1": "G 1/8\" M (buitendraad)",
    "a2": "G 1/8\" F (binnendraad) - L=15mm",
    "mat": "Messing vernikkeld",
    "desc": "Verlengstuk buitendraad G 1/8\" x binnendraad G 1/8\", effectieve lengte 15mm"
  },
  {
    "cat": "Verlengstukken",
    "name": "Verlengstuk G 1/8\" M x G 1/8\" F - L=25mm",
    "a1": "G 1/8\" M (buitendraad)",
    "a2": "G 1/8\" F (binnendraad) - L=25mm",
    "mat": "Messing vernikkeld",
    "desc": "Verlengstuk buitendraad G 1/8\" x binnendraad G 1/8\", effectieve lengte 25mm"
  },
  {
    "cat": "Verlengstukken",
    "name": "Verlengstuk G 1/8\" M x G 1/8\" F - L=35mm",
    "a1": "G 1/8\" M (buitendraad)",
    "a2": "G 1/8\" F (binnendraad) - L=35mm",
    "mat": "Messing vernikkeld",
    "desc": "Verlengstuk buitendraad G 1/8\" x binnendraad G 1/8\", effectieve lengte 35mm"
  },
  {
    "cat": "Verlengstukken",
    "name": "Verlengstuk G 1/8\" M x G 1/8\" F - L=50mm",
    "a1": "G 1/8\" M (buitendraad)",
    "a2": "G 1/8\" F (binnendraad) - L=50mm",
    "mat": "Messing vernikkeld",
    "desc": "Verlengstuk buitendraad G 1/8\" x binnendraad G 1/8\", effectieve lengte 50mm"
  },
  {
    "cat": "Verlengstukken",
    "name": "Verlengstuk M6x1 M x M6x1 F - L=20mm",
    "a1": "M6x1 M (buitendraad recht)",
    "a2": "M6x1 F (binnendraad recht) - L=20mm",
    "mat": "Messing vernikkeld",
    "desc": "Verlengstuk buitendraad M6x1 recht x binnendraad M6x1 recht, effectieve lengte 20mm"
  },
  {
    "cat": "Verlengstukken",
    "name": "Verlengstuk M6x1 M x M6x1 F - L=35mm",
    "a1": "M6x1 M (buitendraad recht)",
    "a2": "M6x1 F (binnendraad recht) - L=35mm",
    "mat": "Messing vernikkeld",
    "desc": "Verlengstuk buitendraad M6x1 recht x binnendraad M6x1 recht, effectieve lengte 35mm"
  },
  {
    "cat": "Verlengstukken",
    "name": "Verlengstuk M8x1 M x M8x1 F - L=20mm",
    "a1": "M8x1 M (buitendraad recht)",
    "a2": "M8x1 F (binnendraad recht) - L=20mm",
    "mat": "Messing vernikkeld",
    "desc": "Verlengstuk buitendraad M8x1 recht x binnendraad M8x1 recht, effectieve lengte 20mm"
  },
  {
    "cat": "Verlengstukken",
    "name": "Verlengstuk M8x1 M x M8x1 F - L=35mm",
    "a1": "M8x1 M (buitendraad recht)",
    "a2": "M8x1 F (binnendraad recht) - L=35mm",
    "mat": "Messing vernikkeld",
    "desc": "Verlengstuk buitendraad M8x1 recht x binnendraad M8x1 recht, effectieve lengte 35mm"
  },
  {
    "cat": "Verlengstukken",
    "name": "Verlengstuk M8x1 M x M8x1 F - L=50mm",
    "a1": "M8x1 M (buitendraad recht)",
    "a2": "M8x1 F (binnendraad recht) - L=50mm",
    "mat": "Messing vernikkeld",
    "desc": "Verlengstuk buitendraad M8x1 recht x binnendraad M8x1 recht, effectieve lengte 50mm"
  },
  {
    "cat": "Verlengstukken",
    "name": "Verlengstuk M10x1 M x M10x1 F - L=20mm",
    "a1": "M10x1 M (buitendraad recht)",
    "a2": "M10x1 F (binnendraad recht) - L=20mm",
    "mat": "Messing vernikkeld",
    "desc": "Verlengstuk buitendraad M10x1 recht x binnendraad M10x1 recht, effectieve lengte 20mm"
  },
  {
    "cat": "Verlengstukken",
    "name": "Verlengstuk M10x1 M x M10x1 F - L=35mm",
    "a1": "M10x1 M (buitendraad recht)",
    "a2": "M10x1 F (binnendraad recht) - L=35mm",
    "mat": "Messing vernikkeld",
    "desc": "Verlengstuk buitendraad M10x1 recht x binnendraad M10x1 recht, effectieve lengte 35mm"
  },
  {
    "cat": "Verlengstukken",
    "name": "Verlengstuk M10x1 M x M10x1 F - L=50mm",
    "a1": "M10x1 M (buitendraad recht)",
    "a2": "M10x1 F (binnendraad recht) - L=50mm",
    "mat": "Messing vernikkeld",
    "desc": "Verlengstuk buitendraad M10x1 recht x binnendraad M10x1 recht, effectieve lengte 50mm"
  },
  {
    "cat": "Verlengstukken",
    "name": "Verlengstuk 1/8\" NPT M x 1/8\" NPT F - L=25mm",
    "a1": "1/8\" NPT M (buitendraad conisch)",
    "a2": "1/8\" NPT F (binnendraad) - L=25mm",
    "mat": "Messing vernikkeld",
    "desc": "Verlengstuk buitendraad 1/8\" NPT x binnendraad 1/8\" NPT, effectieve lengte 25mm"
  },
  {
    "cat": "Verlengstukken",
    "name": "Verlengstuk 1/8\" NPT M x 1/8\" NPT F - L=50mm",
    "a1": "1/8\" NPT M (buitendraad conisch)",
    "a2": "1/8\" NPT F (binnendraad) - L=50mm",
    "mat": "Messing vernikkeld",
    "desc": "Verlengstuk buitendraad 1/8\" NPT x binnendraad 1/8\" NPT, effectieve lengte 50mm"
  },
  {
    "cat": "Verlengstukken",
    "name": "Verlengstuk 1/4\" NPT M x 1/4\" NPT F - L=25mm",
    "a1": "1/4\" NPT M (buitendraad conisch)",
    "a2": "1/4\" NPT F (binnendraad) - L=25mm",
    "mat": "Messing vernikkeld",
    "desc": "Verlengstuk buitendraad 1/4\" NPT x binnendraad 1/4\" NPT, effectieve lengte 25mm"
  },
  {
    "cat": "Verlengstukken",
    "name": "Verlengstuk 1/4\" NPT M x 1/4\" NPT F - L=50mm",
    "a1": "1/4\" NPT M (buitendraad conisch)",
    "a2": "1/4\" NPT F (binnendraad) - L=50mm",
    "mat": "Messing vernikkeld",
    "desc": "Verlengstuk buitendraad 1/4\" NPT x binnendraad 1/4\" NPT, effectieve lengte 50mm"
  }
];
