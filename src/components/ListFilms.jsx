import { ItemFilm } from './ItemFilm';

export function ListFilms(props) {
    // console.log('Список своств ListFilms', props)
    const { listOfFilms = [] } = props;
    return (
        <div className="card-image-wrapper">
            {listOfFilms.length
                ? listOfFilms.map((itemFilm) => (
                      <ItemFilm
                          key={itemFilm.imdbID}
                          title={itemFilm.Title}
                          year={itemFilm.Year}
                          imdbID={itemFilm.imdbID}
                          type={itemFilm.Type}
                          poster={itemFilm.Poster}
                      />
                  ))
                : <h4>Ничего не найдено. Попробуйте найти что-то другое</h4>
            }
        </div>
    );
}
