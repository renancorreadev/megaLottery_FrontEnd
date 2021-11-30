import React, { Component } from 'react'
import styled from 'styled-components'
import Logo from './assets/logo.png'
// Router
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom'

// Views
import Home from './Views/Home'
import History from './Views/History'

import { Menu, Segment, Container, Header } from 'semantic-ui-react'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

class App extends Component {
  state = { activeItem: '' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <div>
        <Router>
          <Segment
            inverted
            textAlign="center"
            style={{ padding: '1em 0em' }}
            vertical
          >
            <ToastContainer
              position="top-right"
              autoClose={5000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnVisibilityChange
              draggable
              pauseOnHover
            />
            {/* Same as */}
            <ToastContainer />
            <Header as="h1" textAlign="center" style={{ marginTop: '1rem' }}>
              <Image src={Logo} />
              <LogoBox>
                <LogoTitle>MegaLottery</LogoTitle>
              </LogoBox>

              <Header.Subheader style={{ color: 'white' }}>
                <pre>
                  Welcome to MegaLottery, your lucky house | development by{' '}
                  <a
                    href="https://github.com/skyxcripto"
                    style={{
                      color: 'orange',
                      fontWeight: 'bold',
                      fontSize: '1.3rem',
                    }}
                  >
                    skyxcripto
                  </a>
                </pre>
              </Header.Subheader>
            </Header>
            <Menu pointing secondary inverted size="large">
              <Container>
                <Menu.Item
                  name="home"
                  active={activeItem === 'home'}
                  onClick={this.handleItemClick}
                  as={NavLink}
                  exact
                  to="/"
                />
                <Menu.Item
                  name="history"
                  active={activeItem === 'history'}
                  onClick={this.handleItemClick}
                  as={NavLink}
                  to="/history"
                />
              </Container>
            </Menu>
          </Segment>

          <Route exact path="/" component={Home} />
          <Route path="/history" component={History} />
        </Router>
      </div>
    )
  }
}

const Image = styled.img`
  width: 200px !important;
  height: auto !important;
  color: black;
`

const LogoBox = styled.span`
  color: black;
`

const LogoTitle = styled.span`
  background-color: wheat;
  border-radius: 20px;
  padding: 0.5em;
`
export default App
