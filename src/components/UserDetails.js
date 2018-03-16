import React, { Component } from 'react';
import { View, Text , Image} from 'react-native';
import {List, ListItem, Icon, Thumbnail, Body, Left, Right, StyleProvider} from 'native-base';
import images from '../images/Images.js';
import getTheme from '../../native-base-theme/components';
import commonColor from '../../native-base-theme/variables/commonColor.js';


class UserDetails extends Component{
    constructor(props){
        super(props);
        
        this.state = {
            proPic: images.profile,
            userName: 'Padmavathy Balasundararaj',
            userHandle: '@padmasaravan',
            following: 234,
            followers: 567,
        };
    }

    componentDidMount(){
        if (!this.props.userName)
            return;
        
        this.setState({
            proPic: this.props.proPic,
            userName: this.props.userName,
            userHandle: this.props.userHandle,
            following: this.props.following,
            followers: this.props.followers
        });
    }


    render(){
        console.log('Userdetails');
        
        return(
            
                <View>
                    <ListItem itemHeader first style={{ paddingBottom: 0}}>
                        <Thumbnail source={this.state.proPic} />
                    </ListItem>
                    <ListItem noBorder style={{ paddingBottom: 0, paddingTop: 3}} >
                        <Body>
                            <Text style={styles.userNameStyle}>{this.state.userName}</Text>
                        </Body>
                        <Right>
                            <Icon name='md-arrow-dropdown' style={{color:'#0383FA'}} />
                        </Right>
                    </ListItem>
                    <ListItem noBorder style={{paddingBottom: 5, paddingTop: 4}} >
                        <Text style={styles.userHandleStyle}>{this.state.userHandle}</Text>
                    </ListItem>
                    <ListItem>
                        <Text style={styles.followNumber} >{this.state.following}</Text>
                        <Text style={styles.followText} >Following</Text>
                        <Text style={styles.followNumber} >{this.state.followers}</Text>
                        <Text  style={styles.followText}  >Followers</Text>
                        
                    </ListItem>
            </View>
           
        );
    }
}

export default UserDetails;

const styles = {
    userNameStyle:{
        fontWeight: 'bold',
        fontSize: 17,
        color: 'black'
        
    },
    userHandleStyle:{
       fontSize: 15,
    },
    followText: {
        fontSize: 18,
        paddingRight: 10,
    },

    followNumber: {
        paddingRight: 6, 
        color: 'black',
        fontSize: 17,
        fontWeight: 'bold',
    },
   
};

