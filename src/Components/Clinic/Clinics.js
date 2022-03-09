import React from 'react';
import { ClinicHeading,EachClinic,AllClinics } from './ClinicStyling';
import { useState } from 'react';
import Search from './Search';

const Clinics = () => {

    const [search,setSearch] = useState('');
    const clinicsList = [
        {
            id: '1',
            name: 'Derry Heights Animal Hospital',
            location: 'Brampton',
            timings: '09:00am - 05:00pm',
            rating: 4
        },
        {
            id: '2',
            name: 'Hollybank Animal Hospital',
            location: 'Missisuaga',
            timings: '09:00am - 05:00pm',
            rating: 4
        },
        {
            id: '3',
            name: 'Southdown Animal Clinic',
            location: 'Milton',
            timings: '01:00pm - 08:00pm',
            rating: 4
        },
        {
            id: '4',
            name: 'Westbridge Veterinary Hospital',
            location: 'Etobicoke',
            timings: '12:00am - 08:00am',
            rating: 4
        },
    ];

    const filterTask = (searchTerm) => {
        searchTerm ? setSearch(searchTerm) : setSearch('');    
    };    

    return (
        <AllClinics>
        <ClinicHeading> Clinics Around You </ClinicHeading>
        <Search onSearch = {filterTask}/>
        {clinicsList
            .filter((s)=>s.location.toLowerCase().includes(search.toLowerCase()))
            .map((clinic) => {
            return(            
                <EachClinic>
                    <table>
                        <tr>
                            <h2>{clinic.name}</h2>
                        </tr>
                        <tr>
                            Location: {clinic.location}
                        </tr>
                        <tr>
                            Timings: {clinic.timings}
                        </tr>
                        <tr>
                            Rating: {clinic.rating}              
                        </tr>    
                    </table>
                    <br></br> 
                </EachClinic>                
            )
            })
        }   
        </AllClinics>
    );
};
    
export default Clinics
