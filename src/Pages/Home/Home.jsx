
import { useState } from 'react';
import '../Home/home.css'
import { useEffect } from 'react';
import DisplayData from '../../Components/DisplayData';

const Home = () => {

    const [data, setData] = useState([])

    useEffect(() => {
        fetch('https://api.tvmaze.com/search/shows?q=all')
            .then(res => res.json())
            .then(data => setData(data))
    }, [])



    return (
        <div className=''>
            <div className='movieData'>
                {
                    data.map((i, idx) => <DisplayData data={i?.show} key={idx}></DisplayData>)
                }
            </div>
        </div>
    );
};

export default Home;