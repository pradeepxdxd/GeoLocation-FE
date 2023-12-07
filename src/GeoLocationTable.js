import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(name, calories) {
    return { name, calories };
}

export default function GeoLocationTable({ data }) {
    const rows = [
        createData('Country', data?.addressCountry),
        createData('Country Code', data?.addressCountryCode),
        createData('City', data?.addressLocality),
        createData('State', data?.addressRegion),
        createData('Pin Code', data?.postalCode),
        createData('Latitude', data?.latitude),
        createData('Longitude', data?.longitude),
    ];
    return (
        data && (<>
            <TableContainer component={Paper} style={{}}>
                <Table sx={{ minWidth: 500 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row) => (
                            <TableRow
                                key={row.name}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">
                                    {row.name}
                                </TableCell>
                                <TableCell align="right">{row.calories}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </>)
    );
}