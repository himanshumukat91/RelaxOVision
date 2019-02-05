
import { toast } from 'react-toastify';

class firebaseAPI {

    login = _ => {
        // FirebaseUI config.
        var uiConfig = {
            signInSuccessUrl: 'success',
            signInOptions: [
                window.firebase.auth.GoogleAuthProvider.PROVIDER_ID,
            ],
            privacyPolicyUrl: function () {
                window.location.assign('');
            }
        };

        //Initializing firebase
        window.ui.start('#firebaseui-auth-container', uiConfig);
    }

    logout = _ => {
        window.firebase.auth().signOut()
        .then(function () {
            window.location.reload();
        }, function () {
            alert('Sign Out Error');
        });
    }

    addToFavorites = (item) => {
        if (!window.firebaseUser) {
            toast.info("Please login first", { autoClose: 2000 });
            return;
        }
        let userRef = window.firebase.database().ref('/users/' + window.firebaseUser.uid + '/favorite');
        userRef.child(item.id).once('value', function (snapshot) {
            let temp = snapshot.val();
            if (temp) {
                userRef.child(item.id).set(null);
                toast.info("Successfully removed " + (item.title || item.id) + " from favorites", { autoClose: 2000 });
            }
            else {
                userRef.child(item.id).set(item);
                toast.success("Successfully added " + (item.title || item.id) + " to favorites", { autoClose: 2000 });
            }
        });
    }

    getFavorites = _ => {
        if (!window.firebaseUser) {
            // toast.info("Please login first", { autoClose: 2000 });
            return;
        }

        return new Promise((resolve, reject) => {
            let userRef = window.firebase.database().ref('/users/' + window.firebaseUser.uid + '/favorite');
            userRef.once('value', function (snapshot) {
                let favorites = snapshot.val();
                resolve(favorites);
            });
        })
    }

    likeItem = (item) => {
        //Show toast as maintaining separate likes doesnt make much sense. Will add unspalsh later
        toast.success("Add this to your Favorites and be able to see it later. It will encourage the artist even more :)", 
                     { autoClose: 5500 });
        return;
    }

}

let firebaseApi = new firebaseAPI();

export default firebaseApi;