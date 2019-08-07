;(function(window) {

	'use strict';

	var pageContainer = document.querySelector('.page'),
		openCtrl = document.getElementById('btn-search'),
		closeCtrl = document.getElementById('btn-search-close'),
		searchContainer = document.querySelector('.search'),
		inputSearch = searchContainer.querySelector('.search__input');

	function init() {
		initEvents();	
	}

	function initEvents() {
		openCtrl.addEventListener('click', openSearch);
		closeCtrl.addEventListener('click', closeSearch);
		// document.addEventListener('keyup', function(ev) {
		// 	// escape key.
		// 	if( ev.keyCode == 27 ) {
		// 		alert('')
		// 	}
		// });
	}

	function openSearch() {
		pageContainer.classList.add('page--move');
		searchContainer.classList.add('search--open');
		inputSearch.focus();
		document.querySelectorAll('.page__folder--dummy').forEach((el)=>{
			el.style.display = 'block';	
		})
		$('.js .search').css({background:"#FFF"})
	}

	function closeSearch() {
		pageContainer.classList.remove('page--move');
		searchContainer.classList.remove('search--open');
		inputSearch.blur();
		inputSearch.value = '';
		document.querySelectorAll('.page__folder--dummy').forEach((el)=>{
			el.style.display = 'none';	
		})
		$('.js .search').css({background:"none"})
	}

	init();

	/* Clamping text */

	$('.card-block h3').each((index, el) =>{
		$clamp($('.card-block h3')[index], {clamp:2})
	})
	/* trim dashes from category text */
	let elm;
	$('.category-title').each((index, el)=>{
		 elm = $(el).text().split('-').join(' ')
		$(el).text(elm);
	});


})(window);