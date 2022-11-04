import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
const Home = () => {
    const [user, setUser] = useState([])
    let navigate = useNavigate();
    async function fetchUsers(){
        const { data } = await axios.get("https://jsonplaceholder.typicode.com/users")
        console.log(data)
        setUser(data)
    }
    useEffect(() => {
        fetchUsers()
    }, [])
    return(
        <div className="container">
            <div className="row">
                <div className="user-list">
                {user.map(element => (
                    <div className="user" key={element.id} onClick={() => navigate(`${element.id}`)}>
                        <div className="user-card">
                                <div className="user--card__container" key={element.id}>
                                <h3>{element.name}</h3>
                                <p>
                                    <b>Email:</b> {element.email}
                                </p>
                                <p>
                                    <b>Phone:</b> {element.phone}
                                </p>
                                <p>
                                    <b>Website:</b> {element.website}
                                </p>
                            </div>
                        </div>
                    </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Home;