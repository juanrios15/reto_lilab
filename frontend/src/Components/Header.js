import React from 'react'
import { AppBar, Toolbar, Typography, CssBaseline, makeStyles, Link, Button } from '@material-ui/core'
import { NavLink, useHistory } from 'react-router-dom';


const useStyles = makeStyles((theme) => ({
    appBar: {
        borderBottom: `1px solid ${theme.palette.divider}`,
        backgroundColor: '#aaa',

    },
    link: {
        margin: theme.spacing(1, 1.5)
    },
    toolbarTitle: {
        flexGrow: 1,
        
    }
}))

function Header() {
    const classes = useStyles()
    let history = useHistory()
    return (
        <React.Fragment>
            <CssBaseline/>
            <AppBar position="static" color="inherit" elevation={0} className={classes.appBar}>
                <Toolbar>
                    <Typography variant="h6" color="inherit" noWrap className={classes.toolbarTitle}>
                        <Link component={NavLink} to="/" underline="none" color="textPrimary">
                            Creditos Financieros
                        </Link>
                    </Typography>
                    
                    <Button href="#" color="primary" variant="outlined" className={classes.link} component={NavLink} to="/login">
                        Login
                    </Button>
                    <Button href="#" color="primary" variant="outlined" className={classes.link} component={NavLink} to="/logout">
                        Logout
                    </Button>
                </Toolbar>
            </AppBar>
        </React.Fragment>
    )
}

export default Header;