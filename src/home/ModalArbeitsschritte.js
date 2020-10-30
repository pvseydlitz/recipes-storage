import React, { useState } from 'react'
import styled from 'styled-components/macro'

import closeIcon from '../icons/close.svg'
import arrowRight from '../icons/arrowRight.svg'
import arrowLeft from '../icons/arrowLeft.svg'

export default function ModalArbeitsschritte({
  arbeitsschritt,
  index,
  recipe,
}) {
  const [showTimer, setShowTimer] = useState(false)

  function showNextModal() {
    const modal = document.getElementById(`modalStep${index + 1}${recipe._id}`)
    modal.style.display = 'none'
    if (recipe.arbeitsschritte.length > index + 1) {
      const modal2 = document.getElementById(
        `modalStep${index + 2}${recipe._id}`
      )
      modal2.style.display = 'block'
    } else {
      closeModal()
    }
  }
  function showLastModal() {
    const modal = document.getElementById(`modalStep${index + 1}${recipe._id}`)
    modal.style.display = 'none'
    if (index !== 0) {
      const modal2 = document.getElementById(`modalStep${index}${recipe._id}`)
      modal2.style.display = 'block'
    } else {
      const modal2 = document.getElementById(`modalDetails${recipe._id}`)
      modal2.style.display = 'block'
    }
  }
  function closeModal() {
    const modal = document.getElementById(`modalStep${index + 1}${recipe._id}`)
    modal.style.display = 'none'
  }

  function setMinutes(event) {
    const minutesSpan = document.getElementById('minutes')
    minutesSpan.innerHTML = event.target.value
  }
  function setSeconds(event) {
    const secondsSpan = document.getElementById('seconds')
    secondsSpan.innerHTML = event.target.value
  }

  let intervalID = ''
  function startTimer() {
    const startButton = document.getElementById('startButton')
    const seconds = document.getElementById('seconds')
    const minutes = document.getElementById('minutes')
    if (startButton.innerHTML === 'Start') {
      countSeconds()
      startButton.innerHTML = 'Stop'
    } else if (startButton.innerHTML === 'Stop') {
      clearInterval(intervalID)
      seconds.innerHTML = '00'
      minutes.innerHTML = '00'
      startButton.innerHTML = 'Start'
    }
  }
  function countSeconds() {
    intervalID = setInterval(function () {
      const startButton = document.getElementById('startButton')
      const seconds = document.getElementById('seconds')
      const minutes = document.getElementById('minutes')
      if (seconds.innerHTML > 0) {
        seconds.innerHTML = seconds.innerHTML - 1
      } else if (Number(seconds.innerHTML) === 0 && minutes.innerHTML > 0) {
        minutes.innerHTML = minutes.innerHTML - 1
        seconds.innerHTML = 59
      } else if (
        Number(seconds.innerHTML) === 0 &&
        Number(minutes.innerHTML) === 0
      ) {
        alert('timer finish')
        clearInterval(intervalID)
        startButton.innerHTML = 'Start'
      }
    }, 1000)
  }
  function stopTimer() {
    const pauseButton = document.getElementById('pauseButton')
    const startButton = document.getElementById('startButton')
    if (startButton.innerHTML === 'Stop') {
      if (pauseButton.innerHTML === 'Pause') {
        clearInterval(intervalID)
        pauseButton.innerHTML = 'Weiter'
      } else if (pauseButton.innerHTML === 'Weiter') {
        countSeconds()
        pauseButton.innerHTML = 'Pause'
      }
    }
  }

  return (
    <OuterWrapper id={`modalStep${index + 1}${recipe._id}`}>
      <FlexBox>
        <Wrapper>
          <Title>Arbeitsschritt {index + 1}</Title>
          <CloseIcon src={closeIcon} onClick={closeModal}></CloseIcon>
          <ArrowRight src={arrowRight} onClick={showNextModal}></ArrowRight>
          <ArrowLeft src={arrowLeft} onClick={showLastModal}></ArrowLeft>
          <Text>{arbeitsschritt}</Text>
          <FlexBox style={{ margin: '0' }}>
            <Button onClick={() => setShowTimer(!showTimer)}>Timer</Button>
            {showTimer ? (
              <Grid>
                <Input
                  type="number"
                  placeholder="Minuten"
                  onChange={(event) => setMinutes(event)}
                ></Input>
                <Input
                  type="number"
                  placeholder="Sekunden"
                  onChange={(event) => setSeconds(event)}
                ></Input>
                <Timer>
                  <span id="minutes">00</span>:<span id="seconds">00</span>
                </Timer>
                <Button
                  style={{ width: '70px' }}
                  id="startButton"
                  onClick={startTimer}
                >
                  Start
                </Button>
                <Button
                  style={{ width: '70px' }}
                  id="pauseButton"
                  onClick={stopTimer}
                >
                  Pause
                </Button>
              </Grid>
            ) : (
              ''
            )}
          </FlexBox>
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
  flex-direction: column;
  margin: 15px;
`
const Wrapper = styled.div`
  background: lightgrey;
  padding: 15px;
  width: 100%;
  position: relative;
  border-radius: 15px;
`
const Title = styled.h3`
  margin: 0;
  margin-bottom: 5px;
  font-weight: bold;
`
const Text = styled.p`
  font-size: 14px;
  margin: 10px 0;
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
  bottom: 5px;
  cursor: pointer;
`
const ArrowLeft = styled.img`
  width: 30px;
  position: absolute;
  left: 5px;
  bottom: 5px;
  cursor: pointer;
`
const Grid = styled.div`
  display: grid;
  grid-template-rows: 20px 40px 30px;
  grid-template-columns: 1fr 1fr;
  grid-gap: 10px;
  justify-items: center;
`
const Button = styled.div`
  width: 150px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  background: grey;
  color: white;
`
const Input = styled.input`
  display: inline-block;
  height: 20px;
  width: 70px;
  border: solid 2px black;
`
const Timer = styled.div`
  width: 100px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 2px solid black;
  color: black;
  grid-column: 1 / 3;
`
