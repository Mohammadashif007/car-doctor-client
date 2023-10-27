import React, { useEffect, useState } from "react";
import { AiOutlineArrowRight } from "react-icons/ai";

const Services = () => {
    const [services, setService] = useState([]);

    useEffect(() => {
        fetch("data.json")
            .then((res) => res.json())
            .then((data) => setService(data));
    }, []);

    return (
        <div className=" ">
            <div className="text-center">
                <h1 className="text-2xl text-orange-600">Service</h1>
                <h2 className="text-4xl font-bold">Our Service Area</h2>
                <p>
                    the majority have suffered alteration in some form, by
                    injected humour, or randomised words which don't look even
                    slightly believable.{" "}
                </p>
            </div>
            <div className="grid grid-cols-3 gap-3 p-10">
                {services.map((service) => (
                    <div key={service._id}>
                        <div className="card bg-base-100 shadow-xl">
                            <figure className="px-10 pt-10">
                                <img
                                    src={service.img}
                                    alt="Shoes"
                                    className="rounded-xl"
                                />
                            </figure>
                            <div className="card-body">
                                <h2 className="card-title">{service.title}</h2>
                                <div className="flex justify-between items-center">
                                    <p className="text-orange-700">
                                        {service.price}
                                    </p>
                                    
                                        {" "}
                                        <i>
                                            <AiOutlineArrowRight />
                                        </i>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Services;
