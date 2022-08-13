import { useFetchGifs } from "../hooks/useFetchGifs";
import { GrifItem } from "./GrifItem";

export const GifGrid = ({ category }) => {

    const { images, isLoading } = useFetchGifs( category );



    return (
        <>
            <h3>{category}</h3>

            {
                isLoading && ( <h2>Cargando...</h2> )
            }

            <div className="card-grid">
                {
                    images.map( (img) => (
                        <GrifItem 
                            key={ img.id }
                            { ...img }
                        />
                    ))
                }
            </div>

        </>
    )
}
