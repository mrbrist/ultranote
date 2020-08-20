import React from 'react';
import './index.css';

// Material UI
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

const theme = createMuiTheme({
  palette: {
    type: 'light',
  },
});

class App extends React.Component {
  render() {
    return (
      <div className="App" >
        <ThemeProvider theme={theme}>
          <Paper className="mainBG">
            <Typography color="primary" variant="h2" component="h2">
              Ultranote
            </Typography>
          </Paper>
        </ThemeProvider>
      </div>
    )
  }
}

export default App;
