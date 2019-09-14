const dd = {
  content: [
    {
      text: 'Eigen huis opdracht',
      style: 'header'
    },
    {
      text: '',
      style: 'refs'
    },
    {
      text: 'O',
      style: 'grade'
    },
    {
      text: '\n'
    },
    {
      style: 'tableRubrik',
      table: {
        widths: ['*', 100, 100, 100, 100],
        body: [
          [
            {
              text: 'onderdeel',
              style: 'points',
              fillColor: 'grey'
            },
            {
              text: 'O',
              style: 'points',
              fillColor: 'grey'
            },
            {
              text: 'V',
              style: 'points',
              fillColor: 'grey'
            },
            {
              text: 'G',
              style: 'points',
              fillColor: 'grey'
            },
            {
              text: 'U',
              style: 'points',
              fillColor: 'grey'
            }
          ],
          [
            {
              text: 'Voorkant',
              style: 'subject',
              fillColor: '#eaeaea'
            },
            {
              text: 'geen voorkant gemaakt'
            },
            {
              text: 'een voorkant gemaakt'
            },
            {
              text: '+ titel, naam, 80klas, datum'
            },
            {
              text: '+ plaatje'
            },
          ],
          [
            {
              text: 'Opdrachten gemaakt',
              style: 'subject',
              fillColor: '#eaeaea'
            },
            {
              text: '3/5 gemaakt'
            },
            {
              text: '4/5 gemaakt'
            },
            {
              text: '5/5 gemaakt'
            },
            {
              text: '+ bonusopdracht(6) gemaakt'
            }
          ],
          [
            {
              text: 'Berekeningen opgeschreven',
              style: 'subject',
              fillColor: '#eaeaea'
            },
            {
              text: 'Bij 3/5 berekeningen opgeschreven'
            },
            {
              text: 'Bij 4/5 berekeningen opgeschreven'
            },
            {
              text: 'Bij 5/5 berekeningen opgeschreven'
            },
            {
              text: '+ bij bonusopdracht berekeningen opgeschreven'
            }
          ],
          [
            {
              text: 'Foto\'s toegevoegd',
              style: 'subject',
              fillColor: '#eaeaea'
            },
            {
              text: 'Bij 3/5 foto\'s toegevoegd'
            },
            {
              text: 'Bij 4/5  foto\'s toegevoegd'
            },
            {
              text: 'Bij 5/5  foto\'s toegevoegd'
            },
            {
              text: '+bij bonusopdracht  foto\'s toegevoegd'
            }
          ],
          [
            {
              text: 'Netjes gewerkt',
              style: 'subject',
              fillColor: '#eaeaea'
            },
            {
              text: 'Geen inhoudsopgave, geen hoofdstuknummers. Alles staat door elkaar heen.'
            },
            {
              text: 'Inhoudsopgave gemaakt, hoofdstukken hebben titels'
            },
            {
              text: '+ paginanummers'
            },
            {
              text: '+ hoofdstukken op een nieuwe bladzijde. Zorg voor lay-out.'
            }
          ],
          [
            {
              text: 'Op tijd ingeleverd',
              style: 'subject',
              fillColor: '#eaeaea'
            },
            {
              text: '\n'
            },
            {
              text: 'Uiterlijk vrijdag week 7 thema 3'
            },
            {
              text: '\n'
            },
            {
              text: 'Uiterlijk vrijdag week 6 thema 3'
            }
          ]
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
    note: { },
    formula: {
      italics: true,
      alignment: 'center',
      margin: [0, 10, 0, 10]
    }
  },
  defaultStyle: { }
};

export default dd;
