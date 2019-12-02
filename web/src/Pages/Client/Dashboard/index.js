import React, { useState,useEffect } from 'react';

import api from '../../../services/api'






import Navbar from '../../../Components/Client/Navbar';
import Featured from '../../../Components/Client/Featured';
import Partners from '../../../Components/Client/Partners';


// import { Container } from './styles';


export default function Dashboard() {
  const [partners, setPartners ] = useState([])


  useEffect(()=>{
    async function loadData(){
      const response = await api.get('/partners')

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

      <div className="row" style={{ backgroundColor: '#E4E7EA' }}>

        <div className="col-12 ">
          <Navbar />
          <div className="col-8 container">
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
                    description={whatPartner[indexPartners].description}
                    categories={whatPartner[indexPartners].categories}
                  />
                </>
              )}


              <div className="container d-block">


                <div className="row justify-content-center">
                  <div className="mt-5 pl-5 ml-5 col-12">
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
