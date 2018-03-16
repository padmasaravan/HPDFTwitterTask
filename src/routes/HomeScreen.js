import React, { Component } from 'react';
import { View, Text } from 'react-native';

import { Header, Left, Right, Body, Title, Container, Content,Tab, Tabs, TabHeading ,Button, Icon,
            StyleProvider, Thumbnail, Drawer
        } from 'native-base';

import { Actions } from 'react-native-router-flux';

import getTheme from '../../native-base-theme/components';
import commonColor from '../../native-base-theme/variables/commonColor.js';
import images from '../images/Images.js';
import SideBar from '../components/ProfileMenu.js';
import FooterComp from '../components/FooterComp';


import TweetList from '../components/TweetList';


class HomeScreen extends Component{
    constructor(props){
        super(props);

        this.navigateTabs = this.navigateTabs.bind(this);
        this.openProfileMenu = this.openProfileMenu.bind(this);
        this.closeProfileMenu = this.closeProfileMenu.bind(this);
    }

    openProfileMenu(){
        console.log('Profile button - clicked');
        this._drawer._root.open();
    }

    closeProfileMenu(){
        this._drawer._root.close()
    }
   

    navigateTabs(i, ref, from){

        console.log(i);
        switch(i){
            case 0:
                return Actions.home();
            case 1:
                return Actions.search();
            case 2:
            case 3:
        }
       
    }

    render(){
        return(
            <Drawer
                ref={(ref) => { this._drawer = ref; }}
                content={<SideBar navigator={this._navigator} />}
                onClose={() => this.closeProfileMenu()} >

                <StyleProvider style={getTheme(commonColor)} >
                    <Container>
                        <Header hasTabs >
                            <Left>
                                <Button transparent onPress={this.openProfileMenu} >
                                    <Thumbnail small source={ images.profile} />
                                </Button>
                            </Left>
                            <Body>
                                <Title>Home</Title>
                            </Body>
                            <Right />
                            
                        </Header>
                        <Tabs onChangeTab={({ i, ref, from })=> this.navigateTabs(i,ref, from)}>
                            <Tab heading={ <TabHeading><Icon name='md-home'/></TabHeading> } >
                                <TweetList />
                            </Tab>
                            <Tab heading={ <TabHeading><Icon name='md-search'/></TabHeading> } />
                            <Tab heading={ <TabHeading><Icon name='md-notifications'/></TabHeading> } />
                            <Tab heading={ <TabHeading><Icon name='md-mail'/></TabHeading> } />
                        </Tabs>
                        <FooterComp />
                    
                    </Container>
                </StyleProvider>
            </Drawer>
        );
    }
}

export default HomeScreen;