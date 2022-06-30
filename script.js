const form = document.querySelector("form");
const button = document.querySelector("button");
const input = document.querySelector("input");

form.addEventListener('submit', OnButtonClick)

function OnButtonClick(e)
{
    window.alert(input.value);
    e.preventDefault();
}