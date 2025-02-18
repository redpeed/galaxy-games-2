export const navbarTopOffset = 50
export const navbarHeight = 88

type TLineExtension = {
  url: string;
  left?: number;
  top?: number;
  right?: number;
  bottom?: number;
  w: number;
  h: number;
}

export interface IPoint {
  x: string;
  y: string;
  ext?: TLineExtension[];
  offset?: {
    x?: number;
    y?: number;
  }
  origin?: string;
}

export const checkPoints: IPoint[] = [
  {x: '50%', y: '0px'},
  {x: '50%', y: '320px'},
  {x: 'calc(50% - 250px)', y: '320px'},
  {x: 'calc(50% - 250px)', y: '520px'},
  {x: '50%', y: '520px'},
  {x: '50%', y: '1700px'},
  {
    x: '5%', y: '1700px',
    ext: [{
      url: '/line-extension-1.svg',
      left: 10,
      top: 0,
      w: 186,
      h: 43
    }]
  },

  {
    x: '5%', y: '#rtc',
    ext: [{
      url: '/line-extension-2.svg',
      left: -20,
      bottom: 0,
      w: 20,
      h: 224
    },
      {
        url: '/line-extension-3.svg',
        left: -13,
        bottom: 300,
        w: 13,
        h: 197
      }
    ]
  },

  {x: '-10%', y: '#rtc'},
  {x: '-10%', y: '100%'},

  //
  // {
  //   x: '95%', y: '#rtc',
  //   ext: [{
  //     url: '/line-extension-4.svg',
  //     right: -20,
  //     top: 300,
  //     w: 20,
  //     h: 585
  //   }]
  // },
  // {x: '95%', y: '#mia'},
  // {x: '10%', y: '#mia',
  //   ext:[
  //     {
  //       url: '/line-extension-5.svg',
  //       left: 0,
  //       top: 40,
  //       w: 20,
  //       h: 114
  //     }
  //   ]
  // },
  // {x: '10%', y: '#mia-2'},
  // {x: '-10%', y: '#mia-2'},
  // {x: '-10%', y: '100%'},
]

