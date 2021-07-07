import React from 'react';

// Material UI

import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import CancelIcon from '@material-ui/icons/Cancel';

const useStyles = makeStyles((theme) => ({
	cardMedia: {
		paddingTop: '56.25%', // 16:9
	},
	link: {
		margin: theme.spacing(1, 1.5),
	},
	cardHeader: {
		backgroundColor:
			theme.palette.type === 'light'
				? theme.palette.grey[200]
				: theme.palette.grey[700],
	},
	postTitle: {
		fontSize: '16px',
		textAlign: 'left',
	},
	postText: {
		display: 'flex',
		justifyContent: 'left',
		alignItems: 'baseline',
		fontSize: '12px',
		textAlign: 'left',
		marginBottom: theme.spacing(2),
	},
}));

const Solicitudes = (props) => {
    const {solicitudes} = props
    const classes = useStyles()
    if (!solicitudes || solicitudes.length === 0) return <p> No hay solicitudes pendientes </p>
    return (
        <React.Fragment>
            <Container maxWidth="md" component="main">
                <Paper className={classes.root}>
                    <TableContainer className={classes.container}>
                        <Table stickyHeader aria-label="sticky table">
                            <TableHead>
                                <TableRow>
                                    <TableCell> Id </TableCell>
                                    <TableCell align="center"> Cliente </TableCell>
                                    <TableCell align="center"> Monto </TableCell>
                                    <TableCell align="center"> Deuda SBS </TableCell>
                                    <TableCell align="center"> riesgo_sentinel </TableCell>
                                    <TableCell align="center"> Indicador AI</TableCell>
                                    <TableCell align="center">Aprobar?</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {solicitudes.map((solicitud) => {
                                    return (
                                        <TableRow>
                                            <TableCell component="th" scope="row"> {solicitud.id} </TableCell>
                                            <TableCell align="center"> {solicitud.cliente.nombre} {solicitud.cliente.apellido} </TableCell>
                                            <TableCell align="center"> 
                                               
                                                    $ {solicitud.monto}
                                               
                                            </TableCell>
                                            <TableCell align="center">                                        
                                                    $ {solicitud.cliente.deuda_sbs}
                                            </TableCell>
                                            <TableCell align="center">                                        
                                                    {solicitud.cliente.riesgo_sentinel}
                                            </TableCell>
                                            <TableCell align="center">                                        
                                                    {solicitud.indicador_ai}
                                            </TableCell>
                                            <TableCell align="center">
                                                <Link color="textPrimary" href={'/admin/aprobar/'+solicitud.id} className={classes.link}>
                                                <CheckBoxIcon></CheckBoxIcon>
                                                </Link> 
                                                <Link color="textPrimary" href={'/admin/rechazar/'+solicitud.id} className={classes.link}>
                                                <CancelIcon></CancelIcon>
                                                
                                                </Link> 

                                            </TableCell>

                                        </TableRow>
                                    )
                                })}
                            </TableBody>
                        </Table>
                    </TableContainer>


                </Paper>
            </Container>
        </React.Fragment>
    )
}

export default Solicitudes;