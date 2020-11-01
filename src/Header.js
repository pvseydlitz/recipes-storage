import React from 'react'
import styled from 'styled-components/macro'
import PropTypes from 'prop-types'

import filterIcon from './icons/filter.svg'

export default function Header({ title, showFilter, showFilterMenu }) {
  return (
    <Wrapper id="header">
      {title}
      {showFilter ? (
        <Icon src={filterIcon} onClick={showFilterMenu}></Icon>
      ) : (
        ''
      )}
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  border-bottom: 2px black solid;
  font-size: 20px;
  height: 50px;
  position: relative;
`
const Icon = styled.img`
  cursor: pointer;
  width: 30px;
  position: absolute;
  top: 10px;
  right: 15px;
`
Header.propTypes = {
  title: PropTypes.string,
  showFilter: PropTypes.bool,
}
