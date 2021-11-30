import React from 'react'

import { Container, Header, Icon, Button } from 'semantic-ui-react'

const headerStyle = {
  backgroundColor: '#fff !important',
  padding: '1rem',
  marginBottom: '1rem',
}

const siteHeader = () => (
  <Container fluid style={{ backgroundColor: '#fff' }}>
    <Header as="h1" textAlign="center" style={headerStyle} icon>
      <Icon inverted name="gem" />
      Lottery dApp
      <Header.Subheader>
        <a href="https://github.com/skyxcripto">skyxcripto</a>
      </Header.Subheader>
    </Header>
  </Container>
)

export default siteHeader
