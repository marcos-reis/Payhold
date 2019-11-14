import { createStore } from 'redux';
import api from '../services/api'

async function chamada(){
  const response = await api.get('/partner')
  console.log(response)
}
chamada()


const DESTAKPARTNERS = {
  data: [{
    name: 'amazon',
    url: 'https://www.amazon.com.br',
    desc: `Netshoes é um comércio eletrônico brasileiro
     de artigos esportivos adquirido pela Magazine Luiza em 2019,
     fundado em fevereiro de 2000 por Marcio Kumruian e Hagop Chabab.`,
    medPercentage: '16%',
    categorias: [
      { categoria: 'Music', percentage: '17%' },
      { categoria: 'Sport', percentage: '37%' },
      { categoria: 'Academic', percentage: '19%' },
    ]
    ,
  },
  {
    name: 'amazon',
    url: 'https://www.amaz2on.com.br',
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
  }],
};
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
function partners(state = { PARTNERS, DESTAKPARTNERS }, action) {
  switch (action.type) {
    case 'ADD_PARTNERS':
      return { ...state, data: [...state, action.title] };
    default:
      return state;
  }
}
const store = createStore(partners);
export default store;
