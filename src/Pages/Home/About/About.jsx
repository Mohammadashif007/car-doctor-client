import React from 'react';
import person from '../../../assets/about/person.jpg';
import parts from '../../../assets/about/parts.jpg'

const About = () => {
    return (
        <div className='flex gap-8 justify-center items-center my-20 mx-10'>
            <div className='w-1/2 relative'>
                <img className='w-1/2 rounded' src={person} alt="" />
                <img className='w-1/3 absolute -bottom-1/4 right-1/3 border-4 border-white rounded' src={parts} alt="" />
            </div>
            <div className='w-1/2 space-y-8'>
                <h2 className='text-3xl font-bold text-orange-600'>About Us</h2>
                <h3 className='text-5xl font-bold'>We are qualified <br /> & of experience <br /> in this field</h3>
                <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
                <p>the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
                <button className="btn btn-warning">Get More Info</button>
            </div>
            
        </div>
    );
};

export default About;