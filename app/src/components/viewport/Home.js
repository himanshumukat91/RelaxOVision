import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import IconButton from '@material-ui/core/IconButton';
import StarBorderIcon from '@material-ui/icons/StarBorder';

//Hardcoded data
let photos = [
  {
      "id": "BGD6lA_0kGs",
      "created_at": "2018-11-21T17:18:39-05:00",
      "updated_at": "2019-02-03T11:01:34-05:00",
      "width": 4480,
      "height": 6720,
      "color": "#0A1719",
      "description": "man sitting on concrete block",
      "urls": {
          "raw": "https://images.unsplash.com/photo-1542838686-37da4a9fd1b3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjU0NDA1fQ",
          "full": "https://images.unsplash.com/photo-1542838686-37da4a9fd1b3?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjU0NDA1fQ",
          "regular": "https://images.unsplash.com/photo-1542838686-37da4a9fd1b3?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjU0NDA1fQ",
          "small": "https://images.unsplash.com/photo-1542838686-37da4a9fd1b3?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjU0NDA1fQ",
          "thumb": "https://images.unsplash.com/photo-1542838686-37da4a9fd1b3?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&ixid=eyJhcHBfaWQiOjU0NDA1fQ"
      },
      "links": {
          "self": "https://api.unsplash.com/photos/BGD6lA_0kGs",
          "html": "https://unsplash.com/photos/BGD6lA_0kGs",
          "download": "https://unsplash.com/photos/BGD6lA_0kGs/download",
          "download_location": "https://api.unsplash.com/photos/BGD6lA_0kGs/download"
      },
      "categories": [],
      "sponsored": false,
      "sponsored_by": null,
      "sponsored_impressions_id": null,
      "likes": 100,
      "liked_by_user": false,
      "current_user_collections": [],
      "user": {
          "id": "iZHIQRFvbeI",
          "updated_at": "2019-02-03T13:42:46-05:00",
          "username": "kalvisuals",
          "name": "Kyle Loftus",
          "first_name": "Kyle",
          "last_name": "Loftus",
          "twitter_username": "kalvisuals",
          "portfolio_url": "https://www.kalvisuals.com",
          "bio": "The names Kal and visuals is the game, my passion is creating superior media content that inspires positive change. I live to create. I'm addicted to my craft and find myself never leaving the office. The world is my office. ",
          "location": "Orlando, FL",
          "links": {
              "self": "https://api.unsplash.com/users/kalvisuals",
              "html": "https://unsplash.com/@kalvisuals",
              "photos": "https://api.unsplash.com/users/kalvisuals/photos",
              "likes": "https://api.unsplash.com/users/kalvisuals/likes",
              "portfolio": "https://api.unsplash.com/users/kalvisuals/portfolio",
              "following": "https://api.unsplash.com/users/kalvisuals/following",
              "followers": "https://api.unsplash.com/users/kalvisuals/followers"
          },
          "profile_image": {
              "small": "https://images.unsplash.com/profile-1548644344578-830628df1eaa?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=32&w=32",
              "medium": "https://images.unsplash.com/profile-1548644344578-830628df1eaa?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=64&w=64",
              "large": "https://images.unsplash.com/profile-1548644344578-830628df1eaa?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=128&w=128"
          },
          "instagram_username": "kalvisuals",
          "total_collections": 0,
          "total_likes": 0,
          "total_photos": 271,
          "accepted_tos": true
      }
  },
  {
      "id": "rXXSIr8-f9w",
      "created_at": "2019-02-02T01:23:03-05:00",
      "updated_at": "2019-02-03T11:01:34-05:00",
      "width": 5936,
      "height": 3339,
      "color": "#F68F08",
      "description": null,
      "urls": {
          "raw": "https://images.unsplash.com/photo-1549088521-94b6502fec3d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjU0NDA1fQ",
          "full": "https://images.unsplash.com/photo-1549088521-94b6502fec3d?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjU0NDA1fQ",
          "regular": "https://images.unsplash.com/photo-1549088521-94b6502fec3d?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjU0NDA1fQ",
          "small": "https://images.unsplash.com/photo-1549088521-94b6502fec3d?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjU0NDA1fQ",
          "thumb": "https://images.unsplash.com/photo-1549088521-94b6502fec3d?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&ixid=eyJhcHBfaWQiOjU0NDA1fQ"
      },
      "links": {
          "self": "https://api.unsplash.com/photos/rXXSIr8-f9w",
          "html": "https://unsplash.com/photos/rXXSIr8-f9w",
          "download": "https://unsplash.com/photos/rXXSIr8-f9w/download",
          "download_location": "https://api.unsplash.com/photos/rXXSIr8-f9w/download"
      },
      "categories": [],
      "sponsored": false,
      "sponsored_by": null,
      "sponsored_impressions_id": null,
      "likes": 117,
      "liked_by_user": false,
      "current_user_collections": [],
      "user": {
          "id": "DbAkxxnIt5U",
          "updated_at": "2019-02-03T10:02:50-05:00",
          "username": "zetong",
          "name": "Zetong Li",
          "first_name": "Zetong",
          "last_name": "Li",
          "twitter_username": "Zetong_Li",
          "portfolio_url": "http://www.linkedin.com/in/zetong",
          "bio": "Originally from China, studied in Stanford, stayed in the Silicon Valley, now working on improving healthcare operations with Machine Learning and Software",
          "location": "Sunnyvale, California",
          "links": {
              "self": "https://api.unsplash.com/users/zetong",
              "html": "https://unsplash.com/@zetong",
              "photos": "https://api.unsplash.com/users/zetong/photos",
              "likes": "https://api.unsplash.com/users/zetong/likes",
              "portfolio": "https://api.unsplash.com/users/zetong/portfolio",
              "following": "https://api.unsplash.com/users/zetong/following",
              "followers": "https://api.unsplash.com/users/zetong/followers"
          },
          "profile_image": {
              "small": "https://images.unsplash.com/profile-fb-1546734508-d65fbb813662.jpg?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=32&w=32",
              "medium": "https://images.unsplash.com/profile-fb-1546734508-d65fbb813662.jpg?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=64&w=64",
              "large": "https://images.unsplash.com/profile-fb-1546734508-d65fbb813662.jpg?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=128&w=128"
          },
          "instagram_username": null,
          "total_collections": 0,
          "total_likes": 12,
          "total_photos": 19,
          "accepted_tos": true
      }
  },
  {
      "id": "STpIRHH7MCc",
      "created_at": "2018-11-21T17:18:39-05:00",
      "updated_at": "2019-02-02T14:02:06-05:00",
      "width": 6720,
      "height": 4480,
      "color": "#CF8D64",
      "description": "A person walks on a railway track wearing a pair of yellow Timberland boots",
      "urls": {
          "raw": "https://images.unsplash.com/photo-1542838686-ddebb563fef4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjU0NDA1fQ",
          "full": "https://images.unsplash.com/photo-1542838686-ddebb563fef4?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjU0NDA1fQ",
          "regular": "https://images.unsplash.com/photo-1542838686-ddebb563fef4?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjU0NDA1fQ",
          "small": "https://images.unsplash.com/photo-1542838686-ddebb563fef4?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjU0NDA1fQ",
          "thumb": "https://images.unsplash.com/photo-1542838686-ddebb563fef4?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&ixid=eyJhcHBfaWQiOjU0NDA1fQ"
      },
      "links": {
          "self": "https://api.unsplash.com/photos/STpIRHH7MCc",
          "html": "https://unsplash.com/photos/STpIRHH7MCc",
          "download": "https://unsplash.com/photos/STpIRHH7MCc/download",
          "download_location": "https://api.unsplash.com/photos/STpIRHH7MCc/download"
      },
      "categories": [],
      "sponsored": false,
      "sponsored_by": null,
      "sponsored_impressions_id": null,
      "likes": 153,
      "liked_by_user": false,
      "current_user_collections": [],
      "user": {
          "id": "iZHIQRFvbeI",
          "updated_at": "2019-02-03T13:42:46-05:00",
          "username": "kalvisuals",
          "name": "Kyle Loftus",
          "first_name": "Kyle",
          "last_name": "Loftus",
          "twitter_username": "kalvisuals",
          "portfolio_url": "https://www.kalvisuals.com",
          "bio": "The names Kal and visuals is the game, my passion is creating superior media content that inspires positive change. I live to create. I'm addicted to my craft and find myself never leaving the office. The world is my office. ",
          "location": "Orlando, FL",
          "links": {
              "self": "https://api.unsplash.com/users/kalvisuals",
              "html": "https://unsplash.com/@kalvisuals",
              "photos": "https://api.unsplash.com/users/kalvisuals/photos",
              "likes": "https://api.unsplash.com/users/kalvisuals/likes",
              "portfolio": "https://api.unsplash.com/users/kalvisuals/portfolio",
              "following": "https://api.unsplash.com/users/kalvisuals/following",
              "followers": "https://api.unsplash.com/users/kalvisuals/followers"
          },
          "profile_image": {
              "small": "https://images.unsplash.com/profile-1548644344578-830628df1eaa?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=32&w=32",
              "medium": "https://images.unsplash.com/profile-1548644344578-830628df1eaa?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=64&w=64",
              "large": "https://images.unsplash.com/profile-1548644344578-830628df1eaa?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=128&w=128"
          },
          "instagram_username": "kalvisuals",
          "total_collections": 0,
          "total_likes": 0,
          "total_photos": 271,
          "accepted_tos": true
      }
  },
  {
      "id": "A8-JCTMqZWY",
      "created_at": "2019-02-01T12:47:19-05:00",
      "updated_at": "2019-02-02T14:00:29-05:00",
      "width": 3364,
      "height": 4205,
      "color": "#C7D0EC",
      "description": null,
      "urls": {
          "raw": "https://images.unsplash.com/photo-1549043230-812b845237c5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjU0NDA1fQ",
          "full": "https://images.unsplash.com/photo-1549043230-812b845237c5?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjU0NDA1fQ",
          "regular": "https://images.unsplash.com/photo-1549043230-812b845237c5?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjU0NDA1fQ",
          "small": "https://images.unsplash.com/photo-1549043230-812b845237c5?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjU0NDA1fQ",
          "thumb": "https://images.unsplash.com/photo-1549043230-812b845237c5?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&ixid=eyJhcHBfaWQiOjU0NDA1fQ"
      },
      "links": {
          "self": "https://api.unsplash.com/photos/A8-JCTMqZWY",
          "html": "https://unsplash.com/photos/A8-JCTMqZWY",
          "download": "https://unsplash.com/photos/A8-JCTMqZWY/download",
          "download_location": "https://api.unsplash.com/photos/A8-JCTMqZWY/download"
      },
      "categories": [],
      "sponsored": false,
      "sponsored_by": null,
      "sponsored_impressions_id": null,
      "likes": 133,
      "liked_by_user": false,
      "current_user_collections": [],
      "user": {
          "id": "_5S_JZ83swg",
          "updated_at": "2019-02-03T14:47:15-05:00",
          "username": "petenathanson",
          "name": "Nathan Peterson",
          "first_name": "Nathan",
          "last_name": "Peterson",
          "twitter_username": null,
          "portfolio_url": null,
          "bio": "montana based photographer;\r\nInstagram: @petenathanson",
          "location": null,
          "links": {
              "self": "https://api.unsplash.com/users/petenathanson",
              "html": "https://unsplash.com/@petenathanson",
              "photos": "https://api.unsplash.com/users/petenathanson/photos",
              "likes": "https://api.unsplash.com/users/petenathanson/likes",
              "portfolio": "https://api.unsplash.com/users/petenathanson/portfolio",
              "following": "https://api.unsplash.com/users/petenathanson/following",
              "followers": "https://api.unsplash.com/users/petenathanson/followers"
          },
          "profile_image": {
              "small": "https://images.unsplash.com/profile-fb-1533582506-d88bf590b489.jpg?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=32&w=32",
              "medium": "https://images.unsplash.com/profile-fb-1533582506-d88bf590b489.jpg?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=64&w=64",
              "large": "https://images.unsplash.com/profile-fb-1533582506-d88bf590b489.jpg?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=128&w=128"
          },
          "instagram_username": "petenathanson",
          "total_collections": 0,
          "total_likes": 16,
          "total_photos": 27,
          "accepted_tos": true
      }
  },
  {
      "id": "hv_5eoyXz60",
      "created_at": "2019-02-01T12:50:25-05:00",
      "updated_at": "2019-02-02T14:00:24-05:00",
      "width": 2733,
      "height": 4092,
      "color": "#ECF1F3",
      "description": null,
      "urls": {
          "raw": "https://images.unsplash.com/photo-1549043032-8facc531c236?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjU0NDA1fQ",
          "full": "https://images.unsplash.com/photo-1549043032-8facc531c236?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjU0NDA1fQ",
          "regular": "https://images.unsplash.com/photo-1549043032-8facc531c236?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjU0NDA1fQ",
          "small": "https://images.unsplash.com/photo-1549043032-8facc531c236?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjU0NDA1fQ",
          "thumb": "https://images.unsplash.com/photo-1549043032-8facc531c236?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&ixid=eyJhcHBfaWQiOjU0NDA1fQ"
      },
      "links": {
          "self": "https://api.unsplash.com/photos/hv_5eoyXz60",
          "html": "https://unsplash.com/photos/hv_5eoyXz60",
          "download": "https://unsplash.com/photos/hv_5eoyXz60/download",
          "download_location": "https://api.unsplash.com/photos/hv_5eoyXz60/download"
      },
      "categories": [],
      "sponsored": false,
      "sponsored_by": null,
      "sponsored_impressions_id": null,
      "likes": 72,
      "liked_by_user": false,
      "current_user_collections": [],
      "user": {
          "id": "ZvFrIwtCnfI",
          "updated_at": "2019-02-03T14:47:53-05:00",
          "username": "beeford",
          "name": "Brandon Erlinger-Ford",
          "first_name": "Brandon",
          "last_name": "Erlinger-Ford",
          "twitter_username": "Beeeford",
          "portfolio_url": "http://instagram.com/eford.mov",
          "bio": "My name is Brandon Erlinger-Ford, i'm a freelance photographer that is readily available for hire. I specialize in concerts, lifestyle, and urban photography. If you would like to work please message me on instagram thats linked to the profile.",
          "location": "Edmonton",
          "links": {
              "self": "https://api.unsplash.com/users/beeford",
              "html": "https://unsplash.com/@beeford",
              "photos": "https://api.unsplash.com/users/beeford/photos",
              "likes": "https://api.unsplash.com/users/beeford/likes",
              "portfolio": "https://api.unsplash.com/users/beeford/portfolio",
              "following": "https://api.unsplash.com/users/beeford/following",
              "followers": "https://api.unsplash.com/users/beeford/followers"
          },
          "profile_image": {
              "small": "https://images.unsplash.com/profile-1508918636163-75775ace2409?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=32&w=32",
              "medium": "https://images.unsplash.com/profile-1508918636163-75775ace2409?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=64&w=64",
              "large": "https://images.unsplash.com/profile-1508918636163-75775ace2409?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=128&w=128"
          },
          "instagram_username": "eford.mov",
          "total_collections": 0,
          "total_likes": 4,
          "total_photos": 37,
          "accepted_tos": true
      }
  },
  {
      "id": "QiFwasMgYMA",
      "created_at": "2019-02-01T13:38:29-05:00",
      "updated_at": "2019-02-02T14:00:16-05:00",
      "width": 3829,
      "height": 2956,
      "color": "#0B0D10",
      "description": null,
      "urls": {
          "raw": "https://images.unsplash.com/photo-1549045162-47c36fadcf4f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjU0NDA1fQ",
          "full": "https://images.unsplash.com/photo-1549045162-47c36fadcf4f?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjU0NDA1fQ",
          "regular": "https://images.unsplash.com/photo-1549045162-47c36fadcf4f?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjU0NDA1fQ",
          "small": "https://images.unsplash.com/photo-1549045162-47c36fadcf4f?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjU0NDA1fQ",
          "thumb": "https://images.unsplash.com/photo-1549045162-47c36fadcf4f?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&ixid=eyJhcHBfaWQiOjU0NDA1fQ"
      },
      "links": {
          "self": "https://api.unsplash.com/photos/QiFwasMgYMA",
          "html": "https://unsplash.com/photos/QiFwasMgYMA",
          "download": "https://unsplash.com/photos/QiFwasMgYMA/download",
          "download_location": "https://api.unsplash.com/photos/QiFwasMgYMA/download"
      },
      "categories": [],
      "sponsored": false,
      "sponsored_by": null,
      "sponsored_impressions_id": null,
      "likes": 44,
      "liked_by_user": false,
      "current_user_collections": [],
      "user": {
          "id": "iwZV_aNTJhM",
          "updated_at": "2019-02-03T14:50:51-05:00",
          "username": "wildlittlethingsphoto",
          "name": "Helena Lopes",
          "first_name": "Helena",
          "last_name": "Lopes",
          "twitter_username": "lyrawhite",
          "portfolio_url": "https://www.instagram.com/helena_wlt/",
          "bio": "Mocha's human. Traveler. Procrastinator. Photographer at Wild Little Things, based in Belo Horizonte, Brazil. ",
          "location": "Belo Horizonte",
          "links": {
              "self": "https://api.unsplash.com/users/wildlittlethingsphoto",
              "html": "https://unsplash.com/@wildlittlethingsphoto",
              "photos": "https://api.unsplash.com/users/wildlittlethingsphoto/photos",
              "likes": "https://api.unsplash.com/users/wildlittlethingsphoto/likes",
              "portfolio": "https://api.unsplash.com/users/wildlittlethingsphoto/portfolio",
              "following": "https://api.unsplash.com/users/wildlittlethingsphoto/following",
              "followers": "https://api.unsplash.com/users/wildlittlethingsphoto/followers"
          },
          "profile_image": {
              "small": "https://images.unsplash.com/profile-1511590766996-5ef87789bdda?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=32&w=32",
              "medium": "https://images.unsplash.com/profile-1511590766996-5ef87789bdda?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=64&w=64",
              "large": "https://images.unsplash.com/profile-1511590766996-5ef87789bdda?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=128&w=128"
          },
          "instagram_username": "helena_wlt",
          "total_collections": 1,
          "total_likes": 0,
          "total_photos": 112,
          "accepted_tos": true
      }
  },
  {
      "id": "wI2Hafqr_f4",
      "created_at": "2019-02-01T13:45:57-05:00",
      "updated_at": "2019-02-02T14:00:13-05:00",
      "width": 4240,
      "height": 2608,
      "color": "#9BBDF1",
      "description": null,
      "urls": {
          "raw": "https://images.unsplash.com/photo-1549046675-dd779977de88?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjU0NDA1fQ",
          "full": "https://images.unsplash.com/photo-1549046675-dd779977de88?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjU0NDA1fQ",
          "regular": "https://images.unsplash.com/photo-1549046675-dd779977de88?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjU0NDA1fQ",
          "small": "https://images.unsplash.com/photo-1549046675-dd779977de88?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjU0NDA1fQ",
          "thumb": "https://images.unsplash.com/photo-1549046675-dd779977de88?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&ixid=eyJhcHBfaWQiOjU0NDA1fQ"
      },
      "links": {
          "self": "https://api.unsplash.com/photos/wI2Hafqr_f4",
          "html": "https://unsplash.com/photos/wI2Hafqr_f4",
          "download": "https://unsplash.com/photos/wI2Hafqr_f4/download",
          "download_location": "https://api.unsplash.com/photos/wI2Hafqr_f4/download"
      },
      "categories": [],
      "sponsored": false,
      "sponsored_by": null,
      "sponsored_impressions_id": null,
      "likes": 83,
      "liked_by_user": false,
      "current_user_collections": [],
      "user": {
          "id": "ZvFrIwtCnfI",
          "updated_at": "2019-02-03T14:47:53-05:00",
          "username": "beeford",
          "name": "Brandon Erlinger-Ford",
          "first_name": "Brandon",
          "last_name": "Erlinger-Ford",
          "twitter_username": "Beeeford",
          "portfolio_url": "http://instagram.com/eford.mov",
          "bio": "My name is Brandon Erlinger-Ford, i'm a freelance photographer that is readily available for hire. I specialize in concerts, lifestyle, and urban photography. If you would like to work please message me on instagram thats linked to the profile.",
          "location": "Edmonton",
          "links": {
              "self": "https://api.unsplash.com/users/beeford",
              "html": "https://unsplash.com/@beeford",
              "photos": "https://api.unsplash.com/users/beeford/photos",
              "likes": "https://api.unsplash.com/users/beeford/likes",
              "portfolio": "https://api.unsplash.com/users/beeford/portfolio",
              "following": "https://api.unsplash.com/users/beeford/following",
              "followers": "https://api.unsplash.com/users/beeford/followers"
          },
          "profile_image": {
              "small": "https://images.unsplash.com/profile-1508918636163-75775ace2409?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=32&w=32",
              "medium": "https://images.unsplash.com/profile-1508918636163-75775ace2409?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=64&w=64",
              "large": "https://images.unsplash.com/profile-1508918636163-75775ace2409?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=128&w=128"
          },
          "instagram_username": "eford.mov",
          "total_collections": 0,
          "total_likes": 4,
          "total_photos": 37,
          "accepted_tos": true
      }
  },
  {
      "id": "JpEkeb_s1II",
      "created_at": "2019-02-01T18:41:14-05:00",
      "updated_at": "2019-02-02T13:59:02-05:00",
      "width": 4000,
      "height": 6000,
      "color": "#5F4835",
      "description": null,
      "urls": {
          "raw": "https://images.unsplash.com/photo-1549064464-87c30b51c927?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjU0NDA1fQ",
          "full": "https://images.unsplash.com/photo-1549064464-87c30b51c927?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjU0NDA1fQ",
          "regular": "https://images.unsplash.com/photo-1549064464-87c30b51c927?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjU0NDA1fQ",
          "small": "https://images.unsplash.com/photo-1549064464-87c30b51c927?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjU0NDA1fQ",
          "thumb": "https://images.unsplash.com/photo-1549064464-87c30b51c927?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&ixid=eyJhcHBfaWQiOjU0NDA1fQ"
      },
      "links": {
          "self": "https://api.unsplash.com/photos/JpEkeb_s1II",
          "html": "https://unsplash.com/photos/JpEkeb_s1II",
          "download": "https://unsplash.com/photos/JpEkeb_s1II/download",
          "download_location": "https://api.unsplash.com/photos/JpEkeb_s1II/download"
      },
      "categories": [],
      "sponsored": false,
      "sponsored_by": null,
      "sponsored_impressions_id": null,
      "likes": 18,
      "liked_by_user": false,
      "current_user_collections": [],
      "user": {
          "id": "NQGWkkC7KjE",
          "updated_at": "2019-02-02T19:28:11-05:00",
          "username": "multamedia",
          "name": "Bradley",
          "first_name": "Bradley",
          "last_name": "",
          "twitter_username": "multa_media",
          "portfolio_url": "http://multamedia.com",
          "bio": "instagram.com/multamedia",
          "location": "United States",
          "links": {
              "self": "https://api.unsplash.com/users/multamedia",
              "html": "https://unsplash.com/@multamedia",
              "photos": "https://api.unsplash.com/users/multamedia/photos",
              "likes": "https://api.unsplash.com/users/multamedia/likes",
              "portfolio": "https://api.unsplash.com/users/multamedia/portfolio",
              "following": "https://api.unsplash.com/users/multamedia/following",
              "followers": "https://api.unsplash.com/users/multamedia/followers"
          },
          "profile_image": {
              "small": "https://images.unsplash.com/profile-1545935895933-b793f51b6959?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=32&w=32",
              "medium": "https://images.unsplash.com/profile-1545935895933-b793f51b6959?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=64&w=64",
              "large": "https://images.unsplash.com/profile-1545935895933-b793f51b6959?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=128&w=128"
          },
          "instagram_username": "multamedia",
          "total_collections": 14,
          "total_likes": 1149,
          "total_photos": 48,
          "accepted_tos": true
      }
  },
  {
      "id": "KQAPIQUatqI",
      "created_at": "2019-02-01T10:07:55-05:00",
      "updated_at": "2019-02-02T13:58:35-05:00",
      "width": 6000,
      "height": 4000,
      "color": "#030C17",
      "description": null,
      "urls": {
          "raw": "https://images.unsplash.com/photo-1549033670-4ba3017b1c61?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjU0NDA1fQ",
          "full": "https://images.unsplash.com/photo-1549033670-4ba3017b1c61?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjU0NDA1fQ",
          "regular": "https://images.unsplash.com/photo-1549033670-4ba3017b1c61?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjU0NDA1fQ",
          "small": "https://images.unsplash.com/photo-1549033670-4ba3017b1c61?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjU0NDA1fQ",
          "thumb": "https://images.unsplash.com/photo-1549033670-4ba3017b1c61?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&ixid=eyJhcHBfaWQiOjU0NDA1fQ"
      },
      "links": {
          "self": "https://api.unsplash.com/photos/KQAPIQUatqI",
          "html": "https://unsplash.com/photos/KQAPIQUatqI",
          "download": "https://unsplash.com/photos/KQAPIQUatqI/download",
          "download_location": "https://api.unsplash.com/photos/KQAPIQUatqI/download"
      },
      "categories": [],
      "sponsored": false,
      "sponsored_by": null,
      "sponsored_impressions_id": null,
      "likes": 41,
      "liked_by_user": false,
      "current_user_collections": [],
      "user": {
          "id": "ogQykx6hk_c",
          "updated_at": "2019-02-03T13:50:33-05:00",
          "username": "pawel_czerwinski",
          "name": "Paweł Czerwiński",
          "first_name": "Paweł",
          "last_name": "Czerwiński",
          "twitter_username": null,
          "portfolio_url": null,
          "bio": "World in my eyes",
          "location": null,
          "links": {
              "self": "https://api.unsplash.com/users/pawel_czerwinski",
              "html": "https://unsplash.com/@pawel_czerwinski",
              "photos": "https://api.unsplash.com/users/pawel_czerwinski/photos",
              "likes": "https://api.unsplash.com/users/pawel_czerwinski/likes",
              "portfolio": "https://api.unsplash.com/users/pawel_czerwinski/portfolio",
              "following": "https://api.unsplash.com/users/pawel_czerwinski/following",
              "followers": "https://api.unsplash.com/users/pawel_czerwinski/followers"
          },
          "profile_image": {
              "small": "https://images.unsplash.com/profile-1532466997843-88fe931a8056?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=32&w=32",
              "medium": "https://images.unsplash.com/profile-1532466997843-88fe931a8056?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=64&w=64",
              "large": "https://images.unsplash.com/profile-1532466997843-88fe931a8056?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=128&w=128"
          },
          "instagram_username": null,
          "total_collections": 3,
          "total_likes": 6890,
          "total_photos": 364,
          "accepted_tos": true
      }
  },
  {
      "id": "IkItz2V-ZUY",
      "created_at": "2019-02-01T10:13:54-05:00",
      "updated_at": "2019-02-02T13:58:30-05:00",
      "width": 4480,
      "height": 5600,
      "color": "#F7CBAB",
      "description": null,
      "urls": {
          "raw": "https://images.unsplash.com/photo-1549033990-879289266301?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjU0NDA1fQ",
          "full": "https://images.unsplash.com/photo-1549033990-879289266301?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjU0NDA1fQ",
          "regular": "https://images.unsplash.com/photo-1549033990-879289266301?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjU0NDA1fQ",
          "small": "https://images.unsplash.com/photo-1549033990-879289266301?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjU0NDA1fQ",
          "thumb": "https://images.unsplash.com/photo-1549033990-879289266301?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&ixid=eyJhcHBfaWQiOjU0NDA1fQ"
      },
      "links": {
          "self": "https://api.unsplash.com/photos/IkItz2V-ZUY",
          "html": "https://unsplash.com/photos/IkItz2V-ZUY",
          "download": "https://unsplash.com/photos/IkItz2V-ZUY/download",
          "download_location": "https://api.unsplash.com/photos/IkItz2V-ZUY/download"
      },
      "categories": [],
      "sponsored": false,
      "sponsored_by": null,
      "sponsored_impressions_id": null,
      "likes": 103,
      "liked_by_user": false,
      "current_user_collections": [],
      "user": {
          "id": "bh0KMvU2nMA",
          "updated_at": "2019-02-03T14:37:17-05:00",
          "username": "zhuzhutrain",
          "name": "Zhu Hongzhi",
          "first_name": "Zhu",
          "last_name": "Hongzhi",
          "twitter_username": "mrpoppycock97",
          "portfolio_url": null,
          "bio": "Based in Singapore\r\nUrban | Landscapes | Aerials",
          "location": "Singapore",
          "links": {
              "self": "https://api.unsplash.com/users/zhuzhutrain",
              "html": "https://unsplash.com/@zhuzhutrain",
              "photos": "https://api.unsplash.com/users/zhuzhutrain/photos",
              "likes": "https://api.unsplash.com/users/zhuzhutrain/likes",
              "portfolio": "https://api.unsplash.com/users/zhuzhutrain/portfolio",
              "following": "https://api.unsplash.com/users/zhuzhutrain/following",
              "followers": "https://api.unsplash.com/users/zhuzhutrain/followers"
          },
          "profile_image": {
              "small": "https://images.unsplash.com/profile-1542115986280-afc14381c9b5?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=32&w=32",
              "medium": "https://images.unsplash.com/profile-1542115986280-afc14381c9b5?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=64&w=64",
              "large": "https://images.unsplash.com/profile-1542115986280-afc14381c9b5?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=128&w=128"
          },
          "instagram_username": "pig.torial",
          "total_collections": 0,
          "total_likes": 0,
          "total_photos": 105,
          "accepted_tos": true
      }
  }
];


