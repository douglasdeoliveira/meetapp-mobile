import styled from 'styled-components/native';

import logo from '../../assets/logo.png';

export const Container = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 20px 0;
`;

export const Logo = styled.Image.attrs({
  source: logo,
})`
  width: 24px;
  height: 24px;
`;
