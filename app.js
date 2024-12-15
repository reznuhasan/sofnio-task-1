const reviewsContainer = document.querySelector('.card-project-brand-color-container');
const colorArr = [{name:'periwinkle',color:"#816BFF",src:"./assests/product-gallery.png"}, {name:"turquoise",color:"#1FCEC9",src:"./assests/cyan.png"}, {name:"skyblue",color:"#4B97D3",src:"./assests/blue.png"}, {name:"charcoal",color:"#3B4747",src:"./assests/black.png"}];

// Function to create color elements
const createColorElements = (colors) => {
    return colors.map((properties) => {
        const div = document.createElement('div');
        div.classList.add('card-project-brand-color', `card-project-brand-color--${properties.name}`);
        div.style.backgroundColor = properties.color;  
        div.addEventListener('click',()=>{
            const mainThumb=document.querySelector('.card-project-main-container__main-thumb img');
            mainThumb.src = properties.src;  // Set the image source to the selected color's source
        })
        return div;
    });
};

// Append created elements to the container
const brandColors = createColorElements(colorArr);
brandColors.forEach((colorElement) => {
    reviewsContainer.appendChild(colorElement);
});

