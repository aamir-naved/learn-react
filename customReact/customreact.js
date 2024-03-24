function customRender(reactElement, container){
//  const domElement = document.createElement(reactElement.type);
//  domElement.innerHTML = reactElement.children;
//  domElement.setAttribute('href', reactElement.props.href);
//  domElement.setAttribute('target', reactElement.props.target);

//  container.appendChild(domElement);

// let's create some modular code, not hardcoded like above,
/*
Agar upar waale code me ek aur attribute aata, to dikkat ho jaati,
yaa ek kam aata toh bhi
*/
const domElement = document.createElement(reactElement.type);
domElement.innerHTML = reactElement.children;
for(const prop in reactElement.props){
    if(prop === 'children') continue;
    domElement.setAttribute(prop, reactElement.props[prop]);
}

container.appendChild(domElement);


}

const reactElement = {
    type: 'a',
    props: {
        href: 'https://google.com',
        target: '_blank'
    },
    children: 'Click me to visit Google'
}

const mainContainer = document.querySelector('#root');
customRender(reactElement, mainContainer)
