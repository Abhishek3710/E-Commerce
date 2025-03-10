import { Box, Pagination, Typography } from "@mui/material";
import { Pagination as PaginationType } from "../../models/pagination";

type props = {
  metadata: PaginationType;
  onPageChange: (page: number) => void;
};

const AppPagination = ({ metadata, onPageChange }: props) => {
  const { currentPage, totalPages, pageSize, totalCount } = metadata;
  const startItem = (currentPage - 1) * pageSize + 1;
  const endItem = Math.min(currentPage * pageSize, totalCount);

  return (
    <Box
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      marginTop={3}
    >
      <Typography>
        Displaying {startItem}-{endItem} of {totalCount} items
      </Typography>
      <Pagination
        color="secondary"
        size="large"
        count={totalPages}
        page={currentPage}
        onChange={(_,page)=>onPageChange(page)}
      />
    </Box>
  );
};

export default AppPagination;
