import React from 'react';
import unsplash from './api/unsplash';
import Search from './Components/Search';
import ImageList from './Components/ImageList';
class App extends React.Component {
  state = {
    images: []
  };
  onSearchSubmit = async term => {
    const res = await unsplash.get('/search/photos', {
      params: { query: term }
    });
    this.setState({ images: res.data.results });
  };
  render() {
    return (
      <div className='ui container'>
        <Search onSubmit={this.onSearchSubmit} />
        <ImageList images={this.state.images} />
      </div>
    );
  }
}

export default App;
