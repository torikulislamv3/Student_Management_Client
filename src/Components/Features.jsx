import React, { useEffect, useState } from 'react'

const Features = () => {
    const [feature, setFeatures] = useState([]);
    
    useEffect(() => {
        fetch("features.json")
        .then((res) => res.json())
        .then((data) => {
            setFeatures(data.sectors);
            console.log(data.sectors); 
        })
        .catch((error) => console.error('Error fetching data:', error));
    }, []);

    return (
        <>
            <div className='mt-5 mb-5'>
                <marquee className='text-2xl font-bold border bg-gray-600 text-yellow-300'>CST Department Special Features</marquee>
            </div>
            <section className='mb-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {feature && feature.length > 0 && feature.map((item, index) => (
                    <div key={index} className="card bg-gray-600 w-96 shadow-xl">
                    <figure className="px-10 pt-10">
                      <img
                        src={item.img}
                        alt="photo.."
                        className="rounded-xl h-[200px]" />
                    </figure>
                    <div className="card-body items-center text-center">
                      <h2 className="card-title text-yellow-300">{item.name}</h2>
                      <p className='text-green-300'>{item.description}</p>
                      {/* <div className="card-actions">
                        <button className="btn btn-primary">Buy Now</button>
                      </div> */}
                    </div>
                  </div>
                    
                ))}
            </section>
          
        </>
    );
};

export default Features;
