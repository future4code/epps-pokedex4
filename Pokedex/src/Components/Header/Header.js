import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import {goToPage} from '../../Routes/Coordinator'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';



const useStyles = makeStyles((theme) => ({
    Typography: {
        fontFamily: "Press Start 2P",
    },
    root: {
        flexGrow: 1,
        width: "100%",
        
    },
    padding: {
        padding: theme.spacing(3),
    },
    tabBar: {
        width: "100%",
        display:"inline-block",
        fontSize: "35px",        
        backgroundColor: '#EAF63E',
        color: '#CA01F5',
        fontFamily: '"Press Start 2P"'


    },
    tab: {
        backgroundColor: '#CA01F5',
        display:"inline-block",
        color: '#EAF63E',
        width: "100%",
        fontFamily: '"Press Start 2P"',

    }
}))

const Header = () => {
    const classes = useStyles();
    const history = useHistory();

    return (
        <>
            <AppBar position="static" className={classes.root}>
                <Tabs variant="fullWidth" className={classes.tabBar}>                    
                    <Tab className={classes.tabBar} onClick={() => goToPage(history, "/")} label="Lista de Pokemons" />
                </Tabs>
            </AppBar>

            <AppBar position="static" className={classes.root}>
                <Tabs variant="fullWidth" className={classes.tabBar}>
                    <Tab disableRipple={true} className={classes.tab} label="" />
                    <Tab disableRipple={true} className={classes.tab} label="" />
                    <Tab disableRipple={true} className={classes.tab} label="" />
                    <Tab className={classes.tab} label="Pokedex" onClick={() => goToPage(history, "/pokedex")}/>
                </Tabs>
            </AppBar>
        </>
    )
}

export default Header