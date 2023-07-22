import React from "react";
import "./data.scss";
import { Box } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { createTheme, ThemeProvider } from "@mui/material/styles";
const DataTable = ({ cols, rows, title, text }) => {
  const theme = createTheme({
    palette: {
      mode: "light",
      text: {
        primary: "#000000", // Set the text color to dark (black)
      },
    },
    typography: {
      fontSize: 14, // Set the desired font size for the DataGrid
      fontWeightBold: 800, // Set the font weight to a higher value for bolder text
    },
  });

  return (
    <div className="dataTable">
      <ThemeProvider theme={theme}>
        <DataGrid
          className="dataGrid"
          rows={rows}
          columns={cols}
          initialState={{
            pagination: {
              paginationModel: {
                pageSize: 10,
              },
            },
          }}
          slots={{ toolbar: GridToolbar }}
          slotProps={{
            toolbar: {
              showQuickFilter: true,
              quickFilterProps: { debounceMs: 500 },
            },
          }}
          pageSizeOptions={[10]}
          checkboxSelection
          disableRowSelectionOnClick
          disableColumnFilter
          disableDensitySelector
          disableColumnSelector
          getRowId={(r) => r?._id}
        />
      </ThemeProvider>
    </div>
  );
};

export default DataTable;
