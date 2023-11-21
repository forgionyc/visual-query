import { Button, Box } from "@chakra-ui/react";

interface PaginationProps {
  page: number;
  onNext: () => void;
  onPrev: () => void;
}

const Pagination: React.FC<PaginationProps> = ({ page, onNext, onPrev }) => {
  return (
    <Box>
      <Button onClick={onPrev} disabled={page === 1}>
        Previous
      </Button>
      <Button onClick={onNext}>Next</Button>
    </Box>
  );
};

export default Pagination;
