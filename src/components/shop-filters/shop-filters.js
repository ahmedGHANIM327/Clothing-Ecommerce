import './shop-filters.scss'
import { useState ,useEffect } from 'react';

import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import FormInput from '../form-input/form-input';
import Button from '../button/button';

const ShopFilters = ({onChangeCategorie,categorieValue,productaNameSearch,handleChangeProduct}) => {

    const [largeur,setLargeur] = useState(window.innerWidth);

    useEffect(() => {
        const changeLargeur = () => {
            setLargeur(window.innerWidth);
        }

        window.addEventListener('resize' , changeLargeur);

        return () =>
        {
            window.removeEventListener('resize',changeLargeur);
        }
    }, [])

    const [showFilters,setShowFilters] = useState(false);

    const handleShowFilters = () => {
        setShowFilters(!showFilters)
    }

    useEffect(() => {
        setShowFilters(false)
    }, [largeur])

    return (<div className='shop_filters_container'>
        {largeur <= 800 && <Button onClick={handleShowFilters}>{showFilters ? "Hide Filters" : "Show Filters"}</Button>}
        <div className={showFilters ? 'shop_filters_bloc mobile_filters show_filters' : 'shop_filters_bloc mobile_filters'}>
            <p>Filters :</p>
            <div className='categories_filter'>
                <FormControl>
                    <FormLabel id="demo-radio-buttons-group-label">Categories</FormLabel>
                    <RadioGroup
                        aria-labelledby="demo-radio-buttons-group-label"
                        defaultValue="all"
                        name="radio-buttons-group"
                        value={categorieValue}
                        onChange={onChangeCategorie}
                    >
                        <FormControlLabel value="all" control={<Radio />} label="ALL" />
                        <FormControlLabel value="hats" control={<Radio />} label="Hats" />
                        <FormControlLabel value="sneakers" control={<Radio />} label="Sneakers" />
                        <FormControlLabel value="jackets" control={<Radio />} label="Jackets" />
                        <FormControlLabel value="mens" control={<Radio />} label="Mens" />
                    </RadioGroup>
                </FormControl>
            </div>

            <div className='search_filter'>
                <FormControl>
                    <FormLabel id="demo-radio-buttons-group-label">Product Name</FormLabel>
                    <FormInput
                        type='text'
                        required
                        onChange={handleChangeProduct}
                        name='product_name'
                        value={productaNameSearch}
                    />
                </FormControl>
            </div>
        </div>
    </div>)
}

export default ShopFilters