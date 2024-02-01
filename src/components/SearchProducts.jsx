import {
    Card,
    CardActionArea,
    CardContent,
    CardMedia,
    Typography,
    Grid,
    Container,
    Button,
    TextField,
    Slider,
    Box,
    FormControl,
    InputLabel,
    Select,
    MenuItem,
} from '@mui/material';

import Advantix from '../assets/images/products/Advantix.webp';
import Bolf from '../assets/images/products/Bolf.jpg';
import Drontal from '../assets/images/products/Drontal.jpg';
import essec from '../assets/images/products/essec.gif';
import neutrolor from '../assets/images/products/neutrolor.jpg';
import Procox from '../assets/images/products/Procox.jpg';
import Profender from '../assets/images/products/Profender.jpeg';
import Seresto from '../assets/images/products/Seresto.jpeg';
import Veraflox from '../assets/images/products/Veraflox.jpg';
import vetridem from '../assets/images/products/vetridem.jpg';

import { useState } from 'react';

const productos = [
    {
        id: 1,
        nombre: 'Advantix',
        descripcion: 'Descripción del producto 1. Detalles adicionales sobre el producto.',
        precio: 19.99,
        disponibles: 10,
        imagen: Advantix,
        mascota: 'perro',
    },
    {
        id: 2,
        nombre: 'Bolfo',
        descripcion: 'Descripción del producto 2. Detalles adicionales sobre el producto.',
        precio: 29.99,
        disponibles: 5,
        imagen: Bolf,
        mascota: 'gato',
    },
    {
        id: 3,
        nombre: 'Drontal',
        descripcion: 'Descripción del producto 3. Detalles adicionales sobre el producto.',
        precio: 39.99,
        disponibles: 15,
        imagen: Drontal,
        mascota: 'perro',
    },
    {
        id: 4,
        nombre: 'Essec',
        descripcion: 'Descripción del producto 4. Detalles adicionales sobre el producto.',
        precio: 49.99,
        disponibles: 15,
        imagen: essec,
        mascota: 'perro',
    },
    {
        id: 5,
        nombre: 'Neutrolor',
        descripcion: 'Descripción del producto 5. Detalles adicionales sobre el producto.',
        precio: 59.99,
        disponibles: 15,
        imagen: neutrolor,
        mascota: 'perro',
    },{
        id: 6,
        nombre: 'Procox',
        descripcion: 'Descripción del producto 6. Detalles adicionales sobre el producto.',
        precio: 69.99,
        disponibles: 15,
        imagen: Procox,
        mascota: 'perro',
    },
    {
        id: 7,
        nombre: 'Profender',
        descripcion: 'Descripción del producto 7. Detalles adicionales sobre el producto.',
        precio: 79.99,
        disponibles: 15,
        imagen: Profender,
        mascota: 'gato',
    },
    {
        id: 8,
        nombre: 'Seresto',
        descripcion: 'Descripción del producto 8. Detalles adicionales sobre el producto.',
        precio: 89.99,
        disponibles: 15,
        imagen: Seresto,
        mascota: 'gato',
    },
    {
        id: 9,
        nombre: 'Veraflox',
        descripcion: 'Descripción del producto 9. Detalles adicionales sobre el producto.',
        precio: 99.99,
        disponibles: 15,
        imagen: Veraflox,
        mascota: 'gato',
    },
    {
        id: 10,
        nombre: 'vetridem',
        descripcion: 'Descripción del producto 10. Detalles adicionales sobre el producto.',
        precio: 100.00,
        disponibles: 15,
        imagen: vetridem,
        mascota: 'gato',
    },
];

const marks = [
    {
        value: 0,
        label: '$ 0',
    },
    {
        value: 100,
        label: '$ 100',
    },
];

const SearchProducts = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [minPrice, setMinPrice] = useState(0);
    const [maxPrice, setMaxPrice] = useState(100);
    const [filteredProductos, setFilteredProductos] = useState([]);
    const [showAllProducts, setShowAllProducts] = useState(true);
    const [sortBy, setSortBy] = useState('');

    const handleMinMaxPriceChange = (event, newValue) => {
        setMinPrice(newValue[0]);
        setMaxPrice(newValue[1]);
    };

    const handleSearchChange = (event) => {
        const query = event.target.value.toLowerCase();
        setSearchQuery(query);

        const filtered = productos.filter(
        (producto) =>
            producto.nombre.toLowerCase().includes(query) &&
            producto.precio >= minPrice &&
            producto.precio <= maxPrice &&
            (showAllProducts || (sortBy === '' || producto.mascota === sortBy))
        );

        setFilteredProductos(filtered);
        setShowAllProducts(false);
    };

    const handleSortChange = (event) => {
        const selectedSortBy = event.target.value;
        setSortBy(selectedSortBy);
    };

    const applyFilters = () => {
        const filtered = productos.filter(
        (producto) =>
            producto.nombre.toLowerCase().includes(searchQuery) &&
            producto.precio >= minPrice &&
            producto.precio <= maxPrice &&
            (showAllProducts || (sortBy === '' || producto.mascota === sortBy))
        );

        setFilteredProductos(filtered);
        setShowAllProducts(false);
    };

return (
        <Container maxWidth="md" style={{ marginTop: '20px', marginBottom: '20px' }}>
            <div style={{ marginBottom: '20px', textAlign: 'center' }}>
                <TextField
                fullWidth
                label="Buscar productos"
                variant="outlined"
                value={searchQuery}
                onChange={handleSearchChange}
                style={{ marginBottom: '20px' }}
                />
                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <Typography id="track-inverted-range-slider" gutterBottom>
                    Rango de precios
                    </Typography>
                    <Slider
                    style={{ width: '300px' }}
                    track="inverted"
                    aria-labelledby="track-inverted-range-slider"
                    getAriaValueText={(value) => `${value}`}
                    value={[minPrice, maxPrice]}
                    onChange={handleMinMaxPriceChange}
                    marks={marks}
                    />
                </div>
                <Box sx={{ minWidth: 400 }}>
                    <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">Filtrar productos por mascota:</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={sortBy}
                            label="Ordenar por"
                            onChange={handleSortChange}
                        >
                            <MenuItem value="">Sin filtrar</MenuItem>
                            <MenuItem value="perro">Perros</MenuItem>
                            <MenuItem value="gato">Gatos</MenuItem>
                        </Select>
                    </FormControl>
                </Box>
                </div>
                <Button variant="contained" onClick={applyFilters}>
                Aplicar filtros
                </Button>
            </div>
    <Grid container spacing={3}>
                {(showAllProducts ? productos : filteredProductos).map((producto) => (
                <Grid item key={producto.id} xs={20} sm={6} md={4}>
                    <Card>
                    <CardActionArea style={{ display: 'flex', flexDirection: 'column', background: 'transparent' }}>
                        <CardMedia component="img" alt={producto.nombre} height="160" image={producto.imagen} />
                        <CardContent style={{ flex: '1' }}>
                        <Typography variant="h6" component="div">
                            {producto.nombre}
                            <Button
                            size="small"
                            style={{ marginLeft: '37%', margin: '10px', backgroundColor: 'orange', color: 'white' }}
                            >
                            Al carrito
                            </Button>
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            {producto.descripcion}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Precio: $ <span style={{color: "#ffa500"}}>{producto.precio}</span>
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Mascota: {producto.mascota}
                        </Typography>
                        </CardContent>
                    </CardActionArea>
                    </Card>
                </Grid>
                ))}
            </Grid>
        </Container>
    );
};

export default SearchProducts;