import React, { Component, ReactNode } from 'react';
import API from '../services/API';
import NameHeading from './NameHeading';
import ImagePokeball from './ImagePokeball';

interface DataItemsState {
  dataItems: string[];
  currentPage: number;
  itemsPerPage: number;
  isLoading: boolean;
}

class Pagination extends Component<{}, DataItemsState> {
  constructor(props: {}) {
    super(props);

    this.state = {
      dataItems: [],
      currentPage: 1,
      itemsPerPage: 20,
      isLoading: true,
    };
  }

  componentDidMount(): void {
    fetch(`${API}/pokemon?limit=1302`)
      .then(response => response.json())
      .then(data => {
        const newDataItems = data.results.map(
          (element: { name: string }) => element.name,
        );
        this.setState({ dataItems: newDataItems, isLoading: false });
      })
      .catch(error => {
        console.error('Whoops, fetch failed:', error);
        this.setState({ isLoading: false });
      });
  }

  switchPage = (pageNumber: number) => {
    this.setState({ currentPage: pageNumber });
  };

  renderPagination = () => {
    const { dataItems, currentPage, itemsPerPage } = this.state;
    const pageNumbers: (number | string)[] = [];
    const pagesAmount = Math.ceil(dataItems.length / itemsPerPage);

    if (pagesAmount <= 10) {
      for (let i = 1; i <= pagesAmount; i += 1) {
        pageNumbers.push(i);
      }
    } else {
      pageNumbers.push(1, 2, 3);

      if (currentPage > 7) {
        pageNumbers.push('...');
      }

      const startPage = Math.max(4, currentPage - 2);
      const endPage = Math.min(pagesAmount - 1, currentPage + 2);

      for (let i = startPage; i <= endPage; i += 1) {
        pageNumbers.push(i);
      }

      if (currentPage < pagesAmount - 6) {
        pageNumbers.push(pagesAmount);
      }
    }

    return pageNumbers.map((number, index) => (
      <button
        key={index}
        onClick={() => number !== '...' && this.switchPage(number as number)}
        disabled={number === '...'}
      >
        {number}
      </button>
    ));
  };

  render(): ReactNode {
    const { dataItems, currentPage, itemsPerPage, isLoading } = this.state;
    if (isLoading) {
      return <p>loading...</p>;
    }

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = dataItems.slice(indexOfFirstItem, indexOfLastItem);

    return (
      <div className='pagination-bottom-section'>
        <ul className='list-items-bottom-section'>
          {currentItems.map((item, index) => (
            <li className="item-bottom-section" key={index}>
              <NameHeading content={item} />
              <ImagePokeball />
            </li>
          ))}
        </ul>
        <div className='pagination-buttons-bottom-section'>{this.renderPagination()}</div>
      </div>
    );
  }
}

export default Pagination;
