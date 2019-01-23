/** ExampleView Object constructor
 *
 * This object represents the code for one specific view (in this case the Example view).
 *
 * It is responsible for:
 * - constructing the view (e.g. if you need to create some HTML elements procedurally)
 * - populating the view with the data
 * - updating the view when the data changes
 *
 * You should create a view Object like this for every view in your UI.
 *
 * @param {jQuery object} container - references the HTML parent element that contains the view.
 * @param {Object} model - the reference to the Dinner Model
 */
var dishGetImageView = function (container, model) {
    console.log(model)

    var dishList = container.find("#dishList");
    console.log(dishList);
    var lista=[];
    for(i=0;i<3;i++){
        var data=model.getDishWithoutID(i);
        var imageToAdd = "./images/"+data["image"];
        var name = data["name"];
        var li = document.createElement( 'li' );
        var dishItem = new dishItemView(model, li, data);
        lista.push(dishItem);
        li.innerHTML=dishItem.render();

        var image = li.getElementsByTagName( 'img' )[0];
        var p = li.getElementsByTagName( 'p' )[0];

        var imageToAdd = "./images/"+data["image"];
        var name = data["name"];
        p.innerHTML=name;
        console.log(imageToAdd);
        image.src=imageToAdd;
        console.log(image);
        console.log(li);
        //dishList.innerHTML+=li;
        dishList.append(li);


    }
    console.log(lista);


}

