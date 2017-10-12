import React from 'react';
import axios from 'axios';
import {
    getUserData,
    fetchPopularRepos
} from './GitHubApi';

class Model {
	constructor () {
        this.notify = null;
        this.users = [];
        this.playerOne = null;
        this.playerTwo = null;
        this.infoPlayerOne = null;
    }
    subscribe (render) {
		this.notify = render;
	}    
    getPlayerOne(nameOne){
        this.playerOne = nameOne.target.value;
     
        this.notify();
    }
    getPlayerTwo(nameTwo){
        this.playerTwo = nameTwo.target.value;
        this.notify();
    }
	getInformation(e, player){
        e.preventDefault();
        getUserData(player).then((result) => {
            this.infoPlayerOne = result;
        }); 
        console.log(this.playerOne);
        if(this.infoPlayerOne!=null){
            console.log(this.infoPlayerOne.profile.login);
        }
        
    }
}


// const lang = 'JavaScript';
// fetchPopularRepos(lang).then( (repos) => {
//    console.log ("repos:", repos);
//   this.setState(function () {
//     return {
//       repos: repos
//     }
//   });
// });


export default Model;