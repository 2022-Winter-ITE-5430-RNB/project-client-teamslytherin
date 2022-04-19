import { useState } from "react";
import { Searchbox, Filter } from "./DonationStyling";

const Search = ({onSearch}) => {
    
    const [searchTerm,setSearchTerm] = useState('');

    const handleChange = (e) =>{
        setSearchTerm(e.target.value);
        onSearch(e.target.value);
    };

    return (        
        <Filter>
            <h3>Search: 
                <Searchbox type='text' placeholder="name" value = {searchTerm} onChange={handleChange}></Searchbox>
            </h3>
        </Filter>
    );
}

export default Search;