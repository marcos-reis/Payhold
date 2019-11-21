import React, { useState,useEffect } from 'react';

import api from '../../../services/api'






import Navbar from '../../../Components/Client/Navbar';
import Sidebar from '../../../Components/Client/Sidebar';
import Featured from '../../../Components/Client/Featured';
import Partners from '../../../Components/Client/Partners';


// import { Container } from './styles';


export default function Dashboard() {
  const [destakPartners,setDestakPartners] = useState([])
  const [partners, setPartners ] = useState([])

  useEffect(()=>{
    async function loadData(){
      const response = await api.get('/partners')

      setDestakPartners(response.data.partners)
      setPartners(response.data.partners)

     }
    loadData()

  },[])


  const [whatPartner, setWhatPartner] = useState(null);
  const [indexPartners, setIndexPartners] = useState(null);
  const [partnerDetail, setPartnerDetail] = useState(false);




  const showPartner = (i, w) => {
    setWhatPartner(w);
    setIndexPartners(i);
    setPartnerDetail(!partnerDetail);

  };
  return (
    <>

      <Sidebar />
      <div className="row" style={{ backgroundColor: '#E4E7EA' }}>
        <div className="col-xl-2 col-lg-3 col-md-4" />
        <div className="p-0 col-md-8 col-lg-9 col-xl-10">
          <Navbar />
          <div className="container">
            <div className="row justify-content-center">
              {partnerDetail && (
                <>
                  <div
                    onClick={() => showPartner()}
                    onKeyDown={() => showPartner()}
                    style={{ cursor: 'pointer', zIndex: 1 }}
                    className="text-right position-fixed w-75"
                    tabIndex={indexPartners}
                    role="button"
                  >
                    <span className="position-fixed m-2 bg-light  px-2 font-weight-bold rounded-circle ">x</span>
                  </div>
                  <Partners
                    url={whatPartner[indexPartners].url}
                    name={whatPartner[indexPartners].name}
                    thumbnail={whatPartner[indexPartners].url_thumbnail}
                    descricao={whatPartner[indexPartners].descricao}
                    categories={whatPartner[indexPartners].categories}
                  />
                </>
              )}


              <div className="container d-block">

                <div className="row  justify-content-center">
                  <div className="col-12">
                    <p className="ml-5 mt-5 font-weight-bold text-grey">Destaques</p>
                  </div>
                  {destakPartners.map((v, i) => (
                    <div key={v.id} onClick={() => showPartner(i, destakPartners)} role="button" tabIndex={v.id}>
                      <Featured name={v.name} thumbnail={v.url_thumbnail} percentage={v.percentage} />
                    </div>
                  ))}


                </div>
                <div className="row justify-content-center">
                  <div className="col-12">
                    <p className="ml-5 mt-5 font-weight-bold text-grey">Todos os Parceiros</p>
                  </div>

                  {partners.map((v, i) => (
                    <div key={v.id} onClick={() => showPartner(i, partners)} role="button" tabIndex={v.id}>
                      <Featured name={v.name} thumbnail={v.url_thumbnail} percentage={v.percentage} />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
