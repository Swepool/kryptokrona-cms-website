import * as React from 'react'
import styled from "@emotion/styled";
import {useEffect} from "react";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-bottom: 20px;
`

const TextWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 1400px;
`

const Title = styled.h3`
  font-weight: 400;
`
const Percentage = styled.h3`
  font-family: 'Roboto Mono', monospace;
  color: #979797;
  font-weight: 200;
`
const Time = styled.h3`
  font-family: 'Roboto Mono', monospace;
  color: #979797;
  font-weight: 200;
`
const Goal = styled.h3`
    display: flex;
    align-items: center;
    height: 10px;
    background-color: rgba(255,255,255,0.1);
    border-radius: 30px;
    width: 100%;
    padding: 2px;
`
const Progress = styled.h3`
  animation: load 3s normal forwards;
  box-shadow: 0 10px 40px -10px #fff;
  background-color: rgba(255, 255, 255, 0.795);
  height: 10px;
  border-radius: 10em;
  width: 8%;
  transition: all 3s;
`

const Countdown = () => {

    useEffect( () => {

        //Your node url (port and /getinfo)
        const url = 'https://swenode.org/api/getinfo'

        // Set goal to reach
        const goal = 1000000

        //HTML Elements
        const percentage = document.getElementById('percentage')
        const progressBar = document.getElementById('progress')
        const timeText = document.getElementById('time')

        //***Start***
//Get height from node
        function start() {
            fetch(url)
                .then(res => res.json())
                .then(data => {
                    render(data.height, goal)
                })
        }

//Calculate and render
        function render(height, goal) {

            //Calc percentage
            const percentageToGoal = (((height / goal) * 100).toFixed(2)) + "%"

            //Calc time left
            const blocksLeft = goal - height
            const timeleft = blocksLeft * 90
            const daysLeft = "est." + " " + (((timeleft / 60) / 60) / 24).toFixed(0) + " Days"


            //Render
            percentage.textContent = percentageToGoal
            progressBar.style.width = percentageToGoal
            //timeText.textContent = daysLeft

            //Just to check
            console.log('Success')
        }

//Start
        start()

    })

    return(
        <Wrapper>
            <TextWrapper>
                <Title>1,000,000 Blocks</Title>
                <Percentage id="percentage"/>
            </TextWrapper>

            <Goal>
                <Progress id="progress"></Progress>
            </Goal>
        </Wrapper>

    )
}

export default Countdown