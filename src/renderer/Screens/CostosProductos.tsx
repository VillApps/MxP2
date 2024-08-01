/* eslint-disable no-alert */
/* eslint-disable no-prototype-builtins */
/* eslint-disable no-plusplus */
/* eslint-disable react/no-array-index-key */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState, useMemo, useCallback, ChangeEvent, KeyboardEvent } from 'react';
import { useDispatch } from 'react-redux';
import {
  Box,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TableSortLabel,
  TextField,
  TablePagination,
  Stack,
  Checkbox,
  Grid,
  Button,
  Collapse,
  Typography,
  colors,
  AppBar,
  Toolbar,
} from '@mui/material';
import { visuallyHidden } from '@mui/utils';
import Papa from 'papaparse';
import { CartesianGrid, Legend, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import { AppDispatch } from '../States/Store';
import { setIsUtilsBar, setLoading } from '../States/UiSlice';
import ipc from '../Utils/Ipc';
import aS from '../Utils/AppService';

interface Product {
  id: number;
  name: string;
  operations: any[];
}

const CostosProductos = React.memo(() => {
  const dispatch = useDispatch<AppDispatch>();
  const [overAllWidth, setOverAllWidth] = useState(false);
  const [productos, setProductos] = useState<Product[]>([]);
  const [orderBy, setOrderBy] = useState<Record<string, 'asc' | 'desc'>>({ profitAT: 'desc' });
  const [filters, setFilters] = useState<Record<string, string>>({});
  const [inputValues, setInputValues] = useState<Record<string, string>>({});
  const [rowsPerPage, setRowsPerPage] = useState<number>(50);
  const [page, setPage] = useState<number>(0);
  const [selected, setSelected] = useState<Set<number>>(new Set());
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const gastos = 3796877.73;

  const headCells: any = useMemo(
    () => [
      { id: 'name', numeric: false, label: 'Producto' },
      { id: 'costTotal', numeric: true, label: '$ Costo' },
      { id: 'saleAmountTotal', numeric: true, label: '$ Ventas' },
      { id: 'profitAT', numeric: true, label: '$ Util' },
      { id: 'hasNegativeProfit', numeric: false, label: 'Util neg' },
      { id: 'profitPercent', numeric: true, label: '% Utilidad' },
      { id: 'lowestProfit', numeric: true, label: 'Util min' },
      { id: 'lowestProfitOperation', numeric: false, label: '<- Operacion' },
    ],
    [],
  );

  const ftC = (value: number | bigint) => {
    return new Intl.NumberFormat('es-MX', { style: 'currency', currency: 'MXN' }).format(value);
  };

  const handleOrderClick = useCallback((headCell: any) => {
    setOrderBy((prevOrderBy) => {
      let newOrderBy = { ...prevOrderBy };
      if (!newOrderBy.hasOwnProperty(headCell.id)) {
        newOrderBy = {};
      }
      if (!newOrderBy[headCell.id]) {
        newOrderBy[headCell.id] = 'asc';
      } else if (newOrderBy[headCell.id] === 'asc') {
        newOrderBy[headCell.id] = 'desc';
      } else {
        delete newOrderBy[headCell.id];
      }
      return newOrderBy;
    });
  }, []);

  const handleInputChange = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setInputValues((prevInputValues) => ({ ...prevInputValues, [name]: value }));
  }, []);

  const handleFilterApply = useCallback(
    (event: KeyboardEvent<HTMLInputElement>) => {
      if (event.key === 'Enter') {
        const { name } = event.target as HTMLInputElement;
        setFilters((prevFilters) => ({ ...prevFilters, [name]: inputValues[name] }));
      }
    },
    [inputValues],
  );

  const filteredProductos = useMemo(() => {
    return productos.filter((product: any) => {
      return Object.keys(filters).every((key) => {
        if (!filters[key]) return true;
        let value = product[key];
        if (key === 'name') {
          value = `${product.name} ${product.default_code} ${product.barcode}`;
        }
        if (key === 'lowestProfitOperation') {
          value = `${product.lowestProfitOperation?.oper} ${product.lowestProfitOperation?.data}`;
        }
        return String(value).toLowerCase().includes(filters[key].toLowerCase());
      });
    });
  }, [productos, filters]);

  const sortedProductos = useMemo(() => {
    const orderKey = Object.keys(orderBy)[0];
    const order = orderBy[orderKey];

    if (!orderKey || !order) return filteredProductos;

    return filteredProductos.slice().sort((a: any, b: any) => {
      const valueA = a[orderKey];
      const valueB = b[orderKey];
      const isNumeric = !Number.isNaN(Number(valueA || 0)) && !Number.isNaN(Number(valueB || 0));
      if (isNumeric) {
        return order === 'asc' ? Number(valueA || 0) - Number(valueB || 0) : Number(valueB || 0) - Number(valueA || 0);
      }
      return order === 'asc' ? valueA.localeCompare(valueB) : valueB.localeCompare(valueA);
    });
  }, [filteredProductos, orderBy]);

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: ChangeEvent<HTMLInputElement>) => {
    const newRowsPerPage = parseInt(event.target.value, 10);
    setRowsPerPage(newRowsPerPage);
    setPage(0);
  };

  const paginatedProductos = useMemo(() => {
    const startIndex = page * rowsPerPage;
    const endIndex = startIndex + rowsPerPage;
    return sortedProductos.slice(startIndex, endIndex);
  }, [sortedProductos, page, rowsPerPage]);

  const handleSelectAllClick = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.checked) {
      const newSelecteds = new Set<number>(paginatedProductos.map((product) => product.id));
      setSelected(newSelecteds);
    } else {
      setSelected(new Set());
    }
  };

  const handleClick = (id: number) => {
    setSelected((prevSelected) => {
      const newSelected = new Set(prevSelected);
      if (newSelected.has(id)) {
        newSelected.delete(id);
      } else {
        newSelected.add(id);
      }
      return newSelected;
    });
  };

  const exportToCSV = () => {
    const filteredProducts = sortedProductos.filter((product) => selected.has(product.id));

    if (filteredProducts.length === 0) {
      alert('No products selected for export.');
      return;
    }

    const csv = Papa.unparse(
      filteredProducts.map((product) => ({
        Producto: `${product.name}`,
      })),
    );

    const link = document.createElement('a');
    link.href = `data:text/csv;charset=utf-8,\uFEFF${encodeURIComponent(csv)}`;
    link.download = 'productos.csv';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const getProducts = async () => {
    try {
      dispatch(setLoading(true));
      const res: Product[] = await ipc.q('getProducts');
      setProductos(res);
    } catch (error) {
      aS.log('CostosProductos - getProducts - error', error);
    } finally {
      dispatch(setLoading(false));
    }
  };

  useEffect(() => {
    if (page > Math.ceil(sortedProductos.length / rowsPerPage) - 1) {
      setPage(0);
    }
  }, [sortedProductos.length, rowsPerPage, page]);

  useEffect(() => {
    dispatch(setIsUtilsBar({ show: false }));
    getProducts();
  }, []);

  // useEffect(() => {
  //   if (selected.size) {
  //     selected.forEach((productId) => {
  //       for (let i = 0; i < paginatedProductos.length; i++) {
  //         const paginatedProducto = paginatedProductos[i];
  //         if (paginatedProducto.id === productId) {
  //           aS.log('CostosProductos - useEffect - paginatedProducto', paginatedProducto);
  //         }
  //       }
  //     });
  //   }
  // }, [selected]);

  return (
    <Paper sx={{ width: '100%vw', overflow: 'hidden' }}>
      <TableContainer sx={{ paddingTop: '100px', maxHeight: '100vh' }}>
        <AppBar position="fixed" color="secondary" sx={{ top: '48px' }}>
          <Toolbar>
            <Grid container justifyContent="space-between" alignItems="center" sx={{ paddingX: '10px' }}>
              <Grid>
                <Button variant="contained" color="success" sx={{ marginX: '5px' }} onClick={exportToCSV}>
                  Exportar a csv
                </Button>
                <Button variant="outlined" color="success" sx={{ marginX: '5px' }} onClick={getProducts}>
                  Actualizar
                </Button>
              </Grid>
              <Grid>
                <TablePagination
                  rowsPerPageOptions={[50, 100, 500, 1000]}
                  component="div"
                  count={sortedProductos.length}
                  rowsPerPage={rowsPerPage}
                  page={page}
                  onPageChange={handleChangePage}
                  onRowsPerPageChange={handleChangeRowsPerPage}
                />
              </Grid>
            </Grid>
          </Toolbar>
        </AppBar>
        <Table sx={{ minWidth: 650 }} size="small" stickyHeader>
          <TableHead>
            <TableRow>
              <TableCell padding="checkbox">
                <Checkbox
                  indeterminate={selected.size > 0 && selected.size < paginatedProductos.length}
                  checked={selected.size === paginatedProductos.length}
                  onChange={handleSelectAllClick}
                />
              </TableCell>
              {headCells.map((headCell: any) => (
                <TableCell key={headCell.id} align={headCell.numeric ? 'right' : 'left'}>
                  <Stack>
                    <Box>
                      <TableSortLabel active={!!orderBy[headCell.id]} direction={orderBy[headCell.id]} onClick={() => handleOrderClick(headCell)}>
                        <Typography noWrap variant="caption" sx={{ fontWeight: 'bold' }}>
                          {headCell.label}
                        </Typography>
                        {orderBy[headCell.id] && (
                          <Box component="span" sx={visuallyHidden}>
                            {orderBy[headCell.id] === 'desc' ? 'sorted descending' : 'sorted ascending'}
                          </Box>
                        )}
                      </TableSortLabel>
                    </Box>
                    <TextField
                      size="small"
                      variant="outlined"
                      name={headCell.id}
                      value={inputValues[headCell.id] || ''}
                      onChange={handleInputChange}
                      onKeyDown={handleFilterApply}
                      placeholder={`${headCell.label}`}
                    />
                  </Stack>
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {paginatedProductos.length > 0 ? (
              paginatedProductos.map((product: any, productIndex: number) => (
                <React.Fragment key={`productIndex${product.id}${productIndex}`}>
                  <TableRow hover>
                    <TableCell padding="checkbox">
                      <Checkbox checked={selected.has(product.id)} onChange={() => handleClick(product.id)} />
                    </TableCell>
                    <TableCell
                      onDoubleClick={() => {
                        setOverAllWidth(!overAllWidth);
                      }}
                    >
                      <Box sx={{ width: overAllWidth ? '100%' : '350px', overflow: 'hidden' }}>
                        <Typography variant="caption" noWrap>{`${product.name}`}</Typography>
                      </Box>
                    </TableCell>
                    <TableCell align="right">
                      <Typography variant="caption">{`${ftC(product.costTotal)}`}</Typography>
                    </TableCell>
                    <TableCell align="right">
                      <Typography variant="caption">{`${ftC(product.saleAmountTotal)}`}</Typography>
                    </TableCell>
                    <TableCell align="right">
                      <Typography variant="caption">{`${ftC(product.profitAT)}`}</Typography>
                    </TableCell>
                    <TableCell align="center">
                      <Typography variant="caption" color={product.hasNegativeProfit ? colors.red[900] : colors.grey[900]}>{`${
                        product.hasNegativeProfit ? 'negativo' : 0
                      }`}</Typography>
                    </TableCell>
                    <TableCell align="right">
                      <Typography variant="caption">{`${product.profitPercent?.toFixed(2) || 0}%`}</Typography>
                    </TableCell>
                    <TableCell align="right">
                      <Typography variant="caption">{`${product.lowestProfit?.toFixed(2) || 0}%`}</Typography>
                    </TableCell>
                    <TableCell>
                      <Typography variant="caption" noWrap>{`${product.lowestProfitOperation?.oper} : ${product.lowestProfitOperation?.data}`}</Typography>
                    </TableCell>
                  </TableRow>
                  {product.operations && (
                    <TableRow>
                      <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={8}>
                        <Collapse in={selected.has(product.id)} timeout="auto" unmountOnExit>
                          <Box sx={{ margin: 1 }}>
                            <ResponsiveContainer width="100%" height={200}>
                              <LineChart data={product.peridodicOper}>
                                <Line type="monotone" dataKey="saleQty" stroke="#124559" strokeWidth={2} dot={false} />
                                <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                                <Tooltip />
                                <Legend />
                                <XAxis dataKey="date" />
                                <YAxis />
                              </LineChart>
                            </ResponsiveContainer>
                            <ResponsiveContainer width="100%" height={200}>
                              <LineChart data={product.peridodicOper}>
                                <Line type="monotone" dataKey="profitAT" stroke="#f95738" name="profitAT $" dot={false} />
                                <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                                <Tooltip />
                                <Legend />
                                <XAxis dataKey="date" />
                                <YAxis />
                              </LineChart>
                            </ResponsiveContainer>
                            <ResponsiveContainer width="100%" height={200}>
                              <LineChart data={product.operations}>
                                <Line type="monotone" dataKey="piceAvgPp" stroke="#2e2520" strokeWidth={2} name="piceAvgPp $" />
                                <Line type="monotone" dataKey="priceMax" stroke="#037971" name="priceMax $" />
                                <Line type="monotone" dataKey="priceMin" stroke="#ff5a5f" name="priceMin $" />
                                <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                                <Tooltip />
                                <Legend />
                                <XAxis dataKey="name" />
                                <YAxis />
                              </LineChart>
                            </ResponsiveContainer>
                            <Grid container flexDirection="row" justifyContent="stretch">
                              <Grid item flex={1}>
                                <ResponsiveContainer width="100%" height={200}>
                                  <LineChart data={product.operations}>
                                    <Line type="monotone" dataKey="profitAvgPp" stroke="#124559" strokeWidth={2} name="profitAvgPp $" />
                                    <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                                    <Tooltip />
                                    <Legend />
                                    <XAxis dataKey="name" />
                                    <YAxis />
                                  </LineChart>
                                </ResponsiveContainer>
                              </Grid>
                              <Grid item flex={1}>
                                <ResponsiveContainer width="100%" height={200}>
                                  <LineChart data={product.operations}>
                                    <Line type="monotone" dataKey="profitPercent" stroke="#f95738" name="profitPercent %" />
                                    <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                                    <Tooltip />
                                    <Legend />
                                    <XAxis dataKey="name" />
                                    <YAxis />
                                  </LineChart>
                                </ResponsiveContainer>
                              </Grid>
                            </Grid>

                            <ResponsiveContainer width="100%" height={200}>
                              <LineChart data={product.operations}>
                                <Line type="monotone" dataKey="profitAT" stroke="#00a9e0" strokeWidth={3} name="profitAT $" />
                                <Line type="monotone" dataKey="saleAmount" stroke="#8ac926" strokeWidth={2} name="saleAmount $" />
                                <Line type="monotone" dataKey="costTotal" stroke="#d81159" name="costTotal $" />
                                <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                                <Tooltip />
                                <Legend />
                                <XAxis dataKey="name" />
                                <YAxis />
                              </LineChart>
                            </ResponsiveContainer>
                            <ResponsiveContainer width="100%" height={200}>
                              <LineChart data={product.operations}>
                                <Line type="monotone" dataKey="salePerDay" stroke="#3f88c5" strokeWidth={2} />
                                <Line type="monotone" dataKey="saleQtyPerDayTotalAVg" stroke="#136f63" />
                                <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                                <Tooltip />
                                <Legend />
                                <XAxis dataKey="name" />
                                <YAxis />
                              </LineChart>
                            </ResponsiveContainer>
                            <ResponsiveContainer width="100%" height={200}>
                              <LineChart data={product.operations}>
                                <Line type="monotone" dataKey="purchasedQty" stroke="#080708" strokeWidth={2} />
                                <Line type="monotone" dataKey="saleQty" stroke="#3f88c5" strokeWidth={2} />
                                <Line type="monotone" dataKey="purchaseQtyTotalAvg" stroke="#d81159" strokeWidth={1} />
                                <Line type="monotone" dataKey="saleQtyTotalAvg" stroke="#fbaf00" strokeWidth={1} />
                                <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                                <Tooltip />
                                <Legend />
                                <XAxis dataKey="name" />
                                <YAxis />
                              </LineChart>
                            </ResponsiveContainer>
                          </Box>
                        </Collapse>
                      </TableCell>
                    </TableRow>
                  )}
                </React.Fragment>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={headCells.length + 1} align="center">
                  Cargando datos...
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
});

export default CostosProductos;
