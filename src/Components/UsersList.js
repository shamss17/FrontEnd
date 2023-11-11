import * as React from 'react';
import PropTypes from 'prop-types';
import { alpha } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import TableSortLabel from '@mui/material/TableSortLabel';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import DeleteIcon from '@mui/icons-material/Delete';
import FilterListIcon from '@mui/icons-material/FilterList';
import EditIcon from '@mui/icons-material/Edit';
import { visuallyHidden } from '@mui/utils';

import DoDisturbRoundedIcon from '@mui/icons-material/DoDisturbRounded';
import LockRoundedIcon from '@mui/icons-material/LockRounded';
import Button from '@mui/material/Button';
import { FontSizeOutlined } from '@ant-design/icons';
import MoreVertRoundedIcon from '@mui/icons-material/MoreVertRounded';
import DownloadRoundedIcon from '@mui/icons-material/DownloadRounded';
import SvgIcon from '@mui/material/SvgIcon';
import  { useState } from 'react'; // Import useState from React

function createData(id, name, username, email, group, status, createdOn, fullName, userGroup, profile) {
  return {
    id,
    name,
    username,
    email,
    group,
    status,
    createdOn,
    fullName,
    userGroup,
    profile,
  };
}

const initialRows = [
  createData(1, 'Ramy Mohsen', 'ramy.mohsen', 'ramy.mohsen@gogle.com', 'Office', 'Active', 'Dec 10,2022'),
  createData(2, 'Hesham Hagag', 'hesham.haggag', 'hesham.haggag@like.com', 'Managers', 'Inactive', 'Oct 22,2018'),
  createData(3, 'Khaled Adam', 'khaled.adam', 'ramy.mohsen@like.com', 'Office', 'Active', 'Oct 15,2018'),
  createData(4, ' كريم فاروق', 'kareem.farouk', 'kareem.farouk@nuvb.net', 'Office', 'Active', 'Jun 17,2020'),
  createData(5, 'Noor Hamdy', 'noor.hamdy', 'noor.hamdy@lesi.com', 'Managers', 'Active', 'Sep 9,2019'),
  createData(6, 'حنان فوزي', 'hanan.fawzy', 'hanan.fawzy@buno.net', ' Head Office', 'Active', 'Sep 21,2020'),
  createData(7, 'ايمان ادم', 'iman.adam', 'iman.adam@fadok.net', 'Office', 'Active', 'Dec 27,2018'),
  createData(8, ' Mayar Farouq', 'mayar.farouq', 'mayar.farouq@share.net', 'Head Office', 'Active', 'Feb 14,2020'),

];
function descendingComparator(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function getComparator(order, orderBy) {
  return order === 'desc'
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

function stableSort(array, comparator) {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) {
      return order;
    }
    return a[1] - b[1];
  });
  return stabilizedThis.map((el) => el[0]);
}

const headCells = [
  {
    id: 'name',
    numeric: false,
    disablePadding: true,
    label: 'Name',
  },
  {
    id: 'User Name',
    numeric: true,
    disablePadding: false,
    label: 'User Name',
  },
  {
    id: 'Email Address',
    numeric: true,
    disablePadding: false,
    label: 'Email Address',
  },
  {
    id: 'Group',
    numeric: true,
    disablePadding: false,
    label: 'Group',
  },
  {
    id: 'Status',
    numeric: true,
    disablePadding: false,
    label: 'Status',
  },
  {
    id: 'Created On',
    numeric: true,
    disablePadding: false,
    label: 'Created On',
  }
];

