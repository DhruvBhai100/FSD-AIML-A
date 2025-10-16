const image= document.createElement('img',{
    src:'https://m.media-amazon.com/images/I/71UF9mDAX3L.jpg',
    width:250,
    height:250,
    alt: "Physics"
},null);
const h4 = React.createElement('h4',null,'Title: Physics');
const h3 = React.createElement('h3',null,'Price: Rs. 500');
const bt = React.createElement('button',null,'Buy Now');
const child = React.createElement('div',{className:"card"},image,h4,h3,bt);
return (child);

const parent = document.getElementById('root');
ReactDOM.render(child,parent);
