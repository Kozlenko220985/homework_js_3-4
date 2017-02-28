
//main div

var element = document.createElement ('div');
element.classList.add ('main');
element.innerHTML = 'Тест по программированию';
element.style.margin = '20px auto';
element.style.fontSize = '20px';
element.style.textAlign = 'center';

var body = document.body;
body.appendChild (element);

// form

var form = document.createElement ('form');
form.classList.add ('form');
form.style.textAlign = 'left';
form.style.fontSize = '14px';

var main_form = document.querySelector ('.main');
main_form.appendChild (form);

// field1

var fieldset = document.createElement ('fieldset');
fieldset.style.border = 'none';
fieldset.style.margin = '20px';
fieldset.classList.add ('field1');
var form_fieldset = document.querySelector ('form');
form_fieldset.appendChild (fieldset);

var legend = document.createElement ('legend');
legend.innerHTML = '1. Вопрос №1';
var fieldset_legend = document.querySelector ('.field1');
fieldset_legend.appendChild (legend);

// checkbox

function checkBox (name, title){
	var input = document.createElement ('input');
	input.type = 'checkbox';
	input.name = name;

	var label = document.createElement ('label');
	label.style.display = 'block';
	label.appendChild (input);
	label.appendChild (document.createTextNode(title));
	return label;
}

function myCheckbox(name, title){
	var name = name;
	var title = title;
	var label_form = document.querySelector ('fieldset');
	label_form.appendChild (checkBox(name, title));
}


myCheckbox('test', 'Вариант ответа №1');
myCheckbox('test', 'Вариант ответа №2');
myCheckbox('test', 'Вариант ответа №3');

// field2


var fieldset2 = document.createElement ('fieldset');
fieldset2.style.border = 'none';
fieldset2.style.margin = '20px';
fieldset2.classList.add ('field2');
var form_fieldset2 = document.querySelector ('form');
form_fieldset2.appendChild (fieldset2);

var legend2 = document.createElement ('legend');
legend2.innerHTML = '2. Вопрос №2';
var fieldset_legend2 = document.querySelector ('.field2');
fieldset_legend2.appendChild (legend2);

function myCheckbox1(name, title){
	var name = name;
	var title = title;
	var label_form = document.querySelector ('.field2');
	label_form.appendChild (checkBox(name, title));
}


myCheckbox1('test', 'Вариант ответа №1');
myCheckbox1('test', 'Вариант ответа №2');
myCheckbox1('test', 'Вариант ответа №3');

// field3


var fieldset3 = document.createElement ('fieldset');
fieldset3.style.border = 'none';
fieldset3.style.margin = '20px';
fieldset3.classList.add ('field3');
var form_fieldset3 = document.querySelector ('form');
form_fieldset3.appendChild (fieldset3);

var legend3 = document.createElement ('legend');
legend3.innerHTML = '3. Вопрос №3';
var fieldset_legend3 = document.querySelector ('.field3');
fieldset_legend3.appendChild (legend3);

function myCheckbox2(name, title){
	var name = name;
	var title = title;
	var label_form = document.querySelector ('.field3');
	label_form.appendChild (checkBox(name, title));
}


myCheckbox2('test', 'Вариант ответа №1');
myCheckbox2('test', 'Вариант ответа №2');
myCheckbox2('test', 'Вариант ответа №3');

// button

var button = document.createElement ('input');
button.type = 'submit';
button.value = 'Проверить мои результаты';
button.style.marginTop = '30px';
button.style.marginLeft = '530px';
button.style.fontSize = '20px';
button.style.padding = '20px';

var form_button = document.querySelector ('form');
form_button.appendChild (button);