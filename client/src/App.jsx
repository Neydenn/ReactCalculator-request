import {
  Box,
  Button,
  Container,
  Stack,
  TextField,
  Typography,
} from '@mui/material'
import { CalculatorButton } from './components/UI/CalculatorButton'

function App() {
  return (
    <Container maxWidth="md">
      <Box sx={{ paddingY: 4 }}>
        <Stack
          spacing={3}
          sx={{
            alignItems: 'center',
          }}
        >
          <Box>
            <Typography variant="h3" component="h1" gutterBottom>
              Калькулятор
            </Typography>

            <Typography variant="body1" color="text.secondary">
              Мини-приложение для закрепления React и MUI.
            </Typography>
          </Box>

          <Box
            sx={{
              padding: 2,
              width: '100%',
              maxWidth: 360,
              border: '3px solid',
              borderColor: 'divider',
              borderRadius: 2,
              display: 'flex',
              justifyContent: 'center',
            }}
          >
            <Stack spacing={1}>
              <Stack direction="row" spacing={1}>
                <CalculatorButton>1</CalculatorButton>
                <CalculatorButton>2</CalculatorButton>
                <CalculatorButton>3</CalculatorButton>
                <CalculatorButton>/</CalculatorButton>
              </Stack>
              <Stack direction="row" spacing={1}>
                <CalculatorButton>4</CalculatorButton>
                <CalculatorButton>5</CalculatorButton>
                <CalculatorButton>6</CalculatorButton>
                <CalculatorButton>*</CalculatorButton>
              </Stack>
              <Stack direction="row" spacing={1}>
                <CalculatorButton>7</CalculatorButton>
                <CalculatorButton>8</CalculatorButton>
                <CalculatorButton>9</CalculatorButton>
                <CalculatorButton>-</CalculatorButton>
              </Stack>
              <Stack direction="row" spacing={1}>
                <CalculatorButton>,</CalculatorButton>
                <CalculatorButton>0</CalculatorButton>
                <CalculatorButton>=</CalculatorButton>
                <CalculatorButton>+</CalculatorButton>
              </Stack>
            </Stack>
          </Box>
        </Stack>
      </Box>
    </Container>
  )
}

export default App