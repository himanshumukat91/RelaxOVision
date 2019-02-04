import Unsplash, { toJson } from "unsplash-js";
import config from '../config.js';

class User {
    constructor(){
        this.unsplash = new Unsplash({
            applicationId: config.UNSPLASH_ACCESS_KEY,
            secret: config.UNSPLASH_SECRET_KEY,
            callbackUrl: config.CALLBACK_URL
        });   
    }

    loginRedirect = () => {
        const authenticationUrl = this.unsplash.auth.getAuthenticationUrl([
            "public",
            "read_user",
            "write_user",
            "read_photos",
            "write_photos"
          ]);
        window.location.href = authenticationUrl;
    };

    saveUserToken = (oauthCode) => {
        let scope = this;
        this.unsplash.auth.userAuthentication(oauthCode)
        .then(toJson)
        .then(json => {
            debugger;
            scope.unsplash.auth.setBearerToken(json.access_token);
            scope.getUserProfile();
        });
    }
    
    getUserProfile = () => {
        return new Promise((resolve, reject) => {
            this.unsplash.currentUser.profile()
            .then(toJson)
            .then(json => {
                debugger;
                this.userDetais = json;
                resolve(json);
            });
        })
    }
    
    updateUserProfile = (data) => {
        return new Promise((resolve, reject) => {
            this.unsplash.currentUser.updateProfile({
                username: data.username || "",
                firstName: data.firstName || "",
                lastName: data.lastName || "",
                email: data.email || "",
                url: data.url || "",
                location: data.location || "",
                bio: data.bio || "",
                instagramUsername: data.instagramUsername || "",
            })
            .then(toJson)
            .then(json => {
                resolve('success');
            });
        })
    }
    
    getUserLikes = () => {
    
    }
    
    listPhotos = () => {
        return new Promise((resolve, reject) => {
            this.unsplash.photos.listPhotos(Math.round(Math.random()*20), 20, "latest")
            .then(toJson)
            .then(json => {
                resolve(json);
            });
        })
    }
    
    getPhoto = (id) => {
        return new Promise((resolve, reject) => {
            this.unsplash.photos.getPhoto(id, 1920, 1080, [0, 0, 1920, 1080])
            .then(toJson)
            .then(json => {
                resolve(json);
            });
        })
    }
    
    searchPhotos = (text="") => {
        return new Promise((resolve, reject) => {
            this.unsplash.search.photos(text, 1)
            .then(toJson)
            .then(json => {
                resolve(json.results);
            });
        })
    }    
}

let user = new User();

export default user;






