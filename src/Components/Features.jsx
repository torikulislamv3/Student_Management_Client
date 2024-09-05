import React, { useEffect, useState } from 'react'

const Features = () => {
    const [feature, setFeatures] = useState([]);
    
    useEffect(() => {
        fetch("features.json")
        .then((res) => res.json())
        .then((data) => {
            setFeatures(data.sectors);
            console.log(data.sectors);  // Log the fetched data here directly
        })
        .catch((error) => console.error('Error fetching data:', error));
    }, []);

    return (
        <>
            <div className='mt-5'>
                <marquee className='text-2xl font-bold border bg-gray-600 text-yellow-300'>CST Department Special Features</marquee>
            </div>
            <section>
                {feature && feature.length > 0 && feature.map((item, index) => (
                    <div key={index}>
                        <h2>{item.name}</h2>
                        <img src={item.img} alt={item.name} />
                        <p>{item.description}</p>
                    </div>
                ))}
            </section>
        </>
    );
};

export default Features;
