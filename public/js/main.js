// Выгрузка новостей из JSON

$(function(){
	// Получаем JSON
    $.getJSON('data.json', function(data) {
    	console.log(data);
    		// Перебираем 
            for(var i=0;i<data.news.length;i++){
            	// Отображаем то что есть в JSON
                $('#news-block').append(
                	'<div class="news-title"><p class="news-name">'
                	 	+ data.news[i].title + 
            	 	'</p><p class="news-date">' 
            	 		+ data.news[i].date + 
                '	</p></div><div class="news-content"><p class="news-content">' 
                		+ data.news[i].content + 
            		'</p></div>');
            }
    });
});