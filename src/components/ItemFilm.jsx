export function ItemFilm (props) {
    // console.log('props',props)
    const {title, year, imdbID, type, poster} = props;
        return (
            <div className="row">
                <div className="col s12 m6">
                    <div className="card card-item" data-filmId={imdbID}>
                        <div className="card-image card-image-container">
                            {
                                /* https://via.placeholder.com/468x60?text=Visit+Blogging.com+Now */
                                poster === 'N/A' ? 
                                    <img className="card-image-item" src={`https://via.placeholder.com/300x350?text=${title}`}/>
                                    :
                                    <img className="card-image-item" src={poster} />

                            }
                            
                        </div>
                        <div className="card-content">
                            <div><p>{title}</p></div>
                            <div className="card__info">
                                <p>
                                    {year}
                                </p>
                                <p>
                                    {type}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
}
