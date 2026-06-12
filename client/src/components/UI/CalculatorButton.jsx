import { Button } from "@mui/material"

export const CalculatorButton = (props) => {
    return (
        <Button
            variant="outlined"
            sx={{
                width: 64,
                height: 64,
                fontSize: 36,
            }}
        >
            {props.children}
        </Button>
    )
}