import React from 'react';
import { render } from 'react-dom';
import { Profile, Repository } from '../src';
import styled from 'styled-components';

const StyledDiv = styled.div`
  display: inline-block;
  width: 50%;
  vertical-align: top;
`;

render(
  <div>
    <StyledDiv>
      <h4>With Link</h4>
      <Profile username="wonism" />
      <br /><br />
      <Repository username="wonism" repos="til" />
    </StyledDiv>
    <StyledDiv>
      <h4>Without Link</h4>
      <Profile username="wonism" renderOnly />
      <br /><br />
      <Repository username="wonism" repos="til" renderOnly />
    </StyledDiv>
  </div>,
  document.getElementById('react-github-info')
);
