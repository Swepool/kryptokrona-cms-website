import * as React from 'react'
import styled from "@emotion/styled";
import {useEffect} from "react";
import {color} from "../../theme/colors";

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
  color: ${color.green};
  font-weight: 200;
`
const Goal = styled.div`
    display: flex;
    align-items: center;
    height: 10px;
    background-color: rgba(255,255,255,0.1);
    border-radius: 30px;
    width: 100%;
    padding: 2px;
`
const Progress = styled.div`
  animation: load 3s normal forwards;
  box-shadow: 0 10px 40px -10px ${color.white};
  background-color: ${color.white80};
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
        let goal = 1000000

        //Add commas to goal before render
        function numberWithCommas(x) {
            return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        }

        //***Start***
//Get height from node
        function start() {
            fetch(url)
                .then(res => res.json())
                .then(data => {
                    if(data.height > goal) {
                        goal += 100000
                    }
                    render(data.height, goal)
                    document.getElementById('blocks').textContent = numberWithCommas(goal) + " Blocks"
                })
        }

//Calculate and render
        function render(height, goal) {

            //Calc percentage
            const percentageToGoal = (((height / goal) * 100).toFixed(2)) + "%"

            //Render
            document.getElementById('percentage').textContent = percentageToGoal
            document.getElementById('progress').style.width = percentageToGoal
            //timeText.textContent = daysLeft
        }

//Start
        start()

    })

    return(
        <Wrapper>
            <TextWrapper>
                <Title id="blocks"/>
                <Percentage id="percentage"/>
            </TextWrapper>

            <Goal>
                <Progress id="progress"></Progress>
            </Goal>
        </Wrapper>

    )
}

export default Countdown