'use client'
import { useEffect, useState } from "react";
import { getDirectors } from "../../services/directorService";
import { Director } from "../../models/director";

export default function DirectorsPage() {
    const [directors, setDirectors] = useState<Director[]>();

    useEffect(() => {
        const fetchDirectors = async () => {
            const data = await getDirectors();
            setDirectors(data);
        };
        fetchDirectors();
    }, []);

    return (
        <div>
            <h1>Directors</h1>
            <ul>
                {directors && directors.map(director => (
                    <li key={director.id}>
                        <span>
                            <p>{director.firstName}</p>
                            <p>{director.lastName}</p>
                            - - - - - - - - - - - - - - - - 
                        </span>
                    </li>
                ))}
            </ul>
        </div>
    );
};
