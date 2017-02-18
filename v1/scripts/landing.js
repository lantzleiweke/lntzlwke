(function() {

    var talk = document.getElementById("text2");
    var form = document.getElementById("form");

    talk.addEventListener("click", function() {
        form.classList.toggle('toggle');
        talk.classList.toggle('toggle')
    });

    var inputs = form.querySelectorAll('input, textarea');
    for (var i = 0; i < inputs.length; i++) {
        var currentInput = inputs[i];
        currentInput.addEventListener('blur', function() {
            this.classList.add('has-interaction');
        })
    } // need dis

})(); // needed one here too
