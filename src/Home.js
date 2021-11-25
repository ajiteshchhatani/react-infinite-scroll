import * as React from 'react';
import { useNavigate } from 'react-router';
import { useAuth } from './useAuth';
import axios from 'axios';
import './App.css';

function Home() {
    const { authed, logout } = useAuth();
    const navigate = useNavigate();
    const record_count = 10;
    const [page, setPage] = React.useState(1);
    const [users, setUsers] = React.useState([]);
    const loaderRef = React.useRef(null);

    React.useEffect(() => {
        axios.get(`https://randomuser.me/api/?page=${page}&results=${record_count}`)
            .then((response) => {
                setUsers([...users, ...response.data.results]);
            })
    }, [page]);

    React.useEffect(() => {
        const options = {
            root: null,
            rootMargin: "20px",
            threshold: 1.0
        };
        const observer = new IntersectionObserver(handleObserver, options);
        if (loaderRef.current) {
            observer.observe(loaderRef.current);
        }
    }, []);

    function handleLogout() {
        logout().then(() => {
            navigate("/");
        })
    }

    function handleObserver(entities) {
        const target = entities[0];
        if (target.isIntersecting) {
            setPage((page) => page + 1);
        }
    }

    return (
        <div className="list-container">
            <ul className="scrollable-list">
                {
                    users.map((user, index) => {
                        return (
                            <React.Fragment>
                                <li key={`${user.id.value}-1`} className="list-item"><span key={`${user.id.value}-2`} className="username">{user.name.first} {user.name.last}</span><img alt="user-avatar" key={`${user.id.value}-3`} className="avatar" src={user.picture.thumbnail} /></li>
                            </React.Fragment>
                        )
                    })
                }
                <div ref={loaderRef}><span>Loading...</span></div>
            </ul>
            <button onClick={handleLogout}>Logout</button>
        </div>
    )
}

export default Home;