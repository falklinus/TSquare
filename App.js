import React from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import Square from './Square';
import Ground from './Ground';

export default function App() {
	const screenWidth = Dimensions.get('screen').width;
	const screenHeight = Dimensions.get('screen').height;

	console.log(screenWidth);
	console.log(screenHeight);

	let groundHeight = 32;
	return (
		<View style={styles.container}>
			<Ground width={groundHeight} />
			<Square left={groundHeight} top={screenWidth / 5} />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	},
});
