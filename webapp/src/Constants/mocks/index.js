import amazon from "../assets/amazon.png";
import netshoes from "../assets/netshoes.png";
import americanas from "../assets/americanas.png";
import dafiti from "../assets/dafiti.png";
import submarino from "../assets/submarino.png";
import carrefour from "../assets/carrefour.png";
import shoptime from "../assets/shoptime.png";
import consul from "../assets/consul.png";
import brastemp from "../assets/brastemp.png";
import eletrolux from "../assets/eletrolux.png";

export const loadPartners = [
	{
	  id: 1, name: "Amazon", url_thumbnail: amazon, percentage:10, url:'https://www.amazon.com/', category: "Ecommerce",
	},
	{
	  id: 2, name: "Netshoes", url_thumbnail: netshoes, percentage:10, url:'https://www.netshoes.com.br', category: "Ecommerce",
	},
	{
	  id: 3, name: "Americanas", url_thumbnail: americanas, percentage:10, url:'https://www.americanas.com.br', category: "Ecommerce",
	},
	{
	  id: 4, name: "Dafiti", url_thumbnail: dafiti, percentage:10, url:'https://www.dafiti.com.br', category: "vestimentas",
	},
	{
	  id: 5, name: "Submarino", url_thumbnail: submarino, percentage:10, url:'https://www.submarino.com.br', category: "Ecommerce",
	},
	{
	  id: 6, name: "Carrefour", url_thumbnail: carrefour, percentage:10, url:'https://www.carrefour.com.br', category: "Ecommerce",
	},
	{
	  id: 7, name: "Shoptime", url_thumbnail: shoptime, percentage:10, url:'https://www.shoptime.com.br', category: "Ecommerce",
	},
	{
	  id: 8, name: "Brastemp", url_thumbnail: brastemp, percentage:10, url:'https://www.brastemp.com.br', category: "Casa",
	},
	{
	  id: 9, name: "Consul", url_thumbnail: consul, percentage:10, url:'https://www.consul.com.br', category: "Casa",
	},
	{
	  id: 10, name: "Eletrolux", url_thumbnail: eletrolux, percentage:10, url:'https://loja.electrolux.com.br', category: "Casa",
	},
  ];
	//Quando houver apenas

	// Compra Pendente,
	// Compra Confirmada

	// Cashback Pendente,
	// Cashback Confirmada

	// Transferencia Pendente
	// Transferencia Confirmada
const 	data = new Date('2019-12-20 15:00:50')
const	dia = data.getDate()
const	mes = data.getMonth()
const	ano = data.getFullYear()
const dateCustom = `${ano}-${mes}-${dia}`
  export const loadTransactions = [
	  {id:1,description:'Pedido', refers:'Amazon',valueCashback:100, confirmed:false,updated_at:dateCustom, created_at:dateCustom},
	  {id:2,description:'Pedido',refers:"Amazon",valueCashback:50, confirmed:true,updated_at:dateCustom, created_at:dateCustom},
	  {id:1,description:'Cashback',refers:"Amazon",value:60, confirmed:false,updated_at:null, created_at:dateCustom},
	//  {id:2,description:'Cashback',refers:"Amazon",value:30, confirmed:true,updated_at:dateCustom, created_at:dateCustom},
	 // {id:1,description:'Transfers',refers:"Nubank",value:20, confirmed:false,updated_at:null, created_at:dateCustom},
	//  {id:2,description:'Transfers',refers:"Nubank",value:10, confirmed:true,updated_at:dateCustom, created_at:dateCustom},
  ]
