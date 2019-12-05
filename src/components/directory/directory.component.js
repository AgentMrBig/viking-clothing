import React from 'react';
import Styled from 'styled-components';
import MenuItem from '../menu-item/menu-item.component';

const DirectoryMenu = Styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`;

class Directory extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      sections: [
        {
          title: 'hats',
          imageUrl: 'http://i.ibb.co/cvpntL1/hats.png',
          id: 1
        },
        {
          title: 'buckets',
          imageUrl: 'http://i.ibb.co/cvpntL1/hats.png',
          id: 2
        },
        {
          title: 'cars',
          imageUrl: 'http://i.ibb.co/cvpntL1/hats.png',
          id: 3
        },
        {
          title: 'cats',
          imageUrl: 'http://i.ibb.co/cvpntL1/hats.png',
          id: 4
        },
        {
          title: 'dogs',
          imageUrl: 'http://i.ibb.co/cvpntL1/hats.png',
          id: 5
        }
      ]
    };
  }

  render() {
    return (
      <DirectoryMenu>
        {this.state.sections.map(({ title, imageUrl, id }) => (
          <MenuItem key={id} title={title} imageUrl={imageUrl} subtitle={id} />
        ))}
      </DirectoryMenu>
    );
  }
}

export default Directory;
