var DishItemView= function (container, model, name, image, id) {

    var myHTML = '';
    myHTML += "<div id='dishBox'class='col-sm-12 col-md-3'><a id='"
    +id+"'href='#' class='thumbnail'> <img src='images/"
    +image+"' alt='...'><div class='caption centerfont9'> <p>"
    +name+"</p></div></a></div>";
    container.append(myHTML);
    this.box = container.find($("#dishBox a"));


}
