import React, { Component } from 'react'
import {Text, View, FlatList, StyleSheet, SafeAreaView, Image, TouchableOpacity} from 'react-native';
import axios from 'axios';

export default class CoinList extends Component {

    constructor(props) {
        super(props);
        this.state = {coins: []};
    }
    state = { coins: []};

    componentWillMount(){
        const url = "https://jsonplaceholder.typicode.com/photos";
        axios.get(url).then((response) => this.setState({coins: response.data }));
    }

    render() {
        // console.log(this.state.coins);
        const {navigate} = this.props.navigation;
        return (
            <SafeAreaView>
                <FlatList
                    data={this.state.coins}
                    renderItem={({item}) => (
                        <TouchableOpacity onPress={() => navigate('DataScreen')} > 
                            <View style={{borderWidth:1, borderColor:'#F08080'}}>
                                <Text>{item.id}</Text>
                                <Text>{item.title}</Text>
                                <Image source={{uri:item.thumbnailUrl}} style={{width:30,height:30}}/>
                            </View>
                        </TouchableOpacity>
                    )}
                />
            </SafeAreaView>
        )
    }
}
