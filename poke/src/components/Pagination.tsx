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
      itemsPerPage: 10,
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
    const pagesAmount = Math.ceil(dataItems.length / itemsPerPage);
    const pageNumbers: (number | string)[] = [];

    if (pagesAmount <= 7) {
      for (let i = 1; i <= pagesAmount; i += 1) {
        pageNumbers.push(i);
      }
    } else {
      if (currentPage <= 4) {
        for (let i = 1; i <= 5; i += 1) {
          pageNumbers.push(i);
        }
        pageNumbers.push('...');
        pageNumbers.push(pagesAmount);
      } else if (currentPage >= pagesAmount - 3) {
        pageNumbers.push(1);
        pageNumbers.push('...');
        for (let i = pagesAmount - 4; i <= pagesAmount; i += 1) {
          pageNumbers.push(i);
        }
      } else {
        pageNumbers.push(1);
        pageNumbers.push('...');
        for (let i = currentPage - 1; i <= currentPage + 1; i += 1) {
          pageNumbers.push(i);
        }
        pageNumbers.push('...');
        pageNumbers.push(pagesAmount);
      }
    }

    return pageNumbers.map((number, index) => (
      <button
        className={`pagination-button-number ${number === currentPage || number === '...' ? 'disabled-pagination-button-number' : ''}`} // HELLLLLLLLLLLLL
        key={index}
        onClick={() => number !== '...' && this.switchPage(number as number)}
        disabled={number === '...' || number === currentPage}
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
      <div className="pagination-bottom-section">
        <ul className="list-items-bottom-section">
          {currentItems.map((item, index) => (
            <li className="item-bottom-section" key={index}>
              <NameHeading
                nameClass="item-bottom-section-name"
                content={item}
              />
              <ImagePokeball />
            </li>
          ))}
        </ul>
        <div className="pagination-buttons-bottom-section">
          {this.renderPagination()}
        </div>
      </div>
    );
  }
}

export default Pagination;
