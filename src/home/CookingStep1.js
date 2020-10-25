import React from 'react'
import styled from 'styled-components/macro'

import closeIcon from '../icons/close.svg'
import arrowRight from '../icons/arrowRight.svg'

export default function CookingStep1({recipe}) {
    function closeModal() {
        const modal = document.getElementById('modalStep1')
        modal.style.display = 'none'
    }
    return (
        <OuterWrapper id="modalStep1">
            <FlexBox>
                <Wrapper>
                    <Headline>{recipe.titel}</Headline>
                    <CloseIcon src={closeIcon} onClick={closeModal}></CloseIcon>
                    <ArrowRight src={arrowRight}></ArrowRight>
                    <Headline>Benötigte Zutaten</Headline>
                    <ul>
                    {recipe.zutaten.map((zutat, index) => (
                        <li key={index}>
                        {zutat.menge} {zutat.einheit} {zutat.produkt}
                        </li>
                    ))}
                    </ul>
                </Wrapper>
            </FlexBox>
        </OuterWrapper>
    )
}
const OuterWrapper = styled.div`
display: none;
background: white;
z-index: 1;
position: fixed; 
top: 0;
left: 0;
right: 0;
bottom: 0px;
`
const FlexBox = styled.div`
display: flex;
justify-content: center; 
align-items: center; 
height: 100%;
`
const Wrapper = styled.div`
background: lightgrey;
margin: 15px;
padding: 10px;
width: 100%;
position: relative;
border-radius: 15px;
`
const Headline = styled.h3`
margin: 0;
`
const CloseIcon = styled.img`
width: 30px;
position: absolute;
top: 5px;
right: 5px;
cursor: pointer;
`
const ArrowRight = styled.img`
width: 30px;
position: absolute;
right: 5px;
top: 40%;
cursor: pointer;
`