import React, {useEffect} from 'react';

const Home = () => {

    const url = 'http://127.0.0.1:8000/api/authorization/user'

    useEffect(() => {
        (
            async () => {
                await fetch(url, {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                });
            }
        )();
    })

    return (
        <div>

        </div>
    );
};

export default Home;