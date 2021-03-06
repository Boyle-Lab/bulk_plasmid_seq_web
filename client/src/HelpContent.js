import React, {useState} from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';


import Paper from '@material-ui/core/Paper';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';
import Typography from '@material-ui/core/Typography';
import ContactSupportIcon from '@material-ui/icons/ContactSupport';
import GitHubIcon from '@material-ui/icons/GitHub';
import BugReportIcon from '@material-ui/icons/BugReport';
import LocalLibraryIcon from '@material-ui/icons/LocalLibrary';
import ClassIcon from '@material-ui/icons/Class';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
import Link from '@material-ui/core/Link';

import ErrorContent from './ErrorContent';

import gtag from 'ga-gtag';

/*
This code is part of the bulk_plasmid_seq_web distribution
(https://github.com/Boyle-Lab/) and is governed by its license.
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
    },
    leftAligned: {
	display: "flex",
	justifyContent: "flex-start",
	padding: "10px 10px 10px 10px"
    },
    rightAligned: {
        display: "flex",
        justifyContent: "flex-end",
        padding: "10px 10px 10x 10px"
    },
    centerAligned: {
        display: "flex",
        justifyContent: "center",
    },
});

function HelpContent(props) {
    const { classes, handleChange } = props;

    // Send an event to Google Analytics.
    gtag('event', 'show_help');
    
    return (
	    
	    <Paper className={classes.root}>
	    <Grid container className={classes.root} spacing={0}>

	{/* Tutorial Link */}
        <Grid item xs={12}>
            <Grid container alignItems="center">
                <Grid item xs={2} className={classes.centerAligned}>
                    <Tooltip title="View the tutorial.">
                      <IconButton
        color="inherit"
	onClick={() => handleChange({ 'showTutorial': true,
				      'showHelpDialog': false,
				      'showLandingPage': false,
				      'showResults': false })}
                      >
                          <ClassIcon fontSize="large"/>
                      </IconButton>
                    </Tooltip>
                </Grid>
                <Grid item xs={10} className={classes.leftAligned}>
                    <Tooltip title="View the tutorial.">
                        <Typography container="div" align="left">
                            View the tutorial:<br/>
                            <Link
	                        onClick={() => handleChange({ 'showTutorial': true,
							      'showHelpDialog': false,
							      'showLandingPage': false,
							      'showResults': false })}>
	                        Click here!
	                    </Link>
                        </Typography>
                    </Tooltip>
                </Grid>
            </Grid>
          <Divider/>
        </Grid>
	    
	{/* GitHub Link */}
	<Grid item xs={12}>
	    <Grid container alignItems="center">
	        <Grid item xs={2} className={classes.centerAligned}>
                    <Tooltip title="View project at GitHub.">
	              <IconButton
	                color="inherit"
                        href="https://www.github.com/crmumm/bulkPlasmidSeq"
                      >
	                  <GitHubIcon fontSize="large"/>
	              </IconButton>
                    </Tooltip>
	        </Grid>
	        <Grid item xs={10} className={classes.leftAligned}>
	            <Tooltip title="View project at GitHub.">
	                <Typography container="div" align="left">
                            Visit the project page at GitHub for more information and documentation:<br/>
                            <a href="https://www.github.com/crmumm/bulkPlasmidSeq">https://www.github.com/crmumm/bulkPlasmidSeq</a>
	                </Typography>
                    </Tooltip>	    
	        </Grid>
	    </Grid>
	  <Divider/>
	    </Grid>

	{/* Bug Report Link (goes to gitHub Issues page) */}
        <Grid item xs={12}>
            <Grid container alignItems="center">
                <Grid item xs={2} className={classes.centerAligned}>
                    <Tooltip title="Report a bug or issue.">
                      <IconButton
                        color="inherit"
                        href="https://github.com/Boyle-Lab/bulk_plasmid_seq_web/issues"
                      >
                          <BugReportIcon fontSize="large"/>
                      </IconButton>
                    </Tooltip>
                </Grid>
                <Grid item xs={10} className={classes.leftAligned}>
                    <Tooltip title="Report a bug or issue.">
                        <Typography container="div" align="left">
                            Report or track bugs and issues:<br/>
                            <a href="https://github.com/Boyle-Lab/bulk_plasmid_seq_web/issues">https://github.com/Boyle-Lab/bulk_plasmid_seq_web/issues</a>
                        </Typography>
                    </Tooltip>
                </Grid>
            </Grid>
          <Divider/>
            </Grid>

	
	{/* Email Link */}
	<Grid item xs={12}>
            <Grid container alignItems="center">
                <Grid item xs={2} className={classes.centerAligned}>
	           <Tooltip title="Ask us a question.">
                      <IconButton
                        color="inherit"
                        href="mailto://crmumm@umich.edu"
	              >
                        <ContactSupportIcon fontSize="large"/>
	              </IconButton>
                    </Tooltip>
                </Grid>

                <Grid item xs={10} className={classes.leftAligned}>
                    <Tooltip title="Ask us a question.">
	                <Typography container="div"  align="left">
	                    Email us a question:<br/>
                            <a href="mailto://crmumm@umich.edu">crmumm@umich.edu</a>
                        </Typography>
	          </Tooltip>
                </Grid>
            </Grid>
	  <Divider/>
        </Grid>
	
	{/* Citation Info */}
	<Grid item xs={12}>
            <Grid container alignItems="center">
                <Grid item xs={2} className={classes.centerAligned}>
                    <Tooltip title="View Citation in PubMed.">
	              <IconButton
                        color="inherit"
                        href="https://pubmed.ncbi.nlm.nih.gov/"
                      >
                        <LocalLibraryIcon fontSize="large"/>
	              </IconButton>
                    </Tooltip>
                </Grid>
                <Grid item xs={10} className={classes.leftAligned}>
	          <Tooltip title="How to cite this tool.">
	              <Typography container="div" align="left">
	                <span className='leftAlignedBold'>
	                  Please use the following citation if you use this tool in your work:
	                </span><br/>
	                  On-Ramp: a tool for rapid, multiplexed validation of plasmids using nanopore sequencing.<br/>
                          Camille Mumm, Melissa L Drexel, Torrin L McDonald, Adam Diehl, Jessica A Switzenberg, and Alan P Boyle. 
	                  BIORXIV/2022/484480.
	              </Typography>
	          </Tooltip>
                </Grid>
            </Grid>
        </Grid>
	
	    </Grid>
	    </Paper>
    );
}

HelpContent.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(HelpContent);
