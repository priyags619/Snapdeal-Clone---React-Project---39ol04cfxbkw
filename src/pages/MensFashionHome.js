import React from 'react'
import { Link } from 'react-router-dom'
import MensFashionData from './MensFashionData';
import MensFashionItemCard from './MensFashionItemCard';

const MensFashionHome = () => {
    console.log(MensFashionData.productData)
    return (
        <>
            <h1 className="text-center mt-3">All items</h1>
            <section className=" container">
                <div className="row ">
                    {MensFashionData.productData.map((item, index)=>{
                      return(
                        <MensFashionItemCard img={item.img} 
                        title={item.title} 
                        desc={item.desc} 
                        price={item.price} 
                        item={item}
                        rate={item.rate} 
                        key={index} 
                        />
                        )
                    })}
                </div>
            </section>
            <Link to="/" className="btn btn-info ms-10 ">Home</Link>
        </>
    )
}

export default MensFashionHome