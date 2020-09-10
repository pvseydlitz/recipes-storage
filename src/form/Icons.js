import React from 'react'
import styled from 'styled-components/macro'
import PropTypes from 'prop-types'
import plusIcon from '../icons/plus.svg'
import minusIcon from '../icons/minus.svg'

export default function Icons({ show, hide }) {
  return (
    <Wrapper>
      <Icon src={plusIcon} onClick={show}></Icon>
      <Icon src={minusIcon} onClick={hide}></Icon>
    </Wrapper>
  )
}
Icons.propTypes = {
  show: PropTypes.func,
  hide: PropTypes.func,
}

const Icon = styled.img`
  cursor: pointer;
  width: 30px;
  margin-top: 10px;
`
const Wrapper = styled.div`
  display: inline-block;
`
