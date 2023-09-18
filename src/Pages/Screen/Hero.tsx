import React from 'react'
import styled from "styled-components"
import img from "../../assets/bg-1.jpg"

const Hero = () => {
  return (
    <div>
    <Container>
      <Dark>
        <Wrapper>
        <Left>
          <h2>BEST WAY TO <span>PRESENT</span> YOUR APP</h2>
          <p>We ensure quality & support. People love us & we love them. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>

          <Holder>
            <Button bg='#e74c3c' wd='160px' bd='none' ml=''>Learn more</Button>
          <Button bg='transparent' wd='180px' bd='1px solid #fff' ml='14px'>Download Now</Button>
          </Holder>
        </Left>
        <Right>
          <Img src='https://zozothemes.com/html/layer/demo/images/about-us/about-1.png'/>
        </Right>
     </Wrapper>
      </Dark>
    </Container>
    </div>
  )
}

export default Hero

const Dark = styled.div`
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
    padding: 100px 0px;
  justify-content: center;
    display: flex;
`
const Holder = styled.div`
  display: flex;
  margin-top: 35px;

`
const Button = styled.button<{bg: string, wd: string, bd: string, ml: string}>`
  width: ${({ wd }) => wd};
  background-color: ${({ bg }) => bg};
  border: ${({ bd }) => bd};
  margin-left: ${({ ml }) => ml};
  height: 50px;
  border-radius: 100px;
  cursor: pointer;
  color: #fff;
  cursor: pointer;
  &:hover{
    color: black;
    background-color: white;
  }
`
const Img = styled.img`
  height: 95%;
  @media screen and (max-width: 768px) {
      height: 35%;
      width:90%;
  }
  @media screen and (max-width: 320px) {
      height: 300px;
      width: 90%;
  }
`
const Right = styled.div`
  width: 55%;
  display: flex;
  justify-content: center;
  @media screen and (max-width: 768px) {
      width: 100%;
      margin-top: 60px;
      justify-content: center;
      display: flex;
      /* background-color: red; */
  }
`
const Left = styled.div`
  width: 40%;
  display: flex;
  flex-direction: column;
  h2{
    color: #fff;
    font-size: 37px;
    font-weight: 600;
    margin-bottom: 25px;
    @media screen and (max-width: 768px) {
      font-size: 30px;
    }
    span{
      color:#e74c3c ;
    }
  }
  p{
    color: #fff;
    margin: 0;
    line-height: 31px;
    @media screen and (max-width: 768px) {
      font-size: 13px;
      width: 80%;
    }
  }
  @media screen and (max-width: 768px) {
    width: 100%;
  }
`
const Wrapper = styled.div`
  width: 90%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 10px;
  flex-wrap: wrap;
`

const Container = styled.div`
  width: 100%;
  height: 100%;
  /* background-color: red; */
  background-image: url(${img});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  background-attachment: fixed;
`