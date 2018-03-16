import React from 'react';
//import {Text} from 'react-native';
import { Footer, FooterTab, Icon, Button, Text} from 'native-base';

const FooterComp = () => {
    return(
        <Footer style={styles.footerTabstyle}>
            <FooterTab >
                <Button>
                    <Text uppercase={false} style={styles.footerTabTxtActive}>All</Text>
                </Button>
                <Button>
                    <Text uppercase={false} style={styles.footerTabTxt}>Mentions</Text>
                </Button>
                <Button />
                <Button>
                    <Icon name='md-settings'/>
                </Button>

            </FooterTab>
        </Footer>
    );
};

export default FooterComp;

const styles ={
    footerTabstyle:{
        borderTopWidth: 1,
        borderTopColor: '#dadadc',
        },
    footerTabTxtActive:{
        fontFamily: 'sans-serif-medium'
    },
    footerTabTxt:{
        fontFamily: 'sans-serif-medium',
        color:'#707071'
    },
};