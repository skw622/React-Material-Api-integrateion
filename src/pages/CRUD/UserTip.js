import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import brand from '../../api/dummy/brand';
import { withStyles } from '@material-ui/core/styles';
import PapperBlock from '../../Components/PapperBlock/PapperBlock';
import UserTipForm from './TableForm/UserTipForm';

const styles = ({
    root: {
        flexGrow: 1,
    }
});

class UserTip extends Component {
    render() {
        const title = brand.name + ' - Table';
        const description = brand.desc;
        return (
            <div id="user" style={{"marginTop": 50}}>
                <Helmet>
                    <title>{title}</title>
                    <meta name="description" content={description} />
                    <meta property="og:title" content={title} />
                    <meta property="og:description" content={description} />
                    <meta property="twitter:title" content={title} />
                    <meta property="twitter:description" content={description} />
                </Helmet>
                <PapperBlock whiteBg icon="" title="" desc="">
                    <UserTipForm />
                </PapperBlock>
            </div>
        );
    }
}

export default withStyles(styles)(UserTip);