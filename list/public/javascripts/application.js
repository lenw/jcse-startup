function about() {
        info = document.getElementById('about-content');
        if (window.XMLHttpRequest)
          { xhr = new XMLHttpRequest(); }
        else
          { xhr = new ActiveXObject("Microsoft.XMLHTTP"); }
        xhr.open("GET","rails/info/properties",false);
        xhr.send("");
        info.innerHTML = xhr.responseText;
        info.style.display = 'block'
      }
