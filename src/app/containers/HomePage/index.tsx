import React from 'react'
import styled from 'styled-components'

interface HomePagePropsInterface {

}

const Container = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`

export function HomePage(props: HomePagePropsInterface){
    return (
        <Container>
            <h1>Hot Anime</h1>
        </Container>
    )
}