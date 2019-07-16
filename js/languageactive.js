      // Add active class to the current button (highlight it)
      var header = document.getElementById("de-menu-sobreposto-idioma" , "mo-menu-sobreposto-idioma");
      var btns = header.getElementByClassName("de-menu-sobreposto-idioma-link" , "mo-menu-sobreposto-idioma-lista-link");
      for (var i = 0; i < btns.length; i++) {
        btns[i].addEventListener("click", function() {
        var current = document.getElementsByClassName("botao-ativo");
        current[0].className = current[0].className.replace(" botao-ativo", "");
        this.className += " botao-ativo";
        });
      }