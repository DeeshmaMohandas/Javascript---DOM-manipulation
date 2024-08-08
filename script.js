const changelogo = () => {
    const logo = document.getElementById('logo');
    logo.src = 'googlelogo.png';  // Change this to the path of your new image
};

const reset = () => {
    const logo = document.getElementById('logo');
    logo.src = 'javascript_logo.png';  // Change this to the path of your old image
};
