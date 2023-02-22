import React from "react";
import MoviesData from "./MoviesData";

const Movies = () => {
    return (

        <>
            <div className="container">

                <div className="row">

                    {

                        MoviesData.map((cval) => {

                            return (

                                <>

                                    <div className="col-md-4 mt-5">

                                        <div class="card" style={{ width: '18rem' }}>
                                            <img src={cval.cover} class="card-img-top" alt="..." />
                                            <div class="card-body">
                                                <h5 class="card-title">{cval.movies}</h5>
                                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                                <a href={cval.link} class="btn btn-primary">WAtch Now</a>
                                            </div>
                                        </div>
                                    </div>




                                </>

                            );
                        })

                    }

                </div>

            </div>
        </>
    )
}

export default Movies;