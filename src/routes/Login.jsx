import {
  Button,
  Container,
  Grid,
  MobileStepper,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";

const Login = () => {
  const maxSteps = 2;
  const navigate = useNavigate();
  const [activeStep, setActiveStep] = useState(0);
  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  return (
    <Container>
      <Paper>
        <Box sx={{ height: 255, maxWidth: 400, width: "100%", p: 2 }}>
          {activeStep == 0 ? (
            <Grid>
              <Button onClick={handleNext}>Next</Button>
            </Grid>
          ) : (
            <Grid>
              <Button onClick={() => navigate("./Board", { replace: true })}>
                Join
              </Button>
            </Grid>
          )}
        </Box>
        <MobileStepper
          variant={null}
          steps={maxSteps}
          position="static"
          activeStep={activeStep}
        />
      </Paper>
    </Container>
  );
};

export default Login;
