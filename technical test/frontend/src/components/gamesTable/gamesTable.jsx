import './gamesTable.scss';
import React, { useEffect } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import PropTypes from "prop-types";

function GamesTable(props) {
  useEffect(() => {
  }, [props]);

  return (
    <div className="App">
       <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow> 
          <TableCell component="th" scope="row" >game</TableCell>
          <TableCell align="right">number of players</TableCell>
          <TableCell align="right">platform</TableCell>
          <TableCell align="right">genre</TableCell>
          <TableCell align="right">play time</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.gamesList.map((game) => (
            <TableRow
              key={game.game}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {game.game}
              </TableCell>
              <TableCell align="right">{game.userId}</TableCell>
              <TableCell align="right">{game.platforms}</TableCell>
              <TableCell align="right">{game.genre}</TableCell>
              <TableCell align="right">{game.playTime}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
  );
}

GamesTable.propTypes={
  gamesList: PropTypes.array,
};


export default GamesTable;
