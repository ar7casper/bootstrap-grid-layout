/**
 * Created by alex on 07/09/2016.
 */

"use strict";

import React from 'react';
import Container from './Container';
import ContainerFluid from './ContainerFluid';
import styles from './styles';

class GridManage extends React.Component {
    constructor(props, context) {
        super(props, context);
    
        this.selector = this.selector.bind(this);
        this.resizeHandler = this.resizeHandler.bind(this);
        
        this.state = {
            type: 'container-fluid',
            width: window.innerWidth
        }
    }
    
    componentDidMount() {
        window.addEventListener('resize', this.resizeHandler);
    }
    
    componentWillUnmount() {
        window.removeEventListener('resize', this.resizeHandler);
    }
    
    resizeHandler(e) {
        console.log('e.type',e.type);
        
        this.setState({
            width: window.innerWidth
        })
    }
    
    selector(e) {
        const type = e.target.innerHTML;
        
        if (type !== 'Turn Off') {
            this.setState({
                type: type.toLowerCase()
            });
        } else {
            this.setState({
                type: null
            })
        }
        
    }
    
    render() {
        
        return (
            <div>
                <div className="gridManage" style={styles.gridManage}>
                    {['Turn Off', 'Container', 'Container-Fluid'].map((v, i) => {
                        return (
                            <p style={styles.para} key={i} ref={v} onClick={this.selector}>{v}</p>
                        )
                    })}
                    <div style={styles.winWidth}>Win Width - {this.state.width}</div>
                </div>
                {this.state.type === 'container' ? <Container/> : null}
                {this.state.type === 'container-fluid' ? <ContainerFluid /> : null}
            </div>
        );
    }
}

GridManage.propTypes = {
    
};

export default GridManage;
