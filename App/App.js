function goTo(page){
    window.location.href = page;
}

function changeLanguage(lang){
    localStorage.setItem("lang", lang);
    alert("Language changed to: " + lang);
}
