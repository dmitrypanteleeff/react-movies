import React from "react";

class TypeFilm extends React.Component {
    state = {
        search: '',
        typeOfFilm:'',
    }
    handleChange = (event) => {
        this.setState({[event.target.name]:event.target.value})
    }

    render() {
        return (
            {/* 
            <div>
            
            <form action="#" className="search__type">
                 <p>
                    <label>
                        <input 
                            className="with-gap" 
                            name="typeOfFilm" 
                            type="radio" 
                            
                            value="all" 
                            onChange={this.handleChange}
                            checked = {this.state.typeOfFilm === 'all'}
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
                            checked = {this.state.typeOfFilm === 'movie'}
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
                            checked = {this.state.typeOfFilm === 'series'}
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
                            
                            value="episode" 
                            onChange={this.handleChange}
                            checked = {this.state.typeOfFilm === 'episode'}
                        />
                        <span>episode</span>
                    </label>
                </p>
            </form>
            </div>
            
            */} 
        )
    }
}

export default TypeFilm