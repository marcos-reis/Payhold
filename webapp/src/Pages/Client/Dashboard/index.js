import React, { useState, useEffect } from "react";
import {useSelector} from 'react-redux'

import Navbar from "../../../Components/Client/Navbar";

import Partners from "../../../Components/Client/Partners";

import api from '../../../services/api'
import {getUserId} from '../../../services/user'

// import { Container } from './styles';


export default function Dashboard() {
  const [partners, setPartners] = useState([]);
  const [Partner, setPartner] = useState(null);
  const [user, setUser] = useState(null);
  const [indexPartners, setIndexPartner] = useState(null);
  const [showDetailPartner, setShowDetailPartner] = useState(false);
  const selectState = useSelector(state => state.user)
  const userId = getUserId()



  useEffect(() => {
    async function loadData() {
	const response = await api.get("/partners")
	  setPartners(response.data);
	  setUser(null);
    }
    loadData();
  }, []);

  function ListOfPartners({
	thumbnail, name, percentage,link,theme
  }) {
	return (
	  <a href={`${link}?mdasc=${userId}`} style={{ borderRadius: " 20px 20px 20px 20px", cursor: "pointer",padding:0,backgroundColor:theme }} className=" mx-4 mt-5 d-flex flex-column justify-content-center align-items-center">
		<img style={{ borderRadius: " 10px 10px 0 0", width: "250px" }} src={thumbnail} alt={name} />
		<span className="text-center font-weight-bold text-light">
		  {`Até ${percentage}% de volta`}
		</span>
	  </a>
	);
  }


  function showPartner (index, partner){
    setPartner(partner);
    setIndexPartner(index);
    setShowDetailPartner(!showDetailPartner);
  };


  return (
    <>

      <div className="row" style={{ backgroundColor: "#E4E7EA" }}>

        <div className="col-12 ">
          <Navbar />
          <div style={{height:'100vh'}}className="col-8 container">
            <div className="row justify-content-center">

              {showDetailPartner && (
                <>
                  <div
                    onClick={() => showPartner()}
                    onKeyDown={() => showPartner()}
                    style={{ cursor: "pointer", zIndex: 1 }}
                    className="text-right position-fixed w-75"
                    tabIndex={indexPartners}
                    role="button"
                  >
                    <span className="position-fixed m-2 bg-light  px-2 font-weight-bold rounded-circle ">x</span>
                  </div>
                  <Partners
				  id={user.id}
                    //url={Partner[indexPartners].url}
                    name={Partner[indexPartners].name}
                    thumbnail={Partner[indexPartners].url_thumbnail}
                    //description={Partner[indexPartners].description}
                    //categories={Partner[indexPartners].categories}
                  />
                </>
              )}

<h1 style={{zIndex:10000}}>{selectState.email}</h1>
              <div className="container d-block">


                <div className="row justify-content-center">
                  <div className="mt-5 pl-5 ml-5 col-12">
                    <p className="ml-5 mt-5 font-weight-bold text-grey">Todos os Parceiros</p>
                  </div>

                  {partners.map((v, i) => (

					  <ListOfPartners
						key={v.id}
						name={v.name}
						link={v.url}
						thumbnail={v.url_thumbnail}
						percentage={v.percentage}
						theme={v.theme}
					  />

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
