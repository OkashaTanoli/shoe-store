import React from "react";
import './products.css'
import Header from '../Header/header'
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { VscStarFull, VscStarEmpty } from 'react-icons/vsc'
import shoeData from '../JSON Data/shoe.json'
import { Link } from "react-router-dom";

function Products() {

    const TextReduction = (data) => {
        if (data.length > 70) {
            const text = data.split('')
            let reduceData = '';
            for (var i = 0; i <= 60; i++) {
                reduceData += text[i]
            }
            let complete = reduceData + ' . . . '
            return complete
        }
        else {
            return data
        }
    }

    // const SetStars = (stars) => {

    //     if (stars === 1) {
    //         return (
    //             <div className='starIconDiv'>

    //             <VscStarFull className='starIcon' />
    //             <VscStarFull className='starIcon' />
    //             <VscStarFull className='starIcon' />
    //             <VscStarFull className='starIcon' />
    //             <VscStarEmpty className='starIcon' />
    //         )
    //     }
    // }

    const Item = styled(Paper)(({ theme }) => ({
        ...theme.typography.body2,
        padding: theme.spacing(1),
        // textAlign: 'center',
        color: theme.palette.text.secondary,
    }));

    // const dataSet =(shoeData)
    // console.log(Object.keys(shoeData))


    return (
        <div>
            <Header />

            <div className='productsDiv'>
                <Grid container spacing={5}>
                    {
                        Object.keys(shoeData).map((val) => {
                            return (

                                <Grid key={val} item xs={12} sm={6} lg={4}>
                                    <Link style={{textDecoration:'none'}} to={`/products/${val}`}>
                                        <Item className='card'>
                                            <div className='cardExtraDiv'></div>
                                            <div className='cardDivForPadding'>
                                                <div className='imageDiv'>

                                                    <img height='auto' width='100%' src={shoeData[val].image} style={{ color: 'white' }} alt="image" />
                                                </div>
                                                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                                    <h2 className='cardTitle'>{shoeData[val].name}</h2>
                                                    <h2 className='cardPrice'>{`$ ${shoeData[val].price} .00`}</h2>
                                                </div>
                                                {
                                                    shoeData[val].stars === 1 ?
                                                        <div className='starIconDiv'>
                                                            <VscStarFull className='starIcon' />
                                                            <VscStarEmpty className='starIcon' />
                                                            <VscStarEmpty className='starIcon' />
                                                            <VscStarEmpty className='starIcon' />
                                                            <VscStarEmpty className='starIcon' />
                                                        </div>
                                                        :
                                                        shoeData[val].stars === 2 ?
                                                            <div className='starIconDiv'>
                                                                <VscStarFull className='starIcon' />
                                                                <VscStarFull className='starIcon' />
                                                                <VscStarEmpty className='starIcon' />
                                                                <VscStarEmpty className='starIcon' />
                                                                <VscStarEmpty className='starIcon' />
                                                            </div>
                                                            :
                                                            shoeData[val].stars === 3 ?
                                                                <div className='starIconDiv'>
                                                                    <VscStarFull className='starIcon' />
                                                                    <VscStarFull className='starIcon' />
                                                                    <VscStarFull className='starIcon' />
                                                                    <VscStarEmpty className='starIcon' />
                                                                    <VscStarEmpty className='starIcon' />
                                                                </div>
                                                                :
                                                                shoeData[val].stars === 4 ?
                                                                    <div className='starIconDiv'>
                                                                        <VscStarFull className='starIcon' />
                                                                        <VscStarFull className='starIcon' />
                                                                        <VscStarFull className='starIcon' />
                                                                        <VscStarFull className='starIcon' />
                                                                        <VscStarEmpty className='starIcon' />
                                                                    </div>
                                                                    :
                                                                    shoeData[val].stars === 5 ?
                                                                        <div className='starIconDiv'>
                                                                            <VscStarFull className='starIcon' />
                                                                            <VscStarFull className='starIcon' />
                                                                            <VscStarFull className='starIcon' />
                                                                            <VscStarFull className='starIcon' />
                                                                            <VscStarFull className='starIcon' />
                                                                        </div> :
                                                                        false

                                                }

                                                <div className='cardText'>{TextReduction(shoeData[val].title)}</div>
                                            </div>
                                        </Item>
                                    </Link>

                                </Grid>

                            )
                        })
                    }

                </Grid>

            </div>

        </div>
    )
}
export default Products