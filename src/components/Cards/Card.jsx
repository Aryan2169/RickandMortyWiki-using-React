import React from 'react'
import styles from "./Cards.module.scss" 
const Card = ({results}) => {
    let display;
    if(results){
        display=results.map((x)=>{
          let{id,name,image,location,status}=x;
          return(
            <div key={id} className="col-lg-4 col-md-6 col-sm-6 col-12 mb-4 position-relative text-dark">
                <div className={`${styles.card} d-flex flex-column justify-content-center`}>
                    <img className={`${styles.img} img-fluid`} src={image} alt="" />
                    <div  className={`${styles.content}`}>
                        <div className="fs-4 fw-bold mb-4" >{name}</div>
                        <div className="">
                            <div className="fs-6 fw-normal"> Last location</div>
                            <div className="fs-5">{location.name}</div>
                        </div>
                    </div>
                </div>
                {(()=>{
                    if(status==="Dead"){
                        return (
                            <div className={`${styles.badge} position-absolute badge bg-danger`}>{status}</div>
                        )
                    }else if(status==="Alive"){
                        return (
                            <div className={`${styles.badge} position-absolute badge bg-success`}>{status}</div>
                        )
                    }else{
                        return (
                            <div className={`${styles.badge} position-absolute badge bg-secondary`}>{status}</div>
                        )
                    }
                })()}
            </div>
          );
        })
    }else{
    display='no results found'
    }
    
  return (
    <>
    {display}
    </>
  )
}

export default Card
