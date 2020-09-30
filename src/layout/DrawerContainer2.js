import React from 'react';
import { withRouter } from 'react-router-dom';

import { Drawer, DrawerContent} from '@progress/kendo-react-layout';
import { Button } from '@progress/kendo-react-buttons';


const user = {
  initials: "DV",
  name: "Dyvol",
  img: "http://dynamicvol.com/wp-content/uploads/2020/07/FullColor_TransparentBg_1280x1024_72dpi-5-1-768x696.png"
};

const items =[
  { text: "Login", icon: 'k-i-edit', children: null, route: '/' },
  { text: "Logout", icon: 'k-i-edit', children: null, route: '/logout' },
  { text: "Register", icon: 'k-i-edit', children: null, route: '/register' },
];

class DrawerRouterContainer extends React.Component {
    state = {
        expanded: true,
        selectedId: items.findIndex(x => x.selected === true)
    }

    handleClick = () => {
        this.setState((e) => ({expanded: !e.expanded}));
    }

    onSelect = (e) => {
        this.setState({selectedId: e.itemIndex, expanded: true});
        this.props.history.push(e.itemTarget.props.route);
    }

    setSelectedItem = (pathName) => {
        let currentPath = items.find(item => item.route === pathName);
        console.log(pathName)
        if (currentPath.text) {
            return currentPath.text;
        }
    }

    drawerProps = {
        position: 'start',
        mode: 'push',
        mini: true
    }

    render() {
        let selected = this.setSelectedItem(this.props.location.pathname);
        return (
          
        <div>
            <h1>
              <span>
                <Button onClick={this.handleClick} />
                </span>    
            </h1>
            <Drawer
                expanded ={this.state.expanded}
                items={items.map(
                (item) => ({ ...item, selected: item.text === selected }))}
                {...this.drawerProps}

                onSelect={this.onSelect}
            >
                <DrawerContent>
                    {this.props.children}
                </DrawerContent>
            </Drawer>
        </div>
        
        );
    }
};

export default withRouter(DrawerRouterContainer);