const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    width: '100%',
    height: '100%',
    transform: 'translateZ(0)',
  },
  titleBar: {
    background:
      'linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, ' +
      'rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
  },
  icon: {
    color: 'white',
  },
});


class Home extends React.Component{

  state = {
    tileData: []
  }

  componentDidMount(){
    //Network fetch. Using hardcoded data right now
    let photoData = photos.map(photo => {
      return ({
        img: photo['urls']['regular'],
        title: photo['id'],
        author: photo['user']['username'],
        featured: (photo['likes']>100?true:false), 
      })
    });

    this.setState({tileData: photoData});
    
  }

  render() {
    return (
      <div className={this.props.classes.root}>
        <GridList cellHeight={400} spacing={1} className={this.props.classes.gridList}>
          {this.state.tileData.map(tile => (
            <GridListTile key={tile.img} cols={tile.featured ? 2 : 1} rows={tile.featured ? 2 : 1}>
              <img src={tile.img} alt={tile.title} />
              <GridListTileBar
                title={tile.title}
                titlePosition="top"
                actionIcon={
                  <IconButton className={this.props.classes.icon}>
                    <StarBorderIcon />
                  </IconButton>
                }
                actionPosition="left"
                className={this.props.classes.titleBar}
              />
            </GridListTile>
          ))}
        </GridList>
      </div>
    );
  }

}

Home.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Home);