const dd = {
  content: [
    {text: 'Schriftbeoordeling wiskunde', style: 'header'},
    {text: 'Samuel Thewessen', style: 'refs'},
    {text: '2TH2', style: 'refs'},
    {text: '\n'},
        {
      style: 'tableRubrik',
      table: {
        widths: ['*', 100, 100, 100],
        body: [
          [{text: 'Alle opdrachten gemaakt?',style:'subject'}, {text: 'Niet alle opdrachten gemaakt is een Onvoldoende voor je schrift. Je schrift wordt niet verder nagekeken.', colSpan: 3}, {}, {}],
          [{text: 'Alle opdrachten nagekeken?',style:'subject'}, {text: 'Niet alle opdrachten nagekeken is een Onvoldoende voor je schrift. Je schrift wordt niet verder nagekeken.', colSpan: 3}, {}, {}]
        ]
      }
    },
    {
      style: 'tableRubrik',
      table: {
        widths: ['*', 100, 100, 100],
        body: [
          [{text: 'punten',style:'points'}, {text:'1',style:'points'}, {text:'2',style:'points'}, {text:'3',style:'points'}],
          [{text: 'fixed-width cells have exactly the specified width',style:'subject'}, {text: ''}, {text:''}, {text:''}],
          [{text: 'fixed-width cells have exactly the specified width',style:'subject'}, {text: ''}, {text:''}, {text:''}],
          [{text: 'fixed-width cells have exactly the specified width',style:'subject'}, {text: ''}, {text:''}, {text:''}],
          [{text: 'fixed-width cells have exactly the specified width',style:'subject'}, {text: ''}, {text:''}, {text:''}],
          [{text: 'fixed-width cells have exactly the specified width',style:'subject'}, {text: ''}, {text:''}, {text:''}],
          [{text: 'fixed-width cells have exactly the specified width',style:'subject'}, {text: ''}, {text:''}, {text:''}],
          [{text: 'formula', colSpan: 4, alignment: 'center'}]
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
        alignment: 'center',
        fillColor: 'grey'
    },
    subject: {
        bold: true,
        fillColor: '#eaeaea'
    },
    tableRubrik: {
      margin: [0, 10, 0, 15]
    }
  },
  defaultStyle: {
    // alignment: 'justify'
  }
}
export default dd
