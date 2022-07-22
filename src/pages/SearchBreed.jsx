import { useParams, useNavigate } from 'react-router-dom';
import { Children, useState, useEffect, useMemo } from 'react';

const SearchBreed = () => {
        const { id } = useParams();
        const [breedId, setBreedId] = useState('acur');
        return <div>SearchBreed</div>;
};

export default SearchBreed;
