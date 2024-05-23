function create() {
    let container = document.createElement('div');
    let title = document.createElement('h2');
    let paragraph = document.createElement('p');
    title.innerText = 'Welcome';
    paragraph.innerText = 'Welcome To Elzero Web School';

    title.style.cssText = 'font-size: 24px; margin-bottom: -5px'

    container.appendChild(title);
    container.appendChild(paragraph);

    container.style.cssText = 'max-width: 270px; padding: 10px 0px; text-align: center; position: relative; background-color: #eee; border: 1px solid #ccc; margin: 50px auto;';

    let close = document.createElement('button');
    close.innerText = 'X';
    close.style.cssText = 'position: absolute; width: 25px; height: 25px; border-radius: 50%; border: none; background-color: red; color: white; font-weight: bold; top: 0; right: 0; transform: translate(50%, -50%); text-align: center; line-height: 25px; cursor: pointer;';

    close.addEventListener('click', ()=> {
        close.parentElement.remove();
        setTimeout(() => {
            document.body.appendChild(container);
        }, 2000);
    });
    container.appendChild(close);
    document.body.appendChild(container);
}
document.body.style.cssText = 'font-family: Arial, Helvetica, sans-serif;'
create();