function EnhancedTableHead(props) {
  const { onSelectAllClick, order, orderBy, numSelected, rowCount, onRequestSort } =
    props;
  const createSortHandler = (property) => (event) => {
    onRequestSort(event, property);
  };

  return (
    <TableHead>
      <TableRow>
        <TableCell padding="checkbox">
          <Checkbox
            color="primary"
            style={{ color: '#3DAC78' }} // Change the color here
            indeterminate={numSelected > 0 && numSelected < rowCount}
            checked={rowCount > 0 && numSelected === rowCount}
            onChange={onSelectAllClick}
            inputProps={{
              'aria-label': 'select all desserts',
            }}
          />
        </TableCell>
        {headCells.map((headCell) => (
          <TableCell
            key={headCell.id}
            align={headCell.numeric ? 'start' : 'left'}
            padding={headCell.disablePadding ? 'none' : 'normal'}
            sortDirection={orderBy === headCell.id ? order : false}
          >
            <TableSortLabel
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : 'asc'}
              onClick={createSortHandler(headCell.id)}
            >
              {headCell.label}
              {orderBy === headCell.id ? (
                <Box component="span" sx={visuallyHidden}>
                  {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                </Box>
              ) : null}
            </TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}

EnhancedTableHead.propTypes = {
  numSelected: PropTypes.number.isRequired,
  onRequestSort: PropTypes.func.isRequired,
  onSelectAllClick: PropTypes.func.isRequired,
  order: PropTypes.oneOf(['asc', 'desc']).isRequired,
  orderBy: PropTypes.string.isRequired,
  rowCount: PropTypes.number.isRequired,
};

function EnhancedTableToolbar(props) {
    const { numSelected, setSelected } = props;

    const handleUnselectAllClick = () => {
      setSelected([]); // Clear all selected items
    };
    const handleDownloadClick = () => {
        // Add your download logic here
        console.log('Downloading selected items');
      };
    
  return (
    <Toolbar
      sx={{
        pl: { sm: 2.5 },
        pr: { xs: 1, sm: 1 },
        ...(numSelected > 0 && {
          bgcolor: '#fff',
        }),
      }}
    >
      {numSelected > 0 ? (
        <Box sx={{ ml: -1, mb: 2, mt: 2, display: 'flex',gap:'4px' }}>
          <Typography variant="subtitle1" component="div" marginRight={0} >
            {numSelected} selected   |
          </Typography>
          <Box sx={{ display: 'flex', alignItems: 'left' }}>
            <Tooltip title="Edit">
              <IconButton
                sx={{
                  backgroundColor: '#E4E6EB',
                  borderRadius: '4px', // To make it square
                  marginRight: '8px', // Small gap
                  scale:'0.9',
                  
                }}
              >
                <EditIcon style={{color:'#223'}} />
              </IconButton>
            </Tooltip>

            <Tooltip title="Cancel">
              <IconButton
                sx={{
                  backgroundColor: '#E4E6EB',
                  borderRadius: '4px', // To make it square
                  marginRight: '2px', // Small gap
                  marginLeft:'-5px',
                  scale:'0.9'
                }}
              >
                <DoDisturbRoundedIcon style={{color:'#223'}} />
              </IconButton>
            </Tooltip>

            <Tooltip title="Lock">
              <IconButton
                sx={{
                  backgroundColor: '#E4E6EB',
                  borderRadius: '4px', // To make it square
                  marginRight: '8px', // Small gap
                  scale:'0.9'
                }}
              >
                <LockRoundedIcon style={{color:'#223'}} />
              </IconButton>
            </Tooltip>

            <Box sx={{ display: 'flex', gap: '8px' }}>
              <Tooltip title="Assign To Profile">
                <Button
                  variant="contained"
                  style={{ backgroundColor: '#E4E6EB',height:'34px' }}
                >
                  <Typography
                    textTransform="none"
                    fontSize={12}
                    color="#223"
                    fontWeight={600}
                  >
                    Assign To Profile
                  </Typography>
                </Button>
              </Tooltip>

              <Tooltip title="Assign To Group">
                <Button
                  variant="contained"
                  style={{ backgroundColor: '#E4E6EB' ,height:'34px'}}
                >
                  <Typography
                    textTransform="none"
                    fontSize={12}
                    color="#223"
                    fontWeight={600}
                  >
                    Assign To Group
                  </Typography>
                </Button>
              </Tooltip>

              <Tooltip title="More Options" >
              <IconButton
    sx={{
      backgroundColor: '#E4E6EB',
      borderRadius: '4px', // To make it square
      marginRight: '8px', // Small gap
      width: '36px', // Adjust the width to match the Lock button
      height: '36px', // Adjust the height to match the Lock button
    }}
  >
    <MoreVertRoundedIcon style={{ fontSize: '18px', color: '#223' }} />
  </IconButton>
              </Tooltip>
              
               {/* Unselect All option */}
          <Typography
            variant="subtitle1"
            component="div"
            sx={{
              textDecoration: 'underline',
              cursor: 'pointer',
              '&:hover': {
                color: 'gray', // Change the color on hover if needed
              },
            }}
            onClick={handleUnselectAllClick}
          >
            Unselect All
          </Typography>
          <Tooltip title="Download">
              <IconButton
                sx={{
                  backgroundColor: '#E4E6EB',
                  borderRadius: '4px', // To make it square
                  marginRight: '8px', // Small gap
                  marginLeft: '380px', // Push to the right
                  scale: '0.8',
                }}
              >
                <DownloadRoundedIcon style={{ color: '#223' }} />
              </IconButton>
            </Tooltip>
            </Box>
          </Box>
        </Box>
      ) : (
        <Typography
          sx={{ flex: '1 1 100%' }}
          variant="h6"
          id="tableTitle"
          component="div"
        >
          Users
        </Typography>
      )}
      {numSelected > 0 ? null : (
        <Tooltip title="Filter list">
          <IconButton>
            <FilterListIcon />
          </IconButton>
        </Tooltip>
      )}
    </Toolbar>
  );
}


  function EnhancedTable() {
    const [order, setOrder] = useState('asc');
    const [orderBy, setOrderBy] = useState('id');
    const [selected, setSelected] = useState([]);
    const [page, setPage] = useState(0);
    const [dense, setDense] = useState(false);
    const [rows, setRows] = useState(initialRows); // Initialize state with initialRows
    const [rowsPerPage, setRowsPerPage] = useState(5);
  
  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelected = rows.map((n) => n.id);
      setSelected(newSelected);
      return;
    }
    setSelected([]);
  };
  const handleClick = (event, id) => {
    const selectedIndex = selected.indexOf(id);
    let newSelected = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, id);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1),
      );
    }
    setSelected(newSelected);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleChangeDense = (event) => {
    setDense(event.target.checked);
  };

  const isSelected = (id) => selected.indexOf(id) !== -1;

  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

  const visibleRows = React.useMemo(
    () =>
      stableSort(rows, getComparator(order, orderBy)).slice(
        page * rowsPerPage,
        page * rowsPerPage + rowsPerPage,
      ),
    [order, orderBy, page, rowsPerPage],
    
  );

  return (
    <Box sx={{ width: '100%' }}>
      <EnhancedTableToolbar numSelected={selected.length} setSelected={setSelected} />
      <TableContainer>
        <Table
          sx={{ minWidth: 750 }}
          aria-labelledby="tableTitle"
          size={dense ? 'small' : 'medium'}
        >
          <EnhancedTableHead
            numSelected={selected.length}
            order={order}
            orderBy={orderBy}
            onSelectAllClick={handleSelectAllClick}
            onRequestSort={handleRequestSort}
            rowCount={rows.length}
          />
          <TableBody>
            {visibleRows.map((row, index) => {
              const isItemSelected = isSelected(row.id);
              const labelId = `enhanced-table-checkbox-${index}`;

              return (
                <TableRow
                  hover
                  onClick={(event) => handleClick(event, row.id)}
                  role="checkbox"
                  aria-checked={isItemSelected}
                  tabIndex={-1}
                  key={row.id}
                  selected={isItemSelected}
                  sx={{ cursor: 'pointer' }}
                >
                  <TableCell padding="checkbox">
                    <Checkbox
                      color="primary"
                      style={{ color: '#3DAC78' }} // Change the color here
                      checked={isItemSelected}
                      inputProps={{
                        'aria-labelledby': labelId,
                      }}
                    />
                  </TableCell>
                  <TableCell
                    component="th"
                    id={labelId}
                    scope="row"
                    padding="none"
                  >
                    {row.name}
                  </TableCell>
                  <TableCell align="start">{row.name}</TableCell>
                  <TableCell align="start">{row.email}</TableCell>
                  <TableCell align="start">{row.group}</TableCell>
                  <TableCell align="start">{row.status}</TableCell>
                  <TableCell align="start">{row.createdOn}</TableCell>
                </TableRow>
              );
            })}
            {emptyRows > 0 && (
              <TableRow
                style={{
                  height: (dense ? 33 : 53) * emptyRows,
                }}
              >
                <TableCell colSpan={6} />
              </TableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[5, 10, 25]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
      <FormControlLabel
        control={<Switch checked={dense} onChange={handleChangeDense} />}
        label="Dense padding"
      />
    </Box>
  );
}

export default EnhancedTable; 