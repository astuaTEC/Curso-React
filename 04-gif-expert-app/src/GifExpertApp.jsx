import { useState } from "react";

export const GifExpertApp = () => {
    
    const [categories, setCategories] = useState([ 'One Punch', 'Dragon Ball' ]);

    return (
        <>
            {/* titulo */}
            <h1>GifExpertApp</h1>

            {/* input */}

            {/* Listado de Gif */}

            <ol>
                { categories.map(category => {
                    return <li key={ category }> {category} </li>
                }) }

            </ol>

        </>
    );
}
