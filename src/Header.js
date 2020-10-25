import React from 'react'
import styled from 'styled-components/macro'
import PropTypes from 'prop-types'

export default function Header({title}) {
return <Wrapper id="header">{title}</Wrapper>
}

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  border-bottom: 2px black solid;
  font-size: 20px;
  height: 50px;
`
Header.propTypes = {
  title: PropTypes.string,
}
