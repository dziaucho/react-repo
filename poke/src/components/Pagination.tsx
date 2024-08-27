import React, { Component, ReactNode } from 'react';
import API from '../services/API';
import ItemList from './ItemList';
import Button from './Button';
import generatePageNumbers from '../utils/generatePageNumbers';

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

  switchPage: void = (pageNumber: number) => {
    this.setState({ currentPage: pageNumber });
  };

  renderPagination: void = () => {
    const pageNumbers: (number | string)[] = generatePageNumbers(
      this.state.dataItems,
      this.state.currentPage,
      this.state.itemsPerPage,
    );

    return pageNumbers.map((number, index) => (
      <Button
        key={index}
        text={number.toString()}
        onClick={() => number !== '...' && this.switchPage(number)}
        disabled={number === '...'}
        isCurrent={number === this.state.currentPage}
        className="pagination-button-number"
      />
    ));
  };

  render(): ReactNode {
    if (this.state.isLoading) {
      return <p className="loading-pagination-bottom-section">Loading...</p>;
    }

    const indexOfLastItem: number =
      this.state.currentPage * this.state.itemsPerPage;
    const indexOfFirstItem: number = indexOfLastItem - this.state.itemsPerPage;
    const currentItems: number = this.state.dataItems.slice(
      indexOfFirstItem,
      indexOfLastItem,
    );

    return (
      <div className="pagination-bottom-section">
        <ItemList items={currentItems} />
        <div className="pagination-buttons-bottom-section">
          {this.renderPagination()}
        </div>
      </div>
    );
  }
}

export default Pagination;
