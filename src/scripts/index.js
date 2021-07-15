import 'regenerator-runtime'; /* for async await transpile */
import '../styles/main.css';
import '../styles/responsive.css';
// data json
import ('../DATA.json').then(({default: jsonData}) => {
	console.log(jsonData)
	let datas = jsonData['restaurants']
	let dataList = '';
	datas.forEach( function(data) {
		dataList += `
		<div class="list-item">
			<img class="list-item-thumb" src="${data['pictureId']}" alt="${data['name']}" title="${data['name']}" />
			<div class="city">${data['city']}</div>
			<div class="list-item-content">
				<label class="list-item-rating">
					Rating :
					<a href="#" class="list-item-rating-value">${data['rating']}</a>
				</label>
				<h2 class="list-item-title"><a href="#">${data['name']}</a></h2>
				<div class="list-item-desc">${data['description'].slice(0, 150)}...</div>
			</div>
		</div>
		`;
	});
	document.querySelector('#list-data').innerHTML = dataList;
});

//menu
const menu = document.querySelector('#btn-menu');
// const hero = document.querySelector('.jumbroton');
const main = document.querySelector('main');
const drawer = document.querySelector('#nav-menu');

menu.addEventListener('click', function(event) {
	drawer.classList.toggle('open');
	event.stopPropagation();
})

// hero.addEventListener('click', function () {
// 	drawer.classList.remove('open');
// })

main.addEventListener('click', function () {
	drawer.classList.remove('open');
})
// console.log('Hello Coders! :)');
