// @flow

import React, { Component } from "react";
import {
  Container,
  Frame,
  Shelf,
  ShelfContent,
  ShelfActions,
  ShelfToggle,
  ActionSheet,
  Action,
  Attribution
} from "./style";

class App extends Component {
  state = {
    expanded: false
  };
  handleClick = () => {
    this.setState(() => ({
      expanded: !this.state.expanded
    }));
  };
  render() {
    return (
      <Container>
        <Frame>
          <Shelf expanded={this.state.expanded}>
            <ShelfContent>
              <ActionSheet>
                <Action>
                  <svg height="24" viewBox="0 0 24 24" width="24">
                    <path d="M17.73 12.02l3.98-3.98c.39-.39.39-1.02 0-1.41l-4.34-4.34c-.39-.39-1.02-.39-1.41 0l-3.98 3.98L8 2.29C7.8 2.1 7.55 2 7.29 2c-.25 0-.51.1-.7.29L2.25 6.63c-.39.39-.39 1.02 0 1.41l3.98 3.98L2.25 16c-.39.39-.39 1.02 0 1.41l4.34 4.34c.39.39 1.02.39 1.41 0l3.98-3.98 3.98 3.98c.2.2.45.29.71.29.26 0 .51-.1.71-.29l4.34-4.34c.39-.39.39-1.02 0-1.41l-3.99-3.98zM12 9c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm-4.71 1.96L3.66 7.34l3.63-3.63 3.62 3.62-3.62 3.63zM10 13c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm2 2c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm2-4c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm2.66 9.34l-3.63-3.62 3.63-3.63 3.62 3.62-3.62 3.63z" />
                  </svg>
                  <span>Patch</span>
                </Action>
                <Action>
                  <svg height="24" viewBox="0 0 24 24" width="24">
                    <path d="M17 15h2V7c0-1.1-.9-2-2-2H9v2h8v8zM7 17V1H5v4H1v2h4v10c0 1.1.9 2 2 2h10v4h2v-4h4v-2H7z" />
                  </svg>
                  <span>Crop</span>
                </Action>
                <Action>
                  <svg height="24" viewBox="0 0 24 24" width="24">
                    <path d="M3 17v2h6v-2H3zM3 5v2h10V5H3zm10 16v-2h8v-2h-8v-2h-2v6h2zM7 9v2H3v2h4v2h2V9H7zm14 4v-2H11v2h10zm-6-4h2V7h4V5h-4V3h-2v6z" />
                  </svg>
                  <span>Adjust</span>
                </Action>
                <Action>
                  <svg height="24" viewBox="0 0 24 24" width="24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.94-.49-7-3.85-7-7.93s3.05-7.44 7-7.93v15.86zm2-15.86c1.03.13 2 .45 2.87.93H13v-.93zM13 7h5.24c.25.31.48.65.68 1H13V7zm0 3h6.74c.08.33.15.66.19 1H13v-1zm0 9.93V19h2.87c-.87.48-1.84.8-2.87.93zM18.24 17H13v-1h5.92c-.2.35-.43.69-.68 1zm1.5-3H13v-1h6.93c-.04.34-.11.67-.19 1z" />
                  </svg>
                  <span>Tonality</span>
                </Action>
                <Action>
                  <svg height="24" viewBox="0 0 24 24" width="24">
                    <path d="M11 4.07V2.05c-2.01.2-3.84 1-5.32 2.21L7.1 5.69c1.11-.86 2.44-1.44 3.9-1.62zm7.32.19C16.84 3.05 15.01 2.25 13 2.05v2.02c1.46.18 2.79.76 3.9 1.62l1.42-1.43zM19.93 11h2.02c-.2-2.01-1-3.84-2.21-5.32L18.31 7.1c.86 1.11 1.44 2.44 1.62 3.9zM5.69 7.1L4.26 5.68C3.05 7.16 2.25 8.99 2.05 11h2.02c.18-1.46.76-2.79 1.62-3.9zM4.07 13H2.05c.2 2.01 1 3.84 2.21 5.32l1.43-1.43c-.86-1.1-1.44-2.43-1.62-3.89zM15 12c0-1.66-1.34-3-3-3s-3 1.34-3 3 1.34 3 3 3 3-1.34 3-3zm3.31 4.9l1.43 1.43c1.21-1.48 2.01-3.32 2.21-5.32h-2.02c-.18 1.45-.76 2.78-1.62 3.89zM13 19.93v2.02c2.01-.2 3.84-1 5.32-2.21l-1.43-1.43c-1.1.86-2.43 1.44-3.89 1.62zm-7.32-.19C7.16 20.95 9 21.75 11 21.95v-2.02c-1.46-.18-2.79-.76-3.9-1.62l-1.42 1.43z" />
                  </svg>
                  <span>Selection</span>
                </Action>
                <Action>
                  <svg height="24" viewBox="0 0 24 24" width="24">
                    <path d="M5 4v3h5.5v12h3V7H19V4z" />
                  </svg>
                  <span>Text</span>
                </Action>
              </ActionSheet>
            </ShelfContent>
            <ShelfActions>
              <ShelfToggle onClick={this.handleClick}>
                <svg height="24" width="24">
                  <path
                    d={
                      this.state.expanded
                        ? `M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z`
                        : `M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z`
                    }
                  />
                </svg>
              </ShelfToggle>
            </ShelfActions>
          </Shelf>
        </Frame>
        <Attribution>
          <p>
            Inspired by{" "}
            <a
              href="https://twitter.com/0therplanet/status/909788913702785026"
              target="_blank"
              rel="noopener noreferrer"
            >
              this design concept
            </a>{" "}
            from{" "}
            <a
              href="https://twitter.com/0therPlanet"
              target="_blank"
              rel="noopener noreferrer"
            >
              Luboš Volkov.
            </a>
          </p>
          <p>
            Quickly{" "}
            <a
              href="https://github.com/cantyjeffrey/notch"
              target="_blank"
              rel="noopener noreferrer"
            >
              hacked together
            </a>{" "}
            by{" "}
            <a
              href="https://twitter.com/cantyjeffrey"
              target="_blank"
              rel="noopener noreferrer"
            >
              Jeffrey Canty
            </a>.
          </p>
        </Attribution>
      </Container>
    );
  }
}

export default App;
