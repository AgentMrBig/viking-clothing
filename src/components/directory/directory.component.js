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
          id: 4,
          size: 'large'
        },
        {
          title: 'dogs',
          imageUrl: 'http://i.ibb.co/cvpntL1/hats.png',
          id: 5,
          size: 'large'
        }
      ]
    };
  }

  render() {
    return (
      <DirectoryMenu>
        {this.state.sections.map(({ title, imageUrl, id, size }) => (
          <MenuItem size={size} key={id} title={title} imageUrl={imageUrl} />
        ))}
      </DirectoryMenu>
    );
  }
}

export default Directory;
