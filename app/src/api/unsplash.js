import Unsplash, { toJson } from "unsplash-js";
import config from '../config.js';

const unsplash = new Unsplash({
    applicationId: config.UNSPLASH_ACCESS_KEY,
    secret: config.UNSPLASH_SECRET_KEY,
    callbackUrl: config.CALLBACK_URL
  });

// const unsplash = new Unsplash({
//     applicationId: '5d908c68b54987d9ae82174426f87a7eb821baae8a5b1ca24dc486b1092018fc',
//     secret: '496344b032105316abf1561d4c6515c40bba1b71fa8dbf485c11a60f5ac51724',
//     callbackUrl: 'https://relaxovision/signInSuccess'
// });

let listPhotos = () => {
    return new Promise((resolve, reject) => {
        unsplash.photos.listPhotos(Math.round(Math.random()*20), 15, "latest")
        .then(toJson)
        .then(json => {
            resolve(json);
        });
    })
}

let getPhoto = (id) => {
    return new Promise((resolve, reject) => {
        unsplash.photos.getPhoto(id, 1920, 1080, [0, 0, 1920, 1080])
        .then(toJson)
        .then(json => {
            resolve(json);
        });
    })
}

let searchPhotos = (text) => {
    return new Promise((resolve, reject) => {
        unsplash.search.photos(text, 1)
        .then(toJson)
        .then(json => {
            resolve(json.results);
        });
    })
}

export default {
    listPhotos      : listPhotos,
    getPhoto        : getPhoto, 
    searchPhotos    : searchPhotos
}






