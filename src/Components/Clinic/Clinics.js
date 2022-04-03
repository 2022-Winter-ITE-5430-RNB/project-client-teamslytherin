import React, { useState, useEffect } from 'react'
import { ClinicHeading, EachClinic, AllClinics } from './ClinicStyling';
import Search from './Search';
import axios from 'axios';

const Clinics = () => {

    const [search, setSearch] = useState('');
    const [clinics, setClinics] = useState([]);

    useEffect(() => {
        sendApiRequest();
    }, []);
    const sendApiRequest = async () => {
        try {
            const response = await axios.get(
                'http://localhost:5000/api/clinics'
            );
            setClinics(response.data);
            console.log(response);
        } catch (err) {
            console.log(err);
        }
    };

    const filterTask = (searchTerm) => {
        searchTerm ? setSearch(searchTerm) : setSearch('');
    };

    return (
        <AllClinics>
            <ClinicHeading> Clinics Around You </ClinicHeading>
            <Search onSearch={filterTask} />
            {clinics
                .filter((s) => s.location.toLowerCase().includes(search.toLowerCase()))
                .map((clinic) => {
                    return (
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
