import amazon from "../Assets/amazon.png";
import netshoes from "../Assets/netshoes.png";
import americanas from "../Assets/americanas.png";
import dafiti from "../Assets/dafiti.png";
import submarino from "../Assets/submarino.png";
import carrefour from "../Assets/carrefour.png";
import shoptime from "../Assets/shoptime.png";
import consul from "../Assets/consul.png";
import brastemp from "../Assets/brastemp.png";
import eletrolux from "../Assets/eletrolux.png";

import { ReactComponent as Ecommerce } from "../Assets/ecommerce.svg";
import { ReactComponent as Treinamentos } from "../Assets/capelo.svg";
import { ReactComponent as Casa } from "../Assets/casa.svg";
import { ReactComponent as Saude } from "../Assets/coracao.svg";
import { ReactComponent as Vestimentas } from "../Assets/vestimentas.svg";
import { ReactComponent as Viagens } from "../Assets/aviao.svg";


export const loadPartners = [
  {
    id: 1, name: "Amazon", logo: amazon, category: "Ecommerce",
  },
  {
    id: 2, name: "Netshoes", logo: netshoes, category: "Ecommerce",
  },
  {
    id: 3, name: "Americanas", logo: americanas, category: "Ecommerce",
  },
  {
    id: 4, name: "Dafiti", logo: dafiti, category: "Vestimentas",
  },
  {
    id: 5, name: "Submarino", logo: submarino, category: "Ecommerce",
  },
  {
    id: 6, name: "Carrefour", logo: carrefour, category: "Ecommerce",
  },
  {
    id: 7, name: "Shoptime", logo: shoptime, category: "Ecommerce",
  },
  {
    id: 8, name: "Brastemp", logo: brastemp, category: "Casa",
  },
  {
    id: 9, name: "Consul", logo: consul, category: "Casa",
  },
  {
    id: 10, name: "Eletrolux", logo: eletrolux, category: "Casa",
  },

];

export const loadCategoryOfPartners = [
  { id: 1, name: "Ecommerce", icon: Ecommerce },
  { id: 2, name: "Casa", icon: Casa },
  { id: 3, name: "Vestimentas", icon: Vestimentas },
  { id: 4, name: "Saude", icon: Saude },
  { id: 5, name: "Treinamentos", icon: Treinamentos },
  { id: 6, name: "Viagens", icon: Viagens },

];
