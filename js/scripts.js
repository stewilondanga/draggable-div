var navigate = (function() {
  $('.dd').toggle();
  $('.dd_btn').click(function() {
    var dataName = $(this).attr('data-name');
    $('.dd').hide();
    $('.' + dataName).toggle();
  });
})();

class App {

  static init() {
    App.box = document.getElementsByClassName('box')[0]
    App.box.addEventListener("dragstart", App.dragstart)
    App.box.addEventListener("dragend", App.dragend)

    const containers = document.getElementsByClassName('dragged')
    for (const container of containers) {
      container.addEventListener("dragover", App.dragover)
      container.addEventListener("dragenter", App.dragenter)
      container.addEventListener("dragleave", App.dragleave)
      container.addEventListener("drop", App.drop)
    }
  }
  /*
  	static dragstart() {
  		this.className += " heldOf"

  		setTimeout(() => this.className = "invisible", 0)
  	}
  	static dragend() {
  		this.className = "box"
  	}

  	static dragover(e) {
  		e.preventDefault()
  	}

  	static dragenter(e) {
  		e.preventDefault()
  		this.className += " hoveredOf"
  	}
  	static dragleave() {
  		this.className = "dragged"
  	}
  	static drop() {
  		this.className = "dragged"
  		this.append(App.box)
  	}
  }


  document.addEventListener("DOMContentLoaded", App.init)




  // VANISHING WHEN TRYING ON FIREFOX || THIS FUNCTION SHOULD FIX THE PROBLEM

  // FOR FIREFOX ONLY ||
  function dragstart_handler(ev) {
   console.log("dragStart");
   // Add the target element's id to the data transfer object
   ev.dataTransfer.setData("text/plain", ev.target.id);
  }
