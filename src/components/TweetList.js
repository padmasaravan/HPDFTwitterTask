import React, { Component } from 'react';
import {View, Text, ScrollView } from 'react-native';
import { Card, CardItem, CardImage, Left, Body, Right,Content, Container, Icon, Image, Thumbnail,
            Header, Button
        } from 'native-base';
import TweetDetail from './TweetDetail.js';
import images from '../images/Images.js';
import tweetData from './TweetData.js';

class TweetList extends Component{
    constructor(props){
        super(props);

        this.state = { 
            tweets: [] 
        };

        this.renderTweets = this.renderTweets.bind(this);
    }

    componentWillMount(){
        console.log('ComponentWillMount - tweetList')
        console.log('tweetData : '+tweetData);
        this.setState( { tweets: tweetData } );

    }

    renderTweets(){
        
        return this.state.tweets.map( tweet =>
             <TweetDetail key={tweet.userHandle} tweetData={tweet} />
        );
    }

    render(){
        return(
            <ScrollView>
                {this.renderTweets()}
            </ScrollView>
        );
    }

}

export default TweetList;