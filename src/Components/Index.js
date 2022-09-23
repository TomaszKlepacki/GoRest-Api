import React, { useEffect, useState } from 'react'
import image from '../img/user-profile-icon.svg';
// import AutoSizer from "react-virtualized-auto-sizer";

const Index = () => {

    const [users, setUsers] = useState([]);



    const getUsers = async () => {
        const response = await fetch("https://gorest.co.in/public/v2/users");
        
        const FinalData = await response.json();
        setUsers(FinalData)
    }



    useEffect(() => {
        getUsers();
    }, [])


    return (
      
            <div className="container">
               
                {
                    users.map((curElem) => {
                        return (
              
                            <div className="card_item" key={curElem.id}>
                          
                                <div className="card_inner">
                             
                                    <img src={image} alt="" />
                                    <div className="userName">{curElem.name}</div>
                                    <div className="userUrl">{curElem.email}</div>
                                    <div className="detail-box">

                                        <div className="gitDetail"><span>{curElem.gender}</span></div>
                                        <div className="gitDetail"><span>{curElem.status}</span></div>
                                        
                                    </div>
                                    <button className="seeMore">See More</button>
                                </div>
                                
                            </div>
                        
                        )
                    })
                }

            </div>              


    )
}

export default Index;

