import { createStore } from 'redux';


const PARTNERS = {
  data: [
    {
      name: 'amazon',
      url: 'https://www.amazon.com.br',
      desc: `Amazon.com Inc.
         é uma empresa transnacional de comércio eletrónico
         dos Estados Unidos fundada por Jeff Bezos em julho de 1994
         com sede em Seattle, estado de Washington.`,
      medPercentage: '12%',
      categorias: [
        { categoria: 'Hardware', percentage: '17%' },
        { categoria: 'Sport', percentage: '37%' },
        { categoria: 'Eletronics', percentage: '19%' },
      ]
      ,
    }, {
      name: 'amazon',
      url: 'https://www.ama2zon.com.br',
      desc: `Amazon.com Inc.
         é uma empresa transnacional de comércio eletrónico
         dos Estados Unidos fundada por Jeff Bezos em julho de 1994
         com sede em Seattle, estado de Washington.`,
      medPercentage: '12%',
      categorias: [
        { categoria: 'Hardware', percentage: '17%' },
        { categoria: 'Sport', percentage: '37%' },
        { categoria: 'Eletronics', percentage: '19%' },
      ]
      ,
    },

  ],
};

function partners(state = PARTNERS, action) {
  switch (action.type) {
    case 'ADD_PARTNERS':
      return { ...state, data: [...state, action.partner] };
    default:
      return state;
  }
}



const store = createStore(partners);
export default store;
