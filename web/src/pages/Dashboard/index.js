import React, { useState } from 'react';
import { useSelector } from 'react-redux';

import Navbar from '../../components/Navbar';
import Sidebar from '../../components/Sidebar';
import Featured from '../../components/Featured';
import Partners from '../../components/Partners';


// import { Container } from './styles';


export default function Dashboard() {
  const destakpartners = useSelector((state) => state.DESTAKPARTNERS.data);
  const partners = useSelector((state) => state.PARTNERS.data);

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

                    name={whatPartner[indexPartners].name}
                    url={whatPartner[indexPartners].url}
                    desc={whatPartner[indexPartners].desc}
                    categorias={whatPartner[indexPartners].categorias}
                  />
                </>
              )}


              <div className="container d-block">

                <div className="row  justify-content-center">
                  <div className="col-12">
                    <p className="ml-5 mt-5 font-weight-bold text-grey">Destaques</p>
                  </div>
                  {destakpartners.map((v, i) => (
                    <div key={v.url} onClick={() => showPartner(i, destakpartners)} onKeyDown={() => showPartner(i)} role="button" tabIndex="0">
                      <Featured name={v.name} percentage={v.medPercentage} />
                    </div>
                  ))}


                </div>
                <div className="row justify-content-center">
                  <div className="col-12">
                    <p className="ml-5 mt-5 font-weight-bold text-grey">Todos os Parceiros</p>
                  </div>

                  {partners.map((v, i) => (
                    <div key={v.url} onClick={() => showPartner(i, partners)} onKeyDown={() => showPartner(i)} role="button" tabIndex="0">
                      <Featured name={v.name} percentage={v.medPercentage} />
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
