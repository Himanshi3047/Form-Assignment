
var form = document.getElementById('my-form');
form.addEventListener('submit',function(event){
    event.preventDefault();
    alert("form submitted");
    document.querySelector("button").setAttribute("href" , "");
    window.open ('submit.html' ,'_blank');
   // window.open(form.action, 'Form submitted sucessfully');
});

