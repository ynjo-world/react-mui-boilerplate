import { Outlet } from "react-router-dom";
import { Box } from "@mui/material";

const BaseLayout = () => {
  return (
    <Box
      sx={{
        flex: 1,
        height: "100%",
      }}
    >
      <Outlet />
    </Box>
  );
};

export default BaseLayout;
