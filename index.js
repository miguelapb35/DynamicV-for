/*
#Dynamic options rendered with v-for:

*/

new Vue({
	el: '#example-3',
	data: {
		selected: 'A',
		options: [
			{ text: 'One', value: 'A' },
			{ text: 'Two', value: 'B' },
			{ text: 'Three', value: 'C' }
		]
	}
})