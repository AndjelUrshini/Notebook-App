const textarea = document.getElementById("textarea");
const saveBtn = document.getElementById("save");
const storedTextArea = localStorage.getItem('textarea');

if(storedTextArea){
    textarea.value = storedTextArea.toString();
}

function f1(e){
    let value = e.value;
    textarea.style.fontSize = value + "px";
}

function f2(e) {
    if (textarea.style.fontWeight == 'bold') {
        textarea.style.fontWeight = 'normal'
        e.classList.remove("active");
    }
    else{
        textarea.style.fontWeight = 'bold';
        e.classList.add("active");
    }
}

function f3(e){
    if (textarea.style.fontStyle == 'italic') {
        textarea.style.fontStyle = 'normal'
        e.classList.remove("active");
    }
    else{
        textarea.style.fontStyle = 'italic';
        e.classList.add("active");
    }
}

function f4(e){
    if (textarea.style.textDecoration == 'underline') {
        textarea.style.textDecoration = 'none'
        e.classList.remove("active");
    }
    else{
        textarea.style.textDecoration = 'underline';
        e.classList.add("active");
    }
}

function f5(e){
    textarea.style.textAlign = 'left'

}

function f6(e){
    textarea.style.textAlign = 'center'
}

function f7(e){
    textarea.style.textAlign = 'right'
}

function f8(e){
    if (textarea.style.textTransform == 'uppercase') {
        textarea.style.textTransform = 'none';
        e.classList.remove("active");

    }
    else{
        textarea.style.textTransform = 'uppercase';
        e.classList.add("active");

    }
}

function f9(e){
    textarea.style.fontWeight = 'normal';
    textarea.style.textAlign = 'left';
    textarea.style.fontStyle = 'normal';
    textarea.style.textTransform = 'capitalize'
    textarea.value = "";
}

function f10(e){
    let value = e.value;
    textarea.style.color = value;
}

function f11(e){
    let value = e.value;
    textarea.style.fontFamily = value;
}

function downloadFile (filename,content){
    const element = document.createElement('a');
    const blob = new Blob([content],{
        type: 'plain/text'
    })

    const fileUrl = URL.createObjectURL(blob);

    element.setAttribute('href', fileUrl);
    element.setAttribute('download', filename);
    element.style.display = 'none';
    document.body.appendChild(element)
    element.click();
    document.body.removeChild(element);
};

window.onload = () => {
    document.getElementById("button").addEventListener('click', e => {
        const filename = document.getElementById("filename").value;

        const content = document.getElementById("textarea").value;

        if (filename && content) {
            downloadFile(filename, content);
        }
    })
}

const saveToLoacalStorage = () =>{
    localStorage.setItem('textarea', textarea.value);
}

saveBtn.addEventListener('click', saveToLoacalStorage);

