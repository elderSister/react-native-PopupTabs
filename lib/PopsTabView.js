/**
 * Project Name: PopsTabView
 * @author vj
 * @date: 2018-12-17 12:15
 * email:liweijieok@qq.com
 * desc:
 * lastModify:
 */

import React, {Component} from "react";
import {Modal, View, Text, Dimensions} from "react-native";

const H = Dimensions.get("window").height, W = Dimensions.get("window").width;

export default class PopsTabView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tx: 0,
            ty: 0,
            isVisible: false
        };
    }

    show() {
        this.setState({isVisible: true});
    }

    hide() {
        this.setState({isVisible: false});
    }

    render() {
        return (
            <Modal
                transparent={true}
                visible={this.state.isVisible}
                animationType={"none"}
                onRequestClose={() => {
                    this.hide();
                }}>
                <View style={{
                    width: W,
                    height: H,
                    flexDirection:"column",
                    backgroundColor: "transparent"
                }}>


                </View>

            </Modal>
        );
    }
}
