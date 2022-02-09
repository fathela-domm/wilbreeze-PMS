import React, { useState } from "react";
import { makeStyles } from "@mui/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Card from "@mui/material/Card";
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import IconButton from "@mui/material/IconButton";
// Icons
import EditIcon from "@mui/icons-material/EditOutlined";
import DeleteIcon from '@mui/icons-material/Delete';
import { FirestoreService } from "../../Backend/Firebase/FirebaseServices/cloud-firestore.module";
import TablePagination from "@mui/material/TablePagination";
import CircularProgress from "@mui/material/CircularProgress"
import "./properties.component.css"
import { DeletePropertyComponent } from "./delete-property.component";
import { UpdatePropertyComponent } from "./update-property.component";
import CurrencyFormat from "react-currency-format";

const useStyles = makeStyles(theme => ({
    formControl: {
        margin: theme.spacing(1),
        minWidth: 300
    },
    selectEmpty: {
        marginTop: theme.spacing(2)
    },
    root: {
        width: "100%",
        marginTop: theme.spacing(3),
        overflowX: "auto"
    },
    table: {
        minWidth: 650
    },
    selectTableCell: {
        width: 60
    },
    tableCell: {
        width: 130,
        height: 40
    },
    input: {
        width: 130,
        height: 40
    }
}));

export function PropertiesDataTableComponent(props) {
    const [showUpdateModal, setShowUpdateModal] = useState(false);
    const [showDeleteModal, setShowDeleteModal] = useState(false);
    const [propertyName, setPropertyName] = useState(null);
    const [propertyId, setPropertyId] = useState(null);
    const classes = useStyles();
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(5);
    const { rows, setRows } = props;
    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

    const updateProperty = (id, name) => {
        setShowUpdateModal(true);
        setPropertyId(id);
    }

    const deleteProperty = (id, name) => {
        setShowDeleteModal(true);
        setPropertyId(id);
        setPropertyName(name);
    }

    return (
        <Container>
            {
                showDeleteModal &&
                <DeletePropertyComponent
                    showDeleteModal={showDeleteModal}
                    setShowDeleteModal={setShowDeleteModal}
                    propertyId={propertyId}
                    propertyName={propertyName}
                    setRows={setRows}
                />
            }
            {
                showUpdateModal &&
                <UpdatePropertyComponent
                    showUpdateModal={showUpdateModal}
                    setShowUpdateModal={setShowUpdateModal}
                    propertyId={propertyId}
                    setRows={setRows} />
            }
            <Card>
                <Paper className={classes.root}>
                    {
                        props.isLoadingRowsData ? <div className="circular-progress"><CircularProgress style={{ zoom: 2.3 }} /></div> : (
                            <>
                                <Table id="table-to-xls" className={classes.table} aria-label="caption table">
                                    <TableHead>
                                        <TableRow>
                                            <TableCell align="left" />
                                            <TableCell align="left" />
                                            <TableCell align="left">Img</TableCell>
                                            <TableCell align="left">Name</TableCell>
                                            <TableCell align="left">Location</TableCell>
                                            <TableCell align="left">MinPrice</TableCell>
                                            <TableCell align="left">MaxPrice</TableCell>
                                            <TableCell align="left">Phase</TableCell>
                                            <TableCell align="left">Overview</TableCell>
                                            <TableCell align="left">Type</TableCell>
                                            <TableCell align="left">Active</TableCell>
                                            <TableCell align="left">Edit</TableCell>
                                            <TableCell align="left" >Delete</TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        {
                                            (rowsPerPage > 0
                                                ? rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                                : rows
                                            ).map(row => (
                                                <TableRow key={Math.random()}>
                                                    <TableCell colSpan={3}>{
                                                        row.images ? (
                                                            <img
                                                                src={row.images[0]}
                                                                key={Math.random()}
                                                                style={{
                                                                    height: "100px",
                                                                    width: "100%",
                                                                    borderRadius: "50px"
                                                                }}
                                                                alt="img" />

                                                        )
                                                            : "no images"
                                                    }</TableCell>
                                                    <TableCell>{row.name}</TableCell>
                                                    <TableCell>{row.location}</TableCell>
                                                    <TableCell>
                                                        <CurrencyFormat
                                                            className='text-danger'
                                                            value={parseInt(row.minPrice)}
                                                            displayType={'text'}
                                                            thousandSeparator={true}
                                                            prefix={'KSH: '} />
                                                    </TableCell>
                                                    <TableCell>
                                                        <CurrencyFormat
                                                            className='text-danger'
                                                            value={parseInt(row.maxPrice)}
                                                            displayType={'text'}
                                                            thousandSeparator={true}
                                                            prefix={'KSH: '} />
                                                    </TableCell>
                                                    <TableCell>{row.phase}</TableCell>
                                                    <TableCell>{(row.overview.slice(0, 15) + "...")}</TableCell>
                                                    <TableCell>{row.type}</TableCell>
                                                    <TableCell>{row.active}</TableCell>
                                                    <TableCell className={classes.selectTableCell}>
                                                        <IconButton
                                                            aria-label="edit"
                                                            onClick={() => updateProperty(row.id, row.name)}
                                                        >
                                                            <EditIcon />
                                                        </IconButton>
                                                    </TableCell>
                                                    <TableCell className={classes.selectTableCell}>
                                                        <IconButton
                                                            aria-label="delete"
                                                            onClick={() => deleteProperty(row.id, row.name)}
                                                        >
                                                            <DeleteIcon style={{ color: "red" }} />
                                                        </IconButton>
                                                    </TableCell>
                                                </TableRow>
                                            ))}
                                    </TableBody>
                                </Table>
                            </>
                        )
                    }
                    <TablePagination
                        rowsPerPageOptions={[2, 5, 10, 20, 50, 100, 1000]}
                        component="div"
                        count={rows.length}
                        rowsPerPage={rowsPerPage}
                        page={page}
                        onPageChange={handleChangePage}
                        onRowsPerPageChange={handleChangeRowsPerPage}
                    />
                </Paper>
            </Card>
        </Container >
    );
}