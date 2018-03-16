import React from 'react';
import { Footer, FooterTab, Icon, Button, Text} from 'native-base';

const DrawerFooter = () => {
    return(
        <Footer style={styles.footerTabstyle}>
            <FooterTab >
                <Button>
                 <Icon name='md-moon'/>
                </Button>
                <Button />
                <Button />
                
                <Button>
                    <Icon name='md-qr-scanner'/>
                </Button>

            </FooterTab>
        </Footer>
    );
};

export default DrawerFooter;

const styles ={
    footerTabstyle:{
        borderTopWidth: 1,
        borderTopColor: '#dadadc',
        },
    
};