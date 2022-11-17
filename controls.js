function showHidden_setings() {
    let container = document.querySelector('.add_poetry');

    if(container.style.display === "flex") {
        container.style.display = "none";
    } else {
        container.style.display = "flex";
    };
};

function add_create() {
    let textarea_container = document.querySelector(".text_editor");
    let container = document.querySelector('.container_poetrys');

    textarea_container.style.display = "block";
    container.style.display = "none";
};


