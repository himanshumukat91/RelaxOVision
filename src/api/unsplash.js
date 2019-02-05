import Unsplash, { toJson } from "unsplash-js";
import config from '../config.js';

class UnsplashUserAPI {
    constructor(){
        this.unsplash = new Unsplash({
            applicationId: config.UNSPLASH_ACCESS_KEY,
            secret: config.UNSPLASH_SECRET_KEY,
            callbackUrl: config.CALLBACK_URL
        });   
    }

    listPhotos = () => {
        return new Promise((resolve, reject) => {
            this.unsplash.photos.listPhotos(Math.round(Math.random()*20), 20, "latest")
            .then(toJson)
            .then(json => {
                resolve(json);
            })
            .catch(err =>{
                console.log(err);
            });
        })
    }
    
    getPhoto = (id) => {
        return new Promise((resolve, reject) => {
            this.unsplash.photos.getPhoto(id, 1920, 1080, [0, 0, 1920, 1080])
            .then(toJson)
            .then(json => {
                resolve(json);
            })
            .catch(err =>{
                console.log(err);
            });;
        })
    }
    
    searchPhotos = (text="") => {
        return new Promise((resolve, reject) => {
            this.unsplash.search.photos(text, 1)
            .then(toJson)
            .then(json => {
                resolve(json.results);
            })
            .catch(err =>{
                console.log(err);
            });;
        })
    } 

    downloadPhoto = (id) => {
        this.unsplash.photos.getPhoto(id)
        .then(toJson)
        .then(json => {
            this.unsplash.photos.downloadPhoto(json);
        })
        .catch((err) =>{
            console.log(err);
        });;
    }

    // 50 hits limit is too annoying. Shifting to firebase for user and bookmark functionality.
}

let userAPI = new UnsplashUserAPI();

export default userAPI;






