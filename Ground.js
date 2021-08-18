import React from 'react';
import { StyleSheet, View } from 'react-native';

export default function Ground(props) {
	return <View style={styles(props).ground}></View>;
}

const styles = (props) =>
	StyleSheet.create({
		ground: {
			position: 'absolute',
			backgroundColor: 'black',
			width: props.width,
			height: '100%',
			left: 0,
			top: 0,
		},
	});
