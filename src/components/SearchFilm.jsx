import React from 'react';

class SearchFilm extends React.Component {
    constructor(props) {
        super();
        console.log('props from', props);
        console.log(props.loadFilms);
    }
    state = {
        search: '',
        typeOfFilm: '',
    };
    searchCurrentFilm = () => {
        // console.log(this.state.search);
        this.props.loadFilms(this.state.search, this.state.typeOfFilm);
    };
    handleChange = (event) => {
        this.setState({ [event.target.name]: event.target.value });
    };
    handleKey = (event) => {
        if (event.key === 'Enter') {
            this.searchCurrentFilm();
        }
    };
    render() {
        return (
            <div className="search__container">
                <div className="search__wrapper">
                    <input
                        placeholder="Ищу фильм..."
                        type="search"
                        value={this.state.search}
                        onChange={(event) =>
                            this.setState({ search: event.target.value })
                        }
                        onKeyDown={this.handleKey}
                    />
                    <a
                        className="waves-effect waves-light btn search__btn"
                        onClick={this.searchCurrentFilm}
                    >
                        Поиск
                    </a>
                </div>

                <div className="search__type">
                    <p>
                        <label>
                            <input
                                className="with-gap"
                                name="typeOfFilm"
                                type="radio"
                                value=""
                                onChange={this.handleChange}
                                checked={this.state.typeOfFilm === ''}
                            />
                            <span>all</span>
                        </label>
                    </p>
                    <p>
                        <label>
                            <input
                                className="with-gap"
                                name="typeOfFilm"
                                type="radio"
                                value="movie"
                                onChange={this.handleChange}
                                checked={this.state.typeOfFilm === 'movie'}
                            />
                            <span>movie</span>
                        </label>
                    </p>
                    <p>
                        <label>
                            <input
                                className="with-gap"
                                name="typeOfFilm"
                                type="radio"
                                value="series"
                                onChange={this.handleChange}
                                checked={this.state.typeOfFilm === 'series'}
                            />
                            <span>series</span>
                        </label>
                    </p>
                    <p>
                        <label>
                            <input
                                className="with-gap"
                                name="typeOfFilm"
                                type="radio"
                                value="game"
                                onChange={this.handleChange}
                                checked={this.state.typeOfFilm === 'game'}
                            />
                            <span>game</span>
                        </label>
                    </p>
                </div>
            </div>
        );
    }
}

export default SearchFilm;
