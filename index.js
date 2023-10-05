function generateGradient() {
    const color1 = document.getElementById("color1").value;
    const color2 = document.getElementById("color2").value;
    const gradientBox = document.getElementById("gradient-box");

    gradientBox.style.background = `linear-gradient(to right, ${color1}, ${color2})`;
    document.body.style.background = `linear-gradient(to right, ${color1}, ${color2})`;
}

generateGradient();
