const dd = {
  content: [
    {text: 'Schriftbeoordeling wiskunde', style: 'header'},
    {text: '', style: 'refs'},
    {text: 'O', style: 'grade'},
    {text: '\n'},
    {
      style: 'tableRubrik',
      table: {
        widths: ['*', 100, 100, 100],
        body: [
          [{text: 'Alle opdrachten gemaakt?',style:'subject',fillColor:'#eaeaea'}, {text: 'Niet alle opdrachten gemaakt is een Onvoldoende voor je schrift. Je schrift wordt niet verder nagekeken.', colSpan: 3,style:'knockout'}],
          [{text: 'Alle opdrachten nagekeken?',style:'subject',fillColor:'#eaeaea'}, {text: 'Niet alle opdrachten nagekeken is een Onvoldoende voor je schrift. Je schrift wordt niet verder nagekeken.', colSpan: 3,style:'knockout'}]
        ]
      }
    },
    {
      style: 'tableRubrik',
      table: {
        widths: ['*', 100, 100, 100],
        body: [
          [{text: 'punten',style:'points',fillColor:'grey'}, {text:'O',style:'points',fillColor:'grey'}, {text:'V',style:'points',fillColor:'grey'}, {text:'G',style:'points',fillColor:'grey'}],
          [{text: '80-60 minuten?',style:'subject',fillColor:'#eaeaea'}, {text: 'De Wi80 en Wi60 staan door elkaar.'}, {text:'De Wi80 en Wi60 opdrachten zijn ieder op een andere plek gemaakt.'}, {text:'en ...  Je hebt genoteerd waar je de Wi80 opdrachten en de Wi60 opdrachten kunt vinden.'}],
          [{text: 'Welke sommen?',style:'subject',fillColor:'#eaeaea'}, {text: 'Sommige sommen zijn genummerd, andere niet.'}, {text:'Alle sommen zijn genummerd, bijvoorbeeld: 1a, 1b... 2a, 2b enz...'}, {text:'en ...  Er is gebruik gemaakt van een kantlijn.  Elke opgave, en elk onderdeel, begint op een nieuwe regel.'}],
          [{text: 'Uitwerking?',style:'subject',fillColor:'#eaeaea'}, {text: 'Sommige sommen hebben een berekening, andere niet.'}, {text:'Alle opgaven hebben een berekening...'}, {text:'en ...  Hele zinnen gemaakt bij het formuleren van een conclusie/antwoord.'}],
          [{text: 'Netjes en overzichtelijk1',style:'subject',fillColor:'#eaeaea'}, {text: 'Sommige tabellen en tekeningen zijn gemaakt met geodriehoek en potlood, andere niet.'}, {text:'Alle grafieken, tabellen en andere tekeningen zijn gemaakt met geodriehoek en potlood.'}, {text:'en ...  Duidelijk verschil (bijv. pen en potlood) tussen een tekening en geschreven antwoorden.'}],
          [{text: 'Netjes en overzichtelijk2',style:'subject',fillColor:'#eaeaea'}, {text: 'Opdrachten staan door elkaar op een bladzijde.'}, {text:'Opdrachten staan recht onder elkaar, wel of niet in twee kolommen'}, {text:'en...  Bladvullers gebruikt, zoals losse aantekeningen of verbeteringen van opdrachten.'}],
          [{text: 'Netjes en overzichtelijk3',style:'subject',fillColor:'#eaeaea'}, {text: 'Je klasgenoot kan soms iets niet lezen.'}, {text:'Je klasgenoot kan je werk goed lezen.'}, {text:'en ...  Er is gewerkt met markeringen om het nog duidelijker te maken.'}],
          [{text: 'Cijfer = aantal punten : 30 x 9 + 1', colSpan: 4,style: 'formula'}]
        ]
      }
    }
  ],
  styles: {
    header: {
      fontSize: 18,
      bold: true,
      margin: [0, 0, 0, 10]
    },
    refs: {
      fontSize: 14,
      italics: true
    },
    points: {
        bold: true,
        alignment: 'center'
    },
    subject: {
        bold: true
    },
    tableRubrik: {
      margin: [0, 10, 0, 15]
    },
    grade: {
      fontSize: 36,
      bold: true,
      alignment: 'right',
      margin: [50, 0, 50, 0]
    },
    knockout: { },
    formula: {
      italics: true,
      alignment: 'center',
      margin: [0, 10, 0, 10]
    }
  },
  defaultStyle: { }
};

export default dd;
