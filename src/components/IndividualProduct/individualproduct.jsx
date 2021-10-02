import React from 'react'
import './individualproduct.css'
import Header from '../Header/header'
import { useParams } from 'react-router-dom'
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import shoeData from '../JSON Data/shoe.json'
import { VscStarFull, VscStarEmpty } from 'react-icons/vsc'
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';


function IndividualProduct() {


    const Item = styled(Paper)(({ theme }) => ({
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    }));

    const key = useParams().key
    return (
        <div>
            <Header />
            <div className='Individualproduct'>
                <Grid container spacing={1}>
                    <Grid item lg={6} sm={12} xs={12}>
                        <Item className='individualImageDiv'>
                            <img src={shoeData[useParams().key].image} width='90%' alt="" />
                        </Item>
                    </Grid>
                    <Grid item lg={6} sm={12} xs={12} >
                        <Item className='individualTextDiv'>
                            <h1 className='individualTextDivName'>{shoeData[key].name}</h1>
                            <p className='individualTextDivTitle'>{shoeData[key].title}</p>
                            <h1 className='individualTextDivPrice'>{`$  ${shoeData[key].price}.00`}</h1>
                            {
                                shoeData[key].stars === 1 ?
                                    <div className='starIconDiv'>
                                        <VscStarFull className='IndividualstarIcon' />
                                        <VscStarEmpty className='IndividualstarIcon' />
                                        <VscStarEmpty className='IndividualstarIcon' />
                                        <VscStarEmpty className='IndividualstarIcon' />
                                        <VscStarEmpty className='IndividualstarIcon' />
                                    </div>
                                    :
                                    shoeData[key].stars === 2 ?
                                        <div className='starIconDiv'>
                                            <VscStarFull className='IndividualstarIcon' />
                                            <VscStarFull className='IndividualstarIcon' />
                                            <VscStarEmpty className='IndividualstarIcon' />
                                            <VscStarEmpty className='IndividualstarIcon' />
                                            <VscStarEmpty className='IndividualstarIcon' />
                                        </div>
                                        :
                                        shoeData[key].stars === 3 ?
                                            <div className='starIconDiv'>
                                                <VscStarFull className='IndividualstarIcon' />
                                                <VscStarFull className='IndividualstarIcon' />
                                                <VscStarFull className='IndividualstarIcon' />
                                                <VscStarEmpty className='IndividualstarIcon' />
                                                <VscStarEmpty className='starIcon' />
                                            </div>
                                            :
                                            shoeData[key].stars === 4 ?
                                                <div className='starIconDiv'>
                                                    <VscStarFull className='IndividualstarIcon' />
                                                    <VscStarFull className='IndividualstarIcon' />
                                                    <VscStarFull className='IndividualstarIcon' />
                                                    <VscStarFull className='IndividualstarIcon' />
                                                    <VscStarEmpty className='IndividualstarIcon' />
                                                </div>
                                                :
                                                shoeData[key].stars === 5 ?
                                                    <div className='starIconDiv'>
                                                        <VscStarFull className='IndividualstarIcon' />
                                                        <VscStarFull className='IndividualstarIcon' />
                                                        <VscStarFull className='IndividualstarIcon' />
                                                        <VscStarFull className='IndividualstarIcon' />
                                                        <VscStarFull className='IndividualstarIcon' />
                                                    </div> :
                                                    false

                            }
                            <p className='addToCart'>Add To Cart <AddShoppingCartIcon fontSize='large' /></p>
                        </Item>
                    </Grid>

                </Grid>
            </div>
        </div>
    )
}

export default IndividualProduct