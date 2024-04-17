import { Button, Flex } from "@chakra-ui/react";
import './Pagination.css'
interface PaginationProps {
  actualPage: number;
  numberOfpages: number;
  onClick: (page: number) => void;
}

export default function Pagination({
  actualPage,
  numberOfpages,
  onClick,
}: PaginationProps) {
  const renderPages = () => {
    const pages = [];
    const maxPages = 3; // Define o número máximo de páginas visíveis antes de exibir "..."
    const firstPage = Math.max(1, actualPage - Math.floor(maxPages / 2));
    const lastPage = Math.min(numberOfpages, firstPage + maxPages - 1);

    if (actualPage > 1) {
      pages.push(
        <Button key="prev" onClick={() => onClick(actualPage - 1)}>
          Previous
        </Button>
      );
    }

    if (firstPage > 1) {
      pages.push(
        <Button key="1"  onClick={() => onClick(1)}>
          1
        </Button>
      );
      if (firstPage > 2) {
        pages.push(<Button key="ellipsis1"  disabled>...</Button>);
      }
    }

    for (let i = firstPage; i <= lastPage; i++) {
      pages.push(
        <Button
          key={i}
          onClick={() => onClick(i)}
          className={i === actualPage ? "activePag" : ''}
        >
          {i}
        </Button>
      );
    }

    if (lastPage < numberOfpages) {
      if (lastPage < numberOfpages - 1) {
        pages.push(<Button key="ellipsis2" disabled>...</Button>);
      }
      pages.push(
        <Button key={numberOfpages} onClick={() => onClick(numberOfpages)}>
          {numberOfpages}
        </Button>
      );
    }

    if (actualPage < numberOfpages) {
      pages.push(
        <Button key="next" onClick={() => onClick(actualPage + 1)}>
          Next
        </Button>
      );
    }

    return pages;
  };

  return <Flex id="pagination" w='100%' gap='2.3rem' justifyContent='center'>{renderPages()}</Flex>;
}
