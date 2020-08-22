$(document).ready(function($) {
	$('.catalog__menu .menu__item').click(function(e) {
		e.preventDefault();

        let blockRep = $(this).parents('.catalog').find('.catalog__group');
        console.log(blockRep)
        category = $(this).data('group'),
        console.log(category)
        prevCategory = $('.catalog__menu .menu__item.menu__item_active'),
        console.log(prevCategory)
        prevCategoryId = $('.catalog__menu .menu__item.menu__item_active').data('group');
        console.log(prevCategoryId)

		prevCategory.removeClass('menu__item_active');
		$('.catalog__menu .menu__item[data-group='+category+']').addClass('menu__item_active');
		$('#group_'+prevCategoryId).css('display', 'none');
		$('#group_'+category).css('display', 'flex');
	});
});