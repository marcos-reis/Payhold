import React, { useState } from 'react';
import MaterialIcon from 'material-icons-react';

import Navbar from '../../../Components/Web/Navbar';
import Footer from '../../../Components/Web/Footer';

import apple from '../../../Assets/apple-play-store.png';
import google from '../../../Assets/google-play-store.png';
import shape from '../../../Assets/liquid-shape.png';
import appMobile from '../../../Assets/iPhoneX.png';

import './style.css'

import { isNumber, isUndefined, isNull } from 'util';


export default function Home() {

	const [payment, setPayment] = useState('R$ 100,00');
	const [cashBack, setCashBack] = useState('R$ 12,00');
	const [percentOFCash, setPercentOFCash] = useState('12%');


const formatASMoney = (n) => {
	const numberFormated = formatASNumber(n)
	const moneyFormated = numberFormated.toLocaleString('pt-br',{style:'currency',currency:'BRL'})
	return moneyFormated
}
const formatASPercentage = (n) =>{
	const numberFormated = formatASNumber(n)
	const percentageFormated = numberFormated.toLocaleString('pt-br',{style:'percent'});
	return percentageFormated
}
const formatASNumber = (n)=> {
	if(isUndefined(n)){return  0}
	if(isNull(n)){return  0}
	if(n==='%'){return 0}
	if(!isNumber(n)){return  parseInt(n.replace(/\D/g, ''))/100}
	if(isNumber(n)){return  n/100}
}
const changeState = (setState,State) =>{
	setState(State)
	calculateCashBack(payment,percentOFCash)

}

const calculateCashBack = (v,i)=>{
	const valueCashBackFormated = formatASNumber(v)
	const taxaCashBack = formatASNumber(i)
	const result = (valueCashBackFormated*taxaCashBack).toLocaleString('pt-br',{style:'currency',currency:'BRL'})
	setCashBack(result)
}



return (
<>

<Navbar />
<div className="bg-primary">
<div className="container">
<div className="row pb-4">
<div className="col-xl-7 col-lg-7 col-sm pt-5 pb-5">
<h2 className="text-light font-weight-bold pt-5 ">
Ganhe cashback nas suas compras online.
</h2>
<h3 className='text-light font-weight-light'>
Faça seu registro e baixe o nosso app.
</h3>
<img className="mt-5 " style={{ width: '200px' }} alt="Apple Store" src={apple} />
<img className="mt-5 " style={{ width: '200px' }} alt="Google Play Store" src={google} />

</div>
<div className="d-lg-block bg-shape w-25 d-none pb-5">
<img src={shape} className="" alt="none" />
</div>
</div>
</div>

</div>
<div className="container">
<article>
<h1 className="text-gray text-center mt-5 mb-5 display-4 font-weight-bold">Como funciona?</h1>
<h5 className="text-grey text-justify  mx-md-5 px-5 mb-5 pb-5 font-weight-normal">
	Acesse nossa plataforma, crie uma conta,
	escolha um parceiro e realize sua compra.
	Cada parceiro ofertará um percentual de retorno
	em nossa plataforma que pode variar por categorias de produtos.
	O valor do cashback poderá ser sacado ou mantidos rendendo 100% do CDI.

</h5>
</article>
<div className="row mb-5">
<div className="col-md col-12  mx-md-0 mx-sm-5 pl-5">
<MaterialIcon icon="touch_app" color="#2B6BCB" size="large" />
<p className="font-weight-light">Acesse nosso app e realize seu login</p>
<MaterialIcon icon="done" color="#2B6BCB" size="large" />
<p className="font-weight-light">Escolha o parceiro que está em nossa lista</p>
<MaterialIcon icon="shopping_cart" color="#2B6BCB" size="large" />
<p className="font-weight-light">Escolha o produto que deseja e realize sua compra</p>
<MaterialIcon icon="monetization_on" color="#2B6BCB" size="large" />
<p className="font-weight-light">Receba o cashback</p>
</div>
<div className="col text-center">


<img src={appMobile} style={{width:'250px'}} alt="App Payhold" />

</div>
</div>
</div>

<div className="py-5" style={{ backgroundColor: '#3C86F6' }}>
<div className="container">
<div className="row">
<div className=" col-md-8 col-lg-7 col-sm-10 col-10 bg-white text-center mx-auto px-sm-5 py-5">
<h3 className=" text-justify px-sm-5 font-weight-bold text-gray"> Veja o total de CashBack concedido em tempo real!</h3>
<h6 className=" text-justify px-sm-5 mb-4 font-weight-light">Cashback que retorna para você melhor investir.</h6>
<div className="border border-primary w-100 mx-auto mb-5">

<p className="text-center my-3">

<input
onChange={ (e)=>  changeState(setPayment,formatASMoney(e.target.value))}
className="font-weight-bold text-grey noFocus ml-3 w-50 border-0"
onBlur={()=>  changeState(setPayment,formatASMoney(payment))}
style={{ fontSize: 40 }} value={payment} />

</p>
</div>
<div className=" text-left ">
<label>Digite um percentual de cashback</label>
<h5 className="font-weight-bold   text-left">
Cash:
<input
	onChange={(e)=>changeState(setPercentOFCash,formatASPercentage(e.target.value))}
	className="font-weight-bold text-grey noFocus w-25 border-0"
	onBlur={()=>changeState(setPercentOFCash,formatASPercentage(percentOFCash))}
	value={percentOFCash}/>

</h5>

<h5 className="font-weight-bold text-left">
Retorno:

<span className="font-weight-bold ml-2 text-primary">{cashBack}</span>
</h5>

</div>
</div>
</div>

</div>

</div>
<Footer />
</>
);
}
