/**
 * Created by alex on 07/09/2016.
 */

"use strict";

import React from 'react';
import styles from './styles';

const Container = (props) => {
    return (
            <div className="myGrid" style={styles.myGrid}>
                <div className="container" style={styles.container}>
                    <div className="row" style={styles.row}>
                        <div className="col-lg-1 col-md-1 col-sm-1 col-xs-1" style={styles.col}>
                            <div className="colorMe" style={styles.innerCol}></div>
                        </div>
                        <div className="col-lg-1 col-md-1 col-sm-1 col-xs-1" style={styles.col}>
                            <div className="colorMe" style={styles.innerCol}></div>
                        </div>
                        <div className="col-lg-1 col-md-1 col-sm-1 col-xs-1" style={styles.col}>
                            <div className="colorMe" style={styles.innerCol}></div>
                        </div>
                        <div className="col-lg-1 col-md-1 col-sm-1 col-xs-1" style={styles.col}>
                            <div className="colorMe" style={styles.innerCol}></div>
                        </div>
                        <div className="col-lg-1 col-md-1 col-sm-1 col-xs-1" style={styles.col}>
                            <div className="colorMe" style={styles.innerCol}></div>
                        </div>
                        <div className="col-lg-1 col-md-1 col-sm-1 col-xs-1" style={styles.col}>
                            <div className="colorMe" style={styles.innerCol}></div>
                        </div>
                        <div className="col-lg-1 col-md-1 col-sm-1 col-xs-1" style={styles.col}>
                            <div className="colorMe" style={styles.innerCol}></div>
                        </div>
                        <div className="col-lg-1 col-md-1 col-sm-1 col-xs-1" style={styles.col}>
                            <div className="colorMe" style={styles.innerCol}></div>
                        </div>
                        <div className="col-lg-1 col-md-1 col-sm-1 col-xs-1" style={styles.col}>
                            <div className="colorMe" style={styles.innerCol}></div>
                        </div>
                        <div className="col-lg-1 col-md-1 col-sm-1 col-xs-1" style={styles.col}>
                            <div className="colorMe" style={styles.innerCol}></div>
                        </div>
                        <div className="col-lg-1 col-md-1 col-sm-1 col-xs-1" style={styles.col}>
                            <div className="colorMe" style={styles.innerCol}></div>
                        </div>
                        <div className="col-lg-1 col-md-1 col-sm-1 col-xs-1" style={styles.col}>
                            <div className="colorMe" style={styles.innerCol}></div>
                        </div>
                    </div>
                </div>
            </div>
    );
};

Container.propTypes = {
    
};

export default Container;
