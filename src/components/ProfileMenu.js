import React, { Component } from 'react';
import { View, Text,StyleSheet } from 'react-native';
import { Container, Content, Header, List, ListItem, Icon, Left, Body, Right,Footer} from 'native-base';
import UserDetails from './UserDetails';
import DrawerFooter from './DrawerFooter';

class ProfileMenu extends Component{
    constructor(props){
        super(props);
    }

    render(){
        console.log('Profile Menu');
        return(
            <Container style={styles.container}>
                <Content>
                        <UserDetails />
                        <List>
                            <ListItem noBorder >
                                   <Icon name='md-contact'  style={styles.listIconStyle} /><Text style={styles.listItemsStyle} >Profile</Text>
                            </ListItem>
                            <ListItem noBorder >
                                   <Icon name='md-list-box'  style={styles.listIconStyle} /><Text style={styles.listItemsStyle} >Lists</Text>
                            </ListItem>
                            <ListItem noBorder >
                                   <Icon name='md-flash'  style={styles.listIconStyle} /><Text style={styles.listItemsStyle} >Moments</Text>
                            </ListItem>
                            <ListItem>
                                   <Icon name='md-albums'  style={styles.listIconStyle} /><Text style={styles.listItemsStyle} >Highlights</Text>
                            </ListItem>
                            <ListItem noBorder style={{paddingBottom: 20, paddingTop: 30}}>
                                   <Text style={styles.listItemsStyle} >Settings and privacy</Text>
                            </ListItem>
                            <ListItem noBorder style={{ paddingTop: 10}}>
                                   <Text style={styles.listItemsStyle} >Help Center</Text>
                            </ListItem>
                            
                        </List>
                </Content>
                <DrawerFooter />
                    
            </Container>
        );
    }
}

export default ProfileMenu;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'stretch',
        backgroundColor: 'white',
    },
    listIconStyle: {
        fontSize:23,
        color : '#D9DCDE',
        
    },

    listItemsStyle: {
        fontSize: 18,
        color : 'black',
        paddingLeft: 10,
        fontWeight: '300'
    },

    footerStyle: {
        paddingLeft: 10,
        
    },
    
});

