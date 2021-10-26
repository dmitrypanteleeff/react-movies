
import {ListFilms} from "../components/ListFilms"
import React from "react"
import Preloader from "../components/Preloader";
import SearchFilm from "../components/SearchFilm";
// import TypeFilm from "../components/TypeFilm";

const API_KEY = process.env.REACT_APP_API_KEY;

class Main extends React.Component {
    state = {
        filmList: [],
        loading: false,
        totalResults: '',    
    }
    componentDidMount() {
        this.setState({loading:true});
        fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&s=matrix&type=`)
            .then(response => response.json())

            .then(data => {
                return new Promise((resolve,reject)=>{
                console.log('data.Search', data.Search);
                let dataFilms = data.Search;
                let totalResults = data.totalResults;
                this.setState({filmList:dataFilms, loading: false, totalResults: totalResults })
                // console.log('э',this.state.filmList)
                resolve(this.setState({filmList:dataFilms, loading: false, totalResults: totalResults }))
                })
            })
    }
    loadFilms = (nameOfFilm,typeOfFilm) => {
        console.log('Кликнул');
        this.setState({loading:true});
        fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&s=${nameOfFilm}${typeOfFilm !== '' ? `&type=${typeOfFilm}` : ''}`)
            .then(response => response.json())
            // .then(data => this.setState({filmList:data.Search, loading: false, totalResults: data.totalResults}))
            // .then(data => console.log(data.Search))

            .then(data => {
                return new Promise((resolve,reject)=>{
                // console.log('data.Search', data.Search);
                let dataFilms = data.Search;
                let totalResults = data.totalResults;
                this.setState({filmList:dataFilms, loading: false, totalResults: totalResults })
                // console.log('э',this.state.filmList)
                resolve(this.setState({filmList:dataFilms, loading: false, totalResults: totalResults }))
                })
            })
            
            // .then(data => {
            //     return new Promise((resolve,reject)=>{
            //     console.log('data', data)
            //     resolve(data)
            //     })
            // })
    }
    render(){
        return (
            <>
            
            <main className="content container">
                <SearchFilm loadFilms={this.loadFilms}/>


                {/*
                <TypeFilm typeOfFilm={this.state.typeOfFilm} />

                 
                <button onClick={this.loadFilms}>
                    Подгрузить
                </button> 
                */}
                
                
                {
                    this.state.loading ? 
                    <Preloader /> : 
                    <ListFilms listOfFilms={this.state.filmList} />
                }
                {/*<ListFilms filmList={this.state.filmList} /> */}
            </main>
            </>
        )
    }
    
}

export default Main