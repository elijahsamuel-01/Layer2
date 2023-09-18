import React from "react";
import {RouterProvider} from "react-router-dom"
import { mainRouter } from "./Router/mainRouter";
import styled from "styled-components";


const  App = () =>{

  return (
    <div>
      <Container>
        <RouterProvider 
        router={mainRouter}
        />
      </Container>
    </div>
  )
}

export default App;

const Container =styled.div`

`