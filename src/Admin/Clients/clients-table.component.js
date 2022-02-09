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
import Switch from "@mui/material/Switch";
import IconButton from "@mui/material/IconButton";
// Icons
import DeleteIcon from '@mui/icons-material/Delete';
import TablePagination from "@mui/material/TablePagination";
import CircularProgress from "@mui/material/CircularProgress"
import { DeleteClientsComponent } from "./delete-clients.component";
import { FirestoreService } from "../../Backend/Firebase/FirebaseServices/cloud-firestore.module";
import { useStateValue } from "../../Backend/Contexts/state-provider.module";

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

export function ClientsTableComponent(props) {
    const [showDeleteModal, setShowDeleteModal] = useState(false);
    const [propertyName, setPropertyName] = useState(null);
    const [propertyId, setPropertyId] = useState(null);
    const classes = useStyles();
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(5);
    const [{ user }, dispatch] = useStateValue();
    const { rows, setRows } = props;

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const makeUserAdmin = (e, row) => {
        const firestore = new FirestoreService("/");

        firestore.update("users/" + row.id, { isAdmin: e.target.checked })
            .then(res => {
                let data = [];
                firestore.getAll()
                    .then(snapshot => {
                        for (let id in snapshot.val()) {
                            if (id === "users") {
                                Object.keys(snapshot.val()[id])
                                    .map(key => {
                                        if (!snapshot.val()[id][key]["isAdmin"])
                                            return data.push({ ...snapshot.val()[id][key], id: key })
                                    });
                            }
                        }
                    })
                    .then(snapshot => props.setRows(data))
                    .then(snapshot => props.setIsLoadingRowsData(false))
                    .catch(err => console.error(err));
            })
            .catch(err => console.error(err));
    }

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };


    const deleteClient = (id, name) => {
        setShowDeleteModal(true);
        setPropertyId(id);
        setPropertyName(name);
    }

    return (
        <Container>
            {
                showDeleteModal &&
                <DeleteClientsComponent
                    showDeleteModal={showDeleteModal}
                    setShowDeleteModal={setShowDeleteModal}
                    clientId={propertyId}
                    clientName={propertyName}
                    setRows={setRows}
                />
            }
            <Card>
                <Paper className={classes.root}>
                    {
                        props.isLoadingRowsData ? <div className="circular-progress"><CircularProgress style={{ zoom: 2.3 }} /></div> : (
                            <>
                                <Table id="table-to-xls" className={classes.table} aria-label="caption table">
                                    <TableHead>
                                        <TableRow>
                                            <TableCell align="left">Img</TableCell>
                                            <TableCell align="left">Name</TableCell>
                                            <TableCell align="left">Email</TableCell>
                                            <TableCell align="left">Is Admin</TableCell>
                                            <TableCell align="left" />
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        {
                                            (rowsPerPage > 0
                                                ? rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                                : rows
                                            ).map(row => {

                                                return (
                                                    <TableRow key={Math.random()}>
                                                        <TableCell >{
                                                            row.photoUrl ? (
                                                                <img
                                                                    src={row.photoUrl}
                                                                    key={Math.random()}
                                                                    style={{
                                                                        height: "80px",
                                                                        width: "60%",
                                                                        borderRadius: "70px"
                                                                    }}
                                                                    alt="img" />

                                                            )
                                                                : "no images"
                                                        }</TableCell>
                                                        <TableCell>{row.displayName}</TableCell>
                                                        <TableCell>{row.email}</TableCell>
                                                        <TableCell>
                                                            {
                                                                user.email === row.email ? (
                                                                    <Switch
                                                                        checked={row.isAdmin}
                                                                        inputProps={{ 'aria-label': 'controlled' }}
                                                                        disabled={true}
                                                                    />
                                                                ) : (
                                                                    <Switch
                                                                        checked={row.isAdmin}
                                                                        onChange={(e) => makeUserAdmin(e, row)}
                                                                        inputProps={{ 'aria-label': 'controlled' }}
                                                                    />
                                                                )
                                                            }
                                                        </TableCell>
                                                        <TableCell className={classes.selectTableCell}>
                                                            {
                                                                user.email === row.email ? (
                                                                    <IconButton
                                                                        aria-label="delete"
                                                                        disabled={true}
                                                                        onClick={() => deleteClient(row.id, row.displayName)}
                                                                    >
                                                                        <DeleteIcon style={{ color: "red" }} />
                                                                    </IconButton>
                                                                ) : (
                                                                    <IconButton
                                                                        aria-label="delete"
                                                                        onClick={() => deleteClient(row.id, row.displayName)}
                                                                    >
                                                                        <DeleteIcon style={{ color: "red" }} />
                                                                    </IconButton>
                                                                )
                                                            }
                                                        </TableCell>
                                                    </TableRow>
                                                )
                                            })
                                        }
                                    </TableBody>
                                </Table>
                            </>
                        )
                    }
                    <TablePagination
                        rowsPerPageOptions={[1, 2, 5, 10, 20, 50, 100, 1000]}
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