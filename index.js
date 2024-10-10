function submitData(e) {
	/* Для работы с формой и вывода результата */
	e.preventDefault();
	const formData = new FormData(e.target);
	const formProps = Object.fromEntries(formData);
	const res = calculate(formProps.sum, formProps.day, formProps.percent, formProps.isCapital);
	document.querySelector('.result').innerHTML = `Ваш доход: ${res} руб`;
}

function calculate(sum, day, percent, isCapital) {
	/* TODO: Нужно написать данную функцию */
const resultWithoutCapital = (sum * day * percent / 365) / 100;
const resultWithCapital = sum * (1 + percent / 100 / 365) ** day - sum;
const result = isCapital === 'yes' ? resultWithCapital : resultWithoutCapital;

return result. toFixed ();
	/* TODO: Вернуть получившееся значение */
}