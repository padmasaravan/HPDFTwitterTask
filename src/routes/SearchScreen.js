import React, { Component } from 'react';
import { View, Text } from 'react-native';
import {Actions} from 'react-native-router-flux';
import  { StyleProvider, Container, Content, Header,Left, Body,Right, Item, Icon, Input, Button} from 'native-base';
import getTheme from '../../native-base-theme/components';
import commonColor from '../../native-base-theme/variables/commonColor.js';
import FooterComp from '../components/FooterComp';


class SearchScreen extends Component{
    constructor(props){
        super(props);

        this.goBack = this.goBack.bind(this);
        this.searchTwitter = this.searchTwitter.bind(this);
    }

    goBack(){
        console.log('Go back');
        Actions.home();
    }

    searchTwitter(){
        console.log('Search Twitter' );
    }

    render(){
        return(
            <StyleProvider style={getTheme(commonColor)} >
                <Container>
                    <Header searchBar >
                        <Left>
                            <Button transparent onPress={this.goBack} >
                                <Icon name='md-arrow-back' />
                            </Button>
                        </Left>
                        <Body>
                            <Item>
                                <Input placeholder='Search Twitter' />
                            </Item>
                        </Body>
                        <Right>
                            <Button transparent onPress={this.searchTwitter}>
                                    <Icon name='md-search' />
                            </Button>
                        </Right>
                    </Header>
                    <Content />
                    
                    <FooterComp />
                </Container>
            </StyleProvider>
        );
    }
}

export default SearchScreen;