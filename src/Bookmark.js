import styled from 'styled-components/macro'

export default styled.div`
  position: absolute;
  border: 20px solid ${props => (props.active ? 'black' : 'lightpink')};
  right: 10px;
  top: -15px;
  border-bottom-color: transparent;
`
