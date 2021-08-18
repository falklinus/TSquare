import React from 'react';
import { StyleSheet, View } from 'react-native';

export default function Square(props) {
	return <View style={styles(props).square}></View>;
}

const styles = (props) =>
	StyleSheet.create({
		square: {
			position: 'absolute',
			backgroundColor: 'blue',
			width: 48,
			height: 48,
			left: props.left,
			top: props.top,
		},
	});
