import { Button, Paper, Stack } from "@mui/material";
import { Box, textAlign } from "@mui/system";

const Mathkeyboard = () => {
  return (
    <Paper
      sx={{
        position: "sticky",
        bottom: "0px",
        backgroundColor: "white",
        marginLeft: "25%",
        marginRight: "25%",
      }}
    >
      <Stack direction="row" spacing={2}>
        <Button>Σ</Button>
        <Button>Π</Button>
      </Stack>
    </Paper>
  );
};

export default Mathkeyboard;
