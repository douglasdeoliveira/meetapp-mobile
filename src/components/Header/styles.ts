import styled from 'styled-components/native';

import logo from '../../assets/logo.png';

export const Wrapper = styled.SafeAreaView`
  flex: 0;
  background: rgba(0, 0, 0, 0.3);
  flex-direction: row;
  margin-bottom: 50px;
`;

export const Container = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: center;
  padding: 20px;
`;

export const Logo = styled.Image.attrs({
  source: logo,
})`
  width: 23px;
  height: 24px;
`;
