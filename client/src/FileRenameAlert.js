import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

/*
This code is part of the bulk_plasmid_seq_web distribution
(https://github.com/Boyle-Lab/bulk_plasmid_seq_web) and is governed by its license.
Please see the LICENSE file that should have been included as part of this
package. If not, see <https://www.gnu.org/licenses/>.

This program is free software: you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU General Public License for more details.

CONTACT: Adam Diehl, adadiehl@umich.edu
*/

const styles = theme => ({
    root: {
	width: '100%',
	marginTop: theme.spacing(3),
	overflowX: 'auto',
	padding: '0px 0px 0px 0px'
    },
    table: {
	minWidth: 700,
    },
    bold: {
	fontWeight: 'bold'
    },
    superScript: {
	verticalAlign: 'super',
	fontSize: '80%'
    }
});


//function OptsTable(props) {
class FileRenameAlert extends Component {
    constructor(props) {
	super(props);
    }

    render() {
	const { classes, data } = this.props;
	//console.log("data:", data);
	return (
		<Grid container className={classes.root} spacing={2}>
		    <Grid item xs={12}>
		        <Typography container="div" align="center" className={classes.bold}>
		            We noticed one or more of your file names contains space characters...
		        </Typography>
		    </Grid>
		    <Grid item xs={12}>
		        <Typography container="div" align="center">
		            This will cause runtime errors in the analysis pipeline, so we have renamed the affected files:
	                </Typography>
		    </Grid>

	            <Grid item xs={12}>
		        <Paper className={classes.root}>
		            <Table className={classes.table}>
		                <TableHead>
		                    <TableRow key="head">
		                        {["Original Filename", "New Filename"].map((val, index) => (
						<TableCell key={val} align="left">{val}</TableCell>
					))}
	                            </TableRow>
	                        </TableHead>
		                <TableBody>
		                    {Object.keys(this.props.data).map((key, index) => (
					    <TableRow key={index.toString()}>
					    <TableCell key="1" align="left">{this.props.data[key]}</TableCell>
					    <TableCell key="2" align="left">{key}</TableCell>
					    </TableRow>
				    ))}
                                </TableBody>
	                    </Table>
	                </Paper>
		    </Grid>
	        </Grid>
	);
    }
}

FileRenameAlert.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(FileRenameAlert